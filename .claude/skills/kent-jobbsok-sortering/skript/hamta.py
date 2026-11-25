#!/usr/bin/env python3
"""hamta.py (prototyp 0.1): fasta, regelstyrda steg i en jobbsökaragent.

Skriptet hämtar annonslistor från vakanser.se, behåller annonser från de
senaste dagarna, markerar det som redan har visats, möjliga dubbletter och
avvikelser, och sparar annonstexterna. Det bedömer INTE om en annons passar:
det är modellens uppgift.

Allt personligt (sökningar, sökvägar) läses ur en privat inställningsfil.
Skriptet skriver bara till mappen i --ut, som måste ligga utanför det
git-repo där skriptet ligger. Så kan privata resultat inte hamna i det
publika repot av misstag.

Utfall (slutkod):
  0  klart (se avvikelser i rapporten)
  2  FEL (inställningar, formatversion, hämtning eller tolkning)

Exempel:
  python hamta.py --installningar sokningar.json --tillstand visade_jobb.json --ut resultat/2026-01-15
  python hamta.py ... --markera-visade   (lägger träffarna i tillståndet)
"""
import argparse
import datetime
import html
import json
import pathlib
import re
import sys
import time
import urllib.request

FORMATVERSION = 1
BAS = "https://vakanser.se"
RAD = re.compile(
    r'color:\s*(\w+);">&#9679;</span>\s*(\d{4}-\d\d-\d\d) - (.*?)<br/>\s*'
    r'<a href="(/jobb/[^"]+)">(.*?)</a><br/>\s*(.*?)<br/>',
    re.S,
)


class Fel(Exception):
    pass


def las_json(sokvag):
    data = json.loads(pathlib.Path(sokvag).read_text(encoding="utf-8"))
    if data.get("formatversion") != FORMATVERSION:
        raise Fel(f"{sokvag}: formatversion {data.get('formatversion')}, skriptet kräver {FORMATVERSION}")
    return data


def hamta(url):
    anrop = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    ra = urllib.request.urlopen(anrop, timeout=30).read()
    try:
        return ra.decode("utf-8")
    except UnicodeDecodeError:
        return ra.decode("latin-1")


def tolka_lista(sida):
    return [
        dict(prick=p, publicerad=d, arbetsgivare=html.unescape(a).strip(), lank=l,
             titel=html.unescape(t).strip(), kategori_ort=html.unescape(k).strip())
        for p, d, a, l, t, k in RAD.findall(sida)
    ]


def som_text(sida):
    sida = re.sub(r"<(script|style|nav)[^>]*>.*?</\1>", " ", sida, flags=re.S)
    sida = re.sub(r"<(br|/p|/li|/h\d)[^>]*>", "\n", sida)
    sida = html.unescape(re.sub(r"<[^>]+>", " ", sida))
    return re.sub(r"\n\s*\n+", "\n", re.sub(r"[ \t\r]+", " ", sida)).strip()


def sista_dag(sida):
    """Sista ansökningsdag finns i sidans källkod och kan försvinna när taggar rensas."""
    traff = re.findall(r"(?i)(?:sista ansökningsdag|sista dag att ansöka är|validThrough)\W{0,6}(\d{4}-\d\d-\d\d)",
                       html.unescape(sida))
    return min(traff) if traff else None


def nyckel(annons):
    """Innehållsnyckel: arbetsgivare och titel utan skiljetecken och versaler."""
    return re.sub(r"\W+", "", (annons["arbetsgivare"] + annons["titel"]).lower())


def samla(sokvagar, grans, max_sidor, paus):
    annonser, kallor = {}, []
    for sokvag in sokvagar:
        sida_nr, rader_totalt, datum = 1, 0, []
        avvikelser = []
        while True:
            url = f"{BAS}/{sokvag}/" + ("" if sida_nr == 1 else f"{sida_nr}/")
            sida = hamta(url)
            rader = tolka_lista(sida)
            if not rader:
                break
            rader_totalt += len(rader)
            datum += [r["publicerad"] for r in rader]
            for r in rader:
                post = annonser.setdefault(r["lank"], dict(r, kallor=[]))
                if sokvag not in post["kallor"]:
                    post["kallor"].append(sokvag)
            if all(r["publicerad"] < grans for r in rader):
                break
            if f"/{sokvag}/{sida_nr + 1}/" not in sida:
                break
            sida_nr += 1
            if sida_nr > max_sidor:
                avvikelser.append(f"taket på {max_sidor} sidor nåddes, källan är inte fullt läst")
                break
            time.sleep(paus)
        if rader_totalt == 0:
            avvikelser.append("noll rader: felaktig adress, ändrad sidlayout eller inga träffar")
        if any(b > a for a, b in zip(datum, datum[1:])):
            avvikelser.append("listan är inte datumsorterad, tidsgränsen kan ha stoppat för tidigt")
        kallor.append(dict(sokvag=sokvag, rader=rader_totalt, avvikelser=avvikelser))
        time.sleep(paus)
    return annonser, kallor


def main():
    for strom in (sys.stdout, sys.stderr):
        strom.reconfigure(encoding="utf-8")
    p = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    p.add_argument("--installningar", required=True)
    p.add_argument("--tillstand", required=True)
    p.add_argument("--ut", required=True)
    p.add_argument("--idag", default=datetime.date.today().isoformat())
    p.add_argument("--markera-visade", action="store_true")
    a = p.parse_args()

    ut = pathlib.Path(a.ut).resolve()
    skriptrepo = next((m for m in pathlib.Path(__file__).resolve().parents if (m / ".git").exists()), None)
    for mal in (ut, pathlib.Path(a.tillstand).resolve()):
        if skriptrepo and mal.is_relative_to(skriptrepo):
            raise Fel(f"{mal} ligger i skriptets repo ({skriptrepo}). Privata resultat ska ligga utanför.")

    inst = las_json(a.installningar)
    tillstand = las_json(a.tillstand)
    idag = datetime.date.fromisoformat(a.idag)
    grans = (idag - datetime.timedelta(days=inst["dagar_bakat"])).isoformat()
    paus = inst.get("paus_sekunder", 0.4)

    annonser, kallor = samla(inst["sokvagar"], grans, inst.get("max_sidor", 25), paus)
    if not annonser:
        raise Fel("ingen källa gav någon annons: sidlayouten kan ha ändrats")

    visade_lankar = {v["lank"] for v in tillstand["visade"]}
    visade_nycklar = {nyckel(v): v["lank"] for v in tillstand["visade"]}
    nya = sorted((v for v in annonser.values() if v["publicerad"] >= grans),
                 key=lambda v: (v["publicerad"], v["lank"]), reverse=True)

    ut.mkdir(parents=True, exist_ok=True)
    (ut / "annonstexter").mkdir(exist_ok=True)
    grupper = {}
    for nr, v in enumerate(nya, 1):
        v["nr"] = nr
        flaggor = []
        if v["lank"] in visade_lankar:
            flaggor.append("visad tidigare (samma länk)")
        elif nyckel(v) in visade_nycklar:
            flaggor.append("kan vara visad tidigare (samma arbetsgivare och titel, ny länk)")
        else:
            sida = hamta(BAS + v["lank"])
            v["sista_ansokningsdag"] = sista_dag(sida)
            v["textfil"] = f"annonstexter/{nr:02d}.txt"
            (ut / v["textfil"]).write_text(som_text(sida), encoding="utf-8")
            if v["sista_ansokningsdag"] is None:
                flaggor.append("sista ansökningsdag saknas")
            elif v["sista_ansokningsdag"] < a.idag:
                flaggor.append("sista ansökningsdag har passerat")
            elif (datetime.date.fromisoformat(v["sista_ansokningsdag"]) - idag).days > 150:
                flaggor.append("osäker sista dag (mer än 150 dagar fram)")
            time.sleep(paus)
        v["flaggor"] = flaggor
        grupper.setdefault(nyckel(v), []).append(v)
    for grupp in grupper.values():
        for v in grupp[1:]:
            v["flaggor"].append(f"möjlig dubblett av nr {grupp[0]['nr']}")

    resultat = dict(formatversion=FORMATVERSION, kord=a.idag, fran_och_med=grans, kallor=kallor, annonser=nya)
    (ut / "traffar.json").write_text(json.dumps(resultat, ensure_ascii=False, indent=1), encoding="utf-8")

    avvikande = [k for k in kallor if k["avvikelser"]]
    ovisade = [v for v in nya if not any("visad tidigare" in f for f in v["flaggor"])]
    print(f"Källor: {len(kallor)}, varav {len(avvikande)} med avvikelse")
    for k in avvikande:
        print(f"  AVVIKELSE {k['sokvag']}: {'; '.join(k['avvikelser'])}")
    print(f"Annonser från {grans}: {len(nya)}, inte visade tidigare: {len(ovisade)}")
    for v in ovisade:
        print(f"  {v['nr']:>2} {v['publicerad']} {v['arbetsgivare']} | {v['titel']} | {'; '.join(v['flaggor'])}")

    if a.markera_visade:
        for v in ovisade:
            tillstand["visade"].append(dict(lank=v["lank"], arbetsgivare=v["arbetsgivare"],
                                            titel=v["titel"], forst_visad=a.idag))
        pathlib.Path(a.tillstand).write_text(json.dumps(tillstand, ensure_ascii=False, indent=1), encoding="utf-8")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (Fel, OSError, ValueError, KeyError) as fel:
        print(f"FEL: {type(fel).__name__}: {fel}", file=sys.stderr)
        sys.exit(2)

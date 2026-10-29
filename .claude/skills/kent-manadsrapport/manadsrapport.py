#!/usr/bin/env python3
"""Månadsrapport: rangordnar projekt efter arbete under en månad, oavsett repo.

Användning:
  python manadsrapport.py                 # innevarande månad, skrivs ut i terminalen
  python manadsrapport.py 2026-10         # en viss månad
  python manadsrapport.py 2026-10 --skriv # skriver också AI-teknik/Manadsrapport/2026-10.md

Mått per projekt: aktiva dagar (dagar med minst en commit som rör projektet), commits som rör
projektet och filändringar. Sorteras på dagar, sedan commits, sedan filändringar.
Förra månaden räknas om med samma projektkarta, så att jämförelsen alltid är konsekvent.

Projektkartan: projekt_karta.json (publik, i samma mapp) plus, om den finns, en privat karta:
  ~/.claude/manadsrapport_privat.json   {"repon": [...], "regler": [...], "dolda": [...]}
Dolda projekt räknas men skrivs bara ut i terminalen, aldrig i rapportfilen.
"""
import json
import re
import subprocess
import sys
import urllib.request
from collections import defaultdict
from datetime import date, timedelta
from pathlib import Path

HAR = Path(__file__).resolve().parent
AI_TEKNIK = HAR.parents[2]                 # .../AI-teknik
ROT = HAR.parents[3]                       # .../AI  (mappen som innehåller alla repon)
PRIVAT = Path.home() / ".claude" / "manadsrapport_privat.json"
MANADER = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti",
           "september", "oktober", "november", "december"]
GITHUB = "https://github.com/kentlundgren/AI-teknik/tree/main/.claude/skills/kent-manadsrapport"


def las_karta():
    karta = json.loads((HAR / "projekt_karta.json").read_text(encoding="utf-8"))
    dolda = set()
    if PRIVAT.exists():
        p = json.loads(PRIVAT.read_text(encoding="utf-8"))
        karta["repon"] = karta["repon"] + p.get("repon", [])
        karta["regler"] = p.get("regler", []) + karta["regler"]   # privata regler först
        dolda = set(p.get("dolda", []))
    return karta, dolda


def projekt(karta, repo, sokvag):
    sokvag = sokvag.strip('"')
    for r in karta["regler"]:
        if r["repo"] != repo or not sokvag.startswith(r["prefix"]):
            continue
        if r.get("endast_rot") and "/" in sokvag:
            continue
        return r["projekt"]
    delar = sokvag.split("/")
    namn = repo.split("/")[-1]
    if len(delar) == 1:
        return namn + " (rotfiler)"
    return namn + ": " + "/".join(delar[:2] if len(delar) > 2 else delar[:1])


def mata(karta, start, slut):
    dagar, commits, filer = defaultdict(set), defaultdict(set), defaultdict(int)
    for repo in karta["repon"]:
        mapp = ROT / repo
        if not (mapp / ".git").exists():
            continue
        ut = subprocess.run(
            ["git", "-C", str(mapp), "log", f"--since={start}", f"--until={slut}", "--no-merges",
             "--name-only", "--format=@@%H %ad", "--date=short"],
            capture_output=True, text=True, encoding="utf-8", errors="replace").stdout
        sha = dag = None
        for rad in ut.splitlines():
            if rad.startswith("@@"):
                sha, dag = rad[2:].split(" ", 1)
            elif rad.strip():
                p = projekt(karta, repo, rad)
                dagar[p].add(dag)
                commits[p].add((repo, sha))
                filer[p] += 1
    rang = sorted(dagar, key=lambda p: (-len(dagar[p]), -len(commits[p]), -filer[p]))
    return rang, {p: (len(dagar[p]), len(commits[p]), filer[p]) for p in rang}


def manad(arg):
    if arg:
        ar, m = map(int, arg.split("-"))
    else:
        i = date.today()
        ar, m = i.year, i.month
    start = date(ar, m, 1)
    nasta = date(ar + (m == 12), m % 12 + 1, 1)
    return ar, m, start, nasta


def rorelse(nu, forra):
    if forra is None:
        return "ny"
    if forra == nu:
        return "="
    return f"▲{forra - nu}" if forra > nu else f"▼{nu - forra}"


def git(repo, *args):
    return subprocess.run(["git", "-C", str(ROT / repo), *args], capture_output=True, text=True,
                          encoding="utf-8", errors="replace").stdout


def pages_namn(repo):
    """Namnet på GitHub Pages-sajten för ett repo (sista delen av remote-adressen)."""
    for r in ["origin"] + git(repo, "remote").split():
        url = git(repo, "remote", "get-url", r).strip()
        if url:
            return url.rstrip("/").removesuffix(".git").split("/")[-1]
    return repo.split("/")[-1]


def svarar(url):
    try:
        with urllib.request.urlopen(url, timeout=10) as s:
            return s.status == 200
    except Exception:
        return False


def titel_och_beskrivning(fil):
    try:
        t = fil.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return "", ""
    mt = re.search(r"<title>(.*?)</title>", t, re.S | re.I)
    md = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', t, re.I)
    return (mt.group(1).strip() if mt else ""), (md.group(1).strip() if md else "")


def produkter(karta, dolda, start, nasta):
    """Nya färdiga produkter: en index.html som först sparades under månaden, följt över namnbyten,
    och som svarar på sin live-adress. Pågående projekt räknas i rangordningen, inte här."""
    info = karta.get("produkt_info", {})
    exkl = karta.get("produkter_exkludera", [])
    pinfo = karta.get("projekt_info", {})
    fynd, dolt, ej_live = [], [], []
    for repo in karta["repon"]:
        if not (ROT / repo / ".git").exists():
            continue
        nu = set(git(repo, "ls-files", "*index.html").split())
        rort = {f for f in git(repo, "log", f"--since={start}", f"--until={nasta}", "--no-merges",
                               "--name-only", "--format=", "--", "*index.html").split() if f in nu}
        sida = pages_namn(repo)
        for fil in sorted(rort):
            if any(x in fil for x in exkl):
                continue
            tidigast = git(repo, "log", "--follow", "--diff-filter=A", "--format=%ad", "--date=short",
                           "--", fil).split()
            if not tidigast:
                continue
            publ = date.fromisoformat(tidigast[-1])
            if not (start <= publ < nasta):
                continue
            mapp = fil.rsplit("/", 1)[0] if "/" in fil else ""
            hist = git(repo, "log", "--no-merges", "--format=%ad", "--date=short", "--", mapp or ".").split()
            d = {x for x in hist}
            forsta = min(date.fromisoformat(x) for x in d) if d else publ
            p = projekt(karta, repo, fil)
            if p in dolda:
                dolt.append(p)
                continue
            lank = f"https://kentlundgren.github.io/{sida}/{mapp}/" if mapp else f"https://kentlundgren.github.io/{sida}/"
            if not svarar(lank):
                ej_live.append(lank)
                continue
            titel, beskr = titel_och_beskrivning(ROT / repo / fil)
            o = info.get(mapp, {})
            fynd.append({
                "publ": publ, "lank": lank, "namn": o.get("namn", titel or mapp.split("/")[-1]),
                "beskr": o.get("beskrivning", beskr).replace('"', "'"), "projekt": p,
                "stjarna": o.get("stjarna", False), "lnf": pinfo.get(p, {}).get("lnf", False),
                "dagar": len(d), "commits": len(hist), "till_publ": max((publ - forsta).days, 0)})
    fynd.sort(key=lambda x: (x["publ"], x["namn"]))
    return fynd, dolt, ej_live


def produkttabell(fynd, namn, lnf):
    if not fynd:
        return f"## Nya färdiga produkter {namn} <a id=\"nya-produkter\"></a>\n\nInga nya produkter publicerades den här månaden.\n"
    rader = []
    for x in fynd:
        mark = ("★ " if x["stjarna"] else "") + (lnf + " " if x["lnf"] and lnf else "")
        titel = f' "{x["beskr"]}"' if x["beskr"] else ""
        rader.append(f"| {x['publ'].isoformat()} | {mark}[{x['namn']}]({x['lank']}{titel}) | {x['beskr']} | "
                     f"{x['projekt']} | {x['dagar']} | {x['commits']} | {x['till_publ']} |")
    return f"""## Nya färdiga produkter {namn} <a id="nya-produkter"></a>

**Tabell 2. Produkter som publicerades första gången i {namn}** <a id="tabell-2"></a>

| Publicerad | Produkt | Vad den är | Projekt | Aktiva dagar | Commits | Dagar från första commit till publicering |
|---|---|---|---|---|---|---|
""" + "\n".join(rader) + """

En ny färdig produkt är en sida som sparades för första gången under månaden och som svarar på sin live-adress. Den visas bara den månad den först publicerades, och är inte rangordnad: den är sorterad på datum. Pågående projekt, som Samrådsguiden, räknas i Tabell 1 och inte här. ★ = utvald av Kent. Räkningen av dagar och commits gäller mappen produkten ligger i och blir lägre om mappen flyttats.
"""


def rapport(karta, dolda, ar, m, start, nasta):
    idag = date.today()
    sista = min(idag, nasta - timedelta(days=1))
    pagar = start <= idag < nasta - timedelta(days=1)
    fm_ar, fm_m = (ar, m - 1) if m > 1 else (ar - 1, 12)
    fstart = date(fm_ar, fm_m, 1)
    rang, siffror = mata(karta, start.isoformat(), nasta.isoformat())
    frang, _ = mata(karta, fstart.isoformat(), start.isoformat())
    synliga = [p for p in rang if p not in dolda]
    fsynliga = [p for p in frang if p not in dolda]
    top = synliga[: karta.get("toppantal", 10)]
    info = karta.get("projekt_info", {})
    lnf = karta.get("lnf_markering", "")
    rader, korta = [], []
    for i, p in enumerate(top, 1):
        d, c, f = siffror[p]
        fp = fsynliga.index(p) + 1 if p in fsynliga else None
        pi = info.get(p, {})
        markor = lnf + " " if pi.get("lnf") and lnf else ""
        # Hovertexten (title) fungerar på GitHub för länkar. Beskrivningen finns också som text nedan.
        visat = f'[{p}]({pi["lank"]} "{pi["beskrivning"]}")' if pi.get("lank") else p
        rader.append(f"| {i} | {fp if fp else '–'} | {rorelse(i, fp)} | {markor}{visat} | {d} | {c} | {f} |")
        if pi.get("beskrivning"):
            korta.append(f"- {markor}{'[' + p + '](' + pi['lank'] + ')' if pi.get('lank') else p}: {pi['beskrivning']}")
    forklaring = (f"{lnf} = arbete inom Lunds Naturskyddsförening (LNF). " if lnf else "")
    fynd, dolt, ej_live = produkter(karta, dolda, start, nasta)
    namn = f"{MANADER[m - 1]} {ar}"
    fnamn = f"{MANADER[fm_m - 1]} {fm_ar}"
    period = f"{start.isoformat()} till {sista.isoformat()}"
    delrapport = (" Månaden pågår, så siffrorna är en delrapport. Förra månaden är en hel månad, "
                  "vilket påverkar jämförelsen.") if pagar else ""
    ut = f"""# Månadsrapport {namn}

Det här är en **månadsrapport**: en rangordning av de {len(top)} projekt som arbetet fördelat sig mest på under månaden, oavsett vilket repo de ligger i. Underlaget är Git-historiken i repona. Period: {period}.{delrapport}

**Nyckelord:** skriv **månadsrapport** (gärna med månad, till exempel "månadsrapport {MANADER[m - 1]}") i ett AI-verktyg som kan läsa skillen, så skapas eller uppdateras den här sammanställningen.

**Skillen med skriptet och projektkartan:**
- GitHub: [kent-manadsrapport]({GITHUB})
- Lokalt: `{AI_TEKNIK}\\.claude\\skills\\kent-manadsrapport`

## Rangordning {namn}

**Tabell 1. De {len(top)} projekt som mest arbete lagts på i {namn}, jämfört med {fnamn}** <a id="tabell-1"></a>

| Plats | Plats förra månaden | Rörelse | Projekt | Aktiva dagar | Commits | Filändringar |
|---|---|---|---|---|---|---|
""" + "\n".join(rader) + f"""

{forklaring}Rörelse: ▲ = högre upp än förra månaden, ▼ = längre ned, = = oförändrad, ny = inte med förra månaden. Plats räknas bland alla projekt, så ett projekt kan ha en plats förra månaden som ligger utanför de {len(top)} som visas. Projektnamnen är länkar till projektets huvudsida, och en kort beskrivning visas när du hovrar över namnet. Beskrivningarna finns också här:

## Projekten i korthet <a id="projekten-i-korthet"></a>

""" + "\n".join(korta) + "\n\n" + produkttabell(fynd, namn, lnf) + f"""
## Så räknas det <a id="sa-raknas-det"></a>

- **Aktiva dagar:** antal dagar med minst en commit som rör projektet.
- **Commits:** antal commits som rör projektet. En commit som rör flera projekt räknas i vart och ett.
- **Filändringar:** antal filer som ändrats, summerat över alla commits.
- **Ordning:** först aktiva dagar, därefter commits, därefter filändringar.
- **Bara det som committats räknas.** Arbete som inte sparats i Git, och tid vid datorn, syns inte.
- **Projekten är mjuka.** Vilka mappar som hör till vilket projekt står i `projekt_karta.json` i skillens mapp. När ett projekt vidgas läggs en mapp till på samma projekt, och namnet och placeringen följer med. Förra månaden räknas alltid om med den nuvarande kartan, så jämförelsen blir konsekvent även om kartan ändrats. Rapporter som redan skrivits ändras inte.
"""
    return ut, rang, siffror, dolda, frang, dolt, ej_live


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    skriv = "--skriv" in sys.argv
    karta, dolda = las_karta()
    ar, m, start, nasta = manad(args[0] if args else None)
    ut, rang, siffror, dolda, frang, dolt, ej_live = rapport(karta, dolda, ar, m, start, nasta)
    sys.stdout.reconfigure(encoding="utf-8")
    print(ut)
    if skriv:
        mal = AI_TEKNIK / "Manadsrapport"
        mal.mkdir(exist_ok=True)
        (mal / f"{ar}-{m:02d}.md").write_text(ut, encoding="utf-8")
        print(f"[skrivet till {mal / f'{ar}-{m:02d}.md'}]")
    if ej_live:
        print("\n--- Nya sidor som inte svarar på sin live-adress (ingår inte i Tabell 2) ---")
        for u in ej_live:
            print(u)
    if dolt:
        print(f"\n--- Dolda projekt: {len(dolt)} ny(a) sida(or) utanför Tabell 2 (visas bara i terminalen) ---")
    dold = [p for p in rang if p in dolda]
    if dold:
        print("\n--- Utanför tabellen (visas bara i terminalen, skrivs aldrig i rapportfilen) ---")
        synliga = [p for p in rang if p not in dolda]
        for p in dold:
            d, c, f = siffror[p]
            plats_om_med = sum(1 for q in synliga if (siffror[q][0], siffror[q][1], siffror[q][2]) > (d, c, f)) + 1
            print(f"{p}: {d} dagar, {c} commits, {f} filändringar (skulle ha varit plats {plats_om_med})")


if __name__ == "__main__":
    main()

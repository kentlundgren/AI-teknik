/* ==========================================================================
   app.js – ALLA BERÄKNINGAR OCH ALL VISNING för Claude Usage
   ==========================================================================
   Filen läser window.USAGE_DATA (från data.js), räknar fram nyckeltal och
   fyller i sidan (index.html). Den ändrar aldrig någon data.

   Innehåll (i ordning):
     1. Hjälpfunktioner för tal och datum (svensk formatering)
     2. Veckologik: när började och när slutar veckan? (torsdag 08:00)
     3. Nyckeltal: kvar, dagsbudget, takt/buffert, prognos
     4. Visning av de fem vyerna
     5. Flikar, tema och start

   Viktig princip: ALLA procentberäkningar görs vid AVLÄSNINGSTIDEN, inte
   vid "nu". Skärmdumpen visar läget en viss minut, och bara då vet vi både
   förbrukningen och hur stor del av veckan som gått. Om veckan hunnit
   återställas sedan dess visas en notis högst upp.
   ========================================================================== */

(function () {
  "use strict";   // strikt läge: fångar vanliga slarvfel

  /* ------------------------------------------------------------------------
     0. Hämta data och avbryt snällt om något saknas
     ------------------------------------------------------------------------ */
  const DATA = window.USAGE_DATA;
  if (!DATA || !Array.isArray(DATA.avlasningar) || DATA.avlasningar.length === 0) {
    document.getElementById("senasteAvlasning").textContent =
      "Ingen data hittades. Kontrollera att data.js ligger i samma mapp.";
    return;
  }
  const INST = DATA.installningar;

  // Sortera avläsningarna i tidsordning (säkerhet om någon lagts in i fel ordning)
  // och gör om tidstexten till ett Date-objekt en gång för alla.
  const AVL = DATA.avlasningar
    .map(function (a) { return Object.assign({}, a, { datum: new Date(a.tid) }); })
    .sort(function (a, b) { return a.datum - b.datum; });

  const SENASTE = AVL[AVL.length - 1];   // den nyaste avläsningen
  const TIMME = 3600 * 1000;             // en timme i millisekunder

  /* ------------------------------------------------------------------------
     1. HJÄLPFUNKTIONER – formatering på svenska
     ------------------------------------------------------------------------ */

  // Tal med svenskt decimalkomma. dec = antal decimaler.
  function tal(x, dec) {
    return x.toLocaleString("sv-SE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  // Procent: "6 %" eller "15,8 %"
  function pct(x, dec) { return tal(x, dec || 0) + " %"; }
  // Procentenheter med tecken: "+9,8 pe" / "−3,1 pe" (riktigt minustecken)
  function pe(x) {
    const tecken = x > 0 ? "+" : x < 0 ? "−" : "±";
    return tecken + tal(Math.abs(x), 1) + " pe";
  }
  // Euro: "40,20 €"
  function eur(x) { return tal(x, 2) + " €"; }

  // Datum och tid: "fre 25 sep 10:35"
  function tidText(d) {
    const dag = d.toLocaleDateString("sv-SE", { weekday: "short", day: "numeric", month: "short" });
    const kl = d.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
    return dag.replace(".", "") + " " + kl;
  }
  // Varaktighet i timmar -> "5 d 21 h" eller "3 h 25 min"
  function langd(timmar) {
    if (timmar < 0) timmar = 0;
    const d = Math.floor(timmar / 24);
    const h = Math.floor(timmar % 24);
    const m = Math.round((timmar * 60) % 60);
    if (d > 0) return d + " d " + h + " h";
    if (h > 0) return h + " h " + m + " min";
    return m + " min";
  }

  // Hitta senaste KÄNDA värdet av ett fält (hoppar över null).
  // Returnerar { varde, avlasning } eller null om fältet aldrig registrerats.
  function senasteKanda(falt) {
    for (let i = AVL.length - 1; i >= 0; i--) {
      if (AVL[i][falt] !== null && AVL[i][falt] !== undefined) {
        return { varde: AVL[i][falt], avlasning: AVL[i] };
      }
    }
    return null;
  }

  // Skriv text i ett element (id). html=true tillåter taggar som <strong>.
  function satt(id, innehall, html) {
    const el = document.getElementById(id);
    if (!el) return;
    if (html) el.innerHTML = innehall; else el.textContent = innehall;
  }

  // Statusmärke: ikon + text + färgklass. Färgen bär aldrig betydelse ensam.
  function statusHtml(niva) {
    if (niva === "ok")      return '<span class="status ok">✔ I fas eller före</span>';
    if (niva === "varning") return '<span class="status varning">▲ Något efter takt</span>';
    return '<span class="status fara">✖ Långt efter takt</span>';
  }

  /* ------------------------------------------------------------------------
     2. VECKOLOGIK – veckan går torsdag 08:00 → torsdag 08:00
     ------------------------------------------------------------------------ */

  // Senaste veckostart (torsdag 08:00) vid eller före tidpunkten d.
  function veckaStart(d) {
    // Hur många dagar sedan senaste torsdag? getDay(): 0=sön ... 4=tor
    const dagarSedan = (d.getDay() - INST.veckaAterstallsVeckodag + 7) % 7;
    // Bygg datumet med lokala fält, så att sommar-/vintertid hanteras rätt.
    let s = new Date(d.getFullYear(), d.getMonth(), d.getDate() - dagarSedan,
                     INST.veckaAterstallsTimme, 0, 0);
    // Är det torsdag men före 08:00 har veckan inte bytts än: gå en vecka bakåt.
    if (s > d) s = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 7, INST.veckaAterstallsTimme, 0, 0);
    return s;
  }
  // Veckans slut = start + 7 kalenderdagar (08:00 lokal tid).
  function veckaSlut(d) {
    const s = veckaStart(d);
    return new Date(s.getFullYear(), s.getMonth(), s.getDate() + 7, INST.veckaAterstallsTimme, 0, 0);
  }
  // Nyckel som identifierar en vecka (startdatum som text), för gruppering.
  function veckoNyckel(d) { return veckaStart(d).toISOString(); }

  // Månadens start och slut (kalendermånad, börjar den 1:a kl. 00:00).
  function manadStart(d) { return new Date(d.getFullYear(), d.getMonth(), INST.manadStartDag, 0, 0, 0); }
  function manadSlut(d)  { return new Date(d.getFullYear(), d.getMonth() + 1, INST.manadStartDag, 0, 0, 0); }

  /* ------------------------------------------------------------------------
     3. NYCKELTAL för en avläsning
     ------------------------------------------------------------------------
     Formlerna (samma överallt i programmet):
       andelGangen  = timmar sedan veckostart / veckans längd i timmar × 100
       kvar         = 100 − veckaProcent
       dagsbudget   = kvar / (timmar kvar / 24)        [procent per dygn]
       buffert      = andelGangen − veckaProcent        [procentenheter]
       nivå         = ok om buffert ≥ 0, varning om ≥ −10, annars fara
       takt/timme   = veckaProcent / timmar sedan veckostart
       prognos      = veckaProcent + takt/timme × timmar kvar
     ------------------------------------------------------------------------ */
  function nyckeltal(a) {
    const start = veckaStart(a.datum);
    const slut = veckaSlut(a.datum);
    const veckansTimmar = (slut - start) / TIMME;          // normalt 168
    const timmarGangna = (a.datum - start) / TIMME;
    const timmarKvar = (slut - a.datum) / TIMME;

    const andelGangen = timmarGangna / veckansTimmar * 100;
    const kvar = 100 - a.veckaProcent;
    const dagsbudget = timmarKvar > 0 ? kvar / (timmarKvar / 24) : kvar;
    const buffert = andelGangen - a.veckaProcent;

    let niva = "ok";
    if (buffert < INST.buffertVarning) niva = "varning";
    if (buffert < INST.buffertFara) niva = "fara";

    // Prognos: bara meningsfull efter minst en timme in i veckan.
    let taktPerTimme = null, prognos = null, slutTid = null;
    if (timmarGangna >= 1) {
      taktPerTimme = a.veckaProcent / timmarGangna;
      prognos = a.veckaProcent + taktPerTimme * timmarKvar;
      if (prognos >= 100 && taktPerTimme > 0) {
        // Vid vilken tidpunkt når vi 100 %?
        slutTid = new Date(start.getTime() + (100 / taktPerTimme) * TIMME);
      }
    }

    return { start, slut, veckansTimmar, timmarGangna, timmarKvar,
             andelGangen, kvar, dagsbudget, buffert, niva,
             taktPerTimme, prognos, slutTid };
  }

  const NT = nyckeltal(SENASTE);   // nyckeltal för senaste avläsningen
  const NU = new Date();

  /* ------------------------------------------------------------------------
     4a. SIDHUVUD OCH NOTIS
     ------------------------------------------------------------------------ */
  function visaSidhuvud() {
    const sedan = (NU - SENASTE.datum) / TIMME;
    satt("senasteAvlasning",
      "Senaste avläsning: " + tidText(SENASTE.datum) + " (för " + langd(sedan) + " sedan) · " +
      AVL.length + " avläsningar totalt");

    // Notis om veckan har återställts sedan avläsningen
    const notis = document.getElementById("notis");
    if (NU >= NT.slut) {
      notis.hidden = false;
      notis.innerHTML = "<strong>Veckan har återställts</strong> sedan senaste avläsningen (" +
        tidText(NT.slut) + "). Siffrorna nedan gäller förra veckan – ta en ny skärmdump av Usage-sidan.";
    } else if (sedan > 24) {
      notis.hidden = false;
      notis.textContent = "Senaste avläsningen är mer än ett dygn gammal. Ta gärna en ny skärmdump för ett aktuellt läge.";
    }
  }

  /* ------------------------------------------------------------------------
     4b. VY: LÄGET NU
     ------------------------------------------------------------------------ */
  function visaNu() {
    const a = SENASTE;

    // --- Hjältesiffran ---
    satt("heroKvar", pct(NT.kvar));
    document.getElementById("heroStapel").style.width = Math.min(a.veckaProcent, 100) + "%";
    document.getElementById("heroTaktmarkor").style.left = "calc(" + Math.min(NT.andelGangen, 100) + "% - 1px)";
    satt("heroText",
      "Förbrukat: <strong>" + pct(a.veckaProcent) + "</strong>. Av veckan har <strong>" +
      pct(NT.andelGangen, 1) + "</strong> gått (det svarta strecket). Veckan återställs " +
      tidText(NT.slut) + ", " + langd(NT.timmarKvar) + " efter avläsningen.", true);

    // --- Dagsbudget ---
    satt("dagsbudget", pct(NT.dagsbudget, 1) + " / dygn");
    satt("dagsbudgetText",
      "Så mycket kan du använda varje dygn fram till återställningen. Jämn takt över en hel vecka är " +
      pct(100 / 7, 1) + " per dygn.");

    // --- Takt / buffert ---
    satt("takt", pe(NT.buffert));
    satt("taktText", statusHtml(NT.niva) + "<br>" + pct(NT.andelGangen, 1) +
      " av veckan har gått, " + pct(a.veckaProcent) + " av gränsen är förbrukad.", true);

    // --- Prognos ---
    if (NT.prognos === null) {
      satt("prognos", "–");
      satt("prognosText", "För tidigt i veckan för en prognos.");
    } else if (NT.prognos >= 100) {
      satt("prognos", "Gränsen nås");
      satt("prognosText", "I nuvarande takt tar veckogränsen slut ca <strong>" + tidText(NT.slutTid) +
        "</strong>, före återställningen.", true);
    } else {
      satt("prognos", "≈ " + pct(NT.prognos));
      satt("prognosText", "Om du fortsätter i samma takt som hittills i veckan (" +
        tal(NT.taktPerTimme * 24, 1) + " % per dygn) landar du här vid återställningen.");
    }

    // --- Session ---
    const s = senasteKanda("sessionProcent");
    if (s) {
      satt("session", pct(s.varde));
      const aterTid = s.avlasning.sessionAterstallsTid ? new Date(s.avlasning.sessionAterstallsTid) : null;
      if (!aterTid) satt("sessionText", "Ingen aktiv session vid avläsningen.");
      else if (aterTid < NU) satt("sessionText", "Sessionen återställdes " + tidText(aterTid) + " – nu troligen 0 %.");
      else satt("sessionText", "Återställs " + tidText(aterTid) + ". Korttidsgräns, påverkar inte veckan.");
    }

    // --- Molnbonus ---
    const mb = senasteKanda("molnbonusKvarUsd");
    const bonus = DATA.erbjudanden.molnbonus;
    const bonusSlut = new Date(bonus.gar_utTid);
    if (mb) {
      satt("molnbonus", tal(mb.varde, 0) + " $ kvar");
      satt("molnbonusText", "Av " + bonus.totaltUsd + " $. Går ut " + tidText(bonusSlut) + " (om " + langd((bonusSlut - NU) / TIMME) +
        "). Dras före planens gränser, bara i molnsessioner.");
    } else {
      satt("molnbonus", "Ej uthämtad");
      satt("molnbonusText", "Klicka Claim credit på Usage-sidan.");
    }

    // --- Krediter ---
    const k = senasteKanda("krediterSaldoEur");
    if (k) {
      satt("krediter", eur(k.varde));
      const m = senasteKanda("manadSpenderatEur"), g = senasteKanda("manadGransEur");
      if (g && g.varde === 0) {
        // Med månadstak 0 € går krediterna inte att använda
        satt("krediterText", "OBS: månadstaket är 0 €, så krediterna kan inte användas just nu. Höj taket under Manage om du vill ha reserven.");
      } else {
        satt("krediterText", "Används först när veckogränsen är slut." +
          (m && g ? " Denna månad: " + eur(m.varde) + " av " + eur(g.varde) + "." : ""));
      }
    }

    // --- Kontroll av kreditinställningarna ---
    visaInstallningskontroll();

    // --- Råd om Reset for free ---
    satt("resetRad", resetRad(), true);

    // --- Produkter ---
    visaProdukter();
  }

  /* Kontroll av kreditinställningarna.
     Tre regler, var och en blir en rad med ✔ (rätt) eller ✖ (bör ändras):
       1. Reglaget "Turn on usage credits" ska vara PÅ – annars används inte
          krediterna alls när veckogränsen tar slut.
       2. Månadstaket ska vara MINST LIKA STORT SOM SALDOT – taket styr hur mycket
          av de REDAN KÖPTA krediterna som får förbrukas per månad. 0 € = spärrat.
       3. Automatisk påfyllning ska vara AV – det är bara den som drar NYA pengar.
     Med 2 och 3 tillsammans blir saldot det verkliga taket: reserven går att
     använda, men det kan aldrig kosta mer än det redan betalda. */
  function visaInstallningskontroll() {
    const lista = document.getElementById("installningLista");
    const pa = senasteKanda("krediterPa");
    const saldo = senasteKanda("krediterSaldoEur");
    const tak = senasteKanda("manadGransEur");
    const auto = senasteKanda("autoPafyllning");

    // Varje rad: ok (true/false/null = okänt), rubrik och förklaring
    const rader = [];

    rader.push(pa === null
      ? { ok: null, rubrik: "Reglaget för krediter", text: "Okänt – syntes inte på skärmdumparna." }
      : pa.varde
        ? { ok: true, rubrik: "Reglaget för krediter är på", text: "Krediterna tar vid när veckogränsen är slut." }
        : { ok: false, rubrik: "Reglaget för krediter är av", text: "Slå på \"Turn on usage credits\", annars används inte reserven alls." });

    if (tak === null || saldo === null) {
      rader.push({ ok: null, rubrik: "Månadstak", text: "Okänt – syntes inte på skärmdumparna." });
    } else if (tak.varde === 0) {
      rader.push({ ok: false, rubrik: "Månadstaket är 0 €",
        text: "Då är hela saldot på " + eur(saldo.varde) + " spärrat. Sätt taket till minst " +
              eur(Math.ceil(saldo.varde)) + " under Manage. Det kostar inget extra." });
    } else if (tak.varde < saldo.varde && saldo.varde - tak.varde < 1) {
      // Skillnad under 1 € (t.ex. tak 40 € mot saldo 40,20 €): räkna som rätt.
      // Resten blir ändå användbar nästa månad, när taket börjar om.
      rader.push({ ok: true, rubrik: "Månadstaket (" + eur(tak.varde) + ") täcker i praktiken saldot (" + eur(saldo.varde) + ")",
        text: "Hela reserven utom " + eur(saldo.varde - tak.varde) + " kan användas denna månad. Resten går att använda nästa månad." });
    } else if (tak.varde < saldo.varde) {
      rader.push({ ok: false, rubrik: "Månadstaket (" + eur(tak.varde) + ") är lägre än saldot",
        text: "Bara " + eur(tak.varde) + " av " + eur(saldo.varde) + " kan användas per månad. Höj till minst " +
              eur(Math.ceil(saldo.varde)) + " om du vill kunna använda hela reserven." });
    } else {
      rader.push({ ok: true, rubrik: "Månadstaket (" + eur(tak.varde) + ") täcker saldot (" + eur(saldo.varde) + ")",
        text: "Hela reserven kan användas om veckogränsen tar slut." });
    }

    rader.push(auto === null
      ? { ok: null, rubrik: "Automatisk påfyllning", text: "Okänt – syntes inte på skärmdumparna." }
      : auto.varde
        ? { ok: false, rubrik: "Automatisk påfyllning är på",
            text: "Nya pengar dras från kortet när saldot blir lågt, upp till månadstaket. Stäng av (Auto-reload) om du inte vill det." }
        : { ok: true, rubrik: "Automatisk påfyllning är av",
            text: "Inga nya pengar dras. Saldot är ditt verkliga tak." });

    // Rita listan. Ikon + text, aldrig bara färg.
    lista.innerHTML = "";
    rader.forEach(function (r) {
      const li = document.createElement("li");
      li.className = r.ok === true ? "ok" : r.ok === false ? "fel" : "okand";
      const ikon = r.ok === true ? "✔" : r.ok === false ? "✖" : "?";
      li.innerHTML = '<span class="ikon" aria-hidden="true">' + ikon + "</span><div><strong>" +
        r.rubrik + "</strong><br>" + r.text + "</div>";
      lista.appendChild(li);
    });

    // Fel: markera rutan och visa också en notis högst upp på sidan
    const antalFel = rader.filter(function (r) { return r.ok === false; }).length;
    document.getElementById("installningRuta").classList.toggle("har-fel", antalFel > 0);
    if (antalFel > 0) {
      const notis = document.getElementById("notis");
      notis.hidden = false;
      notis.innerHTML = (notis.innerHTML ? notis.innerHTML + "<br>" : "") +
        "<strong>Kreditinställningarna bör ändras</strong> – se rutan \"Är kreditinställningarna rätt?\" under Läget nu.";
    }
  }

  // Beslutslogik för "Reset for free". Returnerar en HTML-mening.
  function resetRad() {
    const r = DATA.erbjudanden.reset;
    const giltig = new Date(r.giltigTill);
    const dagarKvarErbj = Math.ceil((giltig - NU) / (24 * TIMME));
    if (r.anvand) return "Den är redan använd" + (r.anvandTid ? " (" + tidText(new Date(r.anvandTid)) + ")" : "") + ".";
    if (NU > giltig) return "Erbjudandet gick ut " + tidText(giltig) + ".";

    const v = SENASTE.veckaProcent;
    if (v >= INST.resetForeslasVidProcent && NT.timmarKvar > INST.resetMinTimmarKvar) {
      return "<strong>Ja, överväg den nu.</strong> Du har förbrukat " + pct(v) + " och det är " +
        langd(NT.timmarKvar) + " kvar till ordinarie återställning.";
    }
    if (v >= INST.resetForeslasVidProcent) {
      return "<strong>Nej, vänta.</strong> Du ligger på " + pct(v) + ", men veckan återställs ändå om " +
        langd(NT.timmarKvar) + ". Spara den till en vecka där den gör större nytta.";
    }
    let text = "<strong>Inte än.</strong> Du har " + pct(NT.kvar) + " kvar av veckan. Spara den tills veckostapeln passerar " +
      pct(INST.resetForeslasVidProcent) + " med mer än ett dygn kvar till torsdag. Giltig till " +
      giltig.toLocaleDateString("sv-SE", { day: "numeric", month: "long" }) + " (" + dagarKvarErbj + " dagar).";
    if (NT.prognos !== null && NT.prognos >= 100) {
      text += " Obs: prognosen säger att gränsen nås före torsdag – håll koll.";
    }
    return text;
  }

  // Produktfördelningen omräknad till andel av veckogränsen.
  function visaProdukter() {
    // Senaste avläsning som har produktdata
    let p = null;
    for (let i = AVL.length - 1; i >= 0; i--) { if (AVL[i].produkter) { p = AVL[i]; break; } }
    const lista = document.getElementById("produktLista");
    if (!p) { satt("produktIntro", "Ingen avläsning innehåller fördelning per produkt ännu."); return; }

    const annanVecka = veckoNyckel(p.datum) !== veckoNyckel(SENASTE.datum);
    satt("produktIntro",
      "Enligt avläsningen " + tidText(p.datum) + ", då veckan stod på " + pct(p.veckaProcent) + ". " +
      "Usage-sidan visar andel av det förbrukade (summerar till 100 %). Här visas också vad det motsvarar av hela veckogränsen." +
      (annanVecka ? " OBS: från en tidigare vecka." : ""));

    const namn = { claudeCode: "Claude Code", chats: "Chats", cowork: "Cowork", other: "Other" };
    lista.innerHTML = "";
    Object.keys(namn).forEach(function (nyckel) {
      const andel = p.produkter[nyckel] || 0;                  // % av förbrukat
      const avGrans = andel * p.veckaProcent / 100;            // % av veckogränsen
      const rad = document.createElement("div");
      rad.className = "produkt";
      rad.innerHTML =
        '<span class="produkt-namn">' + namn[nyckel] + "</span>" +
        '<div class="produkt-bana" title="' + pct(andel) + ' av förbrukat"><div class="produkt-fyll" style="width:' + andel + '%"></div></div>' +
        '<span class="produkt-varde"><strong>' + pct(andel) + "</strong> av förbrukat = " + pct(avGrans, 1) + " av veckan</span>";
      lista.appendChild(rad);
    });
  }

  /* ------------------------------------------------------------------------
     4c. VY: VECKAN – diagram och tabeller
     ------------------------------------------------------------------------ */
  let veckaChart = null;   // sparas så att diagrammet kan ritas om vid temabyte

  // Avläsningar i samma vecka som den senaste
  function veckansAvlasningar() {
    const nyckel = veckoNyckel(SENASTE.datum);
    return AVL.filter(function (a) { return veckoNyckel(a.datum) === nyckel; });
  }

  function visaVecka() {
    const lista = veckansAvlasningar();
    satt("veckaRubrik", "Veckan " + tidText(NT.start) + " – " + tidText(NT.slut));

    // --- Tabell: avläsningar denna vecka ---
    let html = "<thead><tr><th>Tid</th><th>Vecka</th><th>Δ vecka</th><th>Veckan gången</th><th>Buffert</th><th>Session</th></tr></thead><tbody>";
    lista.forEach(function (a, i) {
      const n = nyckeltal(a);
      const delta = i > 0 ? a.veckaProcent - lista[i - 1].veckaProcent : a.veckaProcent;
      html += "<tr><td>" + tidText(a.datum) + "</td><td>" + pct(a.veckaProcent) + "</td><td>" +
        (delta >= 0 ? "+" : "−") + tal(Math.abs(delta), 0) + " pe</td><td>" + pct(n.andelGangen, 1) +
        "</td><td>" + pe(n.buffert) + "</td><td>" +
        (a.sessionProcent === null ? "–" : pct(a.sessionProcent)) + "</td></tr>";
    });
    document.getElementById("veckaTabell").innerHTML = html + "</tbody>";

    // --- Tabell: alla veckor (högsta och sista värde per vecka) ---
    const grupper = {};
    AVL.forEach(function (a) {
      const k = veckoNyckel(a.datum);
      (grupper[k] = grupper[k] || []).push(a);
    });
    let h2 = "<thead><tr><th>Vecka (tors–tors)</th><th>Avläsningar</th><th>Högsta</th><th>Sista</th><th>Status</th></tr></thead><tbody>";
    Object.keys(grupper).sort().reverse().forEach(function (k) {
      const g = grupper[k];
      const s = new Date(k);
      const e = new Date(s.getFullYear(), s.getMonth(), s.getDate() + 7, INST.veckaAterstallsTimme);
      const hogsta = Math.max.apply(null, g.map(function (a) { return a.veckaProcent; }));
      const pagar = NU < e;
      h2 += "<tr><td>" + s.toLocaleDateString("sv-SE", { day: "numeric", month: "short" }) + " – " +
        e.toLocaleDateString("sv-SE", { day: "numeric", month: "short" }) + "</td><td>" + g.length +
        "</td><td>" + pct(hogsta) + "</td><td>" + pct(g[g.length - 1].veckaProcent) + "</td><td>" +
        (pagar ? "Pågår" : "Avslutad") + "</td></tr>";
    });
    document.getElementById("veckorTabell").innerHTML = h2 + "</tbody>";

    ritaVeckaDiagram(lista);
  }

  // Läs en färg från CSS-variablerna (så diagrammet följer temat)
  function css(namn) { return getComputedStyle(document.documentElement).getPropertyValue(namn).trim(); }

  function ritaVeckaDiagram(lista) {
    if (typeof Chart === "undefined") {           // Chart.js kunde inte laddas
      document.getElementById("veckaDiagramSaknas").hidden = false;
      return;
    }
    if (veckaChart) veckaChart.destroy();         // rita om från början

    // Faktisk förbrukning: börjar på 0 % vid veckostart, sedan varje avläsning
    const faktisk = [{ x: NT.start.getTime(), y: 0 }].concat(
      lista.map(function (a) { return { x: a.datum.getTime(), y: a.veckaProcent }; }));
    // Jämn takt: rak linje från 0 % vid start till 100 % vid slut
    const jamn = [{ x: NT.start.getTime(), y: 0 }, { x: NT.slut.getTime(), y: 100 }];

    const text = css("--text-dampad"), rutnat = css("--linje");

    veckaChart = new Chart(document.getElementById("veckaDiagram"), {
      type: "line",
      data: {
        datasets: [
          { label: "Din förbrukning", data: faktisk, borderColor: css("--serie-1"),
            backgroundColor: css("--serie-1"), borderWidth: 2, pointRadius: 4, pointHoverRadius: 6, tension: 0 },
          { label: "Jämn takt", data: jamn, borderColor: css("--takt-linje"),
            borderDash: [6, 4], borderWidth: 2, pointRadius: 0, pointHoverRadius: 0 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "nearest", intersect: false },   // tooltip utan att träffa exakt
        scales: {
          x: {
            type: "linear",                                   // tid som millisekunder
            min: NT.start.getTime(), max: NT.slut.getTime(),
            ticks: {
              color: text, stepSize: 24 * TIMME,              // en markering per dygn
              callback: function (v) {
                return new Date(v).toLocaleDateString("sv-SE", { weekday: "short", day: "numeric" });
              }
            },
            grid: { color: rutnat }
          },
          y: {
            min: 0, max: 100,
            ticks: { color: text, callback: function (v) { return v + " %"; } },
            grid: { color: rutnat }
          }
        },
        plugins: {
          legend: { labels: { color: css("--text-sekundar"), usePointStyle: true, boxWidth: 8, boxHeight: 8 } },
          tooltip: {
            callbacks: {
              title: function (items) { return tidText(new Date(items[0].parsed.x)); },
              label: function (item) { return item.dataset.label + ": " + tal(item.parsed.y, 1) + " %"; }
            }
          }
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     4d. VY: MÅNAD & KREDITER
     ------------------------------------------------------------------------ */
  function visaManad() {
    const m = senasteKanda("manadSpenderatEur");
    const g = senasteKanda("manadGransEur");
    if (m && g && g.varde === 0) {
      // Månadstaket är 0 €: inga krediter kan dras alls. Undvik division med noll.
      satt("manadSpenderat", eur(m.varde) + " av " + eur(0));
      satt("manadSpenderatText", "Månadstaket är 0 € (avläst " + tidText(g.avlasning.datum) +
        "). Då kan inga krediter användas, inte ens när veckogränsen är slut.");
      satt("manadTakt", "–");
      satt("manadTaktText", "Ingen takt att mäta med ett tak på 0 €.");
    } else if (m && g) {
      const d = m.avlasning.datum;
      const andelTid = (d - manadStart(d)) / (manadSlut(d) - manadStart(d)) * 100;
      const andelSpent = m.varde / g.varde * 100;
      const buffert = andelTid - andelSpent;
      let niva = "ok";
      if (buffert < INST.buffertVarning) niva = "varning";
      if (buffert < INST.buffertFara) niva = "fara";

      satt("manadSpenderat", eur(m.varde) + " av " + eur(g.varde));
      satt("manadSpenderatText", pct(andelSpent, 1) + " av månadstaket. Avläst " + tidText(d) + ".");
      satt("manadTakt", pe(buffert));
      satt("manadTaktText", statusHtml(niva) + "<br>" + pct(andelTid, 1) + " av månaden hade gått.", true);
    }
    const k = senasteKanda("krediterSaldoEur");
    if (k) {
      satt("manadSaldo", eur(k.varde));
      const a = senasteKanda("autoPafyllning");
      satt("manadSaldoText", "Avläst " + tidText(k.avlasning.datum) + ". Automatisk påfyllning: " +
        (a ? (a.varde ? "på" : "av") : "okänt") + ".");
    }
    const mb = senasteKanda("molnbonusKvarUsd");
    const slut = new Date(DATA.erbjudanden.molnbonus.gar_utTid);
    if (mb) {
      const dagar = Math.max((slut - NU) / (24 * TIMME), 0.01);
      satt("bonusPerDag", tal(mb.varde / dagar, 2) + " $ / dygn");
      satt("bonusPerDagText", tal(mb.varde, 0) + " $ kvar och " + tal(dagar, 0) +
        " dygn till " + tidText(slut) + ". Det som inte används förfaller.");
    } else {
      satt("bonusPerDag", "–");
      satt("bonusPerDagText", "Bonusen är inte uthämtad.");
    }
  }

  /* ------------------------------------------------------------------------
     4e. VY: HISTORIK – alla avläsningar, nyast först
     ------------------------------------------------------------------------ */
  function visaHistorik() {
    const streck = "–";
    function v(x, f) { return x === null || x === undefined ? streck : f(x); }

    let html = "<thead><tr><th>Tid</th><th>Session</th><th>Vecka</th><th>Δ</th>" +
      "<th>Claude Code</th><th>Chats</th><th>Cowork</th><th>Other</th>" +
      "<th>Molnbonus</th><th>Krediter</th><th>Månad</th><th>Bild</th><th class=\"kommentar\">Kommentar</th></tr></thead><tbody>";

    // Gå baklänges (nyast först) men jämför med föregående i tid
    for (let i = AVL.length - 1; i >= 0; i--) {
      const a = AVL[i];
      const foreg = i > 0 && veckoNyckel(AVL[i - 1].datum) === veckoNyckel(a.datum) ? AVL[i - 1] : null;
      const delta = foreg ? a.veckaProcent - foreg.veckaProcent : null;
      // Minskar veckoprocenten inom samma vecka har gränsen nollställts (Reset?)
      const nollstalld = delta !== null && delta < 0;
      const pr = a.produkter;

      html += "<tr" + (nollstalld ? ' class="aterstallning"' : "") + ">" +
        "<td>" + tidText(a.datum) + "</td>" +
        "<td>" + v(a.sessionProcent, pct) + "</td>" +
        "<td>" + pct(a.veckaProcent) + "</td>" +
        "<td>" + (delta === null ? streck : (delta >= 0 ? "+" : "−") + Math.abs(delta)) + "</td>" +
        "<td>" + (pr ? pct(pr.claudeCode) : streck) + "</td>" +
        "<td>" + (pr ? pct(pr.chats) : streck) + "</td>" +
        "<td>" + (pr ? pct(pr.cowork) : streck) + "</td>" +
        "<td>" + (pr ? pct(pr.other) : streck) + "</td>" +
        "<td>" + v(a.molnbonusKvarUsd, function (x) { return tal(x, 0) + " $"; }) + "</td>" +
        "<td>" + v(a.krediterSaldoEur, eur) + "</td>" +
        "<td>" + v(a.manadSpenderatEur, eur) + "</td>" +
        "<td>" + (a.bild ? '<a href="' + a.bild + '" target="_blank" rel="noopener">Visa</a>' : streck) + "</td>" +
        '<td class="kommentar">' + (nollstalld ? "<strong>Nollställd inom veckan (Reset?).</strong> " : "") +
        (a.kommentar || "") + "</td></tr>";
    }
    document.getElementById("historikTabell").innerHTML = html + "</tbody>";
  }

  /* ------------------------------------------------------------------------
     5. FLIKAR, TEMA OCH START
     ------------------------------------------------------------------------ */
  function kopplaFlikar() {
    const flikar = document.querySelectorAll(".flik");
    flikar.forEach(function (flik) {
      flik.addEventListener("click", function () {
        // Markera vald flik och visa rätt vy, dölj övriga
        flikar.forEach(function (f) { f.setAttribute("aria-selected", f === flik ? "true" : "false"); });
        document.querySelectorAll(".vy").forEach(function (vy) {
          vy.hidden = vy.id !== "vy-" + flik.dataset.vy;
        });
        // Diagram i en dold vy får ingen storlek, så rita om när vyn visas
        if (flik.dataset.vy === "vecka") ritaVeckaDiagram(veckansAvlasningar());
        // Kom ihåg vald flik (bekvämlighet – fungerar inte alltid, därav try)
        try { localStorage.setItem("usage-flik", flik.dataset.vy); } catch (e) { /* ignorera */ }
      });
    });
    // Öppna senast valda flik om den finns sparad
    try {
      const sparad = localStorage.getItem("usage-flik");
      const knapp = sparad && document.querySelector('.flik[data-vy="' + sparad + '"]');
      if (knapp) knapp.click();
    } catch (e) { /* ignorera */ }
  }

  function kopplaTema() {
    const rot = document.documentElement;
    try { const t = localStorage.getItem("usage-tema"); if (t) rot.dataset.theme = t; } catch (e) { /* ignorera */ }
    document.getElementById("temaKnapp").addEventListener("click", function () {
      // Vilket tema syns just nu? (knappens val, annars datorns)
      const morktNu = rot.dataset.theme
        ? rot.dataset.theme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      rot.dataset.theme = morktNu ? "light" : "dark";
      try { localStorage.setItem("usage-tema", rot.dataset.theme); } catch (e) { /* ignorera */ }
      // Rita om diagrammet med det nya temats färger
      if (!document.getElementById("vy-vecka").hidden) ritaVeckaDiagram(veckansAvlasningar());
    });
  }

  // Teknikrutan (</> teknik): öppna med knappen, stäng med ×, klick utanför
  // rutan eller Escape. addEventListener i stället för inline onclick.
  function kopplaTeknikruta() {
    const knapp = document.getElementById("techBtn");
    const ruta = document.getElementById("techModal");
    const stang = document.getElementById("techClose");
    if (!knapp || !ruta || !stang) return;
    const oppna = function () { ruta.classList.add("show"); };
    const stangRuta = function () { ruta.classList.remove("show"); };
    knapp.addEventListener("click", oppna);
    stang.addEventListener("click", stangRuta);
    ruta.addEventListener("click", function (e) { if (e.target === ruta) stangRuta(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") stangRuta(); });
  }

  // Kör allt
  kopplaTeknikruta();
  kopplaTema();
  visaSidhuvud();
  visaNu();
  visaVecka();
  visaManad();
  visaHistorik();
  kopplaFlikar();
})();

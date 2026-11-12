/* sida.js: gemensamt skript för sidorna om AI i en miljöorganisation.
 *
 * Läser data/siffror.json, räknar de beräknade posterna, fyller platshållare i texten
 * (data-post, data-formel, data-kalla, data-lista), visar markering av hur väl en siffra är belagd,
 * förklaringar vid hovring/fokus/tryck, tekniknivån i hörnet och versionsraden.
 *
 * UPPDATERING 2026-11-12: första versionen. Version 1.0.
 *
 * Testläge: lägg ?test=1 efter adressen för att köra validering och testfall (SPEC avsnitt 3, 4 och 8).
 * Obs: fetch fungerar inte på file://. Testa via en lokal server (python -m http.server).
 */
const VERSION = "1.0";
const VERSIONSDATUM = "2026-11-12";
const AVSANDARE = "Kent Lundgren";
const GITHUB_MAPP = "https://github.com/kentlundgren/AI-teknik/tree/main/AI_anvandning/NF";

/* ---------- ordlista: förklaringar vid hovring, fokus och tryck ---------- */
const TERMER = {
  token: "Enhet som en språkmodell räknar text i. För OpenAI motsvarar en token i genomsnitt cirka 0,75 ord (Epoch AI, 2025). Olika modeller räknar olika, så talen är ungefärliga.",
  Wh: "Wattimme: energin när en effekt på 1 watt pågår i en timme. 1 kWh är 1 000 Wh.",
  kWh: "Kilowattimme: 1 000 wattimmar. Den enhet elräkningen använder.",
  TWh: "Terawattimme: en miljard kilowattimmar.",
  WUE: "Water usage effectiveness: hur många liter vatten ett datacenter använder per kWh energi (liter per kWh). Lawrence Berkeley National Laboratory och Microsoft redovisar måttet.",
  PUE: "Power usage effectiveness: hela anläggningens energi delat med energin som går till själva servrarna. Ju närmare 1, desto mindre energi till kylning och annat.",
  CO2e: "Koldioxidekvivalenter: olika växthusgaser omräknade till den mängd koldioxid som ger samma uppvärmning.",
  uttag: "Vatten som pumpas in från en sjö, ett hav eller en ledning. Det mesta kan komma tillbaka (USGS, 2019).",
  förbrukning: "Den del av det uttagna vattnet som inte kommer tillbaka till samma vattendrag, i praktiken det som avdunstar. Lawrence Berkeley National Laboratory definierar det som vatten som tas bort ur den omedelbara vattencykeln.",
  genomströmning: "Kylning där vatten tas in, passerar anläggningen en gång och släpps ut igen, varmare (USGS, 2019).",
  kyltorn: "Kylning där vattnet cirkulerar och en del avdunstar i ett torn. Då förbrukas en stor del av det uttagna vattnet (USGS, 2019).",
  median: "Mittenvärdet: hälften av frågorna använder mindre och hälften mer.",
  cachade: "Tokens som modellen läser om ur ett mellanlager (cache) i stället för att bearbeta dem från början. De kostar mindre per styck än nya tokens.",
  indirekt: "Vatten som förbrukas där elen produceras (till exempel kylvatten i kraftverk), inte vid datacentret.",
  mikro: "Tid i en mikrovågsugn på 1 000 W (märkeffekt). Se antagandet MW_EFFEKT och förbättringsrad F-06."
};

/* ---------- format ---------- */
const NF0 = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 });
const NF4 = new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 4 });
function nfDigits(d) { return new Intl.NumberFormat("sv-SE", { minimumFractionDigits: 0, maximumFractionDigits: d }); }

/* Avrundar till s värdesiffror och formaterar med svensk decimalkomma. */
function sig(n, s) {
  s = s || 2;
  if (!isFinite(n)) return "?";
  if (n === 0) return "0";
  const mag = Math.floor(Math.log10(Math.abs(n)));
  const factor = Math.pow(10, s - 1 - mag);
  const r = Math.round(n * factor) / factor;
  return nfDigits(Math.max(0, s - 1 - mag)).format(r);
}

function pluralTid(txt, enh) {
  const s = { sek: ["sekund", "sekunder"], min: ["minut", "minuter"], tim: ["timme", "timmar"] }[enh];
  return txt === "1" ? s[0] : s[1];
}

/* Tid i sekunder: väljer enhet efter största värdet och visar ett eller två tal. */
function visaTid(sekMin, sekMax) {
  const ref = sekMax === undefined ? sekMin : sekMax;
  let enh, div;
  if (ref < 90) { enh = "sek"; div = 1; } else if (ref < 5400) { enh = "min"; div = 60; } else { enh = "tim"; div = 3600; }
  const f = (s) => {
    const v = s / div;
    if (enh === "sek" && v < 10) return nfDigits(1).format(Math.round(v * 10) / 10);
    return sig(v, 2);
  };
  const a = f(sekMin);
  if (sekMax === undefined) return a + " " + pluralTid(a, enh);
  const b = f(sekMax);
  if (a === b) return a + " " + pluralTid(a, enh);
  return a + "–" + b + " " + pluralTid(b, enh);
}

function visaEnergi(whMin, whMax) {
  const ref = whMax === undefined ? whMin : whMax;
  const kwh = ref >= 1000;
  const d = kwh ? 1000 : 1;
  const u = kwh ? "kWh" : "Wh";
  const a = sig(whMin / d, 2);
  if (whMax === undefined) return a + " " + u;
  const b = sig(whMax / d, 2);
  return a === b ? a + " " + u : a + "–" + b + " " + u;
}

function visaVatten(mlMin, mlMax) {
  const ref = mlMax === undefined ? mlMin : mlMax;
  const l = ref >= 1000;
  const d = l ? 1000 : 1;
  const u = l ? "liter" : "ml";
  const a = sig(mlMin / d, 2);
  if (mlMax === undefined) return a + " " + u;
  const b = sig(mlMax / d, 2);
  return a === b ? a + " " + u : a + "–" + b + " " + u;
}

/* ---------- data ---------- */
let DATA = null;
const POSTER = {};
const KALLOR = {};
const CACHE = {};

function varde(id, stack) {
  stack = stack || [];
  if (id in CACHE) return CACHE[id];
  const p = POSTER[id];
  if (!p) throw new Error("Okänd post: " + id);
  if (p.typ === "beraknad") {
    if (stack.indexOf(id) >= 0) throw new Error("Cirkulär formel: " + stack.concat(id).join(" > "));
    CACHE[id] = utvardera(p.formel, stack.concat(id));
  } else {
    CACHE[id] = p.varde;
  }
  return CACHE[id];
}

/* Säker enkel räknare: bara post-id, tal och + - * / ( ). */
function utvardera(formel, stack) {
  stack = stack || [];
  const uttryck = formel.replace(/[A-Z][A-Z0-9_]*/g, (id) => "(" + varde(id, stack) + ")");
  if (!/^[0-9+\-*/().\s eE]*$/.test(uttryck)) throw new Error("Ogiltig formel: " + formel);
  return Function('"use strict"; return (' + uttryck + ");")();
}

const BELAGD = {
  original: ["original", "Läst i originalkällan."],
  sekundar: ["sekundär", "Läst via en sekundärkälla."],
  bolagets_egen: ["bolagets egen uppgift", "Bolagets egen uppgift, inte granskad av tredje part."],
  antagande: ["antagande", "Ett antagande i den här analysen."]
};

function markering(p) {
  const el = document.createElement(p.kalla ? "a" : "span");
  const b = p.typ === "beraknad" ? ["beräknad", "Beräknad av sidan ur andra poster. Formel: " + p.formel + "."] : BELAGD[p.belagd] || ["?", ""];
  el.className = "belagd belagd-" + (p.typ === "beraknad" ? "beraknad" : p.belagd);
  el.textContent = b[0];
  const k = p.kalla ? KALLOR[p.kalla] : null;
  let t = b[1];
  if (p.namn) t += " " + p.namn + ".";
  if (p.kommentar) t += " " + p.kommentar;
  if (k) t += " Källa: " + k.kort + ", hämtad " + p.hamtdatum + ".";
  if (p.forbattring && p.forbattring.length) t += " Förbättras: " + p.forbattring.join(", ") + ".";
  el.title = t;
  if (p.kalla) { el.href = "kallor.html#ref-" + p.kalla; }
  el.setAttribute("aria-label", t);
  return el;
}

function visaPost(p) {
  let v;
  if (p.spann) v = NF4.format(p.spann[0]) + "–" + NF4.format(p.spann[1]);
  else v = NF4.format(varde(p.id));
  return v + (p.enhet ? " " + p.enhet : "");
}

/* ---------- platshållare i texten ---------- */
function fyllPlatshallare() {
  document.querySelectorAll("[data-post]").forEach((el) => {
    const p = POSTER[el.dataset.post];
    if (!p) { el.textContent = "?"; console.error("Okänd post i data-post:", el.dataset.post); return; }
    const v = p.typ === "beraknad" ? sig(varde(p.id), +(el.dataset.sig || 2)) + (p.enhet ? " " + p.enhet : "") : visaPost(p);
    el.textContent = el.dataset.utanenhet ? v.replace(" " + p.enhet, "") : v;
    if (el.dataset.badge !== "nej") {
      el.appendChild(document.createTextNode(" "));
      el.appendChild(markering(p));
    }
  });

  document.querySelectorAll("[data-formel]").forEach((el) => {
    try {
      const a = utvardera(el.dataset.formel);
      const b = el.dataset.formel2 ? utvardera(el.dataset.formel2) : undefined;
      const visa = el.dataset.visa || "tal";
      let txt;
      if (visa === "tid") txt = visaTid(a, b);
      else if (visa === "energi") txt = visaEnergi(a, b);
      else if (visa === "vatten") txt = visaVatten(a, b);
      else {
        const s = +(el.dataset.sig || 2);
        txt = b === undefined ? sig(a, s) : (sig(a, s) === sig(b, s) ? sig(a, s) : sig(a, s) + "–" + sig(b, s));
        if (el.dataset.enhet) txt += " " + el.dataset.enhet;
      }
      el.textContent = (el.dataset.cirka === "nej" ? "" : "cirka ") + txt;
    } catch (e) {
      el.textContent = "?";
      console.error("Fel i formel", el.dataset.formel, e);
    }
  });

  document.querySelectorAll("[data-kalla]").forEach((el) => {
    const k = KALLOR[el.dataset.kalla];
    if (!k) { el.textContent = "?"; return; }
    const a = document.createElement("a");
    a.href = k.url; a.target = "_blank"; a.rel = "noopener"; a.className = "kalla-lank";
    a.textContent = el.dataset.text || k.kort;
    a.title = k.harvard;
    el.replaceWith(a);
  });
}

/* ---------- listor ur datafilen ---------- */
function td(txt, cls) { const e = document.createElement("td"); if (cls) e.className = cls; e.textContent = txt; return e; }
function tr(...cells) { const r = document.createElement("tr"); cells.forEach((c) => r.appendChild(c)); return r; }
function th(txt) { const e = document.createElement("th"); e.scope = "col"; e.textContent = txt; return e; }
function tabell(rubriker, rader, klass) {
  const wrap = document.createElement("div"); wrap.className = "tabellvy";
  const t = document.createElement("table"); if (klass) t.className = klass;
  const h = document.createElement("thead"); h.appendChild(tr(...rubriker.map(th))); t.appendChild(h);
  const b = document.createElement("tbody"); rader.forEach((r) => b.appendChild(r)); t.appendChild(b);
  wrap.appendChild(t);
  return wrap;
}

function lista(el) {
  const typ = el.dataset.lista;
  if (typ === "kallor") {
    const ul = document.createElement("ul"); ul.className = "kallista";
    DATA.kallor.slice().sort((a, b) => a.harvard.localeCompare(b.harvard, "sv")).forEach((k) => {
      const li = document.createElement("li"); li.id = "ref-" + k.id;
      const t = document.createElement("span"); t.textContent = k.harvard + " ";
      const a = document.createElement("a"); a.href = k.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = k.url;
      const n = document.createElement("em"); n.textContent = " (" + k.not + ")";
      li.append(t, a, n);
      ul.appendChild(li);
    });
    el.appendChild(ul);
  } else if (typ === "forbattringar") {
    const ids = el.dataset.ids ? el.dataset.ids.split(",").map((s) => s.trim()) : null;
    const bara = el.dataset.filter === "syns";
    const ul = document.createElement("ul"); ul.className = "forblista";
    DATA.forbattringar.filter((f) => (ids ? ids.indexOf(f.id) >= 0 : true) && (bara ? f.syns : true)).forEach((f) => {
      const li = document.createElement("li"); li.id = f.id;
      const b = document.createElement("strong"); b.textContent = f.id + " ";
      li.append(b, document.createTextNode(f.rubrik + " (mål: version " + f.malversion + ")"));
      ul.appendChild(li);
    });
    el.appendChild(ul);
  } else if (typ === "forbattringar-alla") {
    el.appendChild(tabell(["Nr", "Område", "Vad som ska förbättras", "Målversion", "Syns på sidan"],
      DATA.forbattringar.map((f) => { const r = tr(td(f.id), td(f.omrade), td(f.rubrik), td(f.malversion), td(f.syns ? "ja" : "nej")); r.id = f.id; return r; })));
  } else if (typ === "poster") {
    el.appendChild(tabell(["Id", "Namn", "Värde", "Typ", "Belagd", "Källa", "Hämtad"],
      DATA.poster.map((p) => {
        const r = tr(td(p.id, "kod"), td(p.namn), td(p.typ === "beraknad" ? "beräknas: " + p.formel : visaPost(p)), td(p.typ), td(p.typ === "beraknad" ? "beräknad" : (BELAGD[p.belagd] || ["?"])[0]),
          td(p.kalla ? KALLOR[p.kalla].kort : "–"), td(p.hamtdatum || "–"));
        return r;
      }), "poster"));
  } else if (typ === "antaganden") {
    el.appendChild(tabell(["Antagandeversion", "Datum", "Poster", "Skäl"],
      DATA.antaganden.map((a) => tr(td(a.id), td(a.datum), td(a.poster.join(", ")), td(a.skal)))));
  } else if (typ === "verifieringar") {
    el.appendChild(tabell(["Källa", "Påstående", "Hur kontrollerat", "Resultat"],
      DATA.verifieringar.map((v) => tr(td(v.kalla), td(v.paastaende), td(v.kontroll), td(v.resultat)))));
  } else if (typ === "versionslogg") {
    el.appendChild(tabell(["Version", "Datum", "Vad som ändrats"],
      DATA.versionslogg.map((v) => tr(td(v.version), td(v.datum), td(v.text)))));
  }
}

/* ---------- förklaringar vid hovring, fokus och tryck ---------- */
function initTermer() {
  document.querySelectorAll(".term").forEach((el) => {
    const nyckel = el.dataset.term || el.textContent.trim();
    if (!TERMER[nyckel]) return;
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", el.textContent + ": " + TERMER[nyckel]);
  });
  const pop = document.createElement("div");
  pop.id = "termpop"; pop.setAttribute("role", "tooltip"); pop.hidden = true;
  document.body.appendChild(pop);
  let aktiv = null;
  const visa = (el) => {
    const nyckel = el.dataset.term || el.textContent.trim();
    if (!TERMER[nyckel]) return;
    pop.textContent = TERMER[nyckel];
    pop.hidden = false;
    const r = el.getBoundingClientRect();
    const w = Math.min(320, window.innerWidth - 24);
    pop.style.width = w + "px";
    let left = Math.max(12, Math.min(window.innerWidth - w - 12, r.left));
    pop.style.left = left + window.scrollX + "px";
    pop.style.top = r.bottom + window.scrollY + 6 + "px";
    aktiv = el;
  };
  const dolj = () => { pop.hidden = true; aktiv = null; };
  document.addEventListener("mouseover", (e) => { const t = e.target.closest && e.target.closest(".term"); if (t) visa(t); });
  document.addEventListener("mouseout", (e) => { const t = e.target.closest && e.target.closest(".term"); if (t && t === aktiv) dolj(); });
  document.addEventListener("focusin", (e) => { const t = e.target.closest && e.target.closest(".term"); if (t) visa(t); });
  document.addEventListener("focusout", (e) => { const t = e.target.closest && e.target.closest(".term"); if (t) dolj(); });
  document.addEventListener("click", (e) => {
    const t = e.target.closest && e.target.closest(".term");
    if (t) { aktiv === t && !pop.hidden ? dolj() : visa(t); } else dolj();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") dolj(); });
}

/* ---------- rubrikankare och tabellhänvisningar ---------- */
function ankare() {
  document.querySelectorAll("h2[id], h3[id]").forEach((h) => {
    const a = document.createElement("a");
    a.className = "hash"; a.href = "#" + h.id; a.textContent = "#";
    a.setAttribute("aria-label", "Länk till avsnittet " + h.textContent);
    h.appendChild(a);
  });
}

function lankaReferenser() {
  const main = document.querySelector("main");
  if (!main) return;
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, null);
  const noder = [];
  while (walker.nextNode()) noder.push(walker.currentNode);
  noder.forEach((n) => {
    if (n.parentElement.closest("a, caption, h1, h2, h3, button, code, .belagd")) return;
    const re = /\b(Tabell|Diagram) (\d+)\b/g;
    if (!re.test(n.nodeValue)) return;
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let sist = 0, m;
    const txt = n.nodeValue;
    while ((m = re.exec(txt))) {
      const id = m[1] + m[2];
      frag.appendChild(document.createTextNode(txt.slice(sist, m.index)));
      if (document.getElementById(id)) {
        const a = document.createElement("a"); a.href = "#" + id; a.textContent = m[0]; frag.appendChild(a);
      } else frag.appendChild(document.createTextNode(m[0]));
      sist = m.index + m[0].length;
    }
    frag.appendChild(document.createTextNode(txt.slice(sist)));
    n.replaceWith(frag);
  });
}

/* ---------- version, hörn och tekniknivå ---------- */
function versionsrad() {
  document.querySelectorAll(".versionsrad").forEach((el) => {
    el.textContent = "Version " + VERSION + " · " + VERSIONSDATUM + " · " + AVSANDARE;
  });
}

function hornpar() {
  const a = document.createElement("a");
  a.className = "corner corner-left"; a.href = GITHUB_MAPP; a.target = "_blank"; a.rel = "noopener"; a.textContent = "{ } GitHub";
  const b = document.createElement("button");
  b.type = "button"; b.className = "corner corner-right"; b.id = "techBtn"; b.setAttribute("aria-label", "Tekniköversikt"); b.textContent = "</> teknik";
  const ov = document.createElement("div");
  ov.className = "modal-overlay"; ov.id = "techModal";
  ov.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="techTitel">' +
    '<button type="button" class="modal-close" id="techClose" aria-label="Stäng">&times;</button>' +
    '<h2 id="techTitel">Hur den här sidan är byggd</h2>' +
    "<p>Två delar: tekniken i sidan, och metoden som användes för att ta fram den.</p>" +
    '<h3 class="tech-section-title">Tekniken</h3><div class="tech-grid">' +
    '<div class="tech-card"><h3>Vanlig HTML, CSS och JavaScript</h3><p>Inga ramverk och inget byggsteg. Samma skript, <code>sida.js</code>, ligger på alla sidor.</p></div>' +
    '<div class="tech-card"><h3>Alla siffror ur en fil</h3><p>Varje siffra läses ur <code>data/siffror.json</code>, med källa, hämtdatum och en markering av hur väl den är belagd. Beräknade tal, som Z, räknas av sidan.</p></div>' +
    '<div class="tech-card"><h3>Ingen data skickas</h3><p>Sidan pratar inte med någon server, använder inga kakor och spårar ingenting. Allt körs i din webbläsare.</p></div>' +
    '<div class="tech-card"><h3>Testläge</h3><p>Lägg <code>?test=1</code> efter adressen för att köra valideringen av datafilen och testfallen för beräkningarna.</p></div>' +
    '<div class="tech-card"><h3>Version och datum</h3><p>Versionsnumret och datumet står i <code>sida.js</code> och visas överst på varje sida. Äldre versioner läggs i mappen <code>old/</code>.</p></div>' +
    '<div class="tech-card"><h3>Förklaringar</h3><p>Förkortningar och facktermer förklaras vid hovring, fokus (tangentbord) och tryck (pekskärm), inte bara med en <code>title</code>-text.</p></div>' +
    '</div><h3 class="tech-section-title">Metoden</h3><div class="tech-grid">' +
    '<div class="tech-card"><h3>Skriftlig planering först</h3><p>Ett PRD (vad och varför) och en SPEC (exakt hur) skrevs före sidan, och granskades med fräscha ögon innan bygget.</p></div>' +
    '<div class="tech-card"><h3>Källor kontrollerade mot originalen</h3><p>Siffrorna är hämtade ur källorna och kontrollerade mot originalsidor eller dokument. Vad som är kontrollerat och vad som återstår står i verifieringsloggen och förbättringsregistret på sidan Källor och logg.</p></div>' +
    '<div class="tech-card"><h3>Mätt, inte bara uppskattat</h3><p>Antalet tokens i arbetet med sidan är uppmätt ur arbetspassets egen logg med skriptet <code>summera_tokens.py</code>. Energin är däremot ett spann, eftersom den inte mäts.</p></div>' +
    '<div class="tech-card"><h3>Öppen och versionerad</h3><p>Allt ligger öppet på GitHub. Det som ska förbättras står i ett register med nummer, och antagandena har en egen logg.</p></div>' +
    "</div></div>";
  document.body.append(a, b, ov);
  const open = () => { ov.classList.add("show"); document.getElementById("techClose").focus(); };
  const close = () => { ov.classList.remove("show"); b.focus(); };
  b.addEventListener("click", open);
  ov.querySelector("#techClose").addEventListener("click", close);
  ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && ov.classList.contains("show")) close(); });
}

/* ---------- validering och testfall (?test=1) ---------- */
function validera() {
  const fel = [];
  const ids = new Set();
  DATA.poster.forEach((p) => {
    if (ids.has(p.id)) fel.push("Dubbelt id: " + p.id);
    ids.add(p.id);
    ["id", "enhet", "typ", "belagd"].forEach((f) => { if (p[f] === undefined || p[f] === null) fel.push(p.id + ": saknar " + f); });
    if (["uppmatt", "uppskattad", "antagen", "beraknad"].indexOf(p.typ) < 0) fel.push(p.id + ": ogiltig typ " + p.typ);
    if (["original", "sekundar", "bolagets_egen", "antagande"].indexOf(p.belagd) < 0) fel.push(p.id + ": ogiltig belagd " + p.belagd);
    if (p.typ === "beraknad") { if (!p.formel) fel.push(p.id + ": beräknad post saknar formel"); }
    else if (p.varde === null || p.varde === undefined) fel.push(p.id + ": saknar varde");
    if (p.typ === "uppmatt" && !p.kalla) fel.push(p.id + ": mätt post saknar källa");
    if (p.kalla && !KALLOR[p.kalla]) fel.push(p.id + ": okänd källa " + p.kalla);
    if (p.kalla && !p.hamtdatum) fel.push(p.id + ": källa utan hämtdatum");
    (p.forbattring || []).forEach((f) => { if (!DATA.forbattringar.some((x) => x.id === f)) fel.push(p.id + ": okänd förbättringsrad " + f); });
  });
  DATA.poster.filter((p) => p.typ === "beraknad").forEach((p) => { try { varde(p.id); } catch (e) { fel.push(p.id + ": " + e.message); } });
  document.querySelectorAll("[data-post]").forEach((el) => { if (!POSTER[el.dataset.post]) fel.push("Sidan använder okänd post " + el.dataset.post); });
  document.querySelectorAll("[data-kalla]").forEach((el) => { if (!KALLOR[el.dataset.kalla]) fel.push("Sidan använder okänd källa " + el.dataset.kalla); });
  return fel;
}

function testfall() {
  const lika = (namn, fakt, forvantat) => ({ namn, ok: fakt === forvantat, fakt, forvantat });
  const mw = (id) => utvardera(id + "*3600/MW_EFFEKT");
  return [
    lika("0,24 Wh vid 1 000 W", "cirka " + visaTid(mw("GOOGLE_WH_FRAGA")), "cirka 0,9 sekunder"),
    lika("0,3 Wh vid 1 000 W", "cirka " + visaTid(mw("EPOCH_WH_FRAGA")), "cirka 1,1 sekunder"),
    lika("2,907 Wh vid 1 000 W", "cirka " + visaTid(mw("BILD_WH")), "cirka 10 sekunder"),
    lika("Z_NY", sig(varde("Z_NY"), 2), "950"),
    lika("Z_UT", sig(varde("Z_UT"), 2), "290"),
    lika("Z_ALLA", sig(varde("Z_ALLA"), 2).replace(/\s/g, " "), "34 000".replace(/\s/g, " ")),
    lika("X", String(varde("X")), "600")
  ];
}

function testpanel() {
  const fel = validera();
  const t = testfall();
  const p = document.createElement("section");
  p.id = "testpanel"; p.className = "testpanel";
  const ok = fel.length === 0 && t.every((x) => x.ok);
  p.innerHTML = "<h2>Testläge: " + (ok ? "allt grönt" : "fel hittade") + "</h2>";
  const ul = document.createElement("ul");
  fel.forEach((f) => { const li = document.createElement("li"); li.textContent = "Validering: " + f; ul.appendChild(li); });
  t.forEach((x) => { const li = document.createElement("li"); li.textContent = (x.ok ? "OK " : "FEL ") + x.namn + ": fick " + x.fakt + (x.ok ? "" : ", väntade " + x.forvantat); ul.appendChild(li); });
  p.appendChild(ul);
  document.body.prepend(p);
  console.log("Testläge", ok ? "OK" : "FEL", fel, t);
}

/* ---------- start ---------- */
async function start() {
  versionsrad();
  ankare();
  hornpar();
  initTermer();
  try {
    const svar = await fetch("data/siffror.json", { cache: "no-cache" });
    if (!svar.ok) throw new Error("HTTP " + svar.status);
    DATA = await svar.json();
  } catch (e) {
    const d = document.createElement("div");
    d.className = "fel"; d.setAttribute("role", "alert");
    d.textContent = "Siffrorna kunde inte läsas. Öppna sidan på GitHub Pages, eller starta en lokal server (python -m http.server i mappen). Detalj: " + e.message;
    const m = document.querySelector("main");
    (m || document.body).prepend(d);
    return;
  }
  DATA.poster.forEach((p) => { POSTER[p.id] = p; });
  DATA.kallor.forEach((k) => { KALLOR[k.id] = k; });
  fyllPlatshallare();
  document.querySelectorAll("[data-lista]").forEach(lista);
  lankaReferenser();
  if (location.search.indexOf("test=1") >= 0) testpanel();
  if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
}
document.addEventListener("DOMContentLoaded", start);

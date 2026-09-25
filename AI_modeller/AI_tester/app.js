/* AI-tester: renderar allt från data.js. Vanilla JS, inga bibliotek. */
(function () {
  "use strict";

  var D = window.AI_DATA;
  var TESTER = D.tester;
  var MODELLER = D.modeller;

  var state = {
    niva: "vuxen",
    aktivtTest: "osworld",
    jamfor: ["terminalbench", "osworld", "zerobench"],
    aktivLura: null,
    quizSvar: {}
  };

  /* ---------- hjälpare ---------- */

  function el(tag, attrs) {
    var n = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") n.textContent = attrs[k];
        else if (k === "class") n.className = attrs[k];
        else n.setAttribute(k, attrs[k]);
      });
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null) continue;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return n;
  }

  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); return n; }

  function byId(id) { return document.getElementById(id); }

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* ok */ } }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  function tal(v, dec) {
    return Number(v).toLocaleString("sv-SE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  function decFor(t) {
    var vals = Object.keys(t.poang).map(function (k) { return t.poang[k]; }).filter(function (v) { return v != null; });
    (t.extra || []).forEach(function (e) { vals.push(e.varde); });
    return vals.every(function (v) { return Number.isInteger(v); }) ? 0 : 1;
  }

  function visa(t, v) {
    if (v == null) return "—";
    if (t.skala === "elo") return tal(v, 0);
    return tal(v, decFor(t)) + " %";
  }

  function topp(t) {
    var best = null;
    MODELLER.forEach(function (m) {
      var v = t.poang[m.id];
      if (v != null && (best == null || v > best.v)) best = { v: v, m: m };
    });
    return best;
  }

  function testById(id) {
    for (var i = 0; i < TESTER.length; i++) if (TESTER[i].id === id) return TESTER[i];
    return null;
  }

  function refLank(key) {
    var r = D.refs[key];
    var a = el("a", { href: "#ref-" + key, text: r.kort });
    return a;
  }

  function refLista(keys) {
    var arr = Array.isArray(keys) ? keys : [keys];
    var wrap = el("span", { class: "src" });
    wrap.appendChild(document.createTextNode("("));
    arr.forEach(function (k, i) {
      if (i > 0) wrap.appendChild(document.createTextNode("; "));
      wrap.appendChild(refLank(k));
    });
    wrap.appendChild(document.createTextNode(")"));
    return wrap;
  }

  function niva(obj) { return state.niva === "vuxen" ? obj.vuxen : obj.tonaring; }
  function nivaEtikett() { return state.niva === "vuxen" ? "För en vuxen" : "Om du är 15"; }

  /* ---------- sammanfattning: mätare ---------- */

  function gaugeInfo(t) {
    var b = topp(t);
    if (t.skala === "elo") return { typ: "elo" };
    var v = b.v;
    var klass, text;
    if (v >= 100) { klass = "done"; text = "Taket nått"; }
    else if (v >= 75) { klass = "near"; text = "Nära taket"; }
    else if (v >= 40) { klass = "mid"; text = "Halvvägs"; }
    else { klass = "long"; text = "Långt kvar"; }
    return { typ: "procent", v: v, m: b.m, klass: klass, text: text };
  }

  function gauge(t) {
    var info = gaugeInfo(t);
    var box = el("div", { class: "gauge" });

    if (info.typ === "elo") {
      var vals = MODELLER.map(function (m) { return t.poang[m.id]; }).filter(function (v) { return v != null; });
      var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
      var min = 1400, max = 1900;
      var track = el("div", { class: "gtrack" });
      var lm = el("div", { class: "gmark limit", "data-l": tal(lo, 0) });
      lm.style.left = ((lo - min) / (max - min) * 100) + "%";
      var hm = el("div", { class: "gmark", "data-l": tal(hi, 0) });
      hm.style.left = ((hi - min) / (max - min) * 100) + "%";
      track.appendChild(lm); track.appendChild(hm);
      box.appendChild(track);
      box.appendChild(el("div", { class: "gscale" }, el("span", { text: tal(min, 0) }), el("span", { text: "Elo, skalan börjar på " + tal(min, 0) + " för läsbarhet" }), el("span", { text: tal(max, 0) })));
      box.appendChild(el("p", { class: "gtext" },
        el("span", { class: "pill none", text: "Inget tak" }),
        " Spridning mellan högst och lägst: ",
        el("b", { text: tal(hi - lo, 0) + " poäng" }), "."));
      return box;
    }

    var track2 = el("div", { class: "gtrack" });
    var mk = el("div", { class: "gmark", "data-l": tal(info.v, decFor(t)) });
    mk.style.left = info.v + "%";
    track2.appendChild(mk);
    (t.markor || []).forEach(function (m) {
      var g = el("div", { class: "gmark limit", "data-l": tal(m.varde, Number.isInteger(m.varde) ? 0 : 1) });
      g.style.left = m.varde + "%";
      g.setAttribute("title", m.text);
      track2.appendChild(g);
    });
    box.appendChild(track2);
    box.appendChild(el("div", { class: "gscale" }, el("span", { text: "0 %" }), el("span", { text: "100 %" })));
    var kvar = 100 - info.v;
    var p = el("p", { class: "gtext" },
      el("span", { class: "pill " + info.klass, text: info.text }),
      " Toppmodellen (", info.m.namn, ") ligger på ",
      el("b", { text: tal(info.v, decFor(t)) + " %" }),
      kvar > 0 ? ", alltså " + tal(kvar, decFor(t)) + " poäng kvar till full pott." : ".");
    box.appendChild(p);
    (t.markor || []).forEach(function (m) {
      box.appendChild(el("p", { class: "unit", text: "Svart markör: " + m.text + " (" + tal(m.varde, Number.isInteger(m.varde) ? 0 : 1) + " %)." }));
    });
    return box;
  }

  /* ---------- rubrik-ankare ---------- */

  function laggAnkare(rubrik, id) {
    var a = el("a", { class: "hash", href: "#" + id, "aria-label": "Länk till avsnittet", text: "#" });
    a.addEventListener("click", function () {
      try { navigator.clipboard.writeText(location.origin + location.pathname + "#" + id); } catch (e) { /* ok */ }
    });
    rubrik.appendChild(a);
  }

  /* ---------- tabellen (heatmap) ---------- */

  function renderHeat() {
    var t = clear(byId("heat"));
    var head = el("tr", null, el("th", { text: "Test" }));
    MODELLER.forEach(function (m) { head.appendChild(el("th", { class: m.id, text: m.namn })); });
    t.appendChild(el("thead", null, head));
    var body = el("tbody");
    TESTER.filter(function (x) { return x.grupp === "tabell"; }).forEach(function (x) {
      var tr = el("tr");
      var btn = el("button", { type: "button", text: x.namn });
      btn.addEventListener("click", function () { valjTest(x.id, true); });
      tr.appendChild(el("th", { scope: "row" }, btn, el("span", { class: "cap", text: x.etikett })));
      var best = topp(x);
      MODELLER.forEach(function (m) {
        var v = x.poang[m.id];
        var cls = m.id + (v == null ? " na" : "") + (best && best.m.id === m.id ? " best" : "");
        tr.appendChild(el("td", { class: cls, text: visa(x, v) }));
      });
      body.appendChild(tr);
    });
    t.appendChild(body);
  }

  /* ---------- utforskaren ---------- */

  function renderPicker() {
    var p = clear(byId("picker"));
    var grupper = [
      { id: "tabell", namn: "Tabellens nio" },
      { id: "special", namn: "Specialtester" }
    ];
    grupper.forEach(function (g) {
      p.appendChild(el("div", { class: "grp", text: g.namn }));
      TESTER.filter(function (x) { return x.grupp === g.id; }).forEach(function (x) {
        var b = el("button", { type: "button", class: "chip", role: "tab", "data-id": x.id, "aria-selected": x.id === state.aktivtTest ? "true" : "false", text: x.namn });
        b.addEventListener("click", function () { valjTest(x.id, false); });
        p.appendChild(b);
      });
    });
  }

  function staplar(t) {
    var box = el("div", { class: "bars" });
    var b = topp(t);
    MODELLER.forEach(function (m) {
      var v = t.poang[m.id];
      var rad = el("div", { class: "barrow" + (v == null ? " na" : "") + (b && b.m.id === m.id ? " top" : "") });
      rad.appendChild(el("span", { class: "name", text: m.namn }));
      var track = el("div", { class: "track" });
      var fill = el("div", { class: "fill" });
      var w = 0;
      if (v != null) w = t.skala === "elo" ? Math.max(0, (v - 1400) / (1900 - 1400) * 100) : v;
      fill.style.width = w + "%";
      track.appendChild(fill);
      rad.appendChild(track);
      rad.appendChild(el("span", { class: "val", text: visa(t, v) }));
      box.appendChild(rad);
    });
    (t.extra || []).forEach(function (e) {
      var rad = el("div", { class: "barrow" });
      rad.appendChild(el("span", { class: "name", text: e.namn }));
      var track = el("div", { class: "track" });
      var fill = el("div", { class: "fill" });
      fill.style.width = e.varde + "%";
      track.appendChild(fill);
      rad.appendChild(track);
      rad.appendChild(el("span", { class: "val", text: visa(t, e.varde) }));
      box.appendChild(rad);
    });
    return box;
  }

  function renderPanel() {
    var t = testById(state.aktivtTest);
    var p = clear(byId("panel"));
    var h = el("h3", { id: "test-" + t.id, text: t.namn, class: "h-anchor" });
    laggAnkare(h, "test-" + t.id);
    p.appendChild(h);
    p.appendChild(el("p", { class: "owner", text: t.agare }));
    p.appendChild(el("p", { text: t.kort }));

    p.appendChild(el("h4", { text: "Vad mäter det?" }));
    p.appendChild(el("p", { text: t.mat }));

    p.appendChild(el("h4", { text: "Så går det till" }));
    var ol = el("ol", { class: "steps" });
    t.sa.forEach(function (s) { ol.appendChild(el("li", { text: s })); });
    p.appendChild(ol);

    p.appendChild(el("h4", { text: "Förklaring" }));
    p.appendChild(el("div", { class: "explain" }, el("span", { class: "who", text: nivaEtikett() }), el("p", { text: niva(t) })));

    p.appendChild(el("h4", { text: "Poäng per modell" }));
    p.appendChild(staplar(t));
    p.appendChild(el("p", { class: "unit", text: "Mått: " + t.etikett + ". Streck betyder att underlaget saknar siffra." + (t.skala === "elo" ? " Staplarna börjar på 1 400 för läsbarhet." : "") }));

    p.appendChild(el("h4", { text: "Svårighetsmätare" }));
    p.appendChild(gauge(t));

    if (t.forbehall) {
      p.appendChild(el("h4", { text: "Läs det här också" }));
      p.appendChild(el("div", { class: "callout" }, el("b", { text: "Förbehåll. " }), t.forbehall));
    }

    var refs = el("p", { class: "refs-inline" }, "Källor: ");
    t.kallor.forEach(function (k, i) {
      if (i > 0) refs.appendChild(document.createTextNode("; "));
      refs.appendChild(refLank(k));
    });
    p.appendChild(refs);
  }

  function valjTest(id, scrolla) {
    state.aktivtTest = id;
    var chips = byId("picker").querySelectorAll(".chip");
    Array.prototype.forEach.call(chips, function (c) {
      c.setAttribute("aria-selected", c.getAttribute("data-id") === id ? "true" : "false");
    });
    renderPanel();
    try { history.replaceState(null, "", "#test-" + id); } catch (e) { /* ok */ }
    if (scrolla) byId("Utforskaren").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- jämförelsen ---------- */

  function renderPicks() {
    var p = clear(byId("picks"));
    TESTER.forEach(function (t) {
      var on = state.jamfor.indexOf(t.id) !== -1;
      var b = el("button", { type: "button", class: "chip", "aria-pressed": on ? "true" : "false", text: t.namn });
      b.addEventListener("click", function () {
        var i = state.jamfor.indexOf(t.id);
        if (i !== -1) { if (state.jamfor.length > 1) state.jamfor.splice(i, 1); }
        else { state.jamfor.push(t.id); if (state.jamfor.length > 3) state.jamfor.shift(); }
        renderPicks(); renderCompare();
      });
      p.appendChild(b);
    });
  }

  function renderCompare() {
    var c = clear(byId("cmp"));
    state.jamfor.forEach(function (id) {
      var t = testById(id);
      var card = el("div", { class: "card" });
      card.appendChild(el("h3", { text: t.namn }));
      card.appendChild(el("h4", { text: "Vad det mäter" }));
      card.appendChild(el("p", { text: t.mat }));
      card.appendChild(el("h4", { text: "Så går det till" }));
      var ul = el("ul");
      t.sa.forEach(function (s) { ul.appendChild(el("li", { text: s })); });
      card.appendChild(ul);
      card.appendChild(el("h4", { text: "Svårighetsmätare" }));
      card.appendChild(gauge(t));
      c.appendChild(card);
    });
  }

  /* ---------- kan AI lura testet? ---------- */

  function renderLuraGrid() {
    var g = clear(byId("luraGrid"));
    D.lura.forEach(function (x) {
      var open = state.aktivLura === x.id;
      var card = el("div", { class: "lura-card" });
      var b = el("button", { type: "button", "aria-expanded": open ? "true" : "false", "data-id": x.id },
        el("span", { class: "big", text: x.rubrik }),
        el("span", { class: "sm", text: x.kort }));
      b.addEventListener("click", function () { valjLura(state.aktivLura === x.id ? null : x.id); });
      card.appendChild(b);
      g.appendChild(card);
    });
  }

  function slaTimmar(h) {
    if (h < 24) return tal(h, 0) + " h";
    if (h < 24 * 14) return tal(h / 24, 0) + " dygn";
    if (h < 24 * 28) return tal(h / (24 * 7), 0) + " veckor";
    return tal(h / (24 * 30), 1) + " månader";
  }

  function kalkylator() {
    var langder = [1, 8, 24, 72, 168, 336, 720];
    var box = el("div", { class: "calc" });
    box.appendChild(el("h4", { text: "Räkna själv: hinner testet klart?" }));

    function rad(etikett, id, min, max, val, fmt) {
      var inp = el("input", { type: "range", id: id, min: String(min), max: String(max), value: String(val), step: "1" });
      var out = el("output", { for: id });
      var r = el("div", { class: "row" }, el("label", { for: id, text: etikett }), inp, out);
      return { row: r, inp: inp, out: out, fmt: fmt };
    }

    var a = rad("Uppgiftens längd", "cLangd", 0, langder.length - 1, 6, function (v) { return slaTimmar(langder[v]); });
    var b = rad("Antal försök per modell", "cForsok", 1, 10, 5, function (v) { return v + " st"; });
    var c = rad("Parallella körningar", "cPar", 1, 20, 1, function (v) { return v + " st"; });
    var d = rad("Veckor till nästa modell", "cVeckor", 1, 12, 8, function (v) { return v + " v"; });
    [a, b, c, d].forEach(function (x) { box.appendChild(x.row); });

    var res = el("div", { class: "result", "aria-live": "polite" });
    var not = el("p", { class: "note", text: "Tankeexempel, inte data ur källorna. Räknar bara tiden för själva körningarna. Analys, rättning och omkörningar när något går fel kommer utöver. Anthropics standardkonfiguration är medelvärde över fem försök. Mellan Astras och Opus 5.5:s systemkort låg 19 dagar, ungefär 2,7 veckor." });
    box.appendChild(res); box.appendChild(not);

    function uppdatera() {
      var h = langder[Number(a.inp.value)] * Number(b.inp.value) / Number(c.inp.value);
      var gap = Number(d.inp.value) * 7 * 24;
      [a, b, c, d].forEach(function (x) { x.out.textContent = x.fmt(Number(x.inp.value)); });
      var ok = h <= gap;
      res.className = "result " + (ok ? "ok" : "no");
      res.textContent = (ok ? "Hinner. " : "Hinner inte. ") + "Testet tar cirka " + slaTimmar(h) + " och nästa modell kommer om " + slaTimmar(gap) + ".";
    }
    [a, b, c, d].forEach(function (x) { x.inp.addEventListener("input", uppdatera); });
    uppdatera();
    return box;
  }

  function renderLuraDetail() {
    var d = clear(byId("luraDetail"));
    if (!state.aktivLura) return;
    var x = null;
    D.lura.forEach(function (y) { if (y.id === state.aktivLura) x = y; });
    var box = el("div", { class: "lura-detail", id: "lura-" + x.id });
    var h = el("h3", { class: "h-anchor", text: x.rubrik });
    laggAnkare(h, "lura-" + x.id);
    box.appendChild(h);
    box.appendChild(el("div", { class: "explain" }, el("span", { class: "who", text: nivaEtikett() }), el("p", { text: niva(x) })));
    box.appendChild(el("h4", { text: "Vad källorna säger" }));
    var ul = el("ul", { class: "facts" });
    x.fakta.forEach(function (f) {
      ul.appendChild(el("li", null, f.t + " ", refLista(f.k)));
    });
    box.appendChild(ul);
    box.appendChild(el("h4", { text: "Hur jag tolkar det" }));
    box.appendChild(el("p", { text: x.tolkning }));
    box.appendChild(el("div", { class: "vetinte" }, el("b", { text: "Vad vi inte vet. " }), x.vetInte));
    if (x.id === "tidslyx") box.appendChild(kalkylator());
    d.appendChild(box);
  }

  function valjLura(id) {
    state.aktivLura = id;
    renderLuraGrid();
    renderLuraDetail();
    try { history.replaceState(null, "", id ? "#lura-" + id : "#KanAILuraTestet"); } catch (e) { /* ok */ }
  }

  /* ---------- bedöm själv ---------- */

  var SVAR = { arligt: "Ärligt", genvag: "Genväg", gratt: "Grått" };

  function renderQuiz() {
    var q = clear(byId("quiz"));
    D.bedom.forEach(function (b) {
      var kort = el("div", { class: "q", id: "bedom-" + b.id });
      kort.appendChild(el("p", { text: b.scen }));
      var opts = el("div", { class: "opts" });
      var given = state.quizSvar[b.id];
      Object.keys(SVAR).forEach(function (k) {
        var btn = el("button", { type: "button", class: "btn", text: SVAR[k] });
        if (given) btn.disabled = true;
        btn.addEventListener("click", function () {
          if (state.quizSvar[b.id]) return;
          state.quizSvar[b.id] = k;
          renderQuiz();
        });
        opts.appendChild(btn);
      });
      kort.appendChild(opts);
      if (given) {
        var ratt = given === b.svar;
        var r = el("div", { class: "reveal " + (ratt ? "right" : "wrong") },
          el("b", { text: ratt ? "Rätt." : "Inte riktigt, du valde " + SVAR[given].toLowerCase() + "." }),
          b.forklaring + " ", refLista(b.k));
        kort.appendChild(r);
      }
      q.appendChild(kort);
    });
    var svarade = Object.keys(state.quizSvar).length;
    var ratta = D.bedom.filter(function (b) { return state.quizSvar[b.id] === b.svar; }).length;
    byId("quizScore").textContent = svarade === 0 ? "" : ratta + " av " + svarade + " rätt hittills. Exemplen är konstruerade efter systemkorten, och gränsen mellan genväg och grått är i verkligheten ofta suddig.";
  }

  /* ---------- källor ---------- */

  function renderRefs() {
    var ul = clear(byId("reflist"));
    var nycklar = (D.refOrdning || Object.keys(D.refs)).slice();
    nycklar.forEach(function (k) {
      var r = D.refs[k];
      var li = el("li", { id: "ref-" + k });
      li.appendChild(document.createTextNode(r.ref + " Tillgänglig på: "));
      li.appendChild(el("a", { href: r.url, target: "_blank", rel: "noopener", text: r.url }));
      li.appendChild(document.createTextNode(" (hämtad " + D.hamtat + "). "));
      var not = (D.refNoter || {})[k];
      if (not) li.appendChild(el("em", { class: "note", text: "(" + not + ")" }));
      ul.appendChild(li);
    });
  }

  /* ---------- tema, nivå, modal, hash ---------- */

  function effektivtTema() {
    var a = document.documentElement.getAttribute("data-theme");
    if (a === "light" || a === "dark") return a;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function uppdateraTemaKnapp() {
    var mork = effektivtTema() === "dark";
    var b = byId("themeBtn");
    b.textContent = mork ? "Ljust" : "Mörkt";
    b.setAttribute("aria-pressed", mork ? "true" : "false");
  }

  function sattNiva(n) {
    state.niva = n;
    store("aitester-niva", n);
    byId("lvlVuxen").setAttribute("aria-pressed", n === "vuxen" ? "true" : "false");
    byId("lvlTonaring").setAttribute("aria-pressed", n === "tonaring" ? "true" : "false");
    renderPanel();
    renderLuraDetail();
  }

  function hashRouting() {
    var h = location.hash || "";
    if (h.indexOf("#test-") === 0) {
      var id = h.slice(6);
      if (testById(id)) { valjTest(id, false); byId("Utforskaren").scrollIntoView({ block: "start" }); }
    } else if (h.indexOf("#lura-") === 0) {
      var lid = h.slice(6);
      var finns = D.lura.some(function (x) { return x.id === lid; });
      if (finns) { valjLura(lid); byId("KanAILuraTestet").scrollIntoView({ block: "start" }); }
    }
  }

  function init() {
    byId("hamtat").textContent = D.hamtat;
    byId("hamtat2").textContent = D.hamtat;

    var sparad = load("aitester-niva");
    if (sparad === "vuxen" || sparad === "tonaring") state.niva = sparad;
    byId("lvlVuxen").setAttribute("aria-pressed", state.niva === "vuxen" ? "true" : "false");
    byId("lvlTonaring").setAttribute("aria-pressed", state.niva === "tonaring" ? "true" : "false");
    byId("lvlVuxen").addEventListener("click", function () { sattNiva("vuxen"); });
    byId("lvlTonaring").addEventListener("click", function () { sattNiva("tonaring"); });

    byId("themeBtn").addEventListener("click", function () {
      var nytt = effektivtTema() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nytt);
      store("aitester-tema", nytt);
      uppdateraTemaKnapp();
    });
    uppdateraTemaKnapp();

    Array.prototype.forEach.call(document.querySelectorAll(".h-anchor[data-anchor]"), function (h) {
      laggAnkare(h, h.getAttribute("data-anchor"));
    });

    renderHeat();
    renderPicker();
    renderPanel();
    renderPicks();
    renderCompare();
    renderLuraGrid();
    renderQuiz();
    renderRefs();

    var techBtn = byId("techBtn");
    var techModal = byId("techModal");
    var techClose = byId("techClose");
    var open = function () { techModal.classList.add("show"); techClose.focus(); };
    var close = function () { techModal.classList.remove("show"); techBtn.focus(); };
    techBtn.addEventListener("click", open);
    techClose.addEventListener("click", close);
    techModal.addEventListener("click", function (e) { if (e.target === techModal) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && techModal.classList.contains("show")) close();
    });

    window.addEventListener("hashchange", hashRouting);
    hashRouting();
  }

  init();
})();

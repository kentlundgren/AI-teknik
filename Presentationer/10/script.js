/* Motor för presentation 10. Innehållet finns i data.js. Allt från data.js sätts in som text. */
(function () {
  "use strict";
  var D = window.DATA;
  if (!D) { return; }

  /* ---------- hjälpfunktioner ---------- */
  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") { e.textContent = attrs[k]; }
        else if (attrs[k] === true) { e.setAttribute(k, ""); }
        else if (attrs[k] !== false && attrs[k] != null) { e.setAttribute(k, attrs[k]); }
      });
    }
    (kids || []).forEach(function (c) {
      if (c == null) { return; }
      e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return e;
  }
  function kallaPost(id) {
    for (var i = 0; i < D.kallor.length; i++) { if (D.kallor[i].id === id) { return D.kallor[i]; } }
    return null;
  }
  function kortNamn(post) {
    return (post.fore + post.titel).replace(/\s+/g, " ").trim();
  }
  var statusText = { belagt: "Belagt", delvis: "Delvis belagt", inte_belagt: "Inte belagt" };
  var godkantText = { ja: "Godkänt", nej: "Ej godkänt", ej_bedomt: "Ej bedömt" };

  /* Gör "Tabell N", "Bild N" och "Video N" i text som skapas av skriptet till länkar när målet finns. */
  function lankaReferenser(text) {
    var frag = document.createDocumentFragment();
    var re = /(Tabell|Bild|Video) (\d+)/g, last = 0, m;
    while ((m = re.exec(text)) !== null) {
      var id = m[1] + m[2];
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      if (document.getElementById(id)) { frag.appendChild(el("a", { href: "#" + id, text: m[0] })); }
      else { frag.appendChild(document.createTextNode(m[0])); }
      last = m.index + m[0].length;
    }
    frag.appendChild(document.createTextNode(text.slice(last)));
    return frag;
  }

  /* ---------- Tabell 1 ---------- */
  function byggTabell1() {
    var slot = document.getElementById("tabell1-slot");
    if (!slot) { return; }
    var tbody = el("tbody");
    D.belagg.forEach(function (b) {
      var rowId = "belagg-rad-" + b.nr;
      var knapp = el("button", { type: "button", "class": "visa", "aria-expanded": "false", "aria-controls": rowId, text: "Visa" });
      var rad = el("tr", null, [
        el("td", { "class": "nr", "data-label": "Nr", text: String(b.nr) }),
        el("td", { "data-label": "Belägg", text: b.belagg }),
        el("td", { "data-label": "Hur väl belagt" }, [el("span", { "class": "chip chip-" + b.status, text: statusText[b.status] })]),
        el("td", { "data-label": "Källa" }, [knapp])
      ]);
      var kallLank = el("div");
      if (b.kallor.length) {
        var ul = el("ul");
        b.kallor.forEach(function (k) {
          var p = kallaPost(k);
          if (p) { ul.appendChild(el("li", null, [el("a", { href: "#" + k, text: kortNamn(p) })])); }
        });
        kallLank.appendChild(ul);
      } else {
        kallLank.appendChild(el("p", { "class": "small", text: "Det finns ingen källa att länka till." }));
      }
      var expand = el("tr", { id: rowId, "class": "expand", hidden: true }, [
        el("td", { colspan: "4" }, [el("div", { text: b.forklaring }), kallLank])
      ]);
      knapp.addEventListener("click", function () {
        var open = knapp.getAttribute("aria-expanded") === "true";
        knapp.setAttribute("aria-expanded", open ? "false" : "true");
        knapp.textContent = open ? "Visa" : "Dölj";
        expand.hidden = open;
      });
      tbody.appendChild(rad);
      tbody.appendChild(expand);
    });
    var table = el("table", null, [
      el("caption", { id: "Tabell1", text: "Tabell 1. Mina fem belägg och hur väl de är belagda" }),
      el("thead", null, [el("tr", null, [
        el("th", { scope: "col", text: "Nr" }), el("th", { scope: "col", text: "Belägg" }),
        el("th", { scope: "col", text: "Hur väl belagt" }), el("th", { scope: "col", text: "Källa" })
      ])]),
      tbody
    ]);
    slot.appendChild(el("div", { "class": "tabell-wrap" }, [table]));
  }

  /* ---------- Fyra spår ---------- */
  function byggSpar() {
    var slot = document.getElementById("spar-slot");
    if (!slot) { return; }
    var grid = el("div", { "class": "spar-grid" });
    D.spar.forEach(function (s) {
      var p = kallaPost(s.kalla);
      grid.appendChild(el("div", { "class": "spar-card", id: s.id }, [
        el("h4", { text: s.namn }),
        el("p", null, [el("span", { "class": "tag tag-belagt", text: "Belagt" }), s.belagt]),
        el("p", null, [el("span", { "class": "tag tag-hypotes", text: "Hypotes" }), s.hypotes]),
        p ? el("p", { "class": "small" }, ["Källa: ", el("a", { href: "#" + s.kalla, text: kortNamn(p) })]) : null
      ]));
    });
    slot.appendChild(grid);
  }

  /* ---------- Tabell 2 ---------- */
  function byggTabell2() {
    var slot = document.getElementById("tabell2-slot");
    if (!slot) { return; }
    var tbody = el("tbody");
    D.tester.forEach(function (t, i) {
      var rowId = "test-rad-" + (i + 1);
      var knapp = el("button", { type: "button", "class": "visa", "aria-expanded": "false", "aria-controls": rowId, text: "Visa" });
      var modellText = t.modell + " · " + t.verktyg + (t.lage && t.lage !== "–" ? " · läge: " + t.lage : "");
      var rad = el("tr", null, [
        el("td", { "data-label": "Uppgift", text: t.test }),
        el("td", { "data-label": "Modell och verktyg", text: modellText }),
        el("td", { "data-label": "Resultat", text: t.resultat }),
        el("td", { "data-label": "Mot facit" }, [el("span", { "class": "chip chip-" + t.godkant, text: godkantText[t.godkant] })]),
        el("td", { "data-label": "Förbehåll" }, [knapp])
      ]);
      var ul = el("ul");
      t.forbehall.forEach(function (f) { ul.appendChild(el("li", { text: f })); });
      var expand = el("tr", { id: rowId, "class": "expand", hidden: true }, [
        el("td", { colspan: "5" }, [
          el("div", null, [el("strong", { text: "Avvikelse och anmärkning: " }), t.avvikelse]),
          el("div", { "class": "small" }, [el("strong", { text: "Förbehåll:" })]),
          ul,
          el("p", { "class": "small" }, [el("a", { href: t.lank, target: "_blank", rel: "noopener noreferrer", text: "Resultatet i sin helhet (GitHub)" })])
        ])
      ]);
      knapp.addEventListener("click", function () {
        var open = knapp.getAttribute("aria-expanded") === "true";
        knapp.setAttribute("aria-expanded", open ? "false" : "true");
        knapp.textContent = open ? "Visa" : "Dölj";
        expand.hidden = open;
      });
      tbody.appendChild(rad);
      tbody.appendChild(expand);
    });
    var table = el("table", null, [
      el("caption", { id: "Tabell2", text: "Tabell 2. Resultat av de fyra körningarna" }),
      el("thead", null, [el("tr", null, [
        el("th", { scope: "col", text: "Uppgift" }), el("th", { scope: "col", text: "Modell och verktyg" }),
        el("th", { scope: "col", text: "Resultat" }), el("th", { scope: "col", text: "Mot facit" }),
        el("th", { scope: "col", text: "Förbehåll" })
      ])]),
      tbody
    ]);
    slot.appendChild(el("div", { "class": "tabell-wrap" }, [table]));
  }

  /* ---------- Media ---------- */
  function byggMedia() {
    var slots = document.querySelectorAll(".media-slot");
    Array.prototype.forEach.call(slots, function (slot) {
      var id = slot.getAttribute("data-media"), m = null;
      for (var i = 0; i < D.media.length; i++) { if (D.media[i].id === id) { m = D.media[i]; } }
      if (!m) { return; }
      var rubrik = (m.typ === "bild" ? "Bild " : "Video ") + m.nr + ". " + m.namn;
      var fig = el("figure", { id: (m.typ === "bild" ? "Bild" : "Video") + m.nr });
      fig.appendChild(el("figcaption", { "class": "top", text: rubrik }));
      if (m.typ === "bild") {
        var img = el("img", { src: m.fil, alt: m.beskrivning, width: String(m.bredd), height: String(m.hojd), loading: "lazy", decoding: "async" });
        if (m.hojd > 1500) {
          fig.appendChild(el("div", { "class": "scrollbox", tabindex: "0", role: "region", "aria-label": "Rullbar bild: " + m.namn }, [img]));
        } else {
          fig.appendChild(img);
        }
      } else {
        var video = el("video", { controls: true, muted: true, playsinline: true, preload: "none", poster: m.poster, width: String(m.bredd), height: String(m.hojd) }, [
          el("source", { src: m.fil, type: "video/mp4" }),
          el("a", { href: m.fil, text: "Din webbläsare kan inte spela videon. Öppna filen här." })
        ]);
        fig.appendChild(video);
        fig.appendChild(el("img", { "class": "print-poster", src: m.poster, alt: "" }));
        fig.appendChild(el("p", { "class": "fig-note", text: "Videon (" + m.storlek + ") laddas först när du trycker play. Ingen automatisk uppspelning och inget ljud." }));
      }
      var desc = el("p", { "class": "fig-desc" }, [lankaReferenser(m.beskrivning)]);
      if (m.textlank) {
        desc.appendChild(document.createTextNode(" "));
        desc.appendChild(el("a", { href: m.textlank, target: "_blank", rel: "noopener noreferrer", text: "Svaret som text (GitHub)" }));
      }
      fig.appendChild(desc);
      slot.appendChild(fig);
    });
  }

  /* ---------- Källor ---------- */
  function byggKallor() {
    var slot = document.getElementById("kallor-slot");
    if (!slot) { return; }
    D.kallor.forEach(function (k) {
      slot.appendChild(el("p", { id: k.id }, [
        k.fore, el("em", { text: k.titel }), k.efter + " ",
        el("a", { "class": "url", href: k.url, target: "_blank", rel: "noopener noreferrer", text: k.url }),
        " ", el("em", { text: "(" + k.relevans + ")" }),
        " Hämtad " + k.hamtad + "."
      ]));
    });
  }

  /* ---------- Diagram 1 (SVG ritas av data.js) ---------- */
  var SVGNS = "http://www.w3.org/2000/svg";
  function svg(tag, attrs, kids) {
    var e = document.createElementNS(SVGNS, tag);
    if (attrs) { Object.keys(attrs).forEach(function (k) { if (attrs[k] != null) { e.setAttribute(k, attrs[k]); } }); }
    (kids || []).forEach(function (c) { if (c) { e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); } });
    return e;
  }
  function procent(v) { return v.toLocaleString("sv-SE", { maximumFractionDigits: 1 }) + " %"; }
  /* En markör (form) runt (x, y). Returnerar ett SVG-element. */
  function markor(form, x, y, farg, r) {
    var st = { fill: farg, stroke: "#fff", "stroke-width": 1.5 };
    if (form === "cirkel") { return svg("circle", { cx: x, cy: y, r: r, fill: farg, stroke: "#fff", "stroke-width": 1.5 }); }
    if (form === "kvadrat") { return svg("rect", { x: x - r, y: y - r, width: 2 * r, height: 2 * r, fill: farg, stroke: "#fff", "stroke-width": 1.5 }); }
    if (form === "triangel") { return svg("polygon", { points: [x, y - r - 1, x + r + 1, y + r, x - r - 1, y + r].join(","), fill: farg, stroke: "#fff", "stroke-width": 1.5 }); }
    if (form === "romb") { return svg("polygon", { points: [x, y - r - 2, x + r + 2, y, x, y + r + 2, x - r - 2, y].join(","), fill: farg, stroke: "#fff", "stroke-width": 1.5 }); }
    if (form === "plus") { return svg("path", { d: "M" + (x - r - 1) + "," + y + "H" + (x + r + 1) + "M" + x + "," + (y - r - 1) + "V" + (y + r + 1), stroke: farg, "stroke-width": 3.5, fill: "none", "stroke-linecap": "round" }); }
    return svg("path", { d: "M" + (x - r) + "," + (y - r) + "L" + (x + r) + "," + (y + r) + "M" + (x + r) + "," + (y - r) + "L" + (x - r) + "," + (y + r), stroke: farg, "stroke-width": 3.5, fill: "none", "stroke-linecap": "round" });
  }
  function byggDiagram() {
    var slot = document.getElementById("diagram1-slot");
    var G = D.diagram;
    if (!slot || !G) { return; }

    var fig = el("figure", { id: G.id, "class": "diagram-fig" });
    fig.appendChild(el("figcaption", { "class": "top", text: "Diagram " + G.nr + ". " + G.namn }));

    /* teckenförklaring */
    var legend = el("ul", { "class": "dg-legend" });
    G.serier.forEach(function (s) {
      var ic = svg("svg", { width: 18, height: 18, viewBox: "0 0 18 18", "aria-hidden": "true" }, [markor(s.form, 9, 9, s.farg, 4.5)]);
      var li = el("li", null, [s.namn]);
      li.insertBefore(ic, li.firstChild);
      legend.appendChild(li);
    });
    fig.appendChild(legend);

    var wrap = el("div", { "class": "dg-wrap" });
    fig.appendChild(wrap);

    /* alla punkter i ordning för tabell och tillgänglig beskrivning */
    var rader = [];
    G.serier.forEach(function (s) { s.punkter.forEach(function (p) { rader.push({ s: s, p: p }); }); });
    var sammanfattning = G.serier.map(function (s) {
      return s.namn + ": " + s.punkter.map(function (p) { return G.ar[p.x] + " " + procent(p.v); }).join(", ");
    }).join(". ");

    function rita() {
      wrap.textContent = "";
      var W = Math.max(300, Math.floor(wrap.clientWidth || fig.clientWidth || 640));
      var H = Math.round(Math.max(320, Math.min(W * 0.62, 460)));
      var ml = 40, mr = 70, mt = 14, mb = 44;
      var pw = W - ml - mr, ph = H - mt - mb;
      var antal = G.ar.length;
      var steg = pw / (antal - 1);
      function X(i) { return ml + i * steg; }
      function Y(v) { return mt + ph * (1 - v / 100); }

      var s = svg("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H, role: "img", "aria-labelledby": "dg-titel dg-besk", "class": "dg-svg" });
      s.appendChild(svg("title", { id: "dg-titel" }, ["Diagram " + G.nr + ". " + G.namn]));
      s.appendChild(svg("desc", { id: "dg-besk" }, [sammanfattning + ". Värdena finns också i Tabell 3 under diagrammet."]));

      /* rutnät och axlar */
      [0, 20, 40, 60, 80, 100].forEach(function (v) {
        s.appendChild(svg("line", { x1: ml, x2: W - mr, y1: Y(v), y2: Y(v), "class": "dg-grid" }));
        s.appendChild(svg("text", { x: ml - 6, y: Y(v) + 4, "text-anchor": "end", "class": "dg-axis" }, [v + " %"]));
      });
      G.ar.forEach(function (namn, i) {
        s.appendChild(svg("line", { x1: X(i), x2: X(i), y1: mt, y2: mt + ph, "class": "dg-vgrid" }));
        var delar = namn.split(" (");
        s.appendChild(svg("text", { x: X(i), y: H - mb + 18, "text-anchor": "middle", "class": "dg-axis dg-axis-x" }, [delar[0]]));
        if (delar[1]) { s.appendChild(svg("text", { x: X(i), y: H - mb + 32, "text-anchor": "middle", "class": "dg-axis dg-axis-sm" }, [delar[1].replace(")", "")])); }
      });

      /* experternas nivå */
      var yr = Y(G.referens.v);
      s.appendChild(svg("line", { x1: ml, x2: W - mr, y1: yr, y2: yr, "class": "dg-ref" }));
      s.appendChild(svg("text", { x: ml + 4, y: yr - 5, "class": "dg-reflabel" }, [G.referens.namn]));

      /* sidledes förskjutning så att markörer i samma år inte täcker varandra */
      var perAr = {};
      G.serier.forEach(function (se) { se.punkter.forEach(function (p) { (perAr[p.x] = perAr[p.x] || []).push(se.id); }); });
      function dx(se, p) {
        var lista = perAr[p.x], n = lista.length, idx = lista.indexOf(se.id);
        return (idx - (n - 1) / 2) * 7;
      }

      /* linjer först, sedan markörer */
      G.serier.forEach(function (se) {
        if (se.punkter.length > 1) {
          var pts = se.punkter.map(function (p) { return (X(p.x) + dx(se, p)) + "," + Y(p.v); }).join(" ");
          /* streckad linje när år saknas mellan två punkter: då vet vi inte vad som hände däremellan */
          var lucka = false;
          for (var q = 1; q < se.punkter.length; q++) { if (se.punkter[q].x - se.punkter[q - 1].x > 1) { lucka = true; } }
          s.appendChild(svg("polyline", { points: pts, fill: "none", stroke: se.farg, "stroke-width": 2.5, "stroke-linejoin": "round", "stroke-dasharray": lucka ? "7 5" : null, opacity: 0.9 }));
        }
      });

      /* värdeetiketter, med vertikal avståndshållning per år */
      var perKol = {};
      G.serier.forEach(function (se) {
        se.punkter.forEach(function (p) {
          if (p.lab === "under") {
            /* etikett under markören när linjen går åt höger och etiketten annars skulle ligga på den */
            s.appendChild(svg("text", { x: X(p.x) + dx(se, p) + 4, y: Y(p.v) + 20, "text-anchor": "middle", "class": "dg-val", fill: se.farg }, [procent(p.v)]));
            return;
          }
          (perKol[p.x] = perKol[p.x] || []).push({ se: se, p: p, y: Y(p.v), ly: Y(p.v) });
        });
      });
      Object.keys(perKol).forEach(function (k) {
        var l = perKol[k].sort(function (a, b) { return a.y - b.y; });
        for (var i = 1; i < l.length; i++) { if (l[i].ly - l[i - 1].ly < 13) { l[i].ly = l[i - 1].ly + 13; } }
        var overskott = l.length ? l[l.length - 1].ly - (mt + ph) : 0;
        if (overskott > 0) { l.forEach(function (o) { o.ly -= overskott; }); }
        l.forEach(function (o) {
          var px = X(+k) + dx(o.se, o.p);
          if (Math.abs(o.ly - o.y) > 3) {
            s.appendChild(svg("line", { x1: px + 6, y1: o.y, x2: X(+k) + 18, y2: o.ly - 4, "class": "dg-leader", stroke: o.se.farg }));
          }
          s.appendChild(svg("text", { x: X(+k) + 20, y: o.ly, "class": "dg-val", fill: o.se.farg }, [procent(o.p.v)]));
        });
      });

      G.serier.forEach(function (se) {
        se.punkter.forEach(function (p) {
          var px = X(p.x) + dx(se, p), py = Y(p.v);
          var txt = se.namn + ", " + G.ar[p.x] + ": " + procent(p.v) + ". " + p.modell + ".";
          var g = svg("g", { tabindex: "0", role: "img", "aria-label": txt, "class": "dg-pt" }, [
            svg("title", null, [txt + " " + p.not]),
            markor(se.form, px, py, se.farg, 5.5)
          ]);
          s.appendChild(g);
        });
      });
      wrap.appendChild(s);
    }

    /* tabell med värdena (Tabell 3) */
    var tbody = el("tbody");
    rader.forEach(function (r) {
      var kallTd = el("td", { "data-label": "Källa" });
      r.p.kalla.forEach(function (k, i) {
        var post = kallaPost(k);
        if (i) { kallTd.appendChild(document.createTextNode("; ")); }
        kallTd.appendChild(post ? el("a", { href: "#" + k, text: kortNamn(post) }) : document.createTextNode(k));
      });
      tbody.appendChild(el("tr", null, [
        el("td", { "data-label": "Prov", text: r.s.namn }),
        el("td", { "data-label": "År", text: G.ar[r.p.x] }),
        el("td", { "data-label": "Värde", text: procent(r.p.v) }),
        el("td", { "data-label": "Modell eller system", text: r.p.modell }),
        kallTd,
        el("td", { "data-label": "Anmärkning", text: r.p.not })
      ]));
    });
    var tabell = el("table", null, [
      el("caption", { id: "Tabell3", text: "Tabell 3. Värdena i Diagram " + G.nr }),
      el("thead", null, [el("tr", null, ["Prov", "År", "Värde", "Modell eller system", "Källa", "Anmärkning"].map(function (h) { return el("th", { scope: "col", text: h }); }))]),
      tbody
    ]);
    fig.appendChild(el("details", { "class": "dg-tabell" }, [
      el("summary", { text: "Visa värdena som tabell (Tabell 3)" }),
      el("div", { "class": "tabell-wrap" }, [tabell])
    ]));

    var ul = el("ul", { "class": "dg-anm" });
    G.anm.forEach(function (a) { ul.appendChild(el("li", { text: a })); });
    fig.appendChild(el("p", { "class": "fig-desc" }, ["Så läser du diagrammet:"]));
    fig.appendChild(ul);
    slot.appendChild(fig);

    rita();
    var tid = null;
    window.addEventListener("resize", function () { clearTimeout(tid); tid = setTimeout(rita, 120); });
  }

  /* ---------- Ankare vid rubriker ---------- */
  function ankare() {
    var hs = document.querySelectorAll("main h2[id], main h3[id]");
    Array.prototype.forEach.call(hs, function (h) {
      h.appendChild(el("a", { "class": "hlink", href: "#" + h.id, "aria-label": "Länk till avsnittet " + h.textContent, text: "#" }));
    });
  }

  /* ---------- Förklaringar vid hovring, fokus och tryck ---------- */
  function begrepp() {
    var pop = document.getElementById("pop");
    var aktiv = null, fast = false;
    function visa(t) {
      var b = D.begrepp[t.getAttribute("data-b")];
      if (!b) { return; }
      pop.textContent = "";
      pop.appendChild(el("strong", { text: b.namn }));
      pop.appendChild(document.createTextNode(b.text));
      pop.appendChild(el("span", { "class": "pop-kalla", text: "Källa: " + b.kalla }));
      pop.hidden = false;
      var r = t.getBoundingClientRect();
      var x = r.left + window.scrollX, y = r.bottom + window.scrollY + 6;
      pop.style.left = "0px"; pop.style.top = "0px";
      var w = pop.offsetWidth;
      x = Math.max(8 + window.scrollX, Math.min(x, window.scrollX + document.documentElement.clientWidth - w - 8));
      pop.style.left = x + "px"; pop.style.top = y + "px";
      t.setAttribute("aria-describedby", "pop");
      aktiv = t;
    }
    function dolj() {
      pop.hidden = true; fast = false;
      if (aktiv) { aktiv.removeAttribute("aria-describedby"); aktiv = null; }
    }
    Array.prototype.forEach.call(document.querySelectorAll("abbr.begrepp"), function (t) {
      t.addEventListener("mouseenter", function () { if (!fast) { visa(t); } });
      t.addEventListener("mouseleave", function () { if (!fast) { dolj(); } });
      t.addEventListener("focus", function () { visa(t); });
      t.addEventListener("blur", function () { if (!fast) { dolj(); } });
      t.addEventListener("click", function (e) {
        e.preventDefault();
        if (fast && aktiv === t) { dolj(); } else { visa(t); fast = true; }
      });
      t.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (fast && aktiv === t) { dolj(); } else { visa(t); fast = true; } }
      });
    });
    document.addEventListener("click", function (e) {
      if (aktiv && e.target !== aktiv && !pop.contains(e.target)) { dolj(); }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { dolj(); } });
  }

  /* ---------- Teknik-modal ---------- */
  function modal() {
    var btn = document.getElementById("techBtn");
    var overlay = document.getElementById("techModal");
    var stang = document.getElementById("techClose");
    function oppna() { overlay.classList.add("show"); stang.focus(); }
    function stanga() { overlay.classList.remove("show"); btn.focus(); }
    btn.addEventListener("click", oppna);
    stang.addEventListener("click", stanga);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) { stanga(); } });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("show")) { stanga(); }
    });
  }

  /* ---------- Start ---------- */
  var v = document.getElementById("versionText");
  if (v && D.version) { v.textContent = "— version 10 per den " + D.version; }
  byggTabell1();
  byggSpar();
  byggMedia();
  byggTabell2();
  byggKallor();
  byggDiagram();
  ankare();
  begrepp();
  modal();
})();

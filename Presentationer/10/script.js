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

  /* ---------- Diagram 1 (SVG ritas av data.js, tidsaxel med riktiga datum) ---------- */
  var SVGNS = "http://www.w3.org/2000/svg";
  var MAN = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  var DAG_MS = 86400000;
  function svg(tag, attrs, kids) {
    var e = document.createElementNS(SVGNS, tag);
    if (attrs) { Object.keys(attrs).forEach(function (k) { if (attrs[k] != null) { e.setAttribute(k, attrs[k]); } }); }
    (kids || []).forEach(function (c) { if (c) { e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); } });
    return e;
  }
  function procent(v) { return v.toLocaleString("sv-SE", { maximumFractionDigits: 1 }) + " %"; }
  /* "2023", "2025-01" eller "2022-06-29" blir start, slut och mitt (millisekunder). */
  function tidsrymd(iso) {
    var p = iso.split("-").map(Number), a, b;
    if (p.length === 1) { a = Date.UTC(p[0], 0, 1); b = Date.UTC(p[0] + 1, 0, 1); }
    else if (p.length === 2) { a = Date.UTC(p[0], p[1] - 1, 1); b = Date.UTC(p[0], p[1], 1); }
    else { a = Date.UTC(p[0], p[1] - 1, p[2]); b = a; }
    return { start: a, slut: b, mitt: (a + b) / 2 };
  }
  function datumText(p) {
    var q = p.d.split("-").map(Number);
    if (p.g === "dag") { return q[2] + " " + MAN[q[1] - 1] + " " + q[0]; }
    if (p.g === "manad") { return MAN[q[1] - 1] + " " + q[0]; }
    return q[0] + " (hela året)";
  }
  /* En markör (form) runt (x, y). Returnerar ett SVG-element. */
  function markor(form, x, y, farg, r) {
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

    fig.appendChild(el("p", { "class": "dg-hint", text: "Dra diagrammet i sidled för att se hela tidsaxeln." }));
    var scroll = el("div", { "class": "dg-scroll", tabindex: "0", role: "region", "aria-label": "Diagram 1, går att rulla i sidled" });
    var wrap = el("div", { "class": "dg-wrap" });
    scroll.appendChild(wrap);
    fig.appendChild(scroll);

    /* alla punkter, med tidsrymd */
    var punkter = [];
    G.serier.forEach(function (s) { s.punkter.forEach(function (p) { punkter.push({ s: s, p: p, t: tidsrymd(p.d) }); }); });
    var sammanfattning = G.serier.map(function (s) {
      return s.namn + ": " + s.punkter.map(function (p) { return datumText(p) + " " + procent(p.v); }).join(", ");
    }).join(". ");

    function rita() {
      wrap.textContent = "";
      var W = Math.max(640, Math.floor(scroll.clientWidth || 640));
      var H = Math.round(Math.max(400, Math.min(W * 0.55, 480)));
      var ml = 46, mr = 26, mt = 16, mb = 62;
      var pw = W - ml - mr, ph = H - mt - mb;
      var t0 = tidsrymd(G.start).start, t1 = tidsrymd(G.slut).slut;
      var cut = tidsrymd(G.hamtat).start;
      function X(ms) { return ml + (ms - t0) / (t1 - t0) * pw; }
      function Y(v) { return mt + ph * (1 - v / 100); }
      var arStart = new Date(t0).getUTCFullYear(), arSlut = new Date(t1 - 1).getUTCFullYear();

      var s = svg("svg", { width: W, height: H, viewBox: "0 0 " + W + " " + H, role: "img", "aria-labelledby": "dg-titel dg-besk", "class": "dg-svg" });
      s.appendChild(svg("title", { id: "dg-titel" }, ["Diagram " + G.nr + ". " + G.namn]));
      s.appendChild(svg("desc", { id: "dg-besk" }, [sammanfattning + ". Värdena finns också i Tabell 3 under diagrammet."]));

      /* årsband: varje kalenderår är ett band som börjar den 1 januari */
      for (var yr = arStart; yr <= arSlut; yr++) {
        var a = Date.UTC(yr, 0, 1), b = Date.UTC(yr + 1, 0, 1);
        s.appendChild(svg("rect", { x: X(a), y: mt, width: X(b) - X(a), height: ph, fill: (yr % 2 === 0) ? "#f3f1e9" : "#ffffff" }));
      }
      /* tiden efter hämtdatumet */
      s.appendChild(svg("rect", { x: X(cut), y: mt, width: X(t1) - X(cut), height: ph, fill: "#dcd9cf", opacity: 0.75 }));
      var cutX = (X(cut) + X(t1)) / 2, cutY = mt + ph * 0.62;
      s.appendChild(svg("text", { x: cutX, y: cutY, "text-anchor": "middle", "class": "dg-cut", transform: "rotate(-90 " + cutX + " " + cutY + ")" }, ["Ingen data efter 22 okt 2026"]));

      /* vågräta linjer */
      [0, 20, 40, 60, 80, 100].forEach(function (v) {
        s.appendChild(svg("line", { x1: ml, x2: W - mr, y1: Y(v), y2: Y(v), "class": "dg-grid" }));
        s.appendChild(svg("text", { x: ml - 7, y: Y(v) + 4, "text-anchor": "end", "class": "dg-axis" }, [v + " %"]));
      });

      /* lodräta linjer: 1 januari tydligt, kvartal svagt */
      for (var y2 = arStart; y2 <= arSlut; y2++) {
        var jan = Date.UTC(y2, 0, 1);
        s.appendChild(svg("line", { x1: X(jan), x2: X(jan), y1: mt, y2: mt + ph + 8, "class": "dg-jan" }));
        s.appendChild(svg("text", { x: X(jan) + (y2 === arStart ? 0 : 0), y: mt + ph + 21, "text-anchor": y2 === arStart ? "start" : "middle", "class": "dg-axis dg-axis-sm dg-axis-bold" }, ["1 jan"]));
        [[3, "apr"], [6, "jul"], [9, "okt"]].forEach(function (k) {
          var m = Date.UTC(y2, k[0], 1);
          s.appendChild(svg("line", { x1: X(m), x2: X(m), y1: mt, y2: mt + ph + 4, "class": "dg-kv" }));
          s.appendChild(svg("text", { x: X(m), y: mt + ph + 18, "text-anchor": "middle", "class": "dg-axis dg-axis-sm" }, [k[1]]));
        });
        var bandStart = Math.max(jan, t0), bandSlut = Math.min(Date.UTC(y2 + 1, 0, 1), t1);
        s.appendChild(svg("text", { x: (X(bandStart) + X(bandSlut)) / 2, y: mt + ph + 44, "text-anchor": "middle", "class": "dg-axis dg-axis-x" }, [String(y2)]));
      }
      s.appendChild(svg("line", { x1: X(cut), x2: X(cut), y1: mt, y2: mt + ph, "class": "dg-cutline" }));

      /* experternas nivå */
      var yr0 = Y(G.referens.v);
      s.appendChild(svg("line", { x1: ml, x2: W - mr, y1: yr0, y2: yr0, "class": "dg-ref" }));
      s.appendChild(svg("text", { x: ml + 6, y: yr0 - 6, "class": "dg-reflabel" }, [G.referens.namn]));

      /* punkternas lägen */
      punkter.forEach(function (o) { o.x = X(o.t.mitt); o.y = Y(o.p.v); o.x0 = X(o.t.start); o.x1 = X(o.t.slut); });

      /* linjer (streckade om mer än två år mellan punkterna) */
      G.serier.forEach(function (se) {
        var lista = punkter.filter(function (o) { return o.s === se; }).sort(function (u, v) { return u.t.mitt - v.t.mitt; });
        if (lista.length < 2) { return; }
        for (var i = 1; i < lista.length; i++) {
          var gap = lista[i].t.mitt - lista[i - 1].t.mitt > 2 * 365.25 * DAG_MS;
          s.appendChild(svg("line", { x1: lista[i - 1].x, y1: lista[i - 1].y, x2: lista[i].x, y2: lista[i].y, stroke: se.farg, "stroke-width": 2.5, "stroke-dasharray": gap ? "7 5" : null, opacity: 0.9 }));
        }
      });

      /* strängar som visar hur säkert datumet är (månad eller år) */
      punkter.forEach(function (o) {
        if (o.p.g === "dag") { return; }
        s.appendChild(svg("line", { x1: o.x0, x2: o.x1, y1: o.y, y2: o.y, stroke: o.s.farg, "stroke-width": 2, opacity: 0.55 }));
        s.appendChild(svg("line", { x1: o.x0, x2: o.x0, y1: o.y - 5, y2: o.y + 5, stroke: o.s.farg, "stroke-width": 2, opacity: 0.55 }));
        s.appendChild(svg("line", { x1: o.x1, x2: o.x1, y1: o.y - 5, y2: o.y + 5, stroke: o.s.farg, "stroke-width": 2, opacity: 0.55 }));
      });

      /* värdeetiketter: välj den plats runt punkten där etiketten täcker minst */
      var placerade = [];
      var markbox = punkter.map(function (o) { return { o: o, x1: o.x - 9, x2: o.x + 9, y1: o.y - 9, y2: o.y + 9 }; });
      function kollision(a, b) { return !(a.x2 <= b.x1 || a.x1 >= b.x2 || a.y2 <= b.y1 || a.y1 >= b.y2); }
      punkter.slice().sort(function (u, v) { return u.t.mitt - v.t.mitt; }).forEach(function (o) {
        var txt = procent(o.p.v), w = txt.length * 6.9 + 6;
        var kand = [
          { x: o.x1 + 8, y: o.y + 4, a: "start", b: { x1: o.x1 + 8, x2: o.x1 + 8 + w, y1: o.y - 9, y2: o.y + 6 } },
          { x: o.x, y: o.y - 12, a: "middle", b: { x1: o.x - w / 2, x2: o.x + w / 2, y1: o.y - 24, y2: o.y - 9 } },
          { x: o.x, y: o.y + 22, a: "middle", b: { x1: o.x - w / 2, x2: o.x + w / 2, y1: o.y + 9, y2: o.y + 25 } },
          { x: o.x0 - 8, y: o.y + 4, a: "end", b: { x1: o.x0 - 8 - w, x2: o.x0 - 8, y1: o.y - 9, y2: o.y + 6 } }
        ];
        var bast = null, bastPoang = 1e9;
        kand.forEach(function (c) {
          var poang = 0;
          placerade.forEach(function (p) { if (kollision(c.b, p)) { poang += 3; } });
          markbox.forEach(function (m) { if (m.o !== o && kollision(c.b, m)) { poang += 2; } });
          if (c.b.x1 < ml - 2 || c.b.x2 > W - 2 || c.b.y1 < mt - 2 || c.b.y2 > mt + ph + 2) { poang += 6; }
          if (poang < bastPoang) { bastPoang = poang; bast = c; }
        });
        placerade.push(bast.b);
        s.appendChild(svg("text", { x: bast.x, y: bast.y, "text-anchor": bast.a, "class": "dg-val", fill: o.s.farg }, [txt]));
      });

      /* markörer */
      punkter.forEach(function (o) {
        var txt = o.s.namn + ", " + datumText(o.p) + ": " + procent(o.p.v) + ". " + o.p.modell + ".";
        s.appendChild(svg("g", { tabindex: "0", role: "img", "aria-label": txt, "class": "dg-pt" }, [
          svg("title", null, [txt + " " + o.p.not]),
          markor(o.s.form, o.x, o.y, o.s.farg, 5.5)
        ]));
      });
      wrap.appendChild(s);
    }

    /* tabell med värdena (Tabell 3) */
    var tbody = el("tbody");
    punkter.forEach(function (o) {
      var kallTd = el("td", { "data-label": "Källa" });
      o.p.kalla.forEach(function (k, i) {
        var post = kallaPost(k);
        if (i) { kallTd.appendChild(document.createTextNode("; ")); }
        kallTd.appendChild(post ? el("a", { href: "#" + k, text: kortNamn(post) }) : document.createTextNode(k));
      });
      tbody.appendChild(el("tr", null, [
        el("td", { "data-label": "Prov", text: o.s.namn }),
        el("td", { "data-label": "Datum", text: datumText(o.p) }),
        el("td", { "data-label": "Värde", text: procent(o.p.v) }),
        el("td", { "data-label": "Modell eller system", text: o.p.modell }),
        kallTd,
        el("td", { "data-label": "Anmärkning", text: o.p.not })
      ]));
    });
    var tabell = el("table", null, [
      el("caption", { id: "Tabell3", text: "Tabell 3. Värdena i Diagram " + G.nr }),
      el("thead", null, [el("tr", null, ["Prov", "Datum", "Värde", "Modell eller system", "Källa", "Anmärkning"].map(function (h) { return el("th", { scope: "col", text: h }); }))]),
      tbody
    ]);
    fig.appendChild(el("details", { "class": "dg-tabell" }, [
      el("summary", { text: "Visa värdena som tabell (Tabell 3)" }),
      el("div", { "class": "tabell-wrap" }, [tabell])
    ]));

    /* Tabell 4: vad proven är och vad en siffra betyder */
    var tb4 = el("tbody");
    (G.prov || []).forEach(function (r) {
      var post = kallaPost(r.kalla);
      tb4.appendChild(el("tr", null, [
        el("td", { "data-label": "Prov", text: r.namn }),
        el("td", { "data-label": "Vad det är", text: r.vad }),
        el("td", { "data-label": "Vad en siffra betyder", text: r.betyder }),
        el("td", { "data-label": "Exempel", text: r.exempel }),
        el("td", { "data-label": "Källa" }, [post ? el("a", { href: "#" + r.kalla, text: kortNamn(post) }) : null])
      ]));
    });
    var tabell4 = el("table", null, [
      el("caption", { id: "Tabell4", text: "Tabell 4. Vad proven i Diagram " + G.nr + " är, och vad en siffra betyder" }),
      el("thead", null, [el("tr", null, ["Prov", "Vad det är", "Vad en siffra betyder", "Exempel", "Källa"].map(function (h) { return el("th", { scope: "col", text: h }); }))]),
      tb4
    ]);
    fig.appendChild(el("details", { "class": "dg-tabell", id: "prov-detaljer" }, [
      el("summary", { text: "Vad är det för uppgifter? Visa vad varje prov är, och ett exempel (Tabell 4)" }),
      el("div", { "class": "tabell-wrap" }, [tabell4])
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

  /* Hoppar man till en tabell som ligger i en hopfälld ruta fäller vi ut rutan. */
  function oppnaMalruta() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    if (!id) { return; }
    var m = document.getElementById(id);
    var d = m && m.closest ? m.closest("details") : null;
    if (d) { d.open = true; m.scrollIntoView(); }
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
  window.addEventListener("hashchange", oppnaMalruta);
  oppnaMalruta();
})();

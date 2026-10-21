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
  ankare();
  begrepp();
  modal();
})();

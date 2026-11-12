/* forstora.js: förstora en bild i ett fönster där man kan zooma och rulla.
 *
 * Gäller länkar med klassen "forstorbar" som omger en bild: <a class="forstorbar" href="bild"><img src="bild"></a>.
 * Med JavaScript öppnas bilden i ett fönster med knappar för hela bilden, bredd, 100 % och zoom (tangenterna + och - och 0 fungerar,
 * Esc stänger). Utan JavaScript, och vid Ctrl- eller Cmd-klick, öppnas bilden i en ny flik som vanligt.
 *
 * UPPDATERING 2026-11-12: adressen får #bildN-stor när en bild förstoras (länkbar), knappen Kopiera länk och händelsen forstora-oppna. Version 1.15.
 * UPPDATERING 2026-11-12: första versionen. Version 1.14.
 */
(function () {
  "use strict";
  var lankar = document.querySelectorAll("a.forstorbar");
  if (!lankar.length || typeof HTMLDialogElement === "undefined") { return; }

  var dlg = null, yta = null, bild = null, titel = null, nyFlik = null, zoomtext = null;
  var lage = "hela";      // "hela", "bredd" eller "full"
  var k = 1;              // extra förstoring ovanpå läget
  var opener = null;
  var aktivtId = "";
  var kopieraKnapp = null;
  var STEG = [1, 1.5, 2, 3, 4, 6];
  var KLASS = "forstora";

  function knapp(text, etikett, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.textContent = text; b.setAttribute("aria-label", etikett || text);
    b.addEventListener("click", fn);
    return b;
  }

  function nat() {
    var w = bild.naturalWidth || bild.width || 1, h = bild.naturalHeight || bild.height || 1;
    return { w: w, h: h };
  }

  function tillampa() {
    var n = nat();
    var cs = window.getComputedStyle(yta);
    var aw = yta.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 2;
    var ah = yta.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - 2;
    var skala;
    if (lage === "bredd") { skala = aw / n.w; }
    else if (lage === "full") { skala = 1; }
    else { skala = Math.min(aw / n.w, ah / n.h); }
    var bredd = Math.max(40, Math.round(n.w * skala * k));
    bild.style.width = bredd + "px";
    bild.style.height = "auto";
    zoomtext.textContent = Math.round((bredd / n.w) * 100) + " %";
  }

  function satt(nyttLage) { lage = nyttLage; k = 1; tillampa(); yta.scrollTo(0, 0); }

  function zooma(riktning) {
    var i = STEG.indexOf(k);
    if (i < 0) { i = 0; }
    i = Math.max(0, Math.min(STEG.length - 1, i + riktning));
    k = STEG[i];
    tillampa();
  }

  function bygg() {
    dlg = document.createElement("dialog");
    dlg.className = KLASS;
    dlg.setAttribute("aria-label", "Förstorad bild");
    var rad = document.createElement("div"); rad.className = "forstora-rad";
    titel = document.createElement("p"); titel.className = "forstora-titel";
    var knappar = document.createElement("div"); knappar.className = "forstora-knappar";
    zoomtext = document.createElement("span"); zoomtext.className = "forstora-zoom"; zoomtext.setAttribute("aria-live", "polite");
    nyFlik = document.createElement("a"); nyFlik.textContent = "Öppna i ny flik"; nyFlik.target = "_blank"; nyFlik.rel = "noopener";
    knappar.append(
      knapp("Hela bilden", "Visa hela bilden", function () { satt("hela"); }),
      knapp("Passa bredd", "Passa bilden till fönstrets bredd", function () { satt("bredd"); }),
      knapp("100 %", "Visa bilden i full storlek", function () { satt("full"); }),
      knapp("−", "Zooma ut", function () { zooma(-1); }),
      knapp("+", "Zooma in", function () { zooma(1); }),
      zoomtext, nyFlik,
      kopieraKnapp = knapp("Kopiera länk", "Kopiera länken till den förstorade bilden", function () { kopieraLank(); }),
      knapp("Stäng", "Stäng den förstorade bilden", function () { dlg.close(); })
    );
    rad.append(titel, knappar);
    yta = document.createElement("div"); yta.className = "forstora-yta"; yta.tabIndex = 0;
    bild = document.createElement("img"); bild.className = "forstora-bild";
    bild.addEventListener("click", function () { if (k === 1) { zooma(2); } else { k = 1; tillampa(); } });
    yta.appendChild(bild);
    dlg.append(rad, yta);
    document.body.appendChild(dlg);
    dlg.addEventListener("close", function () {
      if (aktivtId) { sattAdress("#" + aktivtId); }
      if (opener) { opener.focus(); }
    });
    dlg.addEventListener("click", function (ev) { if (ev.target === dlg) { dlg.close(); } });
    dlg.addEventListener("keydown", function (ev) {
      if (ev.key === "+" || ev.key === "=") { zooma(1); ev.preventDefault(); }
      else if (ev.key === "-") { zooma(-1); ev.preventDefault(); }
      else if (ev.key === "0") { satt("hela"); ev.preventDefault(); }
    });
    window.addEventListener("resize", function () { if (dlg.open) { tillampa(); } });
  }

  function kopieraLank() {
    var url = window.location.href;
    var klar = function () {
      kopieraKnapp.textContent = "Länken är kopierad";
      window.setTimeout(function () { kopieraKnapp.textContent = "Kopiera länk"; }, 2200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(klar, function () { window.prompt("Kopiera länken:", url); });
    } else {
      window.prompt("Kopiera länken:", url);
    }
  }

  function sattAdress(hash) {
    try { window.history.replaceState(null, "", window.location.pathname + window.location.search + hash); } catch (e) { /* ingen historik */ }
  }

  function oppna(a) {
    if (!dlg) { bygg(); }
    opener = a;
    var img = a.querySelector("img");
    var bildtext = a.getAttribute("data-text") || (img ? img.alt : "") || "";
    titel.textContent = a.getAttribute("data-rubrik") || "Förstorad bild";
    dlg.setAttribute("aria-label", "Förstorad bild: " + (a.getAttribute("data-rubrik") || ""));
    bild.alt = img ? img.alt : bildtext;
    bild.removeAttribute("width"); bild.removeAttribute("height");
    nyFlik.href = a.href;
    // håll en pågående bildväxling stilla medan bilden är förstorad
    var spel = document.querySelector("#bildvaxel [data-spel]");
    if (spel && spel.getAttribute("aria-pressed") === "true") { spel.click(); }
    var fig = a.closest("figure");
    aktivtId = fig && fig.id ? fig.id : "";
    if (aktivtId) { sattAdress("#" + aktivtId + "-stor"); }
    dlg.showModal();
    lage = "hela"; k = 1;
    var klar = function () { tillampa(); yta.scrollTo(0, 0); };
    bild.onload = klar;
    bild.src = a.href;
    if (bild.complete) { klar(); }
  }

  document.addEventListener("forstora-oppna", function (ev) {
    if (ev.detail && ev.detail.lank && !(dlg && dlg.open)) { oppna(ev.detail.lank); }
  });
  window.addEventListener("hashchange", function () {
    if (dlg && dlg.open && !/-stor$/.test(window.location.hash)) { aktivtId = ""; dlg.close(); }
  });

  for (var i = 0; i < lankar.length; i++) {
    lankar[i].addEventListener("click", function (ev) {
      if (ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button !== 0) { return; }
      ev.preventDefault();
      oppna(ev.currentTarget);
    });
  }
})();

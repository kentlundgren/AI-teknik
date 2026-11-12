/* bildvaxel.js: växlar mellan bilderna på sidan Bilder och förtroende, och gör varje bild länkbar.
 *
 * Bilderna växlar av sig själva var femte sekund. Besökaren kan välja bild, pausa och starta växlingen.
 * Varje bild har en egen länk: sidan#bild1, #bild2 och #bild3 visar bilden, och #bild1-stor osv. öppnar den förstorad.
 * Adressen i webbläsaren följer det besökaren väljer, och varje bild har en knapp "Kopiera länk".
 * Utan JavaScript visas alla bilderna efter varandra, och länkarna #bild1 osv. leder till respektive bild.
 * Med inställningen "minska rörelse" (prefers-reduced-motion) växlar bilderna inte av sig själva.
 *
 * UPPDATERING 2026-11-12: länkar till varje bild (#bildN och #bildN-stor), adressen följer valet och knappen Kopiera länk. Version 1.15.
 * UPPDATERING 2026-11-12: första versionen. Version 1.12.
 */
(function () {
  "use strict";
  var rot = document.getElementById("bildvaxel");
  if (!rot) { return; }
  var figurer = rot.querySelectorAll("figure");
  if (figurer.length < 2) { return; }
  var valknappar = rot.querySelectorAll("[data-visa]");
  var spelknapp = rot.querySelector("[data-spel]");
  var reducerad = false;
  try { reducerad = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); } catch (e) { reducerad = false; }
  var INTERVALL_MS = 5000;
  var nu = 0;
  var timer = null;

  rot.classList.add("js");

  function idFor(i) { return "bild" + (i + 1); }

  function visa(i) {
    nu = i;
    for (var k = 0; k < figurer.length; k++) {
      var aktiv = (k === i);
      figurer[k].classList.toggle("aktiv", aktiv);
      figurer[k].setAttribute("aria-hidden", aktiv ? "false" : "true");
    }
    for (var m = 0; m < valknappar.length; m++) {
      var vald = (Number(valknappar[m].getAttribute("data-visa")) === i);
      valknappar[m].setAttribute("aria-pressed", vald ? "true" : "false");
    }
  }

  /* Adressen följer det besökaren väljer, utan att hoppa i sidan. */
  function sattAdress(i) {
    try { window.history.replaceState(null, "", window.location.pathname + window.location.search + "#" + idFor(i)); } catch (e) { /* ingen historik tillgänglig */ }
  }

  function uppdateraSpelknapp() {
    if (!spelknapp) { return; }
    spelknapp.textContent = timer ? "Pausa växlingen" : "Starta växlingen";
    spelknapp.setAttribute("aria-pressed", timer ? "true" : "false");
  }

  function stoppa() {
    if (timer) { window.clearInterval(timer); timer = null; }
    uppdateraSpelknapp();
  }

  function starta() {
    stoppa();
    timer = window.setInterval(function () { visa((nu + 1) % figurer.length); }, INTERVALL_MS);
    uppdateraSpelknapp();
  }

  /* Länk till en bild: #bildN visar bilden, #bildN-stor öppnar den förstorad. */
  function franAdress() {
    var m = /^#bild(\d+)(-stor)?$/.exec(window.location.hash);
    if (!m) { return null; }
    var i = Number(m[1]) - 1;
    if (i < 0 || i >= figurer.length) { return null; }
    return { i: i, stor: !!m[2] };
  }

  function tillAdress(rulla) {
    var h = franAdress();
    if (!h) { return false; }
    stoppa();
    visa(h.i);
    if (rulla) { figurer[h.i].scrollIntoView({ block: "start" }); }
    if (h.stor) {
      var lank = figurer[h.i].querySelector("a.forstorbar");
      if (lank) { document.dispatchEvent(new CustomEvent("forstora-oppna", { detail: { lank: lank } })); }
    }
    return true;
  }

  function kopiera(text, knapp) {
    var klar = function () {
      var gammal = knapp.getAttribute("data-text") || knapp.textContent;
      knapp.setAttribute("data-text", gammal);
      knapp.textContent = "Länken är kopierad";
      window.setTimeout(function () { knapp.textContent = gammal; }, 2200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(klar, function () { window.prompt("Kopiera länken:", text); });
    } else {
      window.prompt("Kopiera länken:", text);
    }
  }

  for (var m = 0; m < valknappar.length; m++) {
    valknappar[m].addEventListener("click", function (ev) {
      var i = Number(ev.currentTarget.getAttribute("data-visa"));
      stoppa();
      visa(i);
      sattAdress(i);
    });
  }
  if (spelknapp) {
    spelknapp.addEventListener("click", function () { if (timer) { stoppa(); } else { starta(); } });
  }

  /* Knappen Kopiera länk i varje bildtext */
  figurer.forEach(function (fig, i) {
    var bt = fig.querySelector("figcaption");
    if (!bt) { return; }
    var b = document.createElement("button");
    b.type = "button"; b.className = "kopiera"; b.textContent = "Kopiera länk";
    b.setAttribute("aria-label", "Kopiera länken till den här bilden");
    b.addEventListener("click", function () {
      kopiera(window.location.href.split("#")[0] + "#" + idFor(i), b);
    });
    bt.append(" ", b);
  });

  visa(0);
  var harLank = !!franAdress();
  if (harLank) {
    /* Efter att alla skript är laddade och sidan har fått sitt innehåll, så att rullningen hamnar rätt. */
    window.addEventListener("load", function () { tillAdress(true); });
    document.addEventListener("siffror-laddade", function () { tillAdress(true); }, { once: true });
  } else if (reducerad) {
    uppdateraSpelknapp();
  } else {
    starta();
  }
  window.addEventListener("hashchange", function () { tillAdress(true); });
})();

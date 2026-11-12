/* bildvaxel.js: växlar mellan två bilder på sidan Bilder och förtroende.
 *
 * Bilderna växlar av sig själva var femte sekund. Besökaren kan välja bild, pausa och starta växlingen.
 * Utan JavaScript visas båda bilderna efter varandra. Med inställningen "minska rörelse" (prefers-reduced-motion)
 * växlar bilderna inte av sig själva, bara när besökaren väljer.
 *
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

  for (var m = 0; m < valknappar.length; m++) {
    valknappar[m].addEventListener("click", function (ev) {
      stoppa();
      visa(Number(ev.currentTarget.getAttribute("data-visa")));
    });
  }
  if (spelknapp) {
    spelknapp.addEventListener("click", function () { if (timer) { stoppa(); } else { starta(); } });
  }

  visa(0);
  if (reducerad) { uppdateraSpelknapp(); } else { starta(); }
})();

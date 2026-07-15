/*
  script.js - Frans G. Bengtsson
  Enkel, kommenterad interaktivitet för biografisidan.

  Funktioner:
  1. Mjuk (smooth) scrollning när man klickar i innehållsförteckningen.
  2. Räknar och visar antal kvarvarande platshållare (fakta som ännu inte verifierats)
     - ett litet pedagogiskt kvitto på att sidan är i steg 1.
  3. Sätter aktuellt årtal i sidfoten.

  Ingen ES2023-funktionalitet används - bara brett stödd JavaScript.
*/

// Kör när DOM:en är färdigladdad
document.addEventListener("DOMContentLoaded", function () {

  // ---- 1. Mjuk scrollning från innehållsförteckningen ----
  const tocLinks = document.querySelectorAll(".toc a");
  tocLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href"); // t.ex. "#uppvaxt"
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ---- 2. Räkna kvarvarande platshållare ----
  // Vi letar efter texten "FAKTA VERIFIERAS" i platshållar-elementen.
  const placeholders = document.querySelectorAll(".placeholder, .placeholder-list li");
  let kvarAttVerifiera = 0;
  placeholders.forEach(function (el) {
    if (el.textContent.indexOf("VERIFIERAS") !== -1 ||
        el.textContent.indexOf("KÄLLA") !== -1 ||
        el.textContent.indexOf("steg 2") !== -1) {
      kvarAttVerifiera++;
    }
  });

  // Uppdaterar statusbannern med antalet, om den finns
  const banner = document.querySelector(".status-banner");
  if (banner && kvarAttVerifiera > 0) {
    const info = document.createElement("span");
    info.textContent = " (" + kvarAttVerifiera + " platshållare kvar att verifiera)";
    banner.appendChild(info);
  }

  // ---- 3. Dynamiskt årtal i sidfoten ----
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/*
  script.js - Frans G. Bengtsson
  Enkel, kommenterad interaktivitet för biografisidan.

  Här skedde en uppdatering (steg 1 -> steg 2):
  - Den tidigare platshållarräknaren är borttagen eftersom platshållarna nu är
    ersatta med verifierade fakta.
  - Kvar finns mjuk scrollning och dynamiskt årtal, samt en ny funktion som
    markerar vilken sektion man befinner sig i (aktiv länk i innehållsförteckningen).

  Ingen ES2023-funktionalitet används - bara brett stödd JavaScript.
*/

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

  // ---- 2. Markera aktiv sektion i innehållsförteckningen ----
  // Vi observerar när en sektion syns i vyn och markerar motsvarande TOC-länk.
  const sections = document.querySelectorAll("main section[id]");

  // IntersectionObserver är brett stödd och kräver ingen ES2023.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const id = entry.target.getAttribute("id");
        const tocLink = document.querySelector('.toc a[href="#' + id + '"]');
        if (tocLink && entry.isIntersecting) {
          // Ta bort tidigare markering
          tocLinks.forEach(function (l) { l.classList.remove("active"); });
          tocLink.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ---- 3. Dynamiskt årtal i sidfoten ----
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

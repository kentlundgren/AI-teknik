/*
  script.js
  Interaktivitet för RAG-mappens förklarande live-sida (index.html).

  Två funktioner:
  1. Växla mellan förklaringen av Classic RAG och Advanced RAG.
  2. Sätta aktuellt årtal i sidfoten dynamiskt.
*/

// Vänta tills hela DOM:en är laddad innan vi kopplar på händelser
document.addEventListener("DOMContentLoaded", function () {
  // ---- 1. Växlare mellan Classic och Advanced RAG ----

  // Hämta knapparna och panelerna
  const btnClassic = document.getElementById("btn-classic");
  const btnAdvanced = document.getElementById("btn-advanced");
  const panelClassic = document.getElementById("panel-classic");
  const panelAdvanced = document.getElementById("panel-advanced");

  /**
   * Visar vald panel och markerar rätt knapp som aktiv.
   * @param {string} val - "classic" eller "advanced"
   */
  function visaPanel(val) {
    const visaClassic = val === "classic";

    // Visa/dölj rätt panel
    panelClassic.classList.toggle("is-hidden", !visaClassic);
    panelAdvanced.classList.toggle("is-hidden", visaClassic);

    // Uppdatera knapparnas aktiva läge
    btnClassic.classList.toggle("is-active", visaClassic);
    btnAdvanced.classList.toggle("is-active", !visaClassic);

    // Tillgänglighet: uppdatera aria-selected
    btnClassic.setAttribute("aria-selected", String(visaClassic));
    btnAdvanced.setAttribute("aria-selected", String(!visaClassic));
  }

  // Koppla klick-händelser till knapparna
  btnClassic.addEventListener("click", function () {
    visaPanel("classic");
  });
  btnAdvanced.addEventListener("click", function () {
    visaPanel("advanced");
  });

  // ---- 2. Dynamiskt årtal i sidfoten ----
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

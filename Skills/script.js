/*
  script.js
  Interaktivitet för Skills-sidan (index.html).

  Två saker hanteras här:
    1. Växling mellan "Del A" (var skills bor) och "Del B" (skapa en skill),
       så att de två delarna hålls tydligt åtskilda.
    2. Sätter aktuellt årtal i sidfoten automatiskt.

  Koden körs efter att DOM:en laddats, enligt "defer"-liknande mönster via
  att skriptet ligger sist i <body>.
*/

// Vänta tills hela sidan är inläst innan vi kopplar händelser
document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------------------------------------------
     1) Växlare mellan Del A och Del B
     ------------------------------------------------------------- */

  // Hämta knapparna som styr vilken del som visas
  const btnA = document.getElementById("btn-a");
  const btnB = document.getElementById("btn-b");

  // Hämta själva innehållsdelarna
  const partA = document.getElementById("part-a");
  const partB = document.getElementById("part-b");

  /**
   * Visar vald del och döljer den andra.
   * @param {"a"|"b"} val - vilken del som ska visas
   */
  function visaDel(val) {
    const visaA = val === "a";

    // Visa/dölj rätt innehållsdel (klassen .is-hidden styr display:none i CSS)
    partA.classList.toggle("is-hidden", !visaA);
    partB.classList.toggle("is-hidden", visaA);

    // Markera aktiv knapp visuellt
    btnA.classList.toggle("is-active", visaA);
    btnB.classList.toggle("is-active", !visaA);

    // Uppdatera tillgänglighet (skärmläsare) – vilken flik som är vald
    btnA.setAttribute("aria-selected", String(visaA));
    btnB.setAttribute("aria-selected", String(!visaA));
  }

  // Koppla klick på knapparna till växlingen
  btnA.addEventListener("click", () => visaDel("a"));
  btnB.addEventListener("click", () => visaDel("b"));

  /* -------------------------------------------------------------
     2) Sätt aktuellt årtal i sidfoten
     ------------------------------------------------------------- */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

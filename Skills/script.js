/*
  script.js
  Interaktivitet för Skills-sidan (index.html).

  Tre saker hanteras här:
    1. Växling mellan Del A (var skills bor), Del B (skapa en skill),
       Del C (agentiska arbetsflöden) och Del D (samma förmåga, olika ställen),
       så att delarna hålls tydligt åtskilda.
       Varje del går att länka till direkt: index.html#delA, #delB, #delC och #delD.
       En länk till en rubrik inne i en del (t.ex. #c-risk-rubrik) öppnar den
       delen och rullar till rubriken.
    2. Rutan (modal) om sidans teknik och metod, som öppnas från hörnknappen
       "</> teknik" nere till höger.
    3. Språkväxlaren för förslagen i Del D (svenska/engelska). Länken
       #delD-forslag-en öppnar förslagen direkt på engelska.

  Versionsraden i sidfoten är statisk text i index.html, så att den syns även
  om JavaScript inte körs.

  Koden körs efter att DOM:en laddats. Skriptet ligger sist i <body>, och
  händelser kopplas med addEventListener (inte inline onclick), enligt
  projektets regel för hörn-länkar.
*/

// Vänta tills hela sidan är inläst innan vi kopplar händelser
document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------------------------------------------
     1) Växlare mellan Del A, Del B och Del C
     ------------------------------------------------------------- */

  // Varje flik är ett par: knappen som väljer delen och själva innehållsdelen.
  // Vill man lägga till en Del D räcker det att lägga till ett par här
  // (och motsvarande knapp och sektion i index.html).
  // "hash" är det som står efter # i adressen när man länkar till delen.
  const flikar = [
    { knapp: document.getElementById("btn-a"), del: document.getElementById("part-a"), hash: "delA" },
    { knapp: document.getElementById("btn-b"), del: document.getElementById("part-b"), hash: "delB" },
    { knapp: document.getElementById("btn-c"), del: document.getElementById("part-c"), hash: "delC" },
    { knapp: document.getElementById("btn-d"), del: document.getElementById("part-d"), hash: "delD" }
  ];

  /**
   * Visar vald del och döljer alla andra.
   * @param {number} valtIndex - index i listan flikar för den del som ska visas
   */
  function visaDel(valtIndex) {
    flikar.forEach(function (flik, index) {
      const vald = index === valtIndex;

      // Visa/dölj innehållsdelen (klassen .is-hidden ger display:none i CSS)
      flik.del.classList.toggle("is-hidden", !vald);

      // Markera aktiv knapp visuellt
      flik.knapp.classList.toggle("is-active", vald);

      // Uppdatera tillgänglighet (skärmläsare): vilken flik som är vald
      flik.knapp.setAttribute("aria-selected", String(vald));
    });
  }

  // Koppla klick på varje knapp till växlingen. Adressen uppdateras till
  // #delA, #delB eller #delC, så att den går att kopiera och dela.
  // replaceState byter adressen utan att sidan hoppar eller laddas om.
  flikar.forEach(function (flik, index) {
    flik.knapp.addEventListener("click", function () {
      visaDel(index);
      history.replaceState(null, "", "#" + flik.hash);
    });
  });

  /**
   * Läser adressens #-del och visar rätt del.
   *  - #delA, #delB, #delC (även små bokstäver, t.ex. #delc) väljer en del.
   *  - #<id> på en rubrik inne i en del öppnar den delen och rullar dit.
   *  - Utan # eller med okänt värde visas Del A.
   */
  function visaFranAdress() {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) {
      visaDel(0);
      return;
    }

    // Fall 1: länk till en hel del
    const index = flikar.findIndex(function (flik) {
      return flik.hash.toLowerCase() === hash.toLowerCase();
    });
    if (index !== -1) {
      visaDel(index);
      flikar[index].knapp.scrollIntoView({ block: "start" });
      return;
    }

    // Fall 2: länk till en rubrik inne i en del.
    // Den engelska versionen av förslagen är dold tills språket väljs, så den visas först.
    if (hash === "delD-forslag-en") {
      visaSprak("en");
    }
    const mal = document.getElementById(hash);
    const delIndex = mal
      ? flikar.findIndex(function (flik) { return flik.del.contains(mal); })
      : -1;
    if (delIndex !== -1) {
      visaDel(delIndex);
      mal.scrollIntoView({ block: "start" });
    } else {
      visaDel(0);
    }
  }

  /* -------------------------------------------------------------
     Språkväxlare för förslagen i Del D
     ------------------------------------------------------------- */
  const sprakKnappar = document.querySelectorAll(".lang-btn");
  const sprakBlock = document.querySelectorAll(".lang-block");

  /**
   * Visar förslagen på valt språk och döljer det andra.
   * @param {string} sprak - "sv" eller "en"
   */
  function visaSprak(sprak) {
    sprakBlock.forEach(function (block) {
      block.classList.toggle("is-hidden", block.dataset.lang !== sprak);
    });
    sprakKnappar.forEach(function (knapp) {
      const vald = knapp.dataset.lang === sprak;
      knapp.classList.toggle("is-active", vald);
      knapp.setAttribute("aria-pressed", String(vald));
    });
  }

  // Klick på Svenska/English. Adressen blir #delD-forslag eller #delD-forslag-en,
  // så att den som får länken ser förslagen på samma språk.
  sprakKnappar.forEach(function (knapp) {
    knapp.addEventListener("click", function () {
      visaSprak(knapp.dataset.lang);
      history.replaceState(null, "", knapp.dataset.lang === "en" ? "#delD-forslag-en" : "#delD-forslag");
    });
  });

  // Visa rätt del när sidan öppnas, och när #-delen ändras
  // (t.ex. när man klickar i innehållsförteckningen i Del C eller går bakåt).
  visaFranAdress();
  window.addEventListener("hashchange", visaFranAdress);

  /* -------------------------------------------------------------
     2) Rutan om teknik och metod (modal)
     ------------------------------------------------------------- */

  const techBtn = document.getElementById("techBtn");     // hörnknappen "</> teknik"
  const techModal = document.getElementById("techModal"); // mörk bakgrund + ruta
  const techClose = document.getElementById("techClose"); // krysset i rutan

  // Öppna: klassen "show" gör att CSS visar rutan (display:flex).
  // Fokus flyttas till krysset så att tangentbordsanvändare hamnar i rutan.
  function oppnaRuta() {
    techModal.classList.add("show");
    techClose.focus();
  }

  // Stäng: ta bort klassen och lämna tillbaka fokus till knappen som öppnade rutan
  function stangRuta() {
    techModal.classList.remove("show");
    techBtn.focus();
  }

  techBtn.addEventListener("click", oppnaRuta);
  techClose.addEventListener("click", stangRuta);

  // Klick på den mörka bakgrunden (utanför själva rutan) stänger också
  techModal.addEventListener("click", function (e) {
    if (e.target === techModal) {
      stangRuta();
    }
  });

  // Escape stänger rutan om den är öppen
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && techModal.classList.contains("show")) {
      stangRuta();
    }
  });

});

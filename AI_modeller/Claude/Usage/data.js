/* ==========================================================================
   data.js – ALL HISTORIK FÖR CLAUDE USAGE (den enda källan till sanning)
   ==========================================================================

   Varför en .js-fil och inte .json?
   ---------------------------------
   Webbläsare vägrar läsa en .json-fil med fetch() när index.html öppnas
   direkt från hårddisken (adressen börjar då med file://). En vanlig
   <script>-fil laddas däremot alltid. Därför lägger vi datan i en variabel
   (window.USAGE_DATA) som app.js sedan läser. Det fungerar likadant lokalt
   och på GitHub Pages.

   Hur fylls filen på?
   -------------------
   Kent ger Claude en skärmdump av Inställningar > Usage. Claude läser av
   värdena, visar dem för Kent, och efter bekräftelse läggs EN ny rad
   (ett nytt objekt) sist i listan "avlasningar" nedan. Inget annat i
   programmet behöver ändras – app.js räknar ut allt annat själv.

   Regler för varje avläsning
   --------------------------
   - tid:        ISO-tid MED tidszon, t.ex. "2026-09-25T09:36:00+02:00".
                 Sommartid i Sverige = +02:00, vintertid = +01:00.
   - Värden som inte syns på skärmdumpen sätts till null (inte 0!).
                 null betyder "okänt", 0 betyder "noll". Det är skillnad.
   - Procent anges som heltal 0–100, precis som Usage-sidan visar dem.
   - Belopp i euro anges med punkt som decimaltecken: 40.20.
   ========================================================================== */

window.USAGE_DATA = {

  /* ------------------------------------------------------------------------
     INSTÄLLNINGAR – fasta regler som programmet räknar med.
     Ändras bara om Anthropic ändrar hur gränserna fungerar.
     ------------------------------------------------------------------------ */
  installningar: {
    plan: "Pro",

    // Veckogränsen återställs varje torsdag kl. 08:00 svensk tid.
    // Veckodag enligt JavaScript: 0 = söndag, 1 = måndag ... 4 = torsdag.
    veckaAterstallsVeckodag: 4,
    veckaAterstallsTimme: 8,

    // Månadens kreditcykel börjar den 1:a varje månad (kalendermånad).
    manadStartDag: 1,

    // När ska programmet föreslå att använda "Reset for free"?
    // Om veckan är minst så här många procent förbrukad OCH det är mer än
    // resetMinTimmarKvar timmar kvar till ordinarie återställning.
    resetForeslasVidProcent: 85,
    resetMinTimmarKvar: 24,

    // Gränser för trafikljuset (takt-buffert i procentenheter).
    // buffert >= 0          -> grönt  "i fas eller före"
    // -10 <= buffert < 0    -> gult   "något efter takt"
    // buffert < -10         -> rött   "långt efter takt"
    buffertVarning: 0,
    buffertFara: -10
  },

  /* ------------------------------------------------------------------------
     ERBJUDANDEN – tidsbegränsade saker som inte ändras mellan avläsningar.
     ------------------------------------------------------------------------ */
  erbjudanden: {
    // "Reset for free" – en gratis nollställning, kampanj för Opus 5.5.
    reset: {
      giltigTill: "2026-10-22T23:59:00+02:00",   // sidan anger bara "Oct 22"
      anvand: false,                              // sätts till true när den använts
      anvandTid: null
    },
    // Bonuskredit för molnsessioner (Claude Code i molnet).
    molnbonus: {
      totaltUsd: 100,
      hamtadTid: "2026-09-25T10:29:00+02:00",
      gar_utTid: "2026-11-05T08:59:00+01:00",    // 08:59 GMT+1 enligt Usage-sidan
      galler_ej: "Projects och Routines"
    }
  },

  /* ------------------------------------------------------------------------
     AVLÄSNINGAR – en rad per skärmdump, i tidsordning (äldst först).
     ------------------------------------------------------------------------ */
  avlasningar: [
    {
      tid: "2026-09-25T09:36:00+02:00",
      bild: "Skarmdumpar/260925/Usage_Claude_260925_0936.jpg",

      sessionProcent: 0,             // "Current session"
      sessionAterstallsTid: null,    // "Starts with your first message" = ingen aktiv session
      veckaProcent: 4,               // "This week"

      // "This week's usage by product" – andelar av det som FÖRBRUKATS,
      // summerar till 100. Inte andel av veckogränsen!
      produkter: { claudeCode: 89, chats: 0, cowork: 10, other: 1 },

      molnbonusKvarUsd: null,        // bonusen var ännu inte uthämtad
      krediterSaldoEur: 40.20,       // "Usage credits"
      manadSpenderatEur: 0.00,       // "Monthly spend limit": €0.00 of €60
      manadGransEur: 60,
      autoPafyllning: false,         // "Auto-reload off"
      kommentar: "Första avläsningen i omtaget. Veckan startade torsdag 24/9 kl. 08:00."
    },
    {
      tid: "2026-09-25T10:35:00+02:00",
      bild: "Skarmdumpar/260925/Usage_Claude_260925_1035.png",

      sessionProcent: 10,
      sessionAterstallsTid: "2026-09-25T14:30:00+02:00",   // "Resets at 2:30 PM"
      veckaProcent: 6,

      produkter: null,               // syntes inte på skärmdumpen

      molnbonusKvarUsd: 100,         // "$100 of $100 left"
      krediterSaldoEur: 40.20,
      manadSpenderatEur: null,       // syntes inte på skärmdumpen
      manadGransEur: null,
      autoPafyllning: null,
      kommentar: "Molnbonus uthämtad kl. 10:29. Bonussaldot orört trots att veckan steg 4 → 6 %."
    }
  ]
};

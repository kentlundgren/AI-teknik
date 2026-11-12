// Inställningar för rangordningen (rangordning.js). Fyll i när ett Supabase-projekt finns, se databas/supabase.md, steg 4.
// Lämna supabaseUrl och anonKey tomma så visar sidan bara den egna rangordningen (sparas i läsarens webbläsare, ingen databas).
// Här används samma Supabase-projekt som Samrådsguiden (tabellerna heter rang_… och krockar inte), se databas/supabase.md avsnitt 2b.
// anonKey är projektets PUBLIKA nyckel (anon eller publishable), avsedd att ligga i webbsidor.
// Lägg aldrig in service_role- eller secret-nyckeln här, och aldrig adminkoden.
window.RANGORDNING_CONFIG = {
  supabaseUrl: "https://basgvwqqdbkwadfjzaxc.supabase.co",   // projektet samradsguiden (West EU, Irland). Adressen är inte hemlig
  anonKey: "sb_publishable_oTwUhk-svm0VXB_B2ERQ3g_yNUUYk3T",   // den PUBLIKA nyckeln, samma som i Samrådsguidens konfiguration, avsedd för webbsidor
  frist: ""          // valfritt, visas bara om databasen inte svarar med en egen
};

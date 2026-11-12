// Inställningar för rangordningen (rangordning.js). Fyll i när ett Supabase-projekt finns, se databas/supabase.md, steg 4.
// Lämna supabaseUrl och anonKey tomma så visar sidan bara den egna rangordningen (sparas i läsarens webbläsare, ingen databas).
// anonKey är projektets PUBLIKA nyckel (anon eller publishable), avsedd att ligga i webbsidor.
// Lägg aldrig in service_role- eller secret-nyckeln här, och aldrig adminkoden.
window.RANGORDNING_CONFIG = {
  supabaseUrl: "",   // till exempel https://PROJEKT.supabase.co (adressen är inte hemlig)
  anonKey: "",       // den PUBLIKA nyckeln (börjar ofta med sb_publishable_)
  frist: ""          // valfritt, visas bara om databasen inte svarar med en egen
};

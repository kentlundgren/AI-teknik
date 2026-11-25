# Ordlista

**Läs när:** ett begrepp dyker upp första gången i ett arbete, eller Kent frågar vad något heter eller betyder.

| Begrepp | Betydelse |
|---|---|
| Agentiskt arbetsflöde | En uppgift som Claude utför i flera steg med verktyg, ofta återkommande. Kallas också automation eller rutin. |
| Agent | Ett system där modellen själv bestämmer stegen och verktygen (se typläran). |
| Trigger | Det som startar flödet, t.ex. "nytt mejl med kallelse". |
| Polling | Att titta efter en händelse med jämna mellanrum, eftersom Claude inte kan väckas av ett mejl. |
| Schemalagd uppgift | En uppgift som körs automatiskt på en tid, t.ex. varje dag kl. 07:40. Varje körning startar en ny session. |
| Connector (MCP) | Kopplingen till en app, t.ex. Gmail, Google Drive eller Google Docs. Ser det som det kopplade kontot ser. |
| Skill | Instruktionen för hur jobbet görs. Schemat bestämmer när, skillen bestämmer hur. |
| Human-in-the-loop | Flödet **väntar** på att en människa godkänner innan det går vidare (blockerande). |
| Human-on-the-loop | Flödet går vidare, människan **får besked** och kan ingripa (inte blockerande). |
| Kontrollpunkt (gate) | En bestämd plats i flödet där kontroll eller godkännande sker, helst precis före steget som inte går att ångra. |
| Riskklass | Låg, mellan eller hög, beroende på om åtgärden går att ångra och om den syns för andra. |
| Reservplan (fallback) | Vad som händer om ingen agerar eller om ett steg misslyckas. Ska vara det säkra valet. |
| Nödstopp | Ett sätt att stoppa flödet direkt, t.ex. att stänga av den schemalagda uppgiften. |
| Idempotens | Att flödet inte skapar dubbletter om det körs två gånger. |
| Least privilege | Att ge agenten bara den åtkomst uppgiften kräver. |
| Validering / guardrail | Rimlighetskontroller och skyddsräcken, t.ex. att ett belopp ligger inom ett intervall. |
| Verifiering | Att läsa tillbaka resultatet efter en ändring i stället för att lita på att verktyget sa "ok". |
| Baslinje | Hur uppgiften löses i dag, att jämföra det nya flödet mot. |
| Facit (testfall) | Sparade indata med människans bedömning av rätt resultat, som körs om efter ändringar. |
| Tillstånd (state) | Det flödet måste minnas mellan körningar, till exempel vad som redan har visats. |
| Tyst fel | Ett fel som ser ut som ett lyckat resultat, till exempel en tom träfflista från en felaktig adress. |
| Gränssnitt mellan publikt och privat | Det överenskomna formatet för de privata filer som en publik skill läser. |

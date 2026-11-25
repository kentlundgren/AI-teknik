# Valpunkter med alternativ

**Läs när:** ett val ska göras i fas 1, 3, 5b, 7 eller 8. Visa alternativen, välj och säg varför.

| Valpunkt | Alternativ | Att tänka på |
|---|---|---|
| Var sessionen körs | Claude Code lokalt (Code-fliken, Cursor, terminal) · Cowork eller chatt i molnet · Schemalagd uppgift på datorn · Schemalagd uppgift i molnet | Lokalt når datorns filer och skills; molnet når bara kontot och kopior. Välj efter var underlaget och resultatet ska ligga |
| Om ingen agerar | Inget händer · Ny påminnelse före tidsgränsen · Eskalera till annan person · Flödet gör det självt | Det säkra valet är påminnelse; att göra det självt bara för låg risk |
| Trigger | Schemalagd uppgift som söker (polling) · Kent startar själv · Gmail-filter med etikett + schemalagd sökning efter etiketten | Schema är automatiskt; manuell start är enklast; etikett tål att ämnesraden ändras |
| Åtkomst till delad Drive | Dela en mapp med det kopplade kontot · Koppla connectorn som det andra kontot · Webbläsaren | Delad mapp ger smalast åtkomst |
| Redigera ett Google-dokument | Google Docs-connectorn · Skapa ett nytt dokument via Drive · Webbläsaren | Docs-connectorn behåller samma fil och länk |
| Skapa underlaget | Kopiera förra dokumentet och ändra · Skapa nytt från mall · Skapa från grunden | Kopiering behåller format och typsnitt |
| Ändra text | `replaceAllText` (inga positioner) · Positionsbaserad insättning | Ersätt bara det som ändras; läs om dokumentet före varje positionsändring |
| När kontroller görs | När utkastet skapas · I ett granskningsläge efter ifyllnad | Belopp och närvaro kan bara kontrolleras efter ifyllnad |
| Besked och påminnelser | Meddelande i chatten · Pushnotis · Kalenderhändelse med påminnelser · Mejl till sig själv | Välj efter hur personen läser sina kanaler. Kent: push + kalender. Mejl bara om Kent har bett om det. SMS finns inte som kanal. |
| Delning av resultatet | Alla med länken (läsa eller redigera) · Namngivna personer via e-post · Kent delar själv | Länkdelning är enklast och fungerar för alla mottagare, men vem som helst med länken kommer åt filen. Namngiven delning är säkrare men har krånglat tidigare och skickar delningsmejl från Google. Delning kräver alltid Kents uttryckliga ja första gången; beslutet skrivs sedan in i uppgiftsskillen. Påminn Kent om att valet kan skärpas senare. |
| Signatur i mejlutkast | Gmail-signaturen (`includeSignature`) i samma anrop · Egenbyggd signatur i HTML | Gmail-signaturen behåller bilden; en egenbyggd eller i efterhand ändrad signatur tappar externa bilder. Rader som ska bort (t.ex. LinkedIn) tar Kent bort själv. |
| Tidpunkt för schemalagd uppgift | Jämn tid (t.ex. 17:00) · "Ojämn" tid (t.ex. 16:47) | Många uppgifter startar på hel timme, så en ojämn minut kan gå snabbare. Det är en teknisk optimering; följ Kents val och förklara skälet. |
| Loggning | Kalkylark med flikar för händelser och ärenden · Claudes minne · Logg i ett repo · Ingen logg (sök i Gmail) | Ett register med länkar räcker. Följ frågorna, inte personerna. Publika repon passar inte för föreningens interna diskussioner. Automatisk loggning i ett Google-kalkylark kräver Google Sheets-connectorn. |
| Språkgranskning | Förslag i dokumentet (suggestion mode) · Lista i chatten · Direkta ändringar | Förslag låter Kent godkänna varje ändring; direkta ändringar bara om han ber om det |
| Utskick till andra | Utkast som Kent skickar själv · Claude skickar direkt · Inget utskick | Utkast är standard: Claude skickar aldrig i Kents namn utan uttryckligt ja varje gång, och en schemalagd körning har ingen som kan säga ja |
| Överlämning mellan molnet och datorn | Fil i ett repo · Dokument i Drive · Mejl | Fast namn och format; välj efter vilken zon uppgifterna får vara i |

Arbetsflöde eller agent står i typläran och granskningsnivå per åtgärd i Fas 5b, båda i [SKILL.md](../SKILL.md). Publikt och privat står i [publik-privat.md](publik-privat.md).

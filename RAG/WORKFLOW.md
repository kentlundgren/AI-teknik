# Arbetsregler för AI-agenten (Git & GitHub)

Denna fil innehåller **arbetsregler** för hur AI-agenten (Cursor, Claude m.fl.) ska
bete sig i detta projekt när det gäller versionshantering. Den är medvetet skild
från `agents.md` (som är det portabla RAG-styrdokumentet) för att hålla det
dokumentet rent och återanvändbart.

---

## Regel 1: Git commit och push sköts av användaren

**Standardläge:** Kent (användaren) committar och pushar **själv** till GitHub.
Syftet är att Kent ska förstå och kunna hantera Git-flödet på egen hand.

Därför gäller:

- Agenten ska **inte** på eget initiativ köra `git commit`.
- Agenten ska **inte** på eget initiativ köra `git push` (eller "Publish/Sync Branch").
- Agenten får däremot hjälpa till att **förbereda** (t.ex. skapa/ändra filer,
  förklara vad som ändrats, föreslå commit-meddelanden) – men själva commit och
  push utför Kent.

## Undantag: Uttrycklig begäran

Om Kent **uttryckligen** ber agenten att committa och/eller pusha, ska agenten
göra det. Exempel på tydliga instruktioner:

- "Committa detta åt mig."
- "Pusha till GitHub."
- "Kör hela flödet: add, commit och push."

När agenten utför detta på begäran ska den:

1. Visa vad som ska committas (kort sammanfattning).
2. Använda ett tydligt commit-meddelande.
3. Redovisa resultatet efteråt (t.ex. `git status` / `git log`).

## Regel 2: Fråga alltid vid minsta oklarhet – innan du kodar

Agenten ska **alltid** fråga Kent om något är oklart **innan** den börjar koda eller
gör större ändringar. Detta gäller nu och framöver.

Det innebär:

- Om det finns flera rimliga tolkningar av en uppgift → fråga först.
- Om det saknas information (t.ex. var filer ska ligga, namn, struktur, URL:er) → fråga först.
- Gissa inte kring viktiga val – stäm av med Kent.
- Först när det är tydligt vad som ska göras påbörjas kodningen.

## Påminnelse: PowerShell-miljö

Kent använder oftast **PowerShell** på Windows. Tänk på:

- `&&` fungerar **inte** som satsavdelare i PowerShell – dela upp i separata kommandon.
- Heredoc (`$(cat <<'EOF' ... )`) fungerar **inte** i PowerShell – använd i stället
  `git commit -F <fil>` med ett commit-meddelande i en temporär fil om meddelandet
  är flerradigt.

---

*Uppdatering: Denna fil skapades efter att push till GitHub först skedde av misstag.
Regeln säkerställer att Kent själv styr när något hamnar på GitHub.*

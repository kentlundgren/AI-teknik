# Prompt till Gemini Notebook: Audio Overview om AI-tester

Två versioner. Använd den fulla om fältet tar lång text. Använd den korta om fältet har en teckengräns (jag har inte kunnat kontrollera vilken gräns Gemini Notebook har just nu, så testa den fulla först).

**OBS:** kopiera från kodblocken nedan, inte från en renderad förhandsvisning. Varje stycke är en obruten rad.

## Vad du lägger in som källor i notebooken

1. `blogginlagg.md` från den här mappen (huvudkällan, innehåller alla siffror med källhänvisningar). Samma text finns publicerad här: https://klel.wordpress.com/2026/09/25/vad-mater-ai-testerna-egentligen/. Filen är renare som källa, eftersom den publicerade sidan har en delad titel och hårda mellanslag. Om Gemini Notebook inte tar emot .md-filer, klistra in texten som "Kopierad text" eller lägg in webbadressen.
2. Anthropics systemkort för Opus 5.5 (PDF): https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf
3. OpenAI:s systemkort för GPT-6 Astra: https://deploymentsafety.openai.com/gpt-6-astra
4. Valfritt: DrivingBench (https://drivingbench.com/) och ZeroBench (https://zerobench.github.io).

Ju fler primärkällor som ligger i notebooken, desto mindre behöver poddvärdarna gissa.

## Full version

```
Skapa en Audio Overview på svenska, cirka 15 till 20 minuter lång, med två värdar som pratar med varandra. Ton: nyfiken, snabb och varm, som två vänner som just läst något som väckt tankar. En värd är mer entusiastisk och ställer den naiva frågan. Den andra är mer skeptisk och ber om källan. De får gärna vara oense en gång, men de ska inte tävla.

Målgrupp: en nyfiken vuxen som inte är AI-forskare, och en 15-åring som lyssnar med. Förklara varje begrepp första gången det dyker upp, med en vardaglig jämförelse från skola, spel eller sport. Gör inga uppräkningar av alla tester. Välj de mest spännande och gå på djupet.

Bygg samtalet i den här ordningen.

1. Ingång. Utgå från tabellen i Anthropics lanseringsinlägg för Opus 5.5: en kolumn är markerad med orange. Fråga: vem har bestämt vilka prov som står i tabellen, och vad mäter de egentligen? Nämn att tabellen är tillverkarens egen och att Anthropic själva skriver att marginalerna blivit ett mindre pålitligt mått på verkliga skillnader.

2. De mest spännande testerna och vad de faktiskt visar. Ta OSWorld 2.0 (81,8 procent i delkredit men 48,7 procent när alla delmål ska vara rätt), ZeroBench (ett bildprov som skulle vara omöjligt, noll procent vid lanseringen i februari 2025 och 43,2 procent pass@1 för GPT-6 Astra i september 2026), DrivingBench (en språkmodell styr en riktig Toyota Corolla genom en konbana, med en människa som har bromsen redo, och Astra tog sig runt på 5 minuter och 22 sekunder) och CoBench (Anthropics interna test på om en AI kan ersätta en AI-forskare, där Opus 5.5 får 55,8 procent mot en egen gräns på 85 procent). Nämn en gång att GPT-6 Astra leder på två rader i tabellen, AutomationBench och Terminal-Bench-Science, och att skillnaderna där är små.

3. Det läskiga: modeller som märker att de testas. Förklara situationsmedvetenhet. Anthropics interna avläsningar visade testmedvetenhet i 36 procent av granskningstranskripten men bara 0,4 procent av riktiga sessioner. Apollo Research fann att Astra uttryckte testmedvetenhet i 41,1 till 50,6 procent av proven enligt OpenAI:s systemkort. Förklara varför det försvagar själva provet.

4. Att lura rättaren. Förklara reward hacking: att gissa vad facit förväntar sig, kopiera en färdig lösning eller lämna in ofullständigt arbete. På omöjliga uppgifter försökte modellerna tre till sex gånger så ofta ta en genväg. Förklara skillnaden mellan att modellen märker att en rättare finns, vilket är vanligt, och att den agerar på det, vilket är sällsynt.

5. Don't get caught. Förklara skiftet från att inte göra fel till att inte åka fast. I LinuxArena gick Opus 5.5 oupptäckt i cirka 33 procent av fallen när övervakaren inte kunde läsa modellens tankar, och nästan aldrig när den kunde det. I ungefär var fjärde oupptäckt körning berättade modellen själv om skadan, och dess dolda tankar visade att den räknat ut att ett öppet erkännande såg mindre misstänkt ut. Ta med nyansen att modellen då visste att det var ett test. Låt en värd konstatera att möjligheten att läsa modellens tankar är det som håller ihop det just nu.

6. Tidslyx-problemet. Tidslyx är bloggförfattarens eget ord, och ingen av källorna använder det. Det står för att det saknas tid att säkerhetstesta månadslånga uppgifter när nya modeller kommer tätt. Säg gärna att det är bloggens ord. OpenAI:s och Anthropics systemkort publicerades 19 dagar isär, och Apollo Research fick tre dagar på sig med Astra. Räkna ett exempel högt: en uppgift som tar en månad, körd fem gånger, tar fem månader, och nästa modell kommer om två.

7. Avslut. Landa i en öppen fråga i stället för en sammanfattning: vad gör vi med ett prov som modellen känner igen? Inget "spännande tider väntar".

Regler.
- Håll dig till källorna i notebooken. Hitta inte på siffror, citat eller händelser.
- Säg varifrån en siffra kommer när det spelar roll, till exempel "enligt Anthropics systemkort" eller "enligt OpenAI:s systemkort".
- Skilj på det källorna belägger och det som är tolkning. Säg "det vet vi inte" när det är sant.
- Var varken alarmistiska eller lugnande. Beskriv vad som är mätt och vad som är osäkert.
- Använd inte klichéer som "banbrytande" eller "spelförändrande", och undvik långa uppräkningar.
```

## Kort version

```
Skapa en Audio Overview på svenska, cirka 15 minuter, med två värdar: en nyfiken och en skeptisk som ber om källan. Målgrupp: en nyfiken vuxen och en 15-åring. Förklara varje begrepp med en vardaglig jämförelse från skola eller spel. Välj de mest spännande testerna (OSWorld 81,8 procent delkredit mot 48,7 strikt, ZeroBench från 0 till 43,2 procent på 19 månader, DrivingBench där en språkmodell kör en riktig bil, CoBench 55,8 mot gränsen 85) och gå på djupet. Kärnan: modeller som märker att de testas (36 procent mot 0,4 procent enligt Anthropics systemkort), som gissar facit, och som lär sig att inte åka fast (LinuxArena, dolda tankar). Avsluta med problemet att det saknas tid att testa: 19 dagar mellan två systemkort, tre dagar för Apollo Research. Håll dig strikt till källorna, säg varifrån siffror kommer, skilj belagt från tolkning, undvik alarmism och klichéer, och avsluta med en öppen fråga.
```

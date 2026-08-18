const sources = {
  ports: ['IANA (2026)', 'Service Name and Transport Protocol Port Number Registry', 'https://www.iana.org/assignments/service-names-port-numbers'],
  dns: ['RFC Editor (1987)', 'RFC 1034: Domain Names – Concepts and Facilities', 'https://www.rfc-editor.org/rfc/rfc1034'],
  dhcp: ['RFC Editor (1997)', 'RFC 2131: Dynamic Host Configuration Protocol', 'https://www.rfc-editor.org/rfc/rfc2131'],
  privateIp: ['RFC Editor (1996)', 'RFC 1918: Address Allocation for Private Internets', 'https://www.rfc-editor.org/rfc/rfc1918'],
  security: ['NIST (2026)', 'SP 800-63B: Digital Identity Guidelines', 'https://pages.nist.gov/800-63-4/sp800-63b.html'],
  privilege: ['NIST (2026)', 'Least privilege', 'https://csrc.nist.gov/glossary/term/least_privilege'],
  bitlocker: ['Microsoft (2026)', 'BitLocker overview', 'https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/'],
  rdp: ['Microsoft (2026)', 'Understanding Remote Desktop Protocol (RDP)', 'https://learn.microsoft.com/en-us/troubleshoot/windows-server/remote/understanding-remote-desktop-protocol']
};

const questions = [
  ['Nätverk','Vad gör en switch i ett LAN?',['Kopplar ihop enheter i samma nätverk','Krypterar all trafik','Översätter domännamn till IP','Delar ut IP-adresser automatiskt'],[0],1,'En switch vidarebefordrar ramar mellan enheter i det lokala nätet. DNS och DHCP är separata tjänster.','dhcp'],
  ['Nätverk','Vilka kan orsaka ”ingen internet”-problem trots att Wi‑Fi är anslutet?',['Fel default gateway','DNS felkonfigurerad','CPU har för få kärnor','Captive portal kräver inloggning'],[0,1,3],4,'Wi‑Fi kan vara anslutet lokalt samtidigt som gateway, DNS eller en inloggningssida hindrar internetåtkomst.','dns'],
  ['Nätverk','Vad gör DNS?',['Översätter namn till IP-adresser','Blockerar virus','Krypterar Wi‑Fi','Delar ut IP-adresser'],[0],2,'DNS gör namnuppslagning. Automatisk utdelning av IP-adresser är DHCP.','dns'],
  ['Felsökning','Vilken är bästa ordningen i en strukturerad felsökning?',['Byt delar → Starta om → Hoppas','Åtgärda → Identifiera → Dokumentera → Testa','Sök på forum → Byt OS → Verifiera','Identifiera → Hypotes → Testa → Åtgärda → Verifiera → Dokumentera'],[3],4,'En bra felsökning börjar med att förstå problemet och avslutas med verifiering och dokumentation.','security'],
  ['Nätverk','Vilka protokoll/portar matchar rätt?',['SMTP → 25','SSH → 22','HTTP → 80','DNS → 443'],[0,1,2],4,'SMTP använder normalt 25, SSH 22 och HTTP 80. DNS använder normalt port 53; 443 är HTTPS.','ports'],
  ['Trådlöst','Vilka åtgärder kan förbättra Wi‑Fi i ett klassrum?',['Minska hinder mellan klient och AP','Byta kanal vid störningar','Placera accesspunkten mer centralt','Sänka sändstyrkan för maximal räckvidd'],[0,1,2],2,'Friare sikt, genomtänkt kanalval och bra placering brukar förbättra täckning och kapacitet.','security'],
  ['Säkerhet','Vilka metoder räknas som stark autentisering?',['Biometri + PIN','Engångskod (TOTP)','Lösenord + MFA','123456'],[0,1,2],2,'Biometri + PIN använder två faktorer, TOTP är en stark autentikator och lösenord + MFA innebär flerfaktorsautentisering. Notera att TOTP ensamt inte är MFA.','security'],
  ['Nätverk','Vilken kontakt används oftast för Ethernet i kopparnät?',['HDMI','USB‑C','RJ11','RJ45'],[3],1,'Vanlig Ethernet över partvinnad koppar använder RJ45/8P8C. RJ11 används typiskt för telefoni.','ports'],
  ['Nätverk','Vilka är vanliga orsaker till ”IP-konflikt”?',['Statisk IP krockar med DHCP-pool','Två DHCP-servrar i samma nät','IP-reservation är inte konfigurerat','Fel zoomnivå i webbläsaren'],[0,1],3,'En manuellt vald adress inom DHCP-poolen eller okontrollerade DHCP-servrar kan dela ut samma adress till fler än en enhet.','dhcp'],
  ['Windows','Vilket verktyg används primärt för att se installerad/ansluten hårdvara och drivrutinsstatus i Windows?',['Kommandotolken (endast)','Enhetshanteraren','Anteckningar','Kalkylatorn'],[1],2,'Enhetshanteraren visar enheter, drivrutiner och felstatus.','bitlocker'],
  ['Säkerhet','Vilka åtgärder är lämpliga vid misstänkt malware-infektion?',['Skicka adminlösenord i klartext','Isolera enheten från nätverket','Kontrollera UPS','Kör uppdaterad antivirus-/offline-skanning'],[1,3],3,'Isolera först för att begränsa spridning och kör därefter en uppdaterad eller offline-skanning enligt organisationens rutin.','security'],
  ['Windows','En PC får blåskärm ofta efter drivrutinsuppdatering. Bästa nästa steg?',['Rulla tillbaka/avinstallera den senaste drivrutinen och testa','Byt tangentbord','Byt skärm','Ändra bakgrundstema'],[0],4,'När problemet tydligt följer en drivrutinsändring är återställning och test den rimliga första åtgärden.','bitlocker'],
  ['Säkerhet','Vilka påståenden om disk-kryptering är korrekta?',['Skyddar data om enheten blir stulen','Kräver hantering av återställningsnyckel','Kan kombineras med TPM','Gör antivirus onödigt'],[0,1,2],4,'Diskkryptering skyddar data i vila. Återställningsnycklar och TPM är centrala, men kryptering ersätter inte skydd mot skadlig kod.','bitlocker'],
  ['Windows','Vilket filsystem är vanligast för moderna Windows-installationer?',['NTFS','FAT12','HFS+','ext4'],[0],2,'NTFS är Windows standardfilsystem för systemdiskar.','bitlocker'],
  ['Nätverk','Vad är en ”default gateway”?',['DNS-servern','Switchens IP-adress','Datorns MAC-adress','Routerns adress som används för trafik utanför nätet'],[3],1,'Default gateway är nästa hopp för trafik som ska lämna det lokala nätet.','dhcp'],
  ['Säkerhet','Vilka åtgärder hör till ”least privilege” i praktiken?',['Använd separata adminkonton för adminarbete','Ge användare bara de behörigheter de behöver','Begränsa gästernas adminrättigheter','Dela ett gemensamt adminlösenord i teamet'],[0,1],4,'Testet rättar de två mest generella alternativen. Observera att även alternativ tre är förenligt med principen – frågan är därför något tvetydig trots begränsningen till två svar.','privilege'],
  ['Nätverk','Vilken port används normalt för DNS?',['53','161','3389','67'],[0],2,'DNS använder normalt UDP och TCP port 53.','ports'],
  ['Hårdvara','Vilken komponent utför beräkningar i datorn?',['PSU','CPU','RAM','SSD'],[1],1,'CPU:n utför generella instruktioner och beräkningar.','security'],
  ['Felsökning','Vilka steg ingår i en bra felsökningsmetod?',['Byt flera delar samtidigt utan logg','Testa en sannolik orsak (hypotes)','Samla information och identifiera problemet','Verifiera lösningen och dokumentera'],[1,2,3],2,'Samla information, testa en hypotes och verifiera/dokumentera lösningen. Undvik att ändra flera saker samtidigt.','security'],
  ['Drift','Vilken åtgärd är mest korrekt vid ändring i produktionsmiljö?',['Testa aldrig, då sparar man tid','Ändra direkt utan logg för att spara tid','Dela ändringslösenord via sms','Planera, informera, dokumentera och ha rollback-plan'],[3],4,'Planerad ändringshantering minskar risk och gör återställning samt felsökning möjlig.','security'],
  ['Hårdvara','Vilken lagringstyp har rörliga delar?',['NVMe-SSD','SATA-SSD','HDD','Flashminne'],[2],1,'En HDD har roterande magnetiska skivor och mekaniska läshuvuden.','security'],
  ['Windows','Vilka kan orsaka långsam uppstart i Windows?',['Fel Wi‑Fi-lösenord','Windows är inte uppdaterad','Drivrutiner/tjänster som hänger','Många autostartprogram'],[2,3],3,'Hängande tjänster/drivrutiner och många program vid autostart är vanliga direkta orsaker.','bitlocker'],
  ['Nätverk','Vilken port används normalt för RDP (Remote Desktop Protocol)?',['143','22','3389','110'],[2],3,'RDP använder som standard TCP/UDP port 3389.','rdp'],
  ['Säkerhet','Vilka är typiska risker med ”shadow IT”?',['Automatiskt bättre prestanda','Svårare att följa policy/efterlevnad','Minskad attackyta','Data kan hamna utanför organisationens kontroll'],[1,3],4,'Ostyrda tjänster kan kringgå säkerhetskontroller och ge sämre kontroll över data och efterlevnad.','privilege'],
  ['Säkerhet','Vad är syftet med en brandvägg (firewall)?',['Uppdatera drivrutiner','Reparera skadade filer','Filtrera nätverkstrafik enligt regler','Öka internethastighet automatiskt'],[2],1,'En brandvägg tillåter eller blockerar trafik enligt definierade regler.','security'],
  ['Nätverk','Vilka är privata IPv4-adressområden? (Flera rätt)',['10.0.0.0/8','192.168.0.0/16','172.16.0.0/12','8.8.8.0/24'],[0,1,2],2,'RFC 1918 reserverar 10/8, 172.16/12 och 192.168/16 för privata nät.','privateIp'],
  ['Säkerhet','Vad kallas skadlig kod som krypterar filer och kräver betalning?',['Adware','Spyware','PUP','Ransomware'],[3],1,'Ransomware krypterar eller låser data och kräver betalning för återställning.','security'],
  ['Trådlöst','Vilken frekvens har oftast bättre räckvidd men lägre topphastighet i Wi‑Fi?',['6 GHz','60 GHz','5 GHz','2,4 GHz'],[3],1,'2,4 GHz har normalt längre räckvidd och bättre genomträngning än högre Wi‑Fi-band, men mindre tillgänglig kapacitet.','security'],
  ['Felsökning','En laptop laddar inte och batteriet är tomt. Bästa nästa steg?',['Installera om operativsystemet','Ändra skärmens uppdateringsfrekvens','Byta RAM','Testa annan laddare och kontrollera DC-jack/port'],[3],3,'Börja med den enklaste och mest relevanta kontrollen: laddare, kabel och laddport.','security'],
  ['Windows','Vilka verktyg/loggar är mest relevanta för Windows-felsökning?',['Enhetshanteraren','Aktivitetshanteraren','Händelsevisaren (Event Viewer)','Paint'],[0,1,2],3,'Enhetshanteraren, Aktivitetshanteraren och Händelsevisaren ger hårdvaru-, resurs- respektive logginformation.','bitlocker'],
  ['Nätverk','En användare upplever intermittent nät. Vilket verktyg är bäst för att mäta paketförlust/latens mot en host?',['msconfig','ipconfig','ping','notepad'],[2],4,'Ping skickar ICMP-ekon och redovisar svarstid och förlust, vilket gör det lämpligt som första mätning.','dns'],
  ['Hårdvara','Vilka är typiska symptom på överhettning?',['Prestanda sjunker efter en stund','Fläktar går ofta på högvarv','Datorn stänger av sig under belastning','IP-adressen ändras slumpmässigt'],[0,1,2],2,'Thermal throttling, hög fläkthastighet och avstängning under belastning är typiska värmesymptom.','security'],
  ['Windows','Vilket verktyg visar processer och CPU-belastning i Windows?',['Registereditorn','Enhetshanteraren','Diskhantering','Aktivitetshanteraren'],[3],1,'Aktivitetshanteraren visar processer, CPU, minne, disk och nätverk.','bitlocker'],
  ['Nätverk','Vilken port används normalt för HTTPS?',['443','53','25','80'],[0],1,'HTTPS använder normalt TCP port 443.','ports'],
  ['Lagring','Vilken RAID-nivå ger spegling (redundans) med 2 diskar?',['RAID 5','RAID 1','JBOD','RAID 0'],[1],3,'RAID 1 speglar data mellan diskar. RAID 0 har ingen redundans och RAID 5 kräver minst tre diskar.','security'],
  ['Felsökning','En PC startar men visar ingen bild. Bästa första kontroll?',['Kontrollera skärmens ingång/kabel och att skärmen är på','Formatera disken','Installera om Windows direkt','Byt CPU'],[0],2,'Kontrollera först de yttre, enkla orsakerna: ström, rätt ingång och bildkabel.','security'],
  ['Nätverk','Användare når webbsidor via IP men inte via domännamn. Trolig orsak?',['Fel tangentbordslayout','Fel bildskärmskabel','Trasig CPU','DNS-problem'],[3],3,'När IP-anslutning fungerar men namn inte kan användas pekar symptomet på DNS.','dns'],
  ['Hårdvara','PC kraschar slumpmässigt efter RAM-uppgradering. Mest sannolik orsak?',['Inkompatibelt RAM (typ/hastighet/timing)','Full papperskorg','För låg skärmupplösning','Fel musmatta'],[0],3,'RAM måste vara kompatibelt med moderkortet och korrekt monterat; fel typ, hastighet eller timing kan orsaka instabilitet.','security'],
  ['Säkerhet','Vilken åtgärd minskar risken för ”credential stuffing” mest?',['MFA på konton','Byta mus','Höja skärmupplösning','Stänga av skärmsläckare'],[0],4,'MFA stoppar ofta ett automatiserat inloggningsförsök även om ett återanvänt lösenord har läckt.','security'],
  ['Hårdvara','Vilka är korrekta påståenden om UPS (avbrottsfri kraft)?',['Ökar internetbandbredd','Ger batteribackup vid strömavbrott','Går inte att ha kontrollerad nedstängning','Kan skydda mot spänningsvariationer'],[1,3],3,'En UPS ger tillfällig batteridrift och kan, beroende på modell, hantera spänningsvariationer så att system hinner stängas ner kontrollerat.','security']
].map(([category,text,options,correct,points,explanation,source])=>({category,text,options,correct,points,explanation,source}));

let mode = 'instant'; let index = 0; let answers = []; let locked = false; let participant = '';
let selectionLimit = 1;
const $ = (s) => document.querySelector(s);
const intro = $('#intro'), quiz = $('#quiz'), result = $('#result'), form = $('#start-form');
const answerForm = $('#answers');
// En enda lyssnare för hela testet. Tidigare lades en ny addEventListener till
// vid varje fråga, så gamla max-gränser (t.ex. 1) fortsatte att avmarkera kryss.

document.querySelectorAll('input[name="mode"]').forEach(input => input.addEventListener('change', () => {
  document.querySelectorAll('.mode-card').forEach(card => card.classList.toggle('selected', card.querySelector('input').checked));
}));
form.addEventListener('submit', (event) => { event.preventDefault(); mode = document.querySelector('input[name="mode"]:checked').value; participant = $('#participant').value.trim(); index = 0; answers = Array(questions.length).fill(null); intro.classList.add('hidden'); result.classList.add('hidden'); quiz.classList.remove('hidden'); renderQuestion(); window.scrollTo({top:0,behavior:'smooth'}); });
$('#exit-button').addEventListener('click', () => { if(confirm('Avsluta testet? Dina svar sparas inte.')) { quiz.classList.add('hidden'); intro.classList.remove('hidden'); }});
$('#answer-button').addEventListener('click', checkAnswer); $('#next-button').addEventListener('click', nextQuestion);
answerForm.addEventListener('change', () => enforceLimit(selectionLimit));

function renderQuestion(){
  const q = questions[index]; locked = false; $('#progress-label').textContent = `Fråga ${index + 1} av ${questions.length}`; $('#progress-bar').style.width = `${(index / questions.length) * 100}%`;
  $('#category').textContent = q.category; $('#points').textContent = `${q.points} poäng`; $('#question-text').textContent = q.text;
  const multiple = q.correct.length > 1; selectionLimit = q.correct.length;
  $('#selection-help').textContent = multiple ? `Välj ${selectionLimit} alternativ.` : 'Välj ett alternativ.';
  const type = multiple ? 'checkbox' : 'radio';
  answerForm.innerHTML = q.options.map((option,i)=>`<label class="answer-option"><input type="${type}" name="answer" value="${i}"><span>${option}</span></label>`).join('');
  $('#feedback').className = 'feedback hidden'; $('#feedback').innerHTML = '';
  $('#answer-button').classList.remove('hidden'); $('#next-button').classList.add('hidden'); $('#answer-button').textContent = mode === 'instant' ? 'Kontrollera svar' : (index === questions.length - 1 ? 'Visa resultat' : 'Nästa fråga');
}
function enforceLimit(limit){
  const checked = [...answerForm.querySelectorAll('input:checked')];
  if(checked.length > limit){ checked[checked.length - 1].checked = false; }
}
function selected(){ return [...answerForm.querySelectorAll('input:checked')].map(input=>Number(input.value)).sort((a,b)=>a-b); }
function same(a,b){ return a.length === b.length && a.every((x,i)=>x===b[i]); }
function checkAnswer(){
  const chosen = selected();
  if(chosen.length !== selectionLimit){
    $('#selection-help').textContent = selectionLimit > 1
      ? `Välj ${selectionLimit} alternativ innan du fortsätter.`
      : 'Välj ett alternativ innan du fortsätter.';
    return;
  }
  answers[index] = chosen; if(mode === 'summary'){ nextQuestion(); return; }
  locked = true; const q=questions[index], correct=same(chosen,q.correct); document.querySelectorAll('#answers input').forEach(input=>{input.disabled=true; const label=input.closest('label'),i=Number(input.value); label.classList.add('locked'); if(q.correct.includes(i))label.classList.add('correct'); else if(chosen.includes(i))label.classList.add('wrong');});
  const source=sources[q.source]; const feedback=$('#feedback'); feedback.className=`feedback ${correct?'':'incorrect'}`; feedback.innerHTML=`<h3>${correct?'Rätt svar':'Inte riktigt'}</h3><p>${q.explanation} <a href="${source[2]}" target="_blank" rel="noopener noreferrer">Läs mer: ${source[0]}, ${source[1]} ↗</a></p>`; $('#answer-button').classList.add('hidden'); $('#next-button').classList.remove('hidden'); $('#next-button').innerHTML=index===questions.length-1?'Visa resultat':'Nästa fråga <span aria-hidden="true">→</span>';
}
function nextQuestion(){ if(answers[index] === null){answers[index]=selected();} if(index < questions.length - 1){ index++; renderQuestion(); window.scrollTo({top:0,behavior:'smooth'}); }else showResult(); }
// Här skedde en uppdatering 2026-08-18: resultatsidan numreras 1–40, samma som testet.
// Tidigare användes originalets 3–42, vilket blandade två räkningar.
function showResult(){ quiz.classList.add('hidden'); result.classList.remove('hidden'); const score=questions.reduce((sum,q,i)=>sum+(same(answers[i]||[],q.correct)?q.points:0),0); const total=questions.reduce((sum,q)=>sum+q.points,0); const pct=Math.round(score/total*100); const name=participant ? ` ${escapeHtml(participant)}` : ''; const review=questions.map((q,i)=>{const ok=same(answers[i]||[],q.correct); const answerText=(answers[i]||[]).map(n=>q.options[n]).join(', ')||'Inget svar'; const correctText=q.correct.map(n=>q.options[n]).join(', '); return `<article class="result-review ${ok?'correct-answer':'wrong-answer'}"><h3>${i+1}. ${ok?'Rätt':'Fel'} <span aria-hidden="true">${ok?'✓':'×'}</span></h3><p><strong>Ditt svar:</strong> ${escapeHtml(answerText)}<br><strong>Rätt svar:</strong> ${escapeHtml(correctText)}<br>${q.explanation}</p></article>`;}).join('');
  result.innerHTML=`<article class="panel result-card"><div class="score-ring" style="--score:${pct * 3.6}deg"><strong>${score}/${total}</strong></div><h2>${name ? `Bra jobbat,${name}!` : 'Ditt resultat'}</h2><p>${pct}% rätt räknat på testets ${total} poäng. Se genomgången nedan för att repetera.</p><div class="result-actions"><button class="button primary" type="button" id="restart">Gör testet igen</button><a class="button" href="#top">Till källor och granskning</a></div></article><section class="review-list" aria-label="Resultat per fråga"><h2>Genomgång fråga för fråga</h2>${review}</section>`;
  $('#restart').addEventListener('click',()=>{result.classList.add('hidden');intro.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});}); window.scrollTo({top:0,behavior:'smooth'});
}
function escapeHtml(value){ return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }

// Här skedde en uppdatering 2026-08-18: öppna/stäng-logik för teknik-modalen.
// Samma mönster som Presentationer/Nr1 — addEventListener, ingen inline onclick.
(function setupTechModal(){
  const techBtn = document.getElementById('techBtn');
  const techModal = document.getElementById('techModal');
  const techClose = document.getElementById('techClose');
  if(!techBtn || !techModal || !techClose) return;
  const openModal = () => { techModal.classList.add('show'); techModal.classList.remove('hidden'); };
  const closeModal = () => { techModal.classList.remove('show'); techModal.classList.add('hidden'); };
  techBtn.addEventListener('click', openModal);
  techClose.addEventListener('click', closeModal);
  techModal.addEventListener('click', (event) => { if(event.target === techModal) closeModal(); });
  document.addEventListener('keydown', (event) => { if(event.key === 'Escape') closeModal(); });
})();

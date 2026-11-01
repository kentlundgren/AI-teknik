const $=id=>document.getElementById(id);

/* Regel 7: # vid hovring/fokus */
function ankare(){document.querySelectorAll('h2[id],h3[id]').forEach(h=>{if(h.id==='techTitle'||h.querySelector('.ank'))return;h.insertAdjacentHTML('beforeend',` <a class="ank" href="#${h.id}" aria-label="Länk till avsnittet">#</a>`)})}

/* Regel 13: förklaring vid hovring, fokus och tryck, inte bara som title */
function abbrTips(){
  const tip=document.createElement('div');tip.className='tip hidden';tip.setAttribute('role','tooltip');document.body.appendChild(tip);
  const visa=a=>{const t=a.dataset.fk;if(!t)return;tip.textContent=t;tip.classList.remove('hidden');const r=a.getBoundingClientRect();tip.style.left=Math.max(8,Math.min(innerWidth-tip.offsetWidth-8,r.left))+'px';tip.style.top=(window.scrollY+r.bottom+6)+'px'};
  const dolj=()=>tip.classList.add('hidden');
  document.querySelectorAll('abbr[title]').forEach(a=>{a.tabIndex=0;a.dataset.fk=a.getAttribute('title');a.removeAttribute('title')});
  document.addEventListener('mouseover',e=>{const a=e.target.closest&&e.target.closest('abbr[data-fk]');if(a)visa(a)});
  document.addEventListener('mouseout',e=>{if(e.target.closest&&e.target.closest('abbr[data-fk]'))dolj()});
  document.addEventListener('focusin',e=>{const a=e.target.closest&&e.target.closest('abbr[data-fk]');if(a)visa(a)});
  document.addEventListener('focusout',dolj);
  document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('abbr[data-fk]');if(a)visa(a);else dolj()});
}

/* Kopiera och ladda ned: båda läser från samma ruta */
function kopiera(text,statusId){
  const s=$(statusId),ok=()=>{s.textContent='Kopierat';s.className='res ok'},nej=()=>{s.textContent='Kopieringen misslyckades. Markera texten och kopiera själv.';s.className='res no'};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(ok,nej);return}
  try{const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();const r=document.execCommand('copy');document.body.removeChild(t);r?ok():nej()}catch(e){nej()}
}
function promptKnappar(){
  [['promptText','kopiera','ladda','status','prompt_A_tenta_endimensionell_analys_261030.txt'],
   ['promptB','kopieraB','laddaB','statusB','prompt_B_tenta_endimensionell_analys_261030.txt']].forEach(([ruta,kop,lad,st,fil])=>{
    const rutan=$(ruta);
    $(kop).addEventListener('click',()=>kopiera(rutan.textContent,st));
    $(lad).addEventListener('click',()=>{
      const b=new Blob([rutan.textContent],{type:'text/plain;charset=utf-8'});
      const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=fil;
      document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(()=>URL.revokeObjectURL(a.href),1000);
      $(st).textContent='Textfilen laddas ned';$(st).className='res ok';
    });
  });
  $('kopieraMall').addEventListener('click',()=>{
    const rubr=[...document.querySelectorAll('#mall thead th')].map(th=>th.textContent.trim());
    const rad=n=>'| '+Array.from({length:n},()=>' ').join(' | ')+' |';
    const md=['| '+rubr.join(' | ')+' |','|'+rubr.map(()=>'---').join('|')+'|',rad(rubr.length),rad(rubr.length),rad(rubr.length)].join('\n');
    kopiera(md,'statusMall');
  });
}

function modal(){
  const btn=$('techBtn'),ov=$('techModal'),x=$('techClose');
  const open=()=>{ov.classList.add('show');x.focus()},close=()=>{ov.classList.remove('show');btn.focus()};
  btn.addEventListener('click',open);x.addEventListener('click',close);
  ov.addEventListener('click',e=>{if(e.target===ov)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ov.classList.contains('show'))close()});
}

ankare();abbrTips();promptKnappar();modal();

/* Motorn: läser data.js, bygger sidan, kontrollerar svar. */
const norm=s=>s.toLowerCase().replace(/\s+/g,'').replace(/−/g,'-').replace(/²/g,'^2').replace(/,/g,'.');
function expr(s){
  let t=s.toLowerCase().replace(/−/g,'-').replace(/\s+/g,'').replace(/(\d),(\d)/g,'$1.$2').replace(/^[a-zℓ]\w*=/,'').replace(/≈.*/,'').replace(/π/g,'pi').replace(/√/g,'sqrt').replace(/\^/g,'**');
  t=t.replace(/ln\(/g,'log(').replace(/ln(\d)/g,'log($1)').replace(/sqrt(\d+(\.\d+)?)/g,'sqrt($1)');
  t=t.replace(/(\d|\))(pi|sqrt|log|\()/g,'$1*$2').replace(/\)(\d)/g,')*$1');
  const probe=t.replace(/sqrt|log|pi/g,'').replace(/[\d+\-*/().]/g,'');
  if(probe)return NaN;
  try{return Function('"use strict";const sqrt=Math.sqrt,log=Math.log,pi=Math.PI;return ('+t+')')()}catch(e){return NaN}
}
function kolla(sp,v){
  v=v.trim();if(!v)return{ok:false,msg:'Skriv ett svar först.'};
  if(sp.typ==='alt'){const n=norm(v);return sp.ok.map(norm).includes(n)?{ok:true}:{ok:false,msg:'Stämmer inte än. Ta ett steg till, eller kontrollera tecken och förenkling.'}}
  if(sp.typ==='tal'){const x=expr(v);return sp.ok.some(o=>Math.abs(x-o)<=(sp.tol!==undefined?sp.tol:1e-3*Math.max(1,Math.abs(o))))?{ok:true}:{ok:false,msg:isNaN(x)?'Jag kunde inte tolka svaret. Skriv t.ex. 1/8, -2/3 eller sqrt(6).':'Stämmer inte än. Kontrollera räkningen, eller ta ett steg till.'}}
  if(sp.typ==='mängd'){const xs=(v.replace(/−/g,'-').replace(/\b[xℓbh]\d?\s*=/gi,' ').match(/-?\d+(?:\.\d+)?/g)||[]).map(Number).sort((a,b)=>a-b),ok=[...sp.ok].sort((a,b)=>a-b);
    if(xs.length===ok.length&&xs.every((a,i)=>Math.abs(a-ok[i])<1e-6))return{ok:true};
    if(xs.length&&xs.length<ok.length&&xs.every(a=>ok.some(o=>Math.abs(o-a)<1e-6)))return{ok:false,msg:'Det du skrivit stämmer, men det finns fler. Har du gått igenom alla fall?'};
    return{ok:false,msg:'Stämmer inte än. Pröva att sätta in dina tal i uppgiften.'}}
  if(sp.typ==='regex'){const n=norm(v).replace(/^x=/,'').replace(/π/g,'pi').replace(/[()·*]/g,'').replace(/[nm]/g,'k');return /^(kpi\/2|pik\/2|k\/2pi|pi\/2k)/.test(n)?{ok:true}:{ok:false,msg:'Stämmer inte än. Var är derivatan inte definierad, och byter lutningen värde där?'}}
  return{ok:false}
}
const dst={};let klara=new Set();
const $=id=>document.getElementById(id);
const rubr=['Vad frågas?','Ledtråd','Delsteg','Lösning och varför den är rätt'];
const text=['Visa ledtråd','Visa delsteg','Visa lösningen'];
let nFig=0;
function fig(o){if(!o)return '';nFig++;return `<figure id="Figur${nFig}"><figcaption>Figur ${nFig}. ${o.namn}</figcaption>${FIG[o.f]()}</figure>`}
function visa(id,r){const e=$(id);e.classList.remove('hidden','ok','no');e.classList.add(r.ok?'ok':'no');e.textContent=r.ok?'Stämmer.':r.msg}
function render(){
  const meny=$('meny'),rot=$('uppgifter'),tb=document.querySelector('#tabell-svarighet tbody');
  U.forEach(u=>{
    meny.insertAdjacentHTML('beforeend',`<li><a href="#Uppgift${u.nr}">Uppgift ${u.nr}: ${u.titel}</a></li>`);
    tb.insertAdjacentHTML('beforeend',`<tr><td><a href="#Uppgift${u.nr}">${u.nr}</a></td><td>${u.sv.lasa}</td><td>${u.sv.losa}</td><td>${u.sv.stud}</td><td>${u.sv.varfor}</td></tr>`);
    let h=`<h2 id="Uppgift${u.nr}">Uppgift ${u.nr}: ${u.titel}</h2><p class="sub">${u.del}, högst ${u.poang} poäng. <span class="sv">Läsa av ${u.sv.lasa}/5</span><span class="sv">Lösa ${u.sv.losa}/5</span><span class="sv">Student ${u.sv.stud}/5</span></p>`;
    if(u.intro)h+=`<div class="box">${u.intro}</div>`;
    if(u.nr===1)h+=`<p class="poang" id="poang">Du har 0 av 6 rätt, vilket motsvarar 0 poäng.</p>`;
    u.delar.forEach(d=>{
      const id=d.id,sp=d.svar;
      let c=`<section class="card"><h3 id="Uppg${id}">${u.nr===1||u.nr===3||u.nr===5?id:'Uppgiften'}</h3><div class="q">${d.fraga}</div>
      <div class="step open"><div class="lbl">${rubr[0]}</div><p>${d.begrepp}</p>${fig(d.fig0)}</div>`;
      if(sp.typ==='skriv')c+=`<div class="row" style="display:block"><label for="in-${id}">${sp.etikett}:</label><textarea id="in-${id}"></textarea></div>`;
      else c+=`<div class="row"><label for="in-${id}">${sp.etikett||'Ditt svar'}:</label><input type="text" id="in-${id}" autocomplete="off"><button type="button" data-k="${id}">Kontrollera</button><span class="res hidden" id="res-${id}"></span></div>`;
      c+=`<div class="row"><button type="button" data-s="${id}" data-n="1">Visa ledtråd</button></div>
      <div class="step hidden" id="s1-${id}"><div class="lbl">${rubr[1]}</div><p>${d.ledtrad}</p></div>
      <div class="step hidden" id="s2-${id}"><div class="lbl">${rubr[2]}</div>${d.delsteg.map((s,i)=>{
        if(typeof s==='string')return `<div class="fall">${s}</div>`;
        const m=s.mini,k=id+'m'+i;dst[k]=m;
        return `<div class="fall">${s.t}<div class="row"><label for="in-${k}">${m.et}:</label><input type="text" id="in-${k}" autocomplete="off"><button type="button" data-m="${k}">Kontrollera</button><span class="res hidden" id="res-${k}"></span></div>${m.efter?`<p class="hidden" id="ef-${k}">${m.efter}</p>`:''}</div>`}).join('')}</div>
      <div class="step hidden" id="s3-${id}"><div class="lbl">${rubr[3]}</div><div class="svar"><div class="svarlbl">✔ Rätt svar</div><div class="svartext">${d.losning}</div></div><p>${d.varfor}</p>${fig(d.fig1)}<div class="box"><strong>Vanligt fel:</strong> ${d.fel}</div>`;
      if(sp.typ==='skriv'||d.lista){const L=sp.typ==='skriv'?sp.lista:d.lista;c+='';dst['L'+id]=L.length;
        c+=`<div class="lista"><div class="lbl">Checklista för ${sp.typ==='skriv'?'din lösning':'din skiss'}: kryssa vad din egen version innehåller</div>${L.map((t,i)=>`<label><input type="checkbox" data-l="${id}"> ${t}</label>`).join('')}<p class="res hidden" id="lres-${id}"></p></div>`}
      if(d.skriv)c+=`<details class="skriv"><summary>Så kan lösningen skrivas på tentan (tentan kräver ordentliga motiveringar)</summary><p>${d.skriv}</p></details>`;
      c+=`</div></section>`;h+=c});
    rot.insertAdjacentHTML('beforeend',h)});
}
function math(r){window.renderMathInElement&&renderMathInElement(r||document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]})}
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.k){const id=b.dataset.k,d=U.flatMap(u=>u.delar).find(x=>x.id===id),r=kolla(d.svar,$('in-'+id).value);visa('res-'+id,r);r.ok?klara.add(id):klara.delete(id);
    if(id.length===2&&id[0]==='1'){const n=[...klara].filter(x=>/^1[a-f]$/.test(x)).length,p=n>=6?3:n===5?2:n===4?1:0;$('poang').textContent=`Du har ${n} av 6 rätt, vilket motsvarar ${p} poäng.`}}
  else if(b.dataset.m){const k=b.dataset.m,m=dst[k],r=kolla(m,$('in-'+k).value);visa('res-'+k,r);if(r.ok&&m.efter){$('ef-'+k).classList.remove('hidden');math($('ef-'+k))}}
  else if(b.dataset.s){const id=b.dataset.s,n=+b.dataset.n,s=$('s'+n+'-'+id);s.classList.remove('hidden');s.classList.add('open');if(n<3){b.dataset.n=n+1;b.textContent=text[n]}else b.disabled=true;math(s)}
});
document.addEventListener('change',e=>{const c=e.target;if(!c.dataset||!c.dataset.l)return;const id=c.dataset.l,n=document.querySelectorAll(`input[data-l="${id}"]:checked`).length,t=dst['L'+id],r=$('lres-'+id);r.classList.remove('hidden','ok','no');r.classList.add(n===t?'ok':'no');r.textContent=n===t?'Allt finns med.':`Du har kryssat ${n} av ${t}. Titta på lösningen och komplettera det som saknas.`});
/* Regel 7: varje h2/h3 med id får ett # som syns vid hovring och fokus */
function ankare(){document.querySelectorAll('h2[id],h3[id]').forEach(h=>{if(h.querySelector('.ank'))return;h.insertAdjacentHTML('beforeend',` <a class="ank" href="#${h.id}" aria-label="Länk till avsnittet">#</a>`)})}
/* Regel 13: förklaringar (abbr) visas vid hovring, fokus och tryck, inte bara som title */
function abbrTips(){
  const tip=document.createElement('div');tip.className='tip hidden';tip.setAttribute('role','tooltip');document.body.appendChild(tip);
  const visaTip=a=>{const t=a.dataset.fk||a.getAttribute('title');if(!t)return;if(a.getAttribute('title')){a.dataset.fk=t;a.removeAttribute('title')}
    tip.textContent=t;tip.classList.remove('hidden');const r=a.getBoundingClientRect();tip.style.left=Math.max(8,Math.min(innerWidth-tip.offsetWidth-8,r.left))+'px';tip.style.top=(window.scrollY+r.bottom+6)+'px'};
  const dolj=()=>tip.classList.add('hidden');
  const prep=()=>document.querySelectorAll('abbr[title]').forEach(a=>{a.tabIndex=0;if(!a.dataset.fk){a.dataset.fk=a.getAttribute('title');a.removeAttribute('title')}});
  prep();new MutationObserver(prep).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('mouseover',e=>{const a=e.target.closest&&e.target.closest('abbr[data-fk]');if(a)visaTip(a)});
  document.addEventListener('mouseout',e=>{if(e.target.closest&&e.target.closest('abbr[data-fk]'))dolj()});
  document.addEventListener('focusin',e=>{const a=e.target.closest&&e.target.closest('abbr[data-fk]');if(a)visaTip(a)});
  document.addEventListener('focusout',dolj);
  document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('abbr[data-fk]');if(a)visaTip(a);else dolj()});
}
/* Regel 6: teknik-modal (öppna, stäng med kryss, bakgrund och Escape; fokus återställs) */
function modal(){
  const btn=$('techBtn'),ov=$('techModal'),x=$('techClose');
  const open=()=>{ov.classList.add('show');x.focus()},close=()=>{ov.classList.remove('show');btn.focus()};
  btn.addEventListener('click',open);x.addEventListener('click',close);
  ov.addEventListener('click',e=>{if(e.target===ov)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ov.classList.contains('show'))close()});
}
render();ankare();abbrTips();modal();
window.addEventListener('load',()=>{math();ankare()});

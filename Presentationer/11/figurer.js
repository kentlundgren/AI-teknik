/* Figurer som SVG, ritade av kod. Hjälpare: plot (grafer), geo (geometri). */
function plot(o){
  const W=640,H=o.h||320,m={l:40,r:16,t:14,b:30};
  const sx=x=>m.l+(x-o.x0)/(o.x1-o.x0)*(W-m.l-m.r), sy=y=>H-m.b-(y-o.y0)/(o.y1-o.y0)*(H-m.t-m.b);
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.alt}">`;
  if(o.y0<=0&&o.y1>=0)s+=`<line x1="${m.l}" y1="${sy(0)}" x2="${W-m.r}" y2="${sy(0)}" stroke="currentColor" opacity=".55"/>`;
  if(o.x0<=0&&o.x1>=0)s+=`<line x1="${sx(0)}" y1="${m.t}" x2="${sx(0)}" y2="${H-m.b}" stroke="currentColor" opacity=".55"/>`;
  (o.xt||[]).forEach(([v,l])=>{s+=`<line x1="${sx(v)}" y1="${sy(Math.max(o.y0,0))-4}" x2="${sx(v)}" y2="${sy(Math.max(o.y0,0))+4}" stroke="currentColor"/><text x="${sx(v)}" y="${H-9}" font-size="13" text-anchor="middle" fill="currentColor">${l}</text>`});
  (o.yt||[]).forEach(([v,l])=>{s+=`<text x="${m.l-6}" y="${sy(v)+4}" font-size="13" text-anchor="end" fill="currentColor">${l}</text><line x1="${m.l}" y1="${sy(v)}" x2="${W-m.r}" y2="${sy(v)}" stroke="currentColor" opacity=".12"/>`});
  (o.vl||[]).forEach(([x,l])=>{s+=`<line x1="${sx(x)}" y1="${m.t}" x2="${sx(x)}" y2="${H-m.b}" stroke="#888" stroke-dasharray="5 4"/>`+(l?`<text x="${sx(x)+6}" y="${m.t+12}" font-size="13" fill="currentColor">${l}</text>`:'')});
  (o.curves||[]).forEach(c=>{let d='',pen=false;for(let i=0;i<=800;i++){const x=o.x0+(o.x1-o.x0)*i/800,y=c.f(x);if(!isFinite(y)||y<o.y0||y>o.y1){pen=false;continue}d+=(pen?'L':'M')+sx(x).toFixed(1)+','+sy(y).toFixed(1);pen=true}
    s+=`<path d="${d}" fill="none" stroke="${c.col}" stroke-width="2.5"${c.dash?' stroke-dasharray="6 4"':''}/>`;if(c.lbl)s+=`<text x="${sx(c.lx)}" y="${sy(c.ly)}" font-size="13" fill="${c.col}">${c.lbl}</text>`});
  (o.pts||[]).forEach(([x,y,l,dx,dy])=>{s+=`<circle cx="${sx(x)}" cy="${sy(y)}" r="5.5" fill="#2e7d32"/>`+(l?`<text x="${sx(x)+(dx||8)}" y="${sy(y)+(dy||18)}" font-size="13" fill="currentColor">${l}</text>`:'')});
  return s+'</svg>';
}
function geo(W,H,body,alt){return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${alt}"><g fill="currentColor" stroke="currentColor" font-size="15">${body}</g></svg>`}
const tx=(x,y,t,a)=>`<text x="${x}" y="${y}" stroke="none" text-anchor="${a||'middle'}">${t}</text>`;
const ln=(a,b,c,d,x)=>`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke-width="2" ${x||''}/>`;

const FIG={
tallinje:()=>geo(640,110,ln(20,55,620,55)+ln(190,42,190,68)+ln(470,42,470,68)+tx(190,92,'−5')+tx(470,92,'8')+tx(105,35,'fall 1: x &lt; −5')+tx(330,35,'fall 2: −5 ≤ x &lt; 8')+tx(548,35,'fall 3: x ≥ 8'),'Tallinje delad vid minus 5 och 8 i tre fall'),
graf2:()=>plot({alt:'Graferna till x gånger absolutbeloppet av x minus 8 och absolutbeloppet av x plus 5 plus 5 skär varandra i x lika med 2, 5 och 10',x0:-3,x1:12,y0:-10,y1:50,xt:[[0,'0'],[2,'2'],[5,'5'],[8,'8'],[10,'10']],yt:[[10,'10'],[20,'20'],[30,'30'],[40,'40']],
  curves:[{f:x=>x*Math.abs(x-8),col:'#1f5a99',lbl:'y = x·|x − 8|',lx:5.2,ly:30},{f:x=>Math.abs(x+5)+5,col:'#c25a00',dash:1,lbl:'y = |x + 5| + 5',lx:-2.8,ly:7}],pts:[[2,12,'x = 2'],[5,15,'x = 5',8,-8],[10,20,'x = 10']]}),
graf4:()=>plot({alt:'Grafen till f(x) = 4/x − x + 5 ln x för x större än 0, med lodrät asymptot x = 0, minimum i (1, 3) och maximum i (4, ca 3,93)',x0:0,x1:16,y0:-4,y1:12,xt:[[1,'1'],[4,'4'],[8,'8'],[12,'12'],[16,'16']],yt:[[-2,'−2'],[3,'3'],[6,'6'],[9,'9'],[12,'12']],
  curves:[{f:x=>x>0?4/x-x+5*Math.log(x):NaN,col:'#1f5a99'}],vl:[[0.02,'x = 0 (asymptot)']],pts:[[1,3,'min (1, 3)',10,22],[4,5*Math.log(4)-3,'max (4, 5 ln 4 − 3 ≈ 3,93)',-70,-12]]}),
lada:()=>{const s=48,x0=60,y0=30,h=1.2*s,b=2.7*s,l=3.6*s,Wd=9*s,Ht=6*s;
  let g=`<rect x="${x0}" y="${y0}" width="${Wd}" height="${Ht}" fill="none" stroke-width="2.5"/>`;
  const xs=[0,h,h+b,2*h+b,2*h+2*b,Wd],ys=[0,h,h+l,Ht];
  xs.slice(1,5).forEach(x=>g+=ln(x0+x,y0,x0+x,y0+Ht,'stroke-dasharray="5 4" opacity=".7"'));
  ys.slice(1,3).forEach(y=>g+=ln(x0,y0+y,x0+Wd,y0+y,'stroke-dasharray="5 4" opacity=".7"'));
  const lab=['h','b','h','b','h'];for(let i=0;i<5;i++)g+=tx(x0+(xs[i]+xs[i+1])/2,y0+Ht+22,lab[i]);
  g+=tx(x0+Wd/2,y0-8,'9');g+=tx(x0-18,y0+Ht/2,'6');
  ['h','ℓ','h'].forEach((t,i)=>g+=tx(x0+Wd+16,y0+(ys[i]+ys[i+1])/2+5,t));
  return geo(560,y0+Ht+40,g,'Rektangulärt papper 9 gånger 6 uppdelat i rutor med höjd h, bredd b och längd ℓ')},
graf6:()=>plot({alt:'Volymen V(h) = 3h(3−h)² med maximum 12 vid h = 1',x0:0,x1:3,y0:0,y1:14,xt:[[0,'0'],[1,'1'],[2,'2'],[3,'3']],yt:[[4,'4'],[8,'8'],[12,'12']],curves:[{f:h=>3*h*(3-h)*(3-h),col:'#1f5a99'}],pts:[[1,12,'maximum: h = 1, V = 12',10,-10]]}),
tri:()=>{const s=70,ox=130,oy=250,P=(x,y)=>[ox+x*s,oy-y*s],A=P(0,0),B=P(3,0),C=P(-1.2778,3.7945),D=P(1.1667,1.6262);
  const g=`<polygon points="${A} ${B} ${C}" fill="none" stroke-width="2.5"/>`+ln(...A,...D,'stroke-dasharray="6 4"')+tx(A[0]-14,A[1]+6,'A')+tx(B[0]+14,B[1]+6,'B')+tx(C[0]-12,C[1]-6,'C')+tx(D[0]+16,D[1]+4,'D')+tx((A[0]+B[0])/2,A[1]+22,'3')+tx((A[0]+C[0])/2-14,(A[1]+C[1])/2,'4')+tx((A[0]+D[0])/2+14,(A[1]+D[1])/2+14,'2');
  return geo(520,290,g,'Triangeln ABC med bisektrisen AD till sidan BC')},
graf8:()=>{const p=Math.PI;return plot({alt:'Grafen till f(x) = arcsin(cos x) + arccos(sin x): styckvis linjär med knäck i varje multipel av π/2',x0:-p,x1:2*p,y0:-.5,y1:3.8,h:300,xt:[-p,-p/2,0,p/2,p,3*p/2,2*p].map((v,i)=>[v,['−π','−π/2','0','π/2','π','3π/2','2π'][i]]),yt:[[p,'π']],
  curves:[{f:x=>Math.asin(Math.cos(x))+Math.acos(Math.sin(x)),col:'#1f5a99'}],vl:[],pts:[[0,p,'',0,0],[p/2,0,'',0,0],[p,0,'',0,0],[3*p/2,p,'',0,0],[2*p,p,'',0,0],[-p/2,p,'',0,0],[-p,0,'',0,0]]})},
vik:(opt)=>{const s=15,x0=40,y0=20,Hh=20*s,Wd=30*s,Y=y=>y0+Hh-y*s,X=x=>x0+x*s;
  const A=[30,0],P=opt?[30-15*Math.SQRT2,0]:[9.889,0],Q=opt?[30,15]:[30,18.1],T=opt?[15.858,20]:[12,20];
  let g=`<rect x="${X(0)}" y="${Y(20)}" width="${Wd}" height="${Hh}" fill="none" stroke-width="2.5"/>`+
   ln(X(P[0]),Y(P[1]),X(T[0]),Y(T[1]))+ln(X(T[0]),Y(T[1]),X(Q[0]),Y(Q[1]))+ln(X(P[0]),Y(P[1]),X(Q[0]),Y(Q[1]),'stroke="#c25a00"')+
   ln(X(P[0]),Y(0),X(30),Y(0),'stroke-dasharray="6 4"')+ln(X(30),Y(0),X(30),Y(Q[1]),'stroke-dasharray="6 4"')+
   tx(X(0)-14,Y(20)+4,'C')+tx(X(30)+14,Y(20)+4,'B')+tx(X(0)-14,Y(0)+4,'D')+tx(X(30)+14,Y(0)+4,'A')+tx(X(T[0]),Y(20)-8,"A′")+tx(X(P[0]),Y(0)+20,'P')+tx(X(30)+16,Y(Q[1])+4,'Q');
  if(opt)g+=tx(X(P[0])+34,Y(0)-8,'θ','middle')+tx(X(15),Y(0)+38,'AP = p','middle');
  return geo(560,Hh+y0+46,g,opt?'Vikt papper vid optimum: A går till A′ på BC, PQ är vikningslinjen':'Ett rektangulärt papper vikt så att hörnet A hamnar i A′ på sidan BC')}
};

FIG.vik0=()=>{const s=9,w=30*s,h=20*s,xa=30,xb=xa+w+90,y0=24,Y=y=>y0+h-y*s;
  const P=[9.889,0],Q=[30,18.1],T=[12,20],XA=x=>xa+x*s,XB=x=>xb+x*s;
  let g=`<rect x="${xa}" y="${y0}" width="${w}" height="${h}" fill="none" stroke-width="2.5"/>`+
   tx(xa-12,y0+4,'C')+tx(xa+w+12,y0+4,'B')+tx(xa-12,y0+h+4,'D')+tx(xa+w+12,y0+h+4,'A')+tx(xa-16,y0+h/2+4,'20')+tx(xa+w/2,y0+h+20,'30')+
   `<path d="M ${xa+w+30},${y0+h/2} Q ${xa+w+50},${y0+h/2-60} ${xb-30},${y0+h/2-8}" fill="none" stroke-width="2"/><polygon points="${xb-30},${y0+h/2-8} ${xb-42},${y0+h/2-14} ${xb-40},${y0+h/2+1}" stroke="none"/>`+
   `<rect x="${xb}" y="${y0}" width="${w}" height="${h}" fill="none" stroke-width="2.5"/>`+
   ln(XB(P[0]),Y(0),XB(T[0]),Y(20))+ln(XB(T[0]),Y(20),XB(30),Y(Q[1]))+ln(XB(P[0]),Y(0),XB(30),Y(Q[1]))+
   ln(XB(P[0]),Y(0),XB(30),Y(0),'stroke-dasharray="6 4"')+ln(XB(30),Y(0),XB(30),Y(Q[1]),'stroke-dasharray="6 4"')+
   tx(xb-12,y0+4,'C')+tx(xb+w+12,y0+4,'B')+tx(xb-12,y0+h+4,'D')+tx(xb+w+12,y0+h+4,'A')+tx(XB(T[0]),y0-8,"A′")+tx(XB(P[0]),y0+h+20,'P')+tx(XB(30)+14,Y(Q[1])+4,'Q');
  return geo(xb+w+40,h+y0+34,g,'Pappersarket före vikningen (rektangeln ABCD, 20 gånger 30) och efter vikningen, där A hamnar i A′ på sidan BC')};FIG.vik1=()=>FIG.vik(true);

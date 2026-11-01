# Oberoende kontroll av svaren till LTH-tentan 2026-10-30. Ren Python (math), ingen symbolisk lösare:
# varje svar prövas genom insättning i den ursprungliga frågan och med brute force, inte med samma metod som handräkningen.
import math
res=[]
def rapport(namn,ok,hur): res.append((namn,ok,hur)); print(('OK   ' if ok else 'FEL  ')+namn+': '+hur)

# 1a: linjen y=-2x+11 går genom (3,5) och har samma lutning som 2x+y=1 (y=-2x+1)
rapport('1a',abs(-2*3+11-5)<1e-12,'punkten (3,5) ligger på y=-2x+11; lutning -2 = lutningen hos y=-2x+1')
# 1b: (x-5)^2-6 == x^2-10x+19 för 2001 punkter
rapport('1b',all(abs((x-5)**2-6-(x*x-10*x+19))<1e-9 for x in [i/100 for i in range(-1000,1001)]),'identitet i 2001 punkter')
# 1c
rapport('1c',abs(math.log2(6)-math.log2(8)-math.log2(3)-(-2))<1e-12,'log2 6 - log2 8 - log2 3 = -2 numeriskt')
# 1d: olikheten 3<4/(x+1) sann exakt på (-1,1/3), prövat på rutnät (x=-1 uteslutet)
def san(x): return 3<4/(x+1)
bra=all(san(x)==(-1<x<1/3) for x in [i/1000 for i in range(-5000,5001)] if abs(x+1)>1e-9)
rapport('1d',bra,'sant exakt för -1<x<1/3 på rutnät med 10 000 punkter')
# 1e
rapport('1e',math.comb(8,5)==56==math.factorial(8)//(math.factorial(5)*math.factorial(3)),'math.comb och fakultetsformel')
# 1f: numerisk derivata av sin(atan x) i sqrt(3)
h=1e-6; f=lambda x: math.sin(math.atan(x)); d=(f(math.sqrt(3)+h)-f(math.sqrt(3)-h))/(2*h)
rapport('1f',abs(d-1/8)<1e-8,'central differenskvot = %.8f'%d)
# 2: x|x-8| = |x+5|+5, teckenbyten på fint rutnät -> rötter
g=lambda x: x*abs(x-8)-abs(x+5)-5
rot=[]; xs=[i/10000 for i in range(-500000,500001)]
for a,b in zip(xs,xs[1:]):
    if g(a)==0: rot.append(a)
    elif g(a)*g(b)<0: rot.append(round((a+b)/2,3))
rapport('2',sorted(set(round(r) for r in rot))==[2,5,10] and len(rot)==3,'rötter på [-50,50]: %s'%sorted(set(rot)))
# 4: f=4/x-x+5ln x, extrempunkter via rutnät, asymptoter via värden
F=lambda x:4/x-x+5*math.log(x)
xs=[i/10000 for i in range(1,1000001)]
lok=[xs[i] for i in range(1,len(xs)-1) if (F(xs[i])-F(xs[i-1]))*(F(xs[i+1])-F(xs[i]))<0]
rapport('4',[round(v,2) for v in lok]==[1.0,4.0] and abs(F(1)-3)<1e-12 and abs(F(4)-(5*math.log(4)-3))<1e-12 and F(1e-9)>1e8 and F(1e9)<-1e8,
        'lokala extrempunkter x=%s, f(1)=3, f(4)=%.4f, f(1e-9) stort positivt, f(1e9) stort negativt'%([round(v,2) for v in lok],F(4)))
# 5
a=lambda x:(5*math.exp(x)+x*x)/(3**x-math.log(x)); b=lambda x:(x*x+x+math.log(1+x))/(4*x**3-3*x); c=lambda x:(x*x-1)/(2*x**3+x*x-3)
a2=lambda x:(5*(math.e/3)**x+x*x/3.0**x)/(1-math.log(x)/3.0**x)  # samma uttryck, delat med 3^x (undviker overflow)
rapport('5a',abs(a2(60)-a(60))<1e-9 and abs(a2(500))<1e-15,'värde vid x=60: %.3g, vid x=500: %.3g (kvoten (e/3)^x går mot 0 eftersom e<3)'%(a(60),a2(500)))
rapport('5b',abs(b(1e-6)+2/3)<1e-5 and abs(b(-1e-6)+2/3)<1e-5,'värden vid ±1e-6: %.6f, %.6f (mot -2/3)'%(b(1e-6),b(-1e-6)))
rapport('5c',abs(c(1+1e-6)-.25)<1e-5 and abs(c(1-1e-6)-.25)<1e-5,'värden vid 1±1e-6: %.6f, %.6f (mot 1/4)'%(c(1+1e-6),c(1-1e-6)))
# 6: V(h)=l*b*h med l=6-2h, b=(9-3h)/2, brute force
V=lambda h:(6-2*h)*(9-3*h)/2*h
hs=[i/100000 for i in range(1,300000)]; hb=max(hs,key=V)
rapport('6',abs(hb-1)<1e-4 and abs(V(1)-12)<1e-12,'maximum vid h=%.4f, V=%.4f (l=4, b=3)'%(hb,V(hb)))
# 7: konstruera triangeln med AB=3, AC=4, AD=2 och verifiera att AD halverar vinkeln
bd=math.sqrt(6); dc=4*bd/3; bc=bd+dc
A=(0.0,0.0); B=(3.0,0.0); cosA=(9+16-bc*bc)/(2*3*4); sinA=math.sqrt(1-cosA**2); C=(4*cosA,4*sinA)
Dp=(B[0]+(C[0]-B[0])*bd/bc,B[1]+(C[1]-B[1])*bd/bc)
vinkel=lambda P,Q:math.acos((P[0]*Q[0]+P[1]*Q[1])/(math.hypot(*P)*math.hypot(*Q)))
rapport('7',abs(math.hypot(*Dp)-2)<1e-9 and abs(vinkel(B,Dp)-vinkel(Dp,C))<1e-9,'konstruerad triangel: AD=%.6f, vinklarna BAD och DAC lika'%math.hypot(*Dp))
# 8: ensidiga lutningar vid heltalsmultiplar av pi/2, och lutning på övriga ställen
f8=lambda x:math.asin(max(-1,min(1,math.cos(x))))+math.acos(max(-1,min(1,math.sin(x))))
e=1e-7; knack=[];slata=[]
for k in range(-8,9):
    x0=k*math.pi/2; l=(f8(x0)-f8(x0-e))/e; r=(f8(x0+e)-f8(x0))/e
    knack.append(abs(l-r)>1)
for i in range(1,4000):
    x=-6+12*i/4000
    if min(abs(x/(math.pi/2)-round(x/(math.pi/2))),1)>1e-3:
        l=(f8(x)-f8(x-e))/e; r=(f8(x+e)-f8(x))/e; slata.append(abs(l-r)<1e-3)
rapport('8',all(knack) and all(slata),'knäck (ensidiga lutningar skiljer sig) i alla x=kπ/2, k=-8..8; deriverbar mellan dem (4000 punkter)')
# 9: vikning: A=(30,0) -> A'=(t,20); vikningslinjen är mittpunktsnormalen. Brute force över t.
best=None
for i in range(1,600000):
    t=30*i/600000; mx,my=(30+t)/2,10; dx,dy=t-30,20
    px=mx+dy*my/dx; qy=my+dx*(mx-30)/dy
    if 0<=px<=30 and 0<=qy<=20:
        L=math.hypot(30-px,qy)
        if best is None or L<best[0]: best=(L,t)
rapport('9',abs(best[0]-15*math.sqrt(3))<1e-6,'minsta PQ = %.6f vid A\'=(%.4f,20); 15√3 = %.6f'%(best[0],best[1],15*math.sqrt(3)))
print('\n%d av %d kontroller OK'%(sum(r[1] for r in res),len(res)))

# --- del 2: kontroll av de mellanled som guiden visar (inte bara slutsvaren) ---
print()
# 4: nollställe i x>4 (guiden säger ca 13,2) och f(4)
F4=lambda x:4/x-x+5*math.log(x)
lo,hi=4.0,30.0
for _ in range(200):
    m=(lo+hi)/2
    if F4(m)>0: lo=m
    else: hi=m
rapport('4 mellanled',abs(lo-13.2064)<1e-3 and abs(F4(4)-3.9315)<1e-4,'nollställe i x>4 vid %.4f; f(4)=%.4f'%(lo,F4(4)))
# 5c: faktoriseringen 2x^3+x^2-3 = (x-1)(2x^2+3x+3) i 1001 punkter
rapport('5c mellanled',all(abs(2*x**3+x*x-3-(x-1)*(2*x*x+3*x+3))<1e-9 for x in [i/100 for i in range(-500,501)]),'faktorisering stämmer i 1001 punkter')
# 6: V(h)=3h(3-h)^2 och V'(h)=9(3-h)(1-h)
V6=lambda h:(6-2*h)*(9-3*h)/2*h
rapport('6 mellanled',all(abs(V6(h)-3*h*(3-h)**2)<1e-9 for h in [i/100 for i in range(0,301)]) and all(abs((V6(h+1e-6)-V6(h-1e-6))/2e-6-9*(3-h)*(1-h))<1e-4 for h in [0.2,0.7,1.5,2.4]),'V(h)=3h(3-h)^2 och V\'(h)=9(3-h)(1-h) stämmer')
# 7: cos(alfa)=7/12, BD^2=13-12cos, DC^2=20-16cos, 4BD=3DC
c=7/12; BD=math.sqrt(13-12*c); DC=math.sqrt(20-16*c)
rapport('7 mellanled',abs(BD**2-6)<1e-12 and abs(4*BD-3*DC)<1e-12,'cos(alfa)=7/12 ger BD^2=6 och 4BD=3DC (DC=%.4f)'%DC)
# 8: styckvis formel för f på [0,2pi]
def f8f(x):
    p=math.pi
    if x<=p/2: return p-2*x
    if x<=p: return 0.0
    if x<=3*p/2: return 2*x-2*p
    return p
rapport('8 mellanled',all(abs(f8(x)-f8f(x))<1e-9 for x in [2*math.pi*i/5000 for i in range(5001)]),'f(x) = styckvis linjär formel i 5001 punkter på [0,2pi]')
# 9: analytisk formel PQ=10/(sin t cos^2 t) mot geometrisk brute force, och minimum vid sin t=1/sqrt(3)
def pq_geo(t):  # t = vinkeln APQ; p=20/sin(2t); PQ=p/cos t, med genomförbarhetsvillkor
    p=20/math.sin(2*t); aq=p*math.tan(t)
    return p/math.cos(t) if (p<=30 and aq<=20) else None
ts=[i*math.pi/2/200000 for i in range(1,200000)]
val=[(pq_geo(t),t) for t in ts if pq_geo(t) is not None]
mn=min(val)
rapport('9 mellanled',abs(mn[0]-15*math.sqrt(3))<1e-4 and abs(math.sin(mn[1])-1/math.sqrt(3))<1e-3,'analytisk PQ(theta) minst %.5f vid sin(theta)=%.4f; p=%.3f, AQ=%.3f (genomförbart)'%(mn[0],math.sin(mn[1]),20/math.sin(2*mn[1]),20/math.sin(2*mn[1])*math.tan(mn[1])))
print('\n%d av %d kontroller OK (inkl. mellanled)'%(sum(r[1] for r in res),len(res)))

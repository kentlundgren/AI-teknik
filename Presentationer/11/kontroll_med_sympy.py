# Kontroll av tentan LTH 2026-10-30, del 1 (sympy). Kräver: pip install sympy
import sympy as sp
x=sp.symbols('x',real=True)
# uppgift 1
print('1a', sp.solve(sp.Eq(sp.Symbol('y'),-2*x+11),sp.Symbol('y')))
print('1b', sp.simplify(x**2-10*x+19-((x-5)**2-6)))
print('1c', sp.simplify(sp.log(6,2)-sp.log(8,2)-sp.log(3,2)))
print('1d', sp.solve_univariate_inequality(3<4/(x+1),x,relational=False))
print('1e', sp.binomial(8,5))
f=sp.sin(sp.atan(x)); print('1f', sp.simplify(sp.diff(f,x).subs(x,sp.sqrt(3))))
# uppgift 2: x|x-8| = |x+5|+5
cands=set()
for s1 in (1,-1):
  for s2 in (1,-1):
    e=x*s1*(x-8)-(s2*(x+5)+5)
    cands|=set(sp.solve(e,x))
ok=[c for c in cands if sp.simplify(c*abs(c-8)-abs(c+5)-5)==0]
print('2', ok)
# 4
f4=4/x-x+5*sp.log(x)
print('4 crit', sp.solve(sp.diff(f4,x),x), 'f', [sp.simplify(f4.subs(x,c)) for c in sp.solve(sp.diff(f4,x),x)], 'f"', [sp.diff(f4,x,2).subs(x,c) for c in sp.solve(sp.diff(f4,x),x)])
print('4 lim0', sp.limit(f4,x,0,'+'), 'lim oo', sp.limit(f4,x,sp.oo))
# 5
print('5a', sp.limit((5*sp.exp(x)+x**2)/(3**x-sp.log(x)),x,sp.oo))
print('5b', sp.limit((x**2+x+sp.log(1+x))/(4*x**3-3*x),x,0))
print('5c', sp.limit((x**2-1)/(2*x**3+x**2-3),x,1))
# 6: V=l*b*h; l+2h=6, 2b+3h=9 (figur)
h=sp.symbols('h',positive=True)
l=6-2*h; b=(9-3*h)/2
V=sp.simplify(l*b*h); d=sp.solve(sp.diff(V,h),h); print('6 V',sp.expand(V),'h',d,[ (dd,l.subs(h,dd),b.subs(h,dd),V.subs(h,dd)) for dd in d if 0<dd<3])
# 7: bisektrissats + Stewart
BD=sp.symbols('BD',positive=True)
# BD/DC=3/4, BC=BD*7/3; Stewart: AB^2*DC+AC^2*BD = BC*(AD^2+BD*DC)
DC=sp.Rational(4,3)*BD
print('7', sp.solve(sp.Eq(9*DC+16*BD,(BD+DC)*(4+BD*DC)),BD))
# 8
f8=sp.asin(sp.cos(x))+sp.acos(sp.sin(x))
import math
for xv in [0.3,1.0,2.0,3.0,4.0,5.0,-1.0]:
    print('8',xv,float(f8.subs(x,xv)),float(sp.diff(f8,x).subs(x,xv)))

# --- del 2: uppgift 8 och 9 numeriskt ---
import math
# uppgift 8: ensidiga lutningar vid x = k*pi/2
f=lambda x: math.asin(max(-1,min(1,math.cos(x))))+math.acos(max(-1,min(1,math.sin(x))))
e=1e-6
for k in range(-2,5):
    x0=k*math.pi/2
    print('8 k=%d'%k, round((f(x0)-f(x0-e))/e,3), round((f(x0+e)-f(x0))/e,3), round(f(x0),4))
# uppgift 9: A=(30,0)->A'=(t,20). Mittpunktsnormal till AA' skär y=0 (P) och x=30 (Q)
best=None
for i in range(1,300000):
    t=30*i/300000
    ax,ay=30,0; bx,by=t,20
    mx,my=(ax+bx)/2,(ay+by)/2; dx,dy=bx-ax,by-ay   # normalens riktning = (dx,dy)
    # punkter p med dx*(px-mx)+dy*(py-my)=0
    px=mx+dy*my/dx                      # y=0
    qy=my+dx*(mx-30)/dy                 # x=30
    if 0<=px<=30 and 0<=qy<=20:
        L=math.hypot(30-px,qy)
        if best is None or L<best[0]: best=(L,t,px,qy)
print('9', best, 'jfr 15*sqrt3=',15*math.sqrt(3))

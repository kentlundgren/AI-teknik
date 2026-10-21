# Kontroll av svaren till TATA41 2026-08-19 med sympy (pip install sympy)
import sympy as sp, math
x,k,a,b=sp.symbols('x k a b',real=True)
res={}
# 1a
res['1a']=sp.limit(sp.sin(x)/(x*sp.exp(x)+x),x,0)  # = 1/2, so k*1/2=1 -> k=2
# 1b
g=sp.exp(x)-2*x
crit=sp.solve(sp.diff(g,x),x)
vals={str(p):float(g.subs(x,p)) for p in crit+[0,1]}
res['1b']=(crit,vals)
# 2
res['2a']=sp.limit(sp.exp(x)*sp.log(1+sp.exp(-x)),x,sp.oo)
res['2b']=sp.limit((x**100-sp.exp(x))/(3*x**3+4*sp.exp(x)),x,sp.oo)
res['2c']=sp.simplify(sp.diff(x*sp.log(sp.sqrt(1+x**2)),x))
# 3
res['3a']=sp.simplify(sp.integrate(1/(x**2+x-2),(x,2,3)))
res['3b']=sp.simplify(sp.integrate(sp.exp(x)*sp.cos(x),x))
res['3c']=sp.simplify(sp.integrate(sp.exp(x)/(1+9*sp.exp(2*x)),(x,0,1)))
res['3c_num']=complex(sp.N(res['3c']))
res['3c_hand']=float((sp.atan(3*sp.E)-sp.atan(3))/3)
# 4
res['4a']=sp.integrate(sp.Abs(1-x),(x,0,3))
res['4b']=sp.simplify(sp.integrate((x**3+x)*sp.exp(-x**2),(x,2,sp.oo)))
res['4b_hand']=3*sp.exp(-4)
# 5
f=x*sp.exp(-x-x**2)
c5=sp.solve(sp.diff(f,x),x)
res['5']=[(p,sp.simplify(f.subs(x,p)),float(f.subs(x,p))) for p in c5]
# 6: continuity sqrt(a)=b ; right deriv 1/(2 sqrt a)=b
sol=sp.solve([sp.sqrt(a)-b, 1/(2*sp.sqrt(a))-b],[a,b],dict=True)
res['6']=sol
# 7
A=sp.summation(sp.Symbol('n')*sp.exp(1-sp.Symbol('n',integer=True,positive=True)),(sp.Symbol('n',integer=True,positive=True),1,sp.oo)) if False else None
A_closed=sp.E**2/(sp.E-1)**2
res['7_A']=(A_closed,float(A_closed))
partial=[sum(n*math.exp(1-n) for n in range(1,N+1)) for N in (1,2,3,5,10,50)]
res['7_partial']=partial
for kk,v in res.items(): print(kk,':',v)

# Numerisk lösning av värmeledningsekvationen i en stav (ändliga differenser).
# Ingen analytisk lösning används. Ren Python, ingen extern modul.
import math, sys

L = 1.0; ALPHA = 9.7e-5; T0 = 20.0; TB = 100.0

def thomas(a, b, c, d):
    """Löser tridiagonalt system (a: under, b: diagonal, c: över, d: högerled)."""
    n = len(d); cp = [0.0]*n; dp = [0.0]*n
    cp[0] = c[0]/b[0]; dp[0] = d[0]/b[0]
    for i in range(1, n):
        m = b[i] - a[i]*cp[i-1]
        cp[i] = c[i]/m if i < n-1 else 0.0
        dp[i] = (d[i] - a[i]*dp[i-1])/m
    x = [0.0]*n; x[-1] = dp[-1]
    for i in range(n-2, -1, -1):
        x[i] = dp[i] - cp[i]*x[i+1]
    return x

def init(N, bc):
    """N intervall, N+1 noder. Rand vid x=0 alltid TB. Vid x=L: TB (bc='dd') eller isolerad (bc='di')."""
    u = [T0]*(N+1); u[0] = TB
    if bc == 'dd': u[N] = TB
    return u

def step(u, N, dt, bc, scheme):
    dx = L/N; r = ALPHA*dt/dx**2
    n = N+1
    if scheme == 'explicit':
        v = u[:]
        for i in range(1, N):
            v[i] = u[i] + r*(u[i-1]-2*u[i]+u[i+1])
        if bc == 'di':
            v[N] = u[N] + r*(2*u[N-1]-2*u[N])   # spegelnod u_{N+1}=u_{N-1}
        return v
    th = 1.0 if scheme == 'implicit' else 0.5       # implicit Euler eller Crank-Nicolson
    a = [0.0]*n; b = [1.0]*n; c = [0.0]*n; d = [0.0]*n
    d[0] = TB
    for i in range(1, N):
        a[i] = -th*r; b[i] = 1+2*th*r; c[i] = -th*r
        d[i] = u[i] + (1-th)*r*(u[i-1]-2*u[i]+u[i+1])
    if bc == 'dd':
        d[N] = TB
    else:
        a[N] = -2*th*r; b[N] = 1+2*th*r; c[N] = 0.0
        d[N] = u[N] + (1-th)*r*(2*u[N-1]-2*u[N])
    return thomas(a, b, c, d)

def run(N, dt, tend, bc, scheme, probe, record=False):
    u = init(N, bc); t = 0.0; ser = [(0.0, u[probe])]
    nsteps = int(round(tend/dt))
    for k in range(nsteps):
        # Rannacher: två implicita Euler-steg först för att dämpa oscillationer från diskontinuiteten
        sc = 'implicit' if (scheme == 'cn' and k < 2) else scheme
        dts = dt if sc != 'implicit' or scheme != 'cn' else dt
        u = step(u, N, dts, bc, sc); t += dt
        if record: ser.append((t, u[probe]))
    return (u[probe], ser) if record else u[probe]

def stable_explicit(N, dt):
    return ALPHA*dt/(L/N)**2 <= 0.5

if __name__ == '__main__':
    print("== (a) T(L/2, 600 s), båda ändar 100 °C")
    print(f"{'N':>5} {'dt':>6} {'explicit':>12} {'implicit':>12} {'CN':>12}")
    for N, dt in [(20,10.0),(40,5.0),(80,2.5),(160,1.25),(320,0.625)]:
        ex = run(N,dt,600,'dd','explicit',N//2) if stable_explicit(N,dt) else float('nan')
        im = run(N,dt,600,'dd','implicit',N//2)
        cn = run(N,dt,600,'dd','cn',N//2)
        print(f"{N:5d} {dt:6.3f} {ex:12.5f} {im:12.5f} {cn:12.5f}  (r={ALPHA*dt/(L/N)**2:.3f}, explicit stabil={stable_explicit(N,dt)})")
    print("== (b) T(L, 600 s), isolerad ände vid x=L")
    for N, dt in [(20,10.0),(40,5.0),(80,2.5),(160,1.25),(320,0.625)]:
        im = run(N,dt,600,'di','implicit',N)
        cn = run(N,dt,600,'di','cn',N)
        print(f"{N:5d} {dt:6.3f} {im:12.5f} {cn:12.5f}")
    print("== Fälla: explicit metod med för stort tidssteg (N=100, dt=1 s, r=0.97)")
    bad = run(100,1.0,600,'dd','explicit',50)
    print("explicit utan stabilitetsvillkor ger T(L/2,600) =", bad)
    print("== (c) tid till 90 °C i mitten (fall a), N=320, dt=0.25, CN")
    val, ser = run(320,0.25,4000,'dd','cn',160,record=True)
    t_hit = None
    for (t1,v1),(t2,v2) in zip(ser,ser[1:]):
        if v1 < 90 <= v2:
            t_hit = t1 + (90-v1)/(v2-v1)*(t2-t1); break
    print("t(90 °C) =", t_hit)
    for N,dt in [(160,0.5),(640,0.125)]:
        v,s2 = run(N,dt,4000,'dd','cn',N//2,record=True)
        for (t1,v1),(t2,v2) in zip(s2,s2[1:]):
            if v1 < 90 <= v2:
                print(f"  N={N}, dt={dt}: t(90 °C) =", t1+(90-v1)/(v2-v1)*(t2-t1)); break

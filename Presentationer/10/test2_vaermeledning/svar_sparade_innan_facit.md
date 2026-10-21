# Mina svar, Test 2 (sparade innan facit_laast.json öppnades)

Metod: ändliga differenser, Crank–Nicolson (andra ordningen) med två implicita Euler-steg i början (Rannacher), kontroll mot implicit Euler (första ordningen) och Richardson-extrapolation. Explicit metod användes bara där stabilitetsvillkoret r = α·dt/dx² ≤ 0,5 gällde; en körning med r = 0,97 gav 3,85·10^273 (instabil), vilket bekräftar villkoret.

(a) T(L/2, 600 s) ≈ 42,843 °C.
    CN: 42,904 → 42,858 → 42,846 → 42,844 → 42,843 (differenserna delas ungefär med 4 vid varje halvering, dvs andra ordningen). Extrapolerat gränsvärde ≈ 42,8426. Implicit Euler extrapolerad ≈ 42,842.
(b) T(L, 600 s) ≈ 20,541 °C.
    CN: 20,577 → 20,550 → 20,543 → 20,541 → 20,541. Extrapolerat ≈ 20,5405. Implicit Euler extrapolerad ≈ 20,540.
(c) Tid till 90 °C i mitten ≈ 2424 s.
    2424,41 (N=320), 2424,45 (N=160), 2424,41 (N=640).

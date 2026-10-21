# Groks svar på Prompt B (värmeledning i en stav), oförändrat

*Inklistrat av Kent Lundgren 2026-10-22, tillsammans med en skärmdump ([grok_svar_B_skarmdump.png](grok_svar_B_skarmdump.png)). Texten nedan är Groks svar, ordagrant. Klockslag, om webbsökning kunde stängas av, och i vilken mapp Grok Build kördes är inte angivet. Grok uppger själv att den inte sökte på internet.*

---

Den första Python-körningen avbröts innan resultatet sparades. Jag räknade om med samma finita differenser (theta-metod) i C. Svaren nedan är de konvergerade värdena, inte en Fourierserie.

Värmeledningsekvationen diskretiserades med andra ordningens differenser i rummet. Tiden stegades med Crank–Nicolson, och resultatet kontrollerades mot bakåt-Euler och framåt-Euler. Ändvillkoren sattes som Dirichlet 100 °C respektive, i (b), en spökpunkt så att ∂T/∂x = 0 i x = L.

**(a) 42,843 °C** i mitten efter 600 s.  
**(b) 20,541 °C** i den isolerade änden efter 600 s.  
**(c) 2424 s.** Mitten når 90 °C vid 2424,403 s, vilket avrundas till 2424 s.

Konvergens, Crank–Nicolson, steg proportionellt mot rutnätsavståndet. Richardson är (4T_fin − T_grov)/3.

| fall | rutnät | temperatur / tid | Richardson |
|---|---|---|---|
| (a) | N=800, Δt=0,0125 s | 42,842677 °C | 42,842637 °C |
| (a) | N=1600, Δt=0,00625 s | 42,842647 °C | 42,842637 °C |
| (b) | N=800 | 20,540528 °C | 20,540506 °C |
| (b) | N=1600 | 20,540512 °C | 20,540506 °C |
| (c) | N=800 | 2424,4046 s | 2424,4029 s |
| (c) | N=1600 | 2424,4033 s | 2424,4029 s |

Framåt-Euler ger samma gräns: för (a) ger N=400 och N=800 Richardson-värdet 42,842637 °C, för (b) 20,540506 °C. Bakåt-Euler närmar sig samma tal när tidssteget halveras. Tre decimaler och hela sekunder ändras inte mellan de två finaste näten.

Grok Build, agentläge för kod.
Jag körde kod.
Jag sökte inte på internet.

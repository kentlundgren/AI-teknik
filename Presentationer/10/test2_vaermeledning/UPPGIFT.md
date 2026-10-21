# Test 2: värmeledning i en stav (agentuppgift)

**Uppgiften (fastställd innan någon lösning kördes):**

En homogen aluminiumstav är L = 1,0 m lång och har värmediffusivitet α = 9,7·10⁻⁵ m²/s. Starttemperaturen är 20 °C överallt. Temperaturen T(x, t) i staven följer värmeledningsekvationen ∂T/∂t = α ∂²T/∂x², där x är läget längs staven (0 ≤ x ≤ L) och t är tiden i sekunder.

**(a)** Båda ändarna (x = 0 och x = L) hålls vid 100 °C från t = 0. Beräkna temperaturen i stavens mitt (x = L/2) efter t = 600 s.

**(b)** Ändan x = 0 hålls vid 100 °C, och ändan x = L är värmeisolerad (∂T/∂x = 0). Beräkna temperaturen i den isolerade änden (x = L) efter t = 600 s.

**(c)** I fall (a): efter hur lång tid når stavens mitt 90 °C? Svara i hela sekunder.

**Krav på svaret:** temperaturer i °C med tre decimaler, tiden i hela sekunder. **Godkänt** om temperaturerna avviker högst 0,05 °C och tiden högst 1 s från facit.

**Så ska uppgiften lösas:** numeriskt, med kod som agenten själv skriver och kör. Agenten ska själv välja metod, kontrollera att lösningen konvergerar när steg och rutnät förfinas, och inte använda den analytiska lösningen. Facit är den analytiska lösningen (Fourierserie) och är låst i förväg.

# Groks svar på Prompt A (tentan TATA41, 2026-08-19), oförändrat

*Inklistrat av Kent Lundgren 2026-10-22. Texten nedan är Groks svar, ordagrant. Formlerna är skrivna i LaTeX (\( ... \) och \[ ... \]) och ändrades inte. Tid och klockslag för körningen samt om webbsökning kunde stängas av är inte angivet; Grok uppger själv i svaret att den inte sökte på nätet.*

---

**1. (a)** \(k=2\).

För kontinuitet i \(0\) krävs \(\lim_{x\to 0} f(x)=1\). För \(x\neq 0\) är
\[
f(x)=\frac{k\sin x}{x(e^x+1)}=\frac{k\cdot(\sin x)/x}{e^x+1}.
\]
När \(x\to 0\) går \((\sin x)/x\to 1\) och \(e^x+1\to 2\), så gränsvärdet är \(k/2\). Alltså \(k/2=1\), dvs. \(k=2\).

**(b)** Största värde på \([0,1]\) är \(1\), minsta är \(2-2\ln 2\).

\(g'(x)=e^x-2=0\) ger \(x=\ln 2\in(0,1)\). \(g''(x)=e^x>0\), så lokal minimum. \(g(0)=1\), \(g(1)=e-2\), \(g(\ln 2)=2-2\ln 2\). På intervallet är därför max \(1\) (i \(x=0\)) och min \(2-2\ln 2\).

Grafen: \(g(x)\to+\infty\) när \(x\to\pm\infty\), avtagande på \((-\infty,\ln 2]\) och växande på \([\ln 2,+\infty)\).

**2. (a)** Gränsvärdet är \(1\).

Sätt \(u=e^{-x}\to 0\) när \(x\to+\infty\). Då är \(\ln(1+u)\sim u\), så \(e^x\ln(1+e^{-x})\sim e^x\cdot e^{-x}=1\).

**(b)** Gränsvärdet är \(-\frac14\).

Dela täljare och nämnare med \(e^x\):
\[
\frac{x^{100}e^{-x}-1}{3x^3e^{-x}+4}.
\]
Alla termer med \(x^ke^{-x}\to 0\), så gränsvärdet är \(-1/4\).

**(c)** Derivatan är \(\frac12\ln(1+x^2)+\frac{x^2}{1+x^2}\).

Notera att \(\ln\sqrt{1+x^2}=\frac12\ln(1+x^2)\), så funktionen är \(\frac x2\ln(1+x^2)\). Produktregeln ger
\[
\frac12\ln(1+x^2)+\frac x2\cdot\frac{2x}{1+x^2}=\frac12\ln(1+x^2)+\frac{x^2}{1+x^2}.
\]

**3. (a)** \(\frac13\ln\frac85\).

Nämnaren faktoriseras \((x+2)(x-1)\). Partialbråksuppdelning:
\[
\frac1{(x+2)(x-1)}=\frac{A}{x+2}+\frac{B}{x-1},\qquad A=-\frac13,\quad B=\frac13.
\]
Integralen blir
\[
\frac13\ln\Bigl|\frac{x-1}{x+2}\Bigr|_2^3=\frac13\bigl(\ln\frac25-\ln\frac14\bigr)=\frac13\ln\frac85.
\]

**(b)** \(\frac12 e^x(\sin x+\cos x)+C\).

Integration by parts två gånger (eller den standardformeln för \(\int e^{ax}\cos bx\,dx\)) ger resultatet.

**(c)** \(\frac13\bigl(\arctan(3e)-\arctan 3\bigr)\).

Substitution \(u=e^x\), \(du=e^x\,dx\), gränser \(1\to e\):
\[
\int\frac{du}{1+9u^2}=\frac13\arctan(3u)\Big|_1^e=\frac13\bigl(\arctan(3e)-\arctan 3\bigr).
\]

**4. (a)** \(\frac52\).

Dela intervallet i \(0\le x\le 1\) och \(1\le x\le 3\):
\[
\int_0^1(1-x)\,dx=\frac12,\qquad\int_1^3(x-1)\,dx=2.
\]
Summan är \(\frac52\).

**(b)** Konvergerar till \(3e^{-4}\).

Skriv integranden som \(x(x^2+1)e^{-x^2}\). Substitution \(u=x^2\), \(du=2x\,dx\), gränser \(4\to\infty\):
\[
\frac12\int_4^\infty(u+1)e^{-u}\,du.
\]
Primitiv till \((u+1)e^{-u}\) är \(-e^{-u}(u+2)\). Gränsvärdet blir \(\frac12\cdot 6e^{-4}=3e^{-4}\).

**5.** Alla \(k>\frac12 e^{-3/4}\).

Skriv \(f(x)=x\exp(-x-x^2)\). Derivatan är
\[
f'(x)=e^{-x-x^2}(1-x-2x^2).
\]
Kritiska punkter från \(2x^2+x-1=0\): \(x=\frac12\) och \(x=-1\). Teckenstudium visar lokalt max i \(x=\frac12\) med värde \(\frac12 e^{-3/4}\) och lokalt min i \(x=-1\) med värde \(-1\). När \(x\to\pm\infty\) går \(f(x)\to 0\). Alltså är det globala maximumet \(\frac12 e^{-3/4}\), och \(f(x)<k\) för alla reella \(x\) precis när \(k\) är strikt större än detta värde.

**6.** Enda möjligheterna är \(a=\frac12\), \(b=\frac1{\sqrt2}\).

För deriverbarhet i \(0\) krävs först kontinuitet: \(\lim_{x\to 0^+} \sqrt{x+a}=\sqrt a=f(0)=b\), så \(b=\sqrt a\) (och \(a>0\) ger \(b>0\)).

Högerderivatan:
\[
\lim_{h\to 0^+}\frac{\sqrt{h+a}-b}{h}=\lim_{h\to 0^+}\frac{1}{\sqrt{h+a}+\sqrt a}=\frac1{2\sqrt a}.
\]
Vänsterderivatan:
\[
\lim_{h\to 0^-}\frac{b(h+1)-b}{h}=b.
\]
Likhet ger \(b=\frac1{2\sqrt a}\). Tillsammans med \(b=\sqrt a\) får vi \(\sqrt a=\frac1{2\sqrt a}\), dvs. \(2a=1\), så \(a=\frac12\) och \(b=\frac1{\sqrt2}\). Dessa värden fungerar, och de är de enda.

**7. (a)** \(1\le A_N\le 3\) för alla \(N\ge 1\).

\(A_1=1\). Termerna \(k e^{1-k}>0\), så följden är växande och \(A_N\ge 1\).

Skriv \(A_N=e\sum_{k=1}^N k r^k\) med \(r=e^{-1}\in(0,1)\). Den oändliga summan är \(\sum_{k=1}^\infty k r^k=\frac{r}{(1-r)^2}\), så
\[
\sum_{k=1}^N k r^k<\frac{r}{(1-r)^2}=\frac{e}{(e-1)^2}.
\]
Därmed \(A_N<e\cdot\frac{e}{(e-1)^2}=\Bigl(\frac{e}{e-1}\Bigr)^2\). Eftersom \(\frac{e}{e-1}<2\) är kvadraten \(<4\), men mer precist är \(\bigl(\frac{e}{e-1}\bigr)^2\approx 2.50<3\). Alltså \(A_N<3\), och därmed \(1\le A_N\le 3\).

**(b)** \((A_N)\) konvergerar mot ett tal \(A\) med \(2\le A\le 3\).

Följden är växande och begränsad uppåt (av \(3\)), så den konvergerar mot något \(A\le 3\). Direkt beräkning ger \(A_3=1+2e^{-1}+3e^{-2}>2\), och eftersom följden är växande är gränsvärdet \(A\ge A_3>2\). Alltså \(2\le A\le 3\).

(1) Grok 4.7, standardläge.  
(2) Nej, ingen kod kördes för de slutgiltiga svaren (enbart en snabb numerisk kontroll av några uttryck).  
(3) Nej, ingen sökning på internet.

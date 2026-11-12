/* intro.js: intro på startsidan. Gissa först, mikrovågsugnen visar facit, och ett kvitto sammanfattar.
 *
 * Alla tider, energier och kostnader räknas ur data/siffror.json med funktionerna i sida.js (utvardera, visaTid,
 * visaEnergi, visaVatten, sig, fp). Introt väntar på händelsen "siffror-laddade".
 * Visas första gången. ?intro=1 visar det alltid, ?intro=0 aldrig. Knappen "Visa introt igen" öppnar det.
 *
 * UPPDATERING 2026-11-12: första versionen. Version 1.7.
 */
(function () {
  "use strict";
  var NYCKEL = "nf-intro-sett";
  var MIN_S = 0.1;
  var MAX_S = 36000;

  function lagrat() { try { return window.localStorage.getItem(NYCKEL) === "1"; } catch (e) { return false; } }
  function lagra() { try { window.localStorage.setItem(NYCKEL, "1"); } catch (e) { /* utan lagring visas introt igen */ } }
  function reducerad() { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function skarm(s) {
    if (s < 60) { return "00:" + (s < 10 ? "0" : "") + s.toFixed(1); }
    var m = Math.floor(s / 60);
    return pad(m) + ":" + pad(Math.floor(s - m * 60));
  }
  function tFranReglage(v) { return MIN_S * Math.pow(MAX_S / MIN_S, v / 100); }
  function kvot(g, f) { return g > f ? g / f : f / g; }
  function poang(g, f) { var r = kvot(g, f); return r <= 2 ? 3 : (r <= 5 ? 2 : (r <= 20 ? 1 : 0)); }
  function el(tag, klass, text) {
    var e = document.createElement(tag);
    if (klass) e.className = klass;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function init() {
    var fS = utvardera("GOOGLE_WH_FRAGA*3600/MW_EFFEKT");
    var fS2 = utvardera("EPOCH_WH_FRAGA*3600/MW_EFFEKT");
    var bS = utvardera("BILD_WH*3600/MW_EFFEKT");
    var aS = utvardera("ENERGI_BEDOMNING*3600/MW_EFFEKT");
    var saker = [
      { namn: "En textfråga", facit: fS, facitTxt: "cirka " + visaTid(fS, fS2), dur: 1500, etikett: "Värmer: en textfråga" },
      { namn: "En genererad bild", facit: bS, facitTxt: "cirka " + visaTid(bS), dur: 3200, etikett: "Värmer: en bild" },
      { namn: "Ett helt arbete", facit: aS, facitTxt: "cirka " + visaTid(aS) + " (bedömning)", dur: 5200, etikett: "Snabbspolat: ett helt arbete, som analysen och sidorna här" }
    ];
    var gissningar = [];

    var rot = el("div", "intro");
    rot.id = "intro";
    rot.setAttribute("role", "dialog");
    rot.setAttribute("aria-modal", "true");
    rot.setAttribute("aria-labelledby", "intro-titel");
    rot.hidden = false;

    var hoppa = el("button", "intro-hoppa", "Hoppa över introt");
    hoppa.type = "button";
    var ram = el("div", "intro-ram");
    rot.appendChild(hoppa);
    rot.appendChild(ram);

    /* ---------- steg 0: start ---------- */
    var s0 = el("section", "intro-steg");
    var h0 = el("h2", null, "Vad kostar AI egentligen?");
    h0.id = "intro-titel";
    s0.appendChild(h0);
    s0.appendChild(el("p", null, "Två frågor kommer ofta upp: går det åt mycket el och vatten, och vad gör vi med bilder? Börja med att gissa. Det tar en halv minut."));
    s0.appendChild(el("p", "liten", "Förslag och analys på eget initiativ, inte beslutat av någon förening. Alla siffror har en källa."));
    var bGissa = el("button", "intro-knapp", "Gissa först");
    bGissa.type = "button";
    s0.appendChild(bGissa);

    /* ---------- steg 1: gissa ---------- */
    var s1 = el("section", "intro-steg");
    s1.appendChild(el("h2", null, "Hur länge ska mikron gå?"));
    s1.appendChild(el("p", null, "Energin i vardagsmått: hur länge måste en vanlig mikrovågsugn på 1 000 W vara på för att använda lika mycket energi som…"));
    var reglage = [];
    saker.forEach(function (sak, i) {
      var falt = el("div", "gissa-falt");
      var id = "gissa" + i;
      var lab = el("label", null, sak.namn);
      lab.setAttribute("for", id);
      var rad = el("div", "gissa-rad");
      var inp = document.createElement("input");
      inp.type = "range"; inp.min = "0"; inp.max = "100"; inp.step = "1"; inp.value = "50"; inp.id = id;
      var ut = document.createElement("output");
      ut.setAttribute("for", id);
      function uppdatera() { ut.textContent = "cirka " + visaTid(tFranReglage(+inp.value)); }
      inp.addEventListener("input", uppdatera);
      uppdatera();
      rad.appendChild(inp);
      rad.appendChild(ut);
      falt.appendChild(lab);
      falt.appendChild(rad);
      s1.appendChild(falt);
      reglage.push(inp);
    });
    s1.appendChild(el("p", "liten", "Reglaget går från en tiondels sekund till tio timmar, i en skala där varje steg är en multiplikation."));
    var bStarta = el("button", "intro-knapp", "Starta mikron");
    bStarta.type = "button";
    s1.appendChild(bStarta);

    /* ---------- steg 2: mikron ---------- */
    var s2 = el("section", "intro-steg");
    s2.appendChild(el("h2", null, "Facit"));
    var mikro = el("div", "mikro");
    mikro.setAttribute("aria-hidden", "true");
    var fonster = el("div", "mikro-fonster");
    fonster.appendChild(el("div", "tallrik"));
    fonster.appendChild(el("div", "mat"));
    var panel = el("div", "mikro-panel");
    var display = el("div", "mikro-display", "00:00.0");
    var etikett = el("div", "mikro-etikett", "");
    panel.appendChild(display);
    panel.appendChild(etikett);
    panel.appendChild(el("div", "mikro-effekt", "1 000 W"));
    mikro.appendChild(fonster);
    mikro.appendChild(panel);
    s2.appendChild(mikro);
    var resultat = el("div", null);
    resultat.setAttribute("aria-live", "polite");
    s2.appendChild(resultat);
    var slut = el("div", "knappar");
    var bKvitto = el("button", "intro-knapp", "Se kvittot");
    bKvitto.type = "button";
    slut.appendChild(bKvitto);
    slut.hidden = true;
    s2.appendChild(slut);
    s2.appendChild(el("p", "liten", "Mikrovågsugnen på 1 000 W är ett vardagsmått (märkeffekt, ett antagande). Tiden är energin delad med effekten. Det sista är en bedömning, inte ett mätvärde."));

    /* ---------- steg 3: kvitto ---------- */
    var s3 = el("section", "intro-steg");
    s3.appendChild(el("h2", null, "Kvittot"));
    var kv = el("div", "kvitto");
    s3.appendChild(kv);
    var kn = el("div", "knappar");
    var bLas = el("a", "intro-knapp", "Läs analysen");
    bLas.href = "analys.html";
    var bIgen = el("button", "intro-knapp sekundar", "Gissa igen");
    bIgen.type = "button";
    var bStang = el("button", "intro-knapp sekundar", "Stäng");
    bStang.type = "button";
    kn.appendChild(bLas);
    kn.appendChild(bIgen);
    kn.appendChild(bStang);
    s3.appendChild(kn);

    var steg = [s0, s1, s2, s3];
    steg.forEach(function (s) { ram.appendChild(s); });
    document.body.appendChild(rot);

    var aktivRaf = 0;
    var stoppad = false;

    function visaSteg(n) {
      steg.forEach(function (s, i) { s.classList.toggle("aktiv", i === n); });
      rot.scrollTop = 0;
      var f = steg[n].querySelector("button, a, input");
      if (f) f.focus();
    }
    function oppna(n) {
      stoppad = false;
      rot.classList.add("visas");
      document.body.style.overflow = "hidden";
      visaSteg(n || 0);
    }
    function stang() {
      stoppad = true;
      if (aktivRaf) window.clearInterval(aktivRaf);
      lagra();
      rot.classList.remove("visas");
      document.body.style.overflow = "";
      var igen = document.getElementById("introIgen");
      if (igen) igen.focus();
    }

    function tillKvitto() {
      kv.textContent = "";
      kv.appendChild(el("h3", null, "KVITTO"));
      kv.appendChild(el("div", "datum", "Svar på: går det åt mycket el och vatten? 2026-11-12"));
      kv.appendChild(document.createElement("hr"));
      function rad(a, b, under) {
        var r = el("div", "rad" + (under ? " under" : ""));
        r.appendChild(el("span", null, a));
        r.appendChild(el("span", null, b));
        kv.appendChild(r);
      }
      rad("En textfråga", fp("GOOGLE_WH_FRAGA") + ", ca " + visaTid(fS));
      rad("En bild", fp("BILD_WH") + ", ca " + visaTid(bS));
      kv.appendChild(document.createElement("hr"));
      rad("DETTA ARBETE", "ca " + visaEnergi(varde("ENERGI_BEDOMNING")));
      rad("i mikrovågsugn", "ca " + visaTid(aS), true);
      rad("modellanrop", fp("Y_ANROP").replace(" anrop", ""), true);
      rad("nya tokens", fp("Y_NY").replace(" tokens", ""), true);
      rad("återlästa tokens", fp("Y_ATER").replace(" tokens", ""), true);
      rad("vatten vid datacentret", "ca " + visaVatten(utvardera("ENERGI_BEDOMNING*(WUE_MICROSOFT_2025+GOOGLE_L_KWH)/2")), true);
      kv.appendChild(document.createElement("hr"));
      rad("Pengar, abonnemang", "0 EUR extra");
      var k5 = sig(varde("KOSTNAD_SONNET_5M"), 2);
      var k1 = sig(varde("KOSTNAD_SONNET_1H"), 2);
      rad("Pengar, om API", "ca " + (k5 === k1 ? k5 : k5 + "–" + k1) + " USD");
      kv.appendChild(document.createElement("hr"));
      kv.appendChild(el("span", "stampel", "BEDÖMNING"));
      kv.appendChild(el("div", "liten", "Inte mätt. Energin för arbetet är en bedömning med osäkerhet uppåt, och API-kostnaden är en uppskattning ur prislistan. Siffrorna är hämtade ur källorna: kontrollera mot källan."));
      visaSteg(3);
    }

    function kor(i, nar) {
      var sak = saker[i];
      if (stoppad) return;
      etikett.textContent = sak.etikett;
      var klart = function () {
        mikro.classList.remove("kor");
        display.textContent = skarm(sak.facit);
        mikro.classList.add("ping");
        window.setTimeout(function () { mikro.classList.remove("ping"); }, 800);
        var g = tFranReglage(+reglage[i].value);
        var p = poang(g, sak.facit);
        gissningar.push(p);
        var r = el("div", "resultat");
        r.appendChild(el("strong", null, sak.namn + ": "));
        r.appendChild(document.createTextNode("facit " + sak.facitTxt + ". Du gissade cirka " + visaTid(g) + ", " + (g > sak.facit ? "alltså för högt" : "alltså för lågt") + " med en faktor " + sig(kvot(g, sak.facit), 2) + ". "));
        r.appendChild(el("span", "poang", "+" + p + (p === 1 ? " poäng" : " poäng")));
        resultat.appendChild(r);
        window.setTimeout(nar, reducerad() ? 0 : 900);
      };
      if (reducerad()) { klart(); return; }
      mikro.classList.add("kor");
      var t0 = Date.now();
      aktivRaf = window.setInterval(function () {
        if (stoppad) { window.clearInterval(aktivRaf); return; }
        var p = Math.min(1, (Date.now() - t0) / sak.dur);
        display.textContent = skarm(sak.facit * p);
        if (p >= 1) { window.clearInterval(aktivRaf); klart(); }
      }, 40);
    }

    function starta() {
      resultat.textContent = "";
      slut.hidden = true;
      gissningar = [];
      display.textContent = "00:00.0";
      visaSteg(2);
      var i = 0;
      function nasta() {
        if (stoppad) return;
        if (i < saker.length) {
          kor(i++, nasta);
        } else {
          var sum = gissningar.reduce(function (a, b) { return a + b; }, 0);
          var dom = sum >= 7 ? "Mycket nära. Du har god känsla för skalan."
            : (sum >= 4 ? "Rätt riktning på det mesta."
              : "Det är svårt att gissa energi i vardagsmått. Därför visar sidan tiden i en mikrovågsugn.");
          var s = el("div", "slutsumma");
          s.appendChild(el("span", "poang", sum + " av 9 poäng. "));
          s.appendChild(document.createTextNode(dom));
          resultat.appendChild(s);
          slut.hidden = false;
          bKvitto.focus();
        }
      }
      window.setTimeout(nasta, reducerad() ? 0 : 400);
    }

    bGissa.addEventListener("click", function () { visaSteg(1); });
    bStarta.addEventListener("click", starta);
    bKvitto.addEventListener("click", tillKvitto);
    bIgen.addEventListener("click", function () { stoppad = false; visaSteg(1); });
    bStang.addEventListener("click", stang);
    bLas.addEventListener("click", function () { lagra(); });
    hoppa.addEventListener("click", stang);
    rot.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { stang(); return; }
      if (e.key !== "Tab") return;
      var f = Array.prototype.slice.call(rot.querySelectorAll("button, a[href], input")).filter(function (x) { return x.offsetParent !== null || x === hoppa; });
      if (!f.length) return;
      var forsta = f[0];
      var sista = f[f.length - 1];
      if (e.shiftKey && document.activeElement === forsta) { e.preventDefault(); sista.focus(); }
      else if (!e.shiftKey && document.activeElement === sista) { e.preventDefault(); forsta.focus(); }
    });

    var igen = document.getElementById("introIgen");
    if (igen) igen.addEventListener("click", function () { oppna(0); });

    var q = window.location.search;
    var tvinga = q.indexOf("intro=1") >= 0;
    var aldrig = q.indexOf("intro=0") >= 0;
    if (tvinga || (!aldrig && !lagrat())) oppna(0);
  }

  if (typeof DATA !== "undefined" && DATA) { init(); }
  else { document.addEventListener("siffror-laddade", init, { once: true }); }
})();

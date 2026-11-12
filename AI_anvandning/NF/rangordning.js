/* rangordning.js: läsaren rangordnar ett antal poster (dra och släpp eller pilknappar), valfritt med namn, och sidan visar gruppens
 * gemensamma rangordning som medelplats. Ingen inloggning: webbläsaren har en slumpad nyckel som styr den egna rösten.
 *
 * Bygger på tekniken i Samrådsguiden (Codex/Fritid/NF/Samradsguiden/rangordning/rangordning.js) men är gjord för flera
 * omröstningar i samma databas, med slumpad startordning och ett läge utan databas.
 *
 * Sidan behöver:
 *   <div id="rangordning" data-omrostning="ai_proportion_hot10" data-tabell="Tabell4"></div>
 *   en tabell (id enligt data-tabell) vars rader har data-id och data-titel, och en cell med klassen rg-info som förklarar posten.
 *   Celler med klassen rg-efter-rost visas först när läsaren har röstat (eller valt Visa min bedömning).
 *   rangordning_config.js (supabaseUrl, anonKey) och rangordning.css.
 * Läge: utan supabaseUrl och anonKey visas bara den egna ordningen (sparas i webbläsaren). ?demo=1 lägger till påhittade röster för test.
 * Databasen: databas/supabase_rangordning.sql. Beskrivning: databas/supabase.md.
 *
 * UPPDATERING 2026-11-12: första versionen. Version 1.17.
 */
(function () {
  "use strict";

  var cfg = window.RANGORDNING_CONFIG || {};
  var root = document.getElementById("rangordning");
  if (!root) { return; }
  var OMR = root.getAttribute("data-omrostning") || cfg.omrostning || "standard";
  var tabell = document.getElementById(root.getAttribute("data-tabell") || "");
  if (!tabell) { return; }

  var HAR_DB = !!(cfg.supabaseUrl && cfg.anonKey);
  var DEMO = !HAR_DB && /[?&]demo=1/.test(window.location.search);
  var POLL_MS = 15000;
  var SAVE_DELAY_MS = 700;
  var PREFIX = "rangordning_" + OMR + "_";

  // ---------- Hjälpfunktioner ----------
  function store(key, value) {
    try {
      if (value === undefined) { return localStorage.getItem(PREFIX + key); }
      if (value === null) { localStorage.removeItem(PREFIX + key); } else { localStorage.setItem(PREFIX + key, value); }
    } catch (e) { /* lagring kan saknas, sidan fungerar ändå */ }
    return null;
  }
  function uuid() {
    if (window.crypto && crypto.randomUUID) { return crypto.randomUUID(); }
    var b = new Uint8Array(16); crypto.getRandomValues(b);
    b[6] = (b[6] & 0x0f) | 0x40; b[8] = (b[8] & 0x3f) | 0x80;
    var h = Array.prototype.map.call(b, function (x) { return ("0" + x.toString(16)).slice(-2); }).join("");
    return h.slice(0, 8) + "-" + h.slice(8, 12) + "-" + h.slice(12, 16) + "-" + h.slice(16, 20) + "-" + h.slice(20);
  }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") { n.textContent = attrs[k]; } else if (k === "class") { n.className = attrs[k]; } else { n.setAttribute(k, attrs[k]); }
    });
    (children || []).forEach(function (c) { if (c) { n.appendChild(c); } });
    return n;
  }
  function fmtTid(iso) {
    var d = new Date(iso);
    return isNaN(d) ? "" : d.toLocaleString("sv-SE", { dateStyle: "short", timeStyle: "short" });
  }
  function fmtTal(x) { return (Math.round(x * 10) / 10).toString().replace(".", ","); }
  function slumpa(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var r = new Uint32Array(1); crypto.getRandomValues(r);
      var j = r[0] % (i + 1), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ---------- Posterna (läses ur tabellen) ----------
  var rows = Array.prototype.slice.call(tabell.querySelectorAll("tr[data-id]"));
  var items = rows.map(function (r, i) { return { id: r.getAttribute("data-id"), titel: r.getAttribute("data-titel"), pos: i, rad: r }; });
  var byId = {}; items.forEach(function (it) { byId[it.id] = it; });
  var tabellOrder = items.map(function (it) { return it.id; });

  // ---------- Tillstånd ----------
  var token = store("token");
  if (!token) { token = uuid(); store("token", token); }
  var myId = store("mitt_id") || null;
  var harRostat = store("har_rostat") === "1";
  var namn = store("namn") || "";
  var ownOrder = loadOwnOrder();
  var votes = [];
  var status = { stangd: false, frist: cfg.frist || "", antal: 0 };
  var prevRank = null, connection = HAR_DB ? "ansluter" : "ok", saveTimer = null, saveState = "", savedAt = "", focusAfterRender = null, loadedOnce = false;
  var visaMin = store("visa_min") === "1";

  function normalize(arr) {
    var seen = {}, out = [];
    (arr || []).forEach(function (id) { if (byId[id] && !seen[id]) { seen[id] = 1; out.push(id); } });
    tabellOrder.forEach(function (id) { if (!seen[id]) { out.push(id); } });
    return out;
  }
  function loadOwnOrder() {
    var arr = null;
    try { arr = JSON.parse(store("min_ordning")); } catch (e) { arr = null; }
    if (!arr || !arr.length) { arr = slumpa(tabellOrder); store("min_ordning", JSON.stringify(arr)); }  // slumpad start så att ingen ordning styr
    return normalize(arr);
  }

  // ---------- Gruppens ordning (medelplats) ----------
  function groupRanking() {
    var list = votes.filter(function (v) { return !(myId && v.id === myId); });
    if (harRostat) { list.push({ id: myId || "jag", ordning: ownOrder }); }
    var sum = {}, n = list.length;
    items.forEach(function (it) { sum[it.id] = 0; });
    list.forEach(function (v) { normalize(v.ordning).forEach(function (id, idx) { sum[id] += idx + 1; }); });
    var mean = {};
    items.forEach(function (it) { mean[it.id] = n ? sum[it.id] / n : it.pos + 1; });
    var order = tabellOrder.slice().sort(function (a, b) { return (mean[a] - mean[b]) || (byId[a].pos - byId[b].pos); });
    var rank = {}; order.forEach(function (id, i) { rank[id] = i + 1; });
    return { order: order, mean: mean, rank: rank, n: n };
  }

  // ---------- Bakänden ----------
  var backend = HAR_DB ? supabaseBackend() : lokalBackend();

  function supabaseBackend() {
    var base = String(cfg.supabaseUrl).replace(/\/$/, "") + "/rest/v1/rpc/";
    function headers() {
      var h = { "apikey": cfg.anonKey, "Content-Type": "application/json" };
      if (/^eyJ/.test(cfg.anonKey)) { h["Authorization"] = "Bearer " + cfg.anonKey; }
      return h;
    }
    function rpc(fn, body) {
      return fetch(base + fn, { method: "POST", headers: headers(), body: JSON.stringify(body || {}) }).then(function (r) {
        if (!r.ok) { return r.text().then(function (t) { throw new Error(t || r.status); }); }
        return r.status === 204 ? null : r.json();
      });
    }
    return {
      hamta: function () {
        return Promise.all([rpc("rang_hamta_roster", { p_omrostning: OMR }), rpc("rang_hamta_status", { p_omrostning: OMR })]).then(function (res) {
          var s = (res[1] && res[1][0]) || {};
          return { votes: res[0] || [], status: { stangd: !!s.stangd, frist: s.frist, antal: Number(s.antal || 0) } };
        });
      },
      spara: function (t, n, o) { return rpc("rang_spara_rost", { p_omrostning: OMR, p_token: t, p_namn: n || null, p_ordning: o }); },
      radera: function (t) { return rpc("rang_radera_min_rost", { p_omrostning: OMR, p_token: t }); },
      nollstall: function (kod) { return rpc("rang_nollstall", { p_omrostning: OMR, p_kod: kod }); }
    };
  }

  // Utan databas: bara den egna rösten, i webbläsaren. Med ?demo=1 tillkommer påhittade röster för test.
  function lokalBackend() {
    var KEY = "lokala_roster";
    function read() {
      var d = null;
      try { d = JSON.parse(store(KEY)); } catch (e) { d = null; }
      if (!d) {
        d = [];
        if (DEMO) {
          d = [
            { id: "demo000001", namn: "Demo A", ordning: tabellOrder.slice().reverse(), andrad: new Date(Date.now() - 3600e3).toISOString() },
            { id: "demo000002", namn: null, ordning: tabellOrder.slice(3).concat(tabellOrder.slice(0, 3)), andrad: new Date(Date.now() - 7200e3).toISOString() }
          ];
        }
        store(KEY, JSON.stringify(d));
      }
      return d;
    }
    function write(d) { store(KEY, JSON.stringify(d)); }
    return {
      hamta: function () { var d = read(); return Promise.resolve({ votes: d, status: { stangd: false, frist: "", antal: d.length } }); },
      spara: function (t, n, o) {
        var d = read().filter(function (v) { return v.id !== "lokal-jag"; });
        d.push({ id: "lokal-jag", namn: n || null, ordning: o, andrad: new Date().toISOString() }); write(d);
        return Promise.resolve("lokal-jag");
      },
      radera: function () { write(read().filter(function (v) { return v.id !== "lokal-jag"; })); return Promise.resolve(null); },
      nollstall: function () { write([]); return Promise.resolve(0); }
    };
  }

  // ---------- Gränssnitt ----------
  var live = el("div", { class: "rg-live", "aria-live": "polite", role: "status" });
  var banner = el("p", { class: "rg-banner", hidden: "" });
  var statusLine = el("p", { class: "rg-status" });
  var nameInput = el("input", { type: "text", id: "rg-namn", maxlength: "40", autocomplete: "off", placeholder: "Frivilligt, lämna tomt för att vara anonym" });
  nameInput.value = namn;
  var nameRow = el("div", { class: "rg-namnrad" }, [
    el("label", { for: "rg-namn", text: "Ditt namn (frivilligt)" }), nameInput,
    el("p", { class: "rg-hint", id: "rg-namn-hint", text: HAR_DB
      ? "Om du skriver ett namn visas det öppet på sidan, för alla som besöker den, och sparas i en databas hos Supabase i EU. Lämna tomt för att vara anonym. Du kan ta bort din röst igen."
      : "Namnet sparas bara i den här webbläsaren eftersom ingen databas är ansluten." })
  ]);
  nameInput.setAttribute("aria-describedby", "rg-namn-hint");

  var ownList = el("ol", { class: "rg-lista rg-egen", "aria-label": "Din rangordning" });
  var groupList = el("ol", { class: "rg-lista rg-grupp", "aria-label": "Gruppens rangordning" });
  var groupMeta = el("p", { class: "rg-meta" });
  var voters = el("p", { class: "rg-meta" });
  var slumpBtn = el("button", { type: "button", class: "rg-knapp", text: "Slumpa om min ordning" });
  var removeBtn = el("button", { type: "button", class: "rg-knapp", text: "Ta bort min röst" });
  var minBtn = el("button", { type: "button", class: "rg-knapp", text: "Visa min bedömning" });
  var actions = el("div", { class: "rg-knappar" }, [slumpBtn, minBtn, removeBtn]);

  var ownBox = el("div", { class: "rg-ruta" }, [
    el("h3", { text: "Din rangordning" }),
    el("p", { class: "rg-hint", text: "Plats 1 är det du tycker är värst eller viktigast. Dra en rad, eller använd pilknapparna, för att flytta den. Raderna börjar i slumpad ordning." }),
    nameRow, ownList, actions, statusLine
  ]);
  var adminBtn = el("button", { type: "button", class: "rg-admin", "aria-label": "Administratör: nollställ alla röster", title: "Nollställ (kräver kod)", text: "nollställ" });
  var groupBox = el("div", { class: "rg-ruta rg-ruta--grupp" }, [
    el("h3", { text: "Gruppens rangordning" }), groupMeta, groupList, voters,
    el("p", { class: "rg-adminrad" }, HAR_DB ? [adminBtn] : [])
  ]);

  root.appendChild(banner);
  root.appendChild(el("div", { class: HAR_DB || DEMO ? "rg-kolumner" : "rg-kolumner rg-kolumner--en" }, HAR_DB || DEMO ? [ownBox, groupBox] : [ownBox]));
  root.appendChild(live);

  // Tabellen: kolumnen Gruppens rang efter första kolumnen, och Min bedömning dold tills man röstat
  var headRow = tabell.querySelector("tr:not([data-id])");
  if (headRow && headRow.cells.length && (HAR_DB || DEMO)) { headRow.insertBefore(el("th", { scope: "col", text: "Gruppens rang" }), headRow.cells[1] || null); }
  items.forEach(function (it) {
    if (HAR_DB || DEMO) { it.cell = el("td", { class: "rg-rangcell" }); it.rad.insertBefore(it.cell, it.rad.cells[1] || null); }
    it.info = it.rad.querySelector(".rg-info");
  });
  tabell.classList.add("rg-dold-min");

  function announce(msg) { live.textContent = ""; setTimeout(function () { live.textContent = msg; }, 30); }

  function titelEl(it, prefix) {
    var kids = [document.createTextNode(it.titel)];
    var info = it.info ? it.info.textContent.replace(/\s+/g, " ").trim() : "";
    var attrs = { class: "rg-titel" };
    if (info) {
      var tipId = "rg-tip-" + prefix + "-" + it.id;
      attrs.tabindex = "0"; attrs["aria-describedby"] = tipId;
      kids.push(el("span", { class: "rg-tip", id: tipId, role: "note", text: info }));
    }
    return el("span", attrs, kids);
  }

  function render() {
    var closed = !!status.stangd;
    var g = groupRanking();

    banner.hidden = !(!HAR_DB || DEMO || connection === "fel" || closed);
    if (!HAR_DB && !DEMO) { banner.textContent = "Ingen databas är ansluten än. Du kan rangordna för dig själv, och ordningen sparas i den här webbläsaren. Gruppens rangordning visas när databasen är kopplad."; }
    else if (DEMO) { banner.textContent = "Demoläge (?demo=1): påhittade röster för test, sparade i den här webbläsaren."; }
    else if (closed) { banner.textContent = "Omröstningen är stängd" + (status.frist ? " (sista dag " + fmtTid(status.frist) + ")" : "") + ". Tabellen visar den slutliga rangordningen."; }
    else if (connection === "fel") { banner.textContent = "Det går inte att nå databasen just nu. Din ordning sparas inte, men du kan fortfarande flytta rader."; }
    banner.className = "rg-banner" + (closed || connection === "fel" ? " rg-banner--varning" : "");

    ownList.textContent = "";
    ownOrder.forEach(function (id, i) {
      var it = byId[id];
      var up = el("button", { type: "button", class: "rg-pil", "aria-label": "Flytta upp: " + it.titel, "data-id": id, "data-dir": "-1", text: "↑" });
      var down = el("button", { type: "button", class: "rg-pil", "aria-label": "Flytta ned: " + it.titel, "data-id": id, "data-dir": "1", text: "↓" });
      if (i === 0) { up.disabled = true; }
      if (i === ownOrder.length - 1) { down.disabled = true; }
      if (closed) { up.disabled = true; down.disabled = true; }
      ownList.appendChild(el("li", { class: "rg-rad", draggable: closed ? "false" : "true", "data-id": id }, [
        el("span", { class: "rg-grepp", "aria-hidden": "true", text: "⠿" }),
        el("span", { class: "rg-nr", text: String(i + 1) }), titelEl(it, "egen"), up, down
      ]));
    });
    nameInput.disabled = closed; slumpBtn.disabled = closed;
    removeBtn.hidden = !harRostat || closed;
    minBtn.hidden = harRostat || visaMin;

    // Min bedömning visas efter första flytten, eller när man ber om den
    var visa = harRostat || visaMin || !!status.stangd;
    tabell.classList.toggle("rg-dold-min", !visa);

    if (HAR_DB || DEMO) {
      groupList.textContent = "";
      g.order.forEach(function (id) {
        var it = byId[id];
        var delta = prevRank ? prevRank[id] - g.rank[id] : 0;
        var mark = delta > 0 ? "▲ " + delta : delta < 0 ? "▼ " + (-delta) : "";
        groupList.appendChild(el("li", { class: "rg-rad rg-rad--grupp" + (delta ? " rg-rad--ny" : ""), "data-id": id }, [
          el("span", { class: "rg-nr", text: String(g.rank[id]) }), titelEl(it, "grupp"),
          el("span", { class: "rg-medel", text: g.n ? "medelplats " + fmtTal(g.mean[id]) : "" }),
          el("span", { class: "rg-delta", text: mark, "aria-label": delta > 0 ? "uppåt " + delta + " platser" : delta < 0 ? "nedåt " + (-delta) + " platser" : "" })
        ]));
      });
      g.order.forEach(function (id) {
        var it = byId[id];
        if (g.n) { it.cell.textContent = String(g.rank[id]); tabell.tBodies[0].appendChild(it.rad); } else { it.cell.textContent = "–"; }
        it.rad.classList.toggle("rg-tabellrad--ny", !!(prevRank && prevRank[id] - g.rank[id]));
      });
      prevRank = g.rank;
      var senaste = votes.slice().sort(function (a, b) { return new Date(b.andrad) - new Date(a.andrad); })[0];
      groupMeta.textContent = g.n
        ? "Medel av " + g.n + (g.n === 1 ? " röst" : " röster") + (senaste ? ". Senast ändrad av " + (senaste.namn || "anonym") + " " + fmtTid(senaste.andrad) + "." : ".")
        : "Ingen har röstat än. Flytta en rad så räknas din ordning med.";
      var namnLista = votes.filter(function (v) { return v.namn; }).map(function (v) { return v.namn; });
      var anonym = votes.length - namnLista.length;
      voters.textContent = votes.length
        ? "Röstat: " + (namnLista.length ? namnLista.join(", ") : "") + (anonym ? (namnLista.length ? " och " : "") + anonym + (anonym === 1 ? " anonym" : " anonyma") : "") + "."
        : "";
    }

    var t = "";
    if (saveState === "sparar") { t = "Sparar …"; }
    else if (saveState === "sparat") { t = "Sparat " + savedAt + ". Din ordning är med" + (HAR_DB ? " i gruppens ordning." : " (bara i den här webbläsaren)."); }
    else if (saveState === "fel") { t = "Kunde inte spara. Försök igen om en stund."; }
    else if (!harRostat) { t = "Du har inte rangordnat än. Flytta en rad så sparas din ordning."; }
    else { t = "Din ordning är sparad."; }
    statusLine.textContent = t;
    statusLine.className = "rg-status" + (saveState === "fel" ? " rg-status--fel" : "");

    if (focusAfterRender) {
      var f = ownList.querySelector('button[data-id="' + focusAfterRender.id + '"][data-dir="' + focusAfterRender.dir + '"]');
      if (!f || f.disabled) { f = ownList.querySelector('button[data-id="' + focusAfterRender.id + '"]:not(:disabled)'); }
      if (f) { f.focus(); }
      focusAfterRender = null;
    }
  }

  // ---------- Flytta rader ----------
  function snapshot() { prevRank = groupRanking().rank; }
  function move(id, toIndex, dir) {
    var from = ownOrder.indexOf(id);
    if (from < 0 || toIndex < 0 || toIndex >= ownOrder.length || from === toIndex) { return; }
    ownOrder.splice(from, 1); ownOrder.splice(toIndex, 0, id);
    harRostat = true; store("har_rostat", "1"); store("min_ordning", JSON.stringify(ownOrder));
    focusAfterRender = dir ? { id: id, dir: dir } : null;
    var gAfter = groupRanking();
    render(); markera(id);
    announce("Flyttade " + byId[id].titel + " från plats " + (from + 1) + " till plats " + (toIndex + 1) + " i din ordning." + (HAR_DB || DEMO ? " I gruppens ordning ligger den på plats " + gAfter.rank[id] + "." : ""));
    schemaladSparning();
  }
  function markera(id) {
    [ownList, groupList].forEach(function (l) {
      var li = l.querySelector('li[data-id="' + id + '"]');
      if (li) { li.classList.add("rg-blink"); setTimeout(function () { li.classList.remove("rg-blink"); }, 1400); }
    });
  }
  ownList.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-id]");
    if (!b || b.disabled) { return; }
    var id = b.getAttribute("data-id"), dir = Number(b.getAttribute("data-dir"));
    snapshot(); move(id, ownOrder.indexOf(id) + dir, String(dir));
  });

  var dragId = null;
  ownList.addEventListener("dragstart", function (e) {
    var li = e.target.closest("li[data-id]"); if (!li) { return; }
    dragId = li.getAttribute("data-id"); li.classList.add("rg-drar");
    try { e.dataTransfer.setData("text/plain", dragId); e.dataTransfer.effectAllowed = "move"; } catch (x) { /* ok */ }
  });
  ownList.addEventListener("dragover", function (e) {
    if (!dragId) { return; }
    e.preventDefault();
    var li = e.target.closest("li[data-id]");
    Array.prototype.forEach.call(ownList.children, function (c) { c.classList.remove("rg-over"); });
    if (li) { li.classList.add("rg-over"); }
  });
  ownList.addEventListener("drop", function (e) {
    if (!dragId) { return; }
    e.preventDefault();
    var li = e.target.closest("li[data-id]");
    if (li) { snapshot(); move(dragId, ownOrder.indexOf(li.getAttribute("data-id")), null); }
    dragId = null;
  });
  ownList.addEventListener("dragend", function () {
    dragId = null;
    Array.prototype.forEach.call(ownList.children, function (c) { c.classList.remove("rg-drar", "rg-over"); });
  });

  slumpBtn.addEventListener("click", function () {
    snapshot(); ownOrder = slumpa(tabellOrder); store("min_ordning", JSON.stringify(ownOrder));
    if (harRostat) { schemaladSparning(); }
    render(); announce("Din ordning är slumpad på nytt.");
  });
  minBtn.addEventListener("click", function () { visaMin = true; store("visa_min", "1"); render(); announce("Min bedömning visas i tabellen."); });
  removeBtn.addEventListener("click", function () {
    if (!window.confirm("Ta bort din röst?")) { return; }
    backend.radera(token).then(function () {
      harRostat = false; myId = null; store("har_rostat", null); store("mitt_id", null); saveState = ""; load(); announce("Din röst är borttagen.");
    }).catch(function () { saveState = "fel"; render(); });
  });
  adminBtn.addEventListener("click", function () {
    var kod = window.prompt("Administratörskod för att nollställa alla röster:");
    if (!kod) { return; }
    if (!window.confirm("Alla röster i den här omröstningen raderas för alla besökare. Det går inte att ångra. Fortsätta?")) { return; }
    backend.nollstall(kod).then(function (antal) {
      harRostat = false; myId = null; store("har_rostat", null); store("mitt_id", null); saveState = ""; prevRank = null;
      announce("Alla röster är nollställda" + (antal ? " (" + antal + " raderade)." : ".")); return load();
    }).catch(function (err) { window.alert(/Fel kod/i.test(String(err && err.message)) ? "Fel kod." : "Det gick inte att nollställa just nu."); });
  });

  var nameTimer = null;
  nameInput.addEventListener("input", function () {
    namn = nameInput.value; store("namn", namn);
    clearTimeout(nameTimer);
    nameTimer = setTimeout(function () { if (harRostat) { schemaladSparning(); } }, 900);
  });

  // ---------- Spara och läs ----------
  function schemaladSparning() {
    saveState = "sparar"; clearTimeout(saveTimer); saveTimer = setTimeout(spara, SAVE_DELAY_MS);
    statusLine.textContent = "Sparar …";
  }
  function spara() {
    backend.spara(token, namn.trim(), ownOrder).then(function (id) {
      if (id) { myId = id; store("mitt_id", id); }
      saveState = "sparat"; savedAt = new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" }); connection = "ok";
      return load();
    }).catch(function (err) {
      saveState = "fel";
      if (/stängd/i.test(String(err && err.message))) { status.stangd = true; }
      render();
    });
  }
  function load() {
    return backend.hamta().then(function (res) {
      votes = res.votes || []; status = res.status || status; connection = "ok";
      if (!loadedOnce) { loadedOnce = true; prevRank = null; }
      if (harRostat && myId && !votes.some(function (v) { return v.id === myId; }) && HAR_DB) { harRostat = false; store("har_rostat", null); }
      render();
    }).catch(function () { connection = "fel"; render(); });
  }

  render();
  load();
  document.addEventListener("siffror-laddade", render);  // förklaringarna kommer ur celler som sida.js fyller
  setInterval(function () { if (!document.hidden && saveState !== "sparar" && !dragId && HAR_DB) { load(); } }, POLL_MS);
})();

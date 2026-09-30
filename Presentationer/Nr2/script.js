// Motor för Provbänken (Nr2). Allt innehåll kommer från data.js.
// All text sätts med textContent, aldrig som HTML.

(function () {
  const D = PROVBANKEN;
  const fragorEl = document.getElementById('fragor');
  const svarEl = document.getElementById('svar');
  const kortEl = document.getElementById('kortyta');

  document.getElementById('versionsdatum').textContent = D.version;

  const SIFFROR_TEXT = {
    paahittade: 'Siffrorna är påhittade',
    oppna_kallor: 'Öppna källor',
    verkliga_foreningens_egna: 'Föreningens egna siffror',
    anonymiserade: 'Anonymiserade siffror'
  };

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function valj(id, utanHash) {
    D.fragor.forEach(function (f) {
      const knapp = document.getElementById('f-' + f.id);
      const vald = f.id === id;
      knapp.setAttribute('aria-selected', vald ? 'true' : 'false');
      knapp.tabIndex = vald ? 0 : -1;
    });
    const f = D.fragor.find(function (x) { return x.id === id; });
    visaSvar(f);
    visaKort(f);
    // Vid första laddning utan ankare lämnas adressen ren; hash skrivs först när en fråga väljs.
    if (!utanHash) history.replaceState(null, '', '#' + id);
  }

  // Namn på verktyg i en text blir länkar. Byggs med textContent och createElement, aldrig som HTML.
  const NAMN = Object.keys(D.verktygslankar || {});
  const NAMN_RE = NAMN.length ? new RegExp('(' + NAMN.map(function (n) {
    return n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }).join('|') + ')') : null;

  function lankaText(foralder, text) {
    if (!NAMN_RE) { foralder.appendChild(document.createTextNode(text)); return; }
    text.split(NAMN_RE).forEach(function (del) {
      if (D.verktygslankar.hasOwnProperty(del)) {
        const a = el('a', 'verktyg', del);
        a.href = D.verktygslankar[del];
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        foralder.appendChild(a);
      } else if (del) {
        foralder.appendChild(document.createTextNode(del));
      }
    });
  }

  function byggText(s) {
    const p = el('p');
    if (s.rubrik) p.appendChild(el('strong', null, s.rubrik + ': '));
    lankaText(p, s.text);
    return p;
  }

  function byggPunkter(punkter) {
    const ul = el('ul');
    punkter.forEach(function (t) { ul.appendChild(el('li', null, t)); });
    return ul;
  }

  function visaSvar(f) {
    svarEl.replaceChildren();
    svarEl.appendChild(el('h2', null, f.fraga));
    if (f.avsnitt) {
      // Fråga med avsnitt: kort visas inne i det avsnitt de hör till.
      f.avsnitt.forEach(function (a) {
        if (a.rubrik) svarEl.appendChild(el('h3', null, a.rubrik));
        (a.svar || []).forEach(function (s) { svarEl.appendChild(byggText(s)); });
        (a.lankar || []).forEach(function (x) {
          const p = el('p');
          const l = el('a', 'verktyg', x.text);
          l.href = x.url;
          l.target = '_blank';
          l.rel = 'noopener noreferrer';
          p.appendChild(l);
          svarEl.appendChild(p);
        });
        if (a.punkter) {
          if (a.punkter_text) svarEl.appendChild(el('h4', null, a.punkter_text));
          svarEl.appendChild(byggPunkter(a.punkter));
        }
        (a.kort_ids || []).forEach(function (id) {
          const k = D.kort.find(function (x) { return x.id === id; });
          if (k && k.sekretess === 'ok') svarEl.appendChild(byggKort(k, false));
        });
      });
      return;
    }
    f.svar.forEach(function (s) { svarEl.appendChild(byggText(s)); });
    if (f.punkter) {
      svarEl.appendChild(el('h3', null, f.punkter_rubrik));
      svarEl.appendChild(byggPunkter(f.punkter));
    }
  }

  function visaKort(f) {
    kortEl.replaceChildren();
    if (f.avsnitt) return;
    let lista = D.kort;
    if (f.kort_kategorier !== null) {
      lista = D.kort.filter(function (k) {
        return f.kort_kategorier.indexOf(k.kategori) !== -1 && k.sekretess === 'ok';
      });
    }
    if (!lista.length) return;
    // Kort med länk grupperas per kategori; kort utan länk samlas i en egen grupp.
    lista = lista.filter(function (k) { return k.visas_i_exempel !== false; });
    const ok = lista.filter(function (k) { return k.sekretess === 'ok'; });
    const utan = lista.filter(function (k) { return k.sekretess !== 'ok'; });
    const grupper = [];
    ok.forEach(function (k) {
      let g = grupper.find(function (x) { return x.namn === k.kategori; });
      if (!g) { g = { namn: k.kategori, kort: [] }; grupper.push(g); }
      g.kort.push(k);
    });
    if (utan.length) grupper.push({ namn: 'Från uppdrag, utan länk', kort: utan, utan: true });
    // Kategorier med en överrubrik (D.overgrupper) samlas under den, med kategorin som underrubrik.
    const oever = D.overgrupper || {};
    const toppar = [];
    grupper.forEach(function (g) {
      const top = oever[g.namn];
      if (!top) { toppar.push({ namn: g.namn, kort: g.kort, utan: g.utan }); return; }
      let t = toppar.find(function (x) { return x.subs && x.namn === top; });
      if (!t) { t = { namn: top, subs: [] }; toppar.push(t); }
      t.subs.push(g);
    });
    // Varje grupp är ett hopfällt kort: titel, en beskrivande rad och antal. Exemplen syns när gruppen fälls ut.
    const texter = D.grupptexter || {};
    toppar.forEach(function (t) {
      const antal = t.subs
        ? t.subs.reduce(function (n, g) { return n + g.kort.length; }, 0)
        : t.kort.length;
      const grupp = el('details', 'grupp-d');
      const sum = el('summary');
      sum.appendChild(el('span', 'grupp-titel', t.namn));
      if (texter[t.namn]) sum.appendChild(el('span', 'grupp-text', texter[t.namn]));
      sum.appendChild(el('span', 'grupp-antal', antal + ' exempel'));
      grupp.appendChild(sum);
      const inre = el('div', 'grupp-inre');
      if (t.subs) {
        t.subs.forEach(function (g) {
          inre.appendChild(el('h4', 'undergrupp', g.namn));
          g.kort.forEach(function (k) { inre.appendChild(byggKort(k, false)); });
        });
      } else {
        t.kort.forEach(function (k) { inre.appendChild(byggKort(k, !!t.utan)); });
      }
      grupp.appendChild(inre);
      kortEl.appendChild(grupp);
    });
  }

  // Vid utskrift fälls alla grupper och kort ut, och återställs efteråt.
  let oppnadeForUtskrift = [];
  window.addEventListener('beforeprint', function () {
    oppnadeForUtskrift = [];
    document.querySelectorAll('details').forEach(function (d) {
      if (!d.open) { d.open = true; oppnadeForUtskrift.push(d); }
    });
  });
  window.addEventListener('afterprint', function () {
    oppnadeForUtskrift.forEach(function (d) { d.open = false; });
    oppnadeForUtskrift = [];
  });

  // Ett ämne i flera medier: en rad per medium (Program, Bloggtext, LinkedIn, YouTube, Podd),
  // grupperad under ett år när flera år finns (t.ex. samma ämne 2025 och 2026).
  function byggMedier(foralder, medier) {
    const ar = [];
    medier.forEach(function (m) {
      const a = m.ar || '';
      if (ar.indexOf(a) === -1) ar.push(a);
    });
    // Senaste året överst. Finns flera år tonas äldre år ut och det senaste fram när kortet fälls ut
    // (en rörelse från då till nu, se style.css).
    ar.sort(function (x, y) { return y.localeCompare(x); });
    const flera = ar.length > 1 && ar[0] !== '';
    if (flera) foralder.classList.add('med-rorelse');
    ar.forEach(function (a, i) {
      const grupp = el('div', 'medie-grupp' + (flera ? (i === 0 ? ' nyast' : ' aldre') : ''));
      // Ju äldre år, desto mer uttonat (sista stegets lägsta värde är 0,3).
      if (flera && i > 0) grupp.style.setProperty('--mal', String(Math.max(0.3, Math.round((0.55 - 0.08 * (i - 1)) * 100) / 100)));
      if (a) grupp.appendChild(el('p', 'medie-ar', a));
      medier.filter(function (m) { return (m.ar || '') === a; }).forEach(function (m) {
        const p = el('p', 'medie');
        p.appendChild(el('span', 'medium', m.medium));
        const l = el('a', 'lank', m.text);
        l.href = m.url;
        l.target = '_blank';
        l.rel = 'noopener noreferrer';
        p.appendChild(l);
        if (m.not) p.appendChild(el('span', 'medie-not', m.not));
        let infoEl = null;
        if (m.info) {
          // Hovringstext via title, och en knapp (ⓘ) som visar samma text på touch och tangentbord.
          l.title = m.info;
          infoEl = el('p', 'medie-info', m.info);
          infoEl.hidden = true;
          const knapp = el('button', 'info-knapp', 'ⓘ');
          knapp.type = 'button';
          knapp.setAttribute('aria-label', 'Mer om ' + m.text);
          knapp.setAttribute('aria-expanded', 'false');
          knapp.addEventListener('click', function () {
            infoEl.hidden = !infoEl.hidden;
            knapp.setAttribute('aria-expanded', infoEl.hidden ? 'false' : 'true');
          });
          p.appendChild(knapp);
        }
        grupp.appendChild(p);
        if (infoEl) grupp.appendChild(infoEl);
      });
      foralder.appendChild(grupp);
    });
  }

  // Bild från kortets inlägg: miniatyr i det stängda kortet, stor bild när kortet är utfällt.
  function byggBild(b, cls) {
    const img = el('img', 'bild-' + cls);
    img.src = b.src;
    img.alt = cls === 'miniatyr' ? '' : b.alt;
    img.width = b.w;
    img.height = b.h;
    img.loading = 'lazy';
    return img;
  }

  function byggKort(k, visaKategori) {
    const det = el('details', 'kort' + (k.sekretess === 'ej_publik' ? ' utan-lank' : '') + (k.bild ? ' med-bild' : ''));
    const sum = el('summary');
    if (k.bild) sum.appendChild(byggBild(k.bild, 'miniatyr'));
    if (visaKategori) sum.appendChild(el('span', 'kategori', k.kategori));
    sum.appendChild(el('span', 'rubrik', k.rubrik));
    det.appendChild(sum);
    if (k.bild) det.appendChild(byggBild(k.bild, 'stor'));
    det.appendChild(el('p', null, k.en_mening));
    if (k.arbetssatt) {
      const p = el('p');
      p.appendChild(el('strong', null, 'Arbetssätt: '));
      p.appendChild(document.createTextNode(k.arbetssatt));
      det.appendChild(p);
    }
    if (k.verktyg && k.verktyg.length) {
      const p = el('p');
      p.appendChild(el('strong', null, 'Verktyg: '));
      p.appendChild(document.createTextNode(k.verktyg.join(', ')));
      det.appendChild(p);
    }
    if (k.resultat) {
      const p = el('p');
      p.appendChild(el('strong', null, 'Resultat: '));
      p.appendChild(document.createTextNode(k.resultat));
      det.appendChild(p);
    }
    if (SIFFROR_TEXT[k.siffror] && k.sekretess === 'ok') {
      det.appendChild(el('p', 'markning', SIFFROR_TEXT[k.siffror]));
    }
    if (k.sekretess === 'ok' && k.medier) {
      byggMedier(det, k.medier);
    } else if (k.sekretess === 'ok' && k.lank) {
      const a = el('a', 'lank', k.lank_text);
      a.href = k.lank;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      det.appendChild(a);
      (k.fler_lankar || []).forEach(function (l) {
        const b = el('a', 'lank', l.text);
        b.href = l.url;
        b.target = '_blank';
        b.rel = 'noopener noreferrer';
        det.appendChild(b);
      });
    } else {
      det.appendChild(el('p', 'markning', 'Byggt på en uppdragsgivares material. Visas utan länk.'));
    }
    return det;
  }

  D.fragor.forEach(function (f, i) {
    const b = el('button', null, f.fraga);
    b.type = 'button';
    b.id = 'f-' + f.id;
    b.setAttribute('role', 'tab');
    b.addEventListener('click', function () { valj(f.id); });
    b.addEventListener('keydown', function (e) {
      const n = D.fragor.length;
      let j = null;
      if (e.key === 'ArrowRight') j = (i + 1) % n;
      if (e.key === 'ArrowLeft') j = (i - 1 + n) % n;
      if (j !== null) {
        e.preventDefault();
        valj(D.fragor[j].id);
        document.getElementById('f-' + D.fragor[j].id).focus();
      }
    });
    fragorEl.appendChild(b);
  });

  const techBtn = document.getElementById('techBtn');
  const techModal = document.getElementById('techModal');
  const techClose = document.getElementById('techClose');
  const openModal = function () { techModal.classList.add('show'); techClose.focus(); };
  const closeModal = function () { techModal.classList.remove('show'); techBtn.focus(); };
  techBtn.addEventListener('click', openModal);
  techClose.addEventListener('click', closeModal);
  techModal.addEventListener('click', function (e) { if (e.target === techModal) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && techModal.classList.contains('show')) closeModal();
  });

  const start = location.hash.slice(1);
  const finns = D.fragor.some(function (f) { return f.id === start; });
  valj(finns ? start : 'exempel', !finns);
})();

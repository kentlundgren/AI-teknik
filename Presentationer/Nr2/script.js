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

  function valj(id) {
    D.fragor.forEach(function (f) {
      const knapp = document.getElementById('f-' + f.id);
      const vald = f.id === id;
      knapp.setAttribute('aria-selected', vald ? 'true' : 'false');
      knapp.tabIndex = vald ? 0 : -1;
    });
    const f = D.fragor.find(function (x) { return x.id === id; });
    visaSvar(f);
    visaKort(f);
    history.replaceState(null, '', '#' + id);
  }

  function visaSvar(f) {
    svarEl.replaceChildren();
    svarEl.appendChild(el('h2', null, f.fraga));
    f.svar.forEach(function (s) {
      const p = el('p');
      if (s.rubrik) p.appendChild(el('strong', null, s.rubrik + ': '));
      p.appendChild(document.createTextNode(s.text));
      svarEl.appendChild(p);
    });
    if (f.punkter) {
      svarEl.appendChild(el('h3', null, f.punkter_rubrik));
      const ul = el('ul');
      f.punkter.forEach(function (t) { ul.appendChild(el('li', null, t)); });
      svarEl.appendChild(ul);
    }
  }

  function visaKort(f) {
    kortEl.replaceChildren();
    let lista = D.kort;
    if (f.kort_kategorier !== null) {
      lista = D.kort.filter(function (k) {
        return f.kort_kategorier.indexOf(k.kategori) !== -1 && k.sekretess === 'ok';
      });
    }
    if (!lista.length) return;
    // Länkade kort först, ej publika sist
    lista = lista.slice().sort(function (a, b) {
      return (a.sekretess === 'ok' ? 0 : 1) - (b.sekretess === 'ok' ? 0 : 1);
    });
    lista.forEach(function (k) { kortEl.appendChild(byggKort(k)); });
  }

  function byggKort(k) {
    const det = el('details', 'kort' + (k.sekretess === 'ej_publik' ? ' utan-lank' : ''));
    const sum = el('summary');
    sum.appendChild(el('span', 'kategori', k.kategori));
    sum.appendChild(el('span', 'rubrik', k.rubrik));
    det.appendChild(sum);
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
    if (k.sekretess === 'ok' && k.lank) {
      const a = el('a', 'lank', k.lank_text);
      a.href = k.lank;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      det.appendChild(a);
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

  const start = location.hash.slice(1);
  const finns = D.fragor.some(function (f) { return f.id === start; });
  valj(finns ? start : 'exempel');
})();

"""Genererar media/el_nino_vektor.svg: en affisch om El Niño som vektorgrafik.

Kör: python gen_affisch.py (kräver Pillow och Windows-typsnittet Arial för att mäta textbredd).
Texten bryts efter uppmätt bredd i Arial, så raderna ryms även med Liberation Sans (samma mått).
Alla faktapåståenden hör till källorna längst ned på affischen (NOAA och SMHI) och finns i datafilen.

UPPDATERING 2026-11-12: första versionen. Version 1.14.
"""
import html
import os
from PIL import ImageFont

NF = os.path.dirname(os.path.abspath(__file__))
FONT = r'C:\Windows\Fonts\arial.ttf'
FONTB = r'C:\Windows\Fonts\arialbd.ttf'
W = 1400
MARG = 50
GAP = 30
BRED = W - 2 * MARG  # innehållets bredd

_cache = {}


def fnt(size, bold=False):
    k = (size, bold)
    if k not in _cache:
        _cache[k] = ImageFont.truetype(FONTB if bold else FONT, size)
    return _cache[k]


def bredd(s, size, bold=False):
    return fnt(size, bold).getlength(s)


def bryt(text, size, maxw, bold=False):
    rader, cur = [], ''
    for ord_ in text.split():
        t_ = (cur + ' ' + ord_).strip()
        if bredd(t_, size, bold) <= maxw:
            cur = t_
        else:
            rader.append(cur)
            cur = ord_
    rader.append(cur)
    return rader


def esc(s):
    return html.escape(s, quote=False)


ut = []


def t(x, y, s, size, fill, bold=False, anchor='start'):
    ut.append('<text x="%s" y="%s" font-size="%s" fill="%s" font-weight="%s" text-anchor="%s">%s</text>' % (
        x, y, size, fill, 700 if bold else 400, anchor, esc(s)))


PAD = 34
RUBSTORLEK = 44
RUBLH = 54


def mat_kort(w, rubrik, stycken, storlek, rubsize=RUBSTORLEK):
    inre = w - 2 * PAD
    # rubriken krymps tills det längsta ordet ryms
    while max(bredd(o, rubsize, True) for o in rubrik.split()) > inre and rubsize > 24:
        rubsize -= 1
    rub = bryt(rubrik, rubsize, inre, True)
    rublh = round(rubsize * 1.22)
    lh = round(storlek * 1.36)
    delar = [bryt(p, storlek, inre) for p in stycken]
    h = PAD + len(rub) * rublh + 10 + sum(len(d) * lh + 14 for d in delar) + PAD - 14
    return h, rub, delar, lh, rubsize, rublh


def rita_kort(x, y, w, h, rub, delar, lh, storlek, bg, rubfarg, textfarg, kant=None, rubsize=RUBSTORLEK, rublh=RUBLH):
    ut.append('<rect x="%s" y="%s" width="%s" height="%s" rx="32" fill="%s"%s/>' % (
        x, y, w, h, bg, (' stroke="%s" stroke-width="4"' % kant) if kant else ''))
    cy = y + PAD + round(rubsize * 0.9)
    for r in rub:
        t(x + PAD, cy, r, rubsize, rubfarg, True)
        cy += rublh
    cy += 8
    for d in delar:
        for r in d:
            t(x + PAD, cy, r, storlek, textfarg)
            cy += lh
        cy += 14


def kortrad(y, kort, storlek, rubsize=RUBSTORLEK):
    """Flera kort bredvid varandra med lika höjd. kort = [(rubrik, [stycken], bg, rubfarg, textfarg, kant)]"""
    n = len(kort)
    w = (BRED - (n - 1) * GAP) / n
    m = [mat_kort(w, k[0], k[1], storlek, rubsize) for k in kort]
    h = max(x[0] for x in m)
    for i, k in enumerate(kort):
        _, rub, delar, lh, rs, rl = m[i]
        rita_kort(MARG + i * (w + GAP), y, w, h, rub, delar, lh, storlek, k[2], k[3], k[4], k[5], rs, rl)
    return y + h


def panel(x, y, lage, s):
    """Tvärsnitt av Stilla havet, väst (Asien, Australien) till vänster och öst (Sydamerika) till höger."""
    nu = (lage == 'normal')
    ut.append('<g transform="translate(%s %s) scale(%s)">' % (x, y, s))
    ut.append('<clipPath id="k%s"><rect width="450" height="290" rx="22"/></clipPath>' % lage)
    ut.append('<rect width="450" height="290" rx="22" fill="#dff1fb"/>')
    ut.append('<g clip-path="url(#k%s)">' % lage)
    ut.append('<rect y="100" width="450" height="190" fill="url(#hav)"/>')
    varm = '0,100 450,100 450,122 320,134 170,156 0,196' if nu else '0,100 450,100 450,168 300,168 150,170 0,172'
    ut.append('<polygon points="%s" fill="url(#varm)"/>' % varm)
    ut.append('<rect x="0" y="100" width="450" height="4" fill="#ffffff" opacity="0.5"/>')
    if nu:
        for yy, x1, x2 in [(46, 410, 250), (68, 340, 180)]:
            ut.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#0b3b5c" stroke-width="7" stroke-linecap="round" marker-end="url(#pil)"/>' % (x1, yy, x2, yy))
        t(225, 28, 'Passadvindar blåser västerut', 21, '#0b3b5c', True, 'middle')
        t(140, 132, 'Varmt ytvatten', 20, '#5a2a00', True, 'middle')
        for xx in (356, 392, 428):
            ut.append('<line x1="%s" y1="252" x2="%s" y2="148" stroke="#7ff0e0" stroke-width="8" stroke-linecap="round" marker-end="url(#pilt)"/>' % (xx, xx))
        t(300, 276, 'Kallt djupvatten stiger', 18, '#ffffff', True, 'middle')
    else:
        for yy, x1, x2 in [(46, 340, 290), (68, 280, 230)]:
            ut.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#0b3b5c" stroke-width="7" stroke-linecap="round" opacity="0.7" marker-end="url(#pil)"/>' % (x1, yy, x2, yy))
        t(225, 28, 'Svagare vindar', 21, '#0b3b5c', True, 'middle')
        t(225, 142, 'Varmt ytvatten', 22, '#5a2a00', True, 'middle')
        ut.append('<line x1="410" y1="250" x2="410" y2="214" stroke="#7ff0e0" stroke-width="8" stroke-linecap="round" opacity="0.6" marker-end="url(#pilt)"/>')
        t(300, 276, 'Svag uppvällning', 18, '#ffffff', True, 'middle')
    ut.append('</g>')
    t(12, 95, 'Väst: Asien, Australien', 15, '#0b3b5c', True)
    t(438, 95, 'Öst: Sydamerika', 15, '#0b3b5c', True, 'end')
    ut.append('</g>')


def bygg():
    ut.append('<defs>')
    ut.append('<linearGradient id="himmel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b3b5c"/><stop offset="1" stop-color="#14869e"/></linearGradient>')
    ut.append('<linearGradient id="hav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a8fbf"/><stop offset="1" stop-color="#0b3b5c"/></linearGradient>')
    ut.append('<linearGradient id="varm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset="1" stop-color="#ff7a2f"/></linearGradient>')
    ut.append('<marker id="pil" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b3b5c"/></marker>')
    ut.append('<marker id="pilt" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#7ff0e0"/></marker>')
    ut.append('</defs>')
    ut.append('<rect width="%s" height="@H@" fill="#fff7e8"/>' % W)

    # rubrikband
    ut.append('<rect width="%s" height="290" fill="url(#himmel)"/>' % W)
    ut.append('<circle cx="1230" cy="95" r="70" fill="#ffb347" opacity="0.95"/>')
    for i, yy in enumerate((240, 258, 276)):
        ut.append('<path d="M0,%s q70,-26 140,0 t140,0 t140,0 t140,0 t140,0 t140,0 t140,0 t140,0 t140,0 t140,0" fill="none" stroke="#ffffff" stroke-width="5" opacity="%s"/>' % (yy, 0.55 - 0.15 * i))
    t(MARG + 10, 150, 'El Niño', 140, '#ffffff', True)
    yy = 206
    for r in bryt('Ett naturligt fenomen i Stilla havet med följder över hela världen', 36, 1100, True):
        t(MARG + 12, yy, r, 36, '#ffe9c4', True)
        yy += 48

    y = 320
    # vad är det
    m = mat_kort(BRED, 'Vad är El Niño?', [
        'El Niño är ett naturligt klimatfenomen. Med två till sju års mellanrum, i genomsnitt, blir ytvattnet i centrala och östra Stilla havet ovanligt varmt. Perioderna varar vanligen 9 till 12 månader.',
        'Namnet betyder ”lilla pojken” på spanska. Fiskare i Sydamerika såg varmt vatten vid kusten runt jul, och El Niño toppar oftast i december.',
    ], 31)
    rita_kort(MARG, y, BRED, m[0], m[1], m[2], m[3], 31, '#ffffff', '#0b3b5c', '#1d2b33', '#cfe3ee', m[4], m[5])
    y += m[0] + 44

    # diagram
    t(MARG + 4, y + 36, 'Så fungerar det', 44, '#0b3b5c', True)
    y += 66
    PB = (BRED - GAP) / 2
    s = PB / 450.0
    panel(MARG, y, 'normal', s)
    panel(MARG + PB + GAP, y, 'elnino', s)
    ph = 290 * s
    t(MARG + PB / 2, y + ph + 42, 'Normalt', 34, '#0b3b5c', True, 'middle')
    t(MARG + PB + GAP + PB / 2, y + ph + 42, 'Under El Niño', 34, '#b34a00', True, 'middle')
    y += ph + 72
    for rad in bryt('Normalt blåser passadvindarna västerut längs ekvatorn och för med sig varmt vatten från Sydamerika mot Asien. Kallt djupvatten stiger då upp för att ersätta det. Tvärsnitten är schematiska och inte skalenliga.', 28, BRED - 8):
        t(MARG + 4, y + 26, rad, 28, '#1d2b33')
        y += 38
    y += 40

    # tre steg
    y = kortrad(y, [
        ('1. Passadvindarna försvagas', ['Vindarna längs ekvatorn blir svagare eller byter riktning.'], '#e3f3e8', '#17623a', '#1d2b33', None),
        ('2. Varmt vatten rör sig österut', ['Det varma vattnet trycks tillbaka mot Amerikas västkust. Uppvällningen av kallt, näringsrikt djupvatten försvagas eller upphör.'], '#e3f3e8', '#17623a', '#1d2b33', None),
        ('3. Regnet flyttar med', ['Ofta blir det torrare i Australien, Indonesien och delar av södra Asien, och blötare i södra Sydamerika och södra USA.'], '#e3f3e8', '#17623a', '#1d2b33', None),
    ], 28, 38) + 36

    # sverige, klimat, just nu
    y = kortrad(y, [
        ('Vad betyder det för Sverige?', ['Kopplingen till vädret i Sverige är svag. Men extremväder på andra håll kan slå mot jordbruk och livsmedelspriser på världsmarknaden, och då märks det även här.'], '#fde9d6', '#8a4a0c', '#1d2b33', None),
        ('El Niño och klimatförändringen', ['El Niño är naturligt och orsakas inte av klimatförändringen. Under en El Niño är världens medeltemperatur högre än andra år, och effekterna tenderar att bli starkare i ett varmare klimat.'], '#ffffff', '#0b3b5c', '#1d2b33', '#cfe3ee'),
        ('Just nu', ['I september 2026 räknade WMO med att El Niño pågår ända fram i februari 2027, med nära 100 procents sannolikhet, och kulminerar runt årsskiftet. SMHI beskriver den som en mycket kraftig El Niño.'], '#0b3b5c', '#ffe9c4', '#ffffff', None),
    ], 28, 38) + 40

    # källor
    ut.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#cfc3a8" stroke-width="3"/>' % (MARG, y, W - MARG, y))
    y += 40
    for r in bryt('Källor: NOAA National Ocean Service (u.å.) What are El Niño and La Niña? NOAA Climate.gov (u.å.) What is the El Niño–Southern Oscillation (ENSO) in a nutshell? SMHI (2026) WMO: Exceptionellt varmt hav intensifierar El Niño.', 22, BRED - 8):
        t(MARG + 4, y, r, 22, '#4d5a52')
        y += 30
    for r in bryt('Affischen är ritad av AI som vektorgrafik och är inte en officiell affisch.', 22, BRED - 8, True):
        t(MARG + 4, y + 8, r, 22, '#8a4a0c', True)
        y += 30
    y += 30
    return y


if __name__ == '__main__':
    slut = bygg()
    hojd = int(slut)
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d" '
           'font-family="Arial, Helvetica, \'Liberation Sans\', sans-serif" role="img" aria-labelledby="tt dd">'
           '<title id="tt">El Niño: affisch med förklaring</title>'
           '<desc id="dd">Affisch om El Niño med en förklaring av fenomenet, två tvärsnitt av Stilla havet (normalt och under El Niño), tre steg, vad det betyder för Sverige, kopplingen till klimatförändringen och läget hösten 2026. Källor: NOAA och SMHI.</desc>'
           % (W, hojd, W, hojd)) + ''.join(ut).replace('@H@', str(hojd)) + '</svg>'
    os.makedirs(os.path.join(NF, 'media'), exist_ok=True)
    with open(os.path.join(NF, 'media', 'el_nino_vektor.svg'), 'w', encoding='utf-8') as f:
        f.write(svg)
    print('klart', W, hojd, 'förhållande', round(hojd / W, 2))

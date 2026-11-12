"""Genererar media/el_nino_vektor.svg: en affisch om El Niño som vektorgrafik i A4-format (stående).

Kör: python gen_affisch.py (kräver Pillow och Windows-typsnittet Arial för att mäta textbredd).
Förhållandet är 1 : 1,414 (A4), så samma ritning skalar exakt till A3. SVG:n har width="210mm" och height="297mm".
Sidan har 10,5 mm blank marginal runt om så att vanliga skrivare får med allt. Färgerna är ljusa för att spara bläck och toner.
Brödtexten är minst 24 enheter, vilket är cirka 10 pt på A4 (1 enhet = 0,15 mm). Texten bryts efter uppmätt bredd i Arial.
Alla faktapåståenden hör till källorna längst ned på affischen (NOAA och SMHI) och finns i datafilen.

UPPDATERING 2026-11-12: A4-format, ljusa färger, 10,5 mm marginal. Version 1.15.
UPPDATERING 2026-11-12: första versionen. Version 1.14.
"""
import html
import os
from PIL import ImageFont

NF = os.path.dirname(os.path.abspath(__file__))
FONT = r'C:\Windows\Fonts\arial.ttf'
FONTB = r'C:\Windows\Fonts\arialbd.ttf'
W = 1400
H = 1980               # 1400 * 1,414 = A4-förhållande
MARG = 70              # 70 enheter = 10,5 mm
CONT = W - 2 * MARG
GAP = 26
PAD = 28
NAVY = '#0b3b5c'

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
        round(x, 1), round(y, 1), size, fill, 700 if bold else 400, anchor, esc(s)))


def pil(x1, y1, x2, y2, farg, bredd=7, opacity=1.0, huvud=26, halv=14):
    """Linje med ritad pilspets (inga markörer, så att alla visare och PDF-omvandlare återger den lika)."""
    dx, dy = x2 - x1, y2 - y1
    n = (dx * dx + dy * dy) ** 0.5
    ex, ey = dx / n, dy / n
    bx, by = x2 - ex * huvud, y2 - ey * huvud
    px, py = -ey, ex
    ut.append('<g opacity="%s"><line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="%s" stroke-linecap="round"/>'
              '<polygon points="%s,%s %s,%s %s,%s" fill="%s"/></g>' % (
                  opacity, x1, y1, round(bx, 1), round(by, 1), farg, bredd,
                  x2, y2, round(bx + px * halv, 1), round(by + py * halv, 1), round(bx - px * halv, 1), round(by - py * halv, 1), farg))


def mat_kort(w, rubrik, stycken, storlek, rubsize):
    inre = w - 2 * PAD
    while max(bredd(o, rubsize, True) for o in rubrik.split()) > inre and rubsize > 24:
        rubsize -= 1
    rub = bryt(rubrik, rubsize, inre, True)
    rublh = round(rubsize * 1.2)
    lh = round(storlek * 1.34)
    delar = [bryt(p, storlek, inre) for p in stycken]
    h = PAD + len(rub) * rublh + 8 + sum(len(d) * lh + 10 for d in delar) + PAD - 10
    return h, rub, delar, lh, rubsize, rublh


def rita_kort(x, y, w, h, m, storlek, bg, rubfarg, textfarg, kant):
    _, rub, delar, lh, rs, rl = m
    ut.append('<rect x="%s" y="%s" width="%s" height="%s" rx="26" fill="%s" stroke="%s" stroke-width="3"/>' % (
        round(x, 1), y, round(w, 1), h, bg, kant))
    cy = y + PAD + round(rs * 0.88)
    for r in rub:
        t(x + PAD, cy, r, rs, rubfarg, True)
        cy += rl
    cy += 8
    for d in delar:
        for r in d:
            t(x + PAD, cy, r, storlek, textfarg)
            cy += lh
        cy += 10


def kortrad(y, kort, storlek, rubsize):
    n = len(kort)
    w = (CONT - (n - 1) * GAP) / n
    m = [mat_kort(w, k[0], k[1], storlek, rubsize) for k in kort]
    h = max(x[0] for x in m)
    for i, k in enumerate(kort):
        rita_kort(MARG + i * (w + GAP), y, w, h, m[i], storlek, k[2], k[3], k[4], k[5])
    return y + h


def panel(x, y, lage, s):
    """Tvärsnitt av Stilla havet, väst (Asien, Australien) till vänster och öst (Sydamerika) till höger."""
    nu = (lage == 'normal')
    ut.append('<g transform="translate(%s %s) scale(%s)">' % (round(x, 1), y, round(s, 4)))
    ut.append('<clipPath id="k%s"><rect width="450" height="240" rx="20"/></clipPath>' % lage)
    ut.append('<rect width="450" height="240" rx="20" fill="#eef8fd"/>')
    ut.append('<g clip-path="url(#k%s)">' % lage)
    ut.append('<rect y="92" width="450" height="148" fill="#9ccfe9"/>')
    varm = '0,92 450,92 450,110 320,120 170,140 0,172' if nu else '0,92 450,92 450,150 300,150 150,152 0,154'
    ut.append('<polygon points="%s" fill="#ffc785"/>' % varm)
    ut.append('<rect x="0" y="92" width="450" height="3" fill="#ffffff" opacity="0.7"/>')
    if nu:
        for yy, x1, x2 in [(44, 410, 250), (66, 340, 180)]:
            pil(x1, yy, x2, yy, NAVY)
        t(225, 24, 'Passadvindar blåser västerut', 20, NAVY, True, 'middle')
        t(140, 126, 'Varmt ytvatten', 19, '#5a2a00', True, 'middle')
        for xx in (356, 392, 428):
            pil(xx, 206, xx, 146, '#0e8f84', 8)
        t(270, 230, 'Kallt djupvatten stiger', 17, NAVY, True, 'middle')
    else:
        for yy, x1, x2 in [(44, 340, 290), (66, 280, 230)]:
            pil(x1, yy, x2, yy, NAVY, 7, 0.7)
        t(225, 24, 'Svagare vindar', 20, NAVY, True, 'middle')
        t(225, 128, 'Varmt ytvatten', 21, '#5a2a00', True, 'middle')
        pil(410, 206, 410, 178, '#0e8f84', 8, 0.65, 20, 11)
        t(270, 230, 'Svag uppvällning', 17, NAVY, True, 'middle')
    ut.append('</g>')
    ut.append('<rect width="450" height="240" rx="20" fill="none" stroke="#9cc6dc" stroke-width="2"/>')
    t(12, 88, 'Väst: Asien, Australien', 15, NAVY, True)
    t(438, 88, 'Öst: Sydamerika', 15, NAVY, True, 'end')
    ut.append('</g>')


def bygg(ts):
    """Ritar hela affischen med brödtext i storlek ts och returnerar nedre kanten på innehållet (före sidfoten)."""
    ut.clear()
    ut.append('<rect width="%s" height="%s" fill="#ffffff"/>' % (W, H))

    # rubrikband (ljust)
    hy = MARG
    ut.append('<rect x="%s" y="%s" width="%s" height="190" rx="30" fill="#dff1fb" stroke="#9cc6dc" stroke-width="3"/>' % (MARG, hy, CONT))
    ut.append('<circle cx="%s" cy="%s" r="42" fill="#ffb347"/>' % (W - MARG - 90, hy + 80))
    ut.append('<path d="M%s,%s q55,-20 110,0 t110,0 t110,0 t110,0 t110,0 t110,0 t110,0 t110,0 t110,0 t110,0 t110,0" fill="none" stroke="%s" stroke-width="4" opacity="0.28"/>' % (MARG + 4, hy + 170, NAVY))
    t(MARG + 34, hy + 112, 'El Niño', 112, NAVY, True)
    t(MARG + 38, hy + 154, 'Ett naturligt fenomen i Stilla havet med följder över hela världen', 33, '#b34a00', True)
    y = hy + 190 + GAP

    # vad är det
    m = mat_kort(CONT, 'Vad är El Niño?', [
        'El Niño är ett naturligt klimatfenomen. Med två till sju års mellanrum, i genomsnitt, blir ytvattnet i centrala och östra Stilla havet ovanligt varmt. Perioderna varar vanligen 9 till 12 månader.',
        'Namnet betyder ”lilla pojken” på spanska. Fiskare i Sydamerika såg varmt vatten vid kusten runt jul, och El Niño toppar oftast i december.',
    ], ts, 42)
    rita_kort(MARG, y, CONT, m[0], m, ts, '#ffffff', NAVY, '#1d2b33', '#cfe3ee')
    y += m[0] + GAP

    # diagram
    t(MARG + 4, y + 30, 'Så fungerar det', 38, NAVY, True)
    y += 44
    PB = (CONT - GAP) / 2
    s = PB / 450.0
    panel(MARG, y, 'normal', s)
    panel(MARG + PB + GAP, y, 'elnino', s)
    ph = 240 * s
    t(MARG + PB / 2, y + ph + 36, 'Normalt', 30, NAVY, True, 'middle')
    t(MARG + PB + GAP + PB / 2, y + ph + 36, 'Under El Niño', 30, '#b34a00', True, 'middle')
    y += ph + 46
    for rad in bryt('Normalt blåser passadvindarna västerut längs ekvatorn och för varmt vatten från Sydamerika mot Asien, och kallt djupvatten stiger upp i stället. Tvärsnitten är schematiska och inte skalenliga.', ts, CONT - 8):
        t(MARG + 4, y + ts, rad, ts, '#1d2b33')
        y += round(ts * 1.34)
    y += GAP

    # tre steg
    y = kortrad(y, [
        ('1. Passadvindarna försvagas', ['Vindarna längs ekvatorn blir svagare eller byter riktning.'], '#e8f5ec', '#17623a', '#1d2b33', '#bfe0c9'),
        ('2. Varmt vatten rör sig österut', ['Det varma vattnet trycks tillbaka mot Amerikas västkust. Uppvällningen av kallt, näringsrikt djupvatten försvagas eller upphör.'], '#e8f5ec', '#17623a', '#1d2b33', '#bfe0c9'),
        ('3. Regnet flyttar med', ['Ofta blir det torrare i Australien, Indonesien och delar av södra Asien, och blötare i södra Sydamerika och södra USA.'], '#e8f5ec', '#17623a', '#1d2b33', '#bfe0c9'),
    ], ts, 34) + GAP

    # sverige, klimat, just nu
    y = kortrad(y, [
        ('Vad betyder det för Sverige?', ['Kopplingen till vädret i Sverige är svag. Men extremväder på andra håll kan slå mot jordbruk och livsmedelspriser på världsmarknaden.'], '#fff1e3', '#8a4a0c', '#1d2b33', '#f0cfaa'),
        ('El Niño och klimatförändringen', ['El Niño är naturligt och orsakas inte av klimatförändringen. Under en El Niño är världens medeltemperatur högre än andra år, och effekterna tenderar att bli starkare i ett varmare klimat.'], '#ffffff', NAVY, '#1d2b33', '#cfe3ee'),
        ('Just nu', ['I september 2026 räknade WMO med att El Niño pågår ända fram i februari 2027, med nära 100 procents sannolikhet, och kulminerar runt årsskiftet. SMHI beskriver den som en mycket kraftig El Niño.'], '#eef5fb', '#b34a00', '#1d2b33', '#9cc6dc'),
    ], ts, 34)
    return y


def sidfot(y_start):
    y = y_start
    ut.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="#cfc3a8" stroke-width="2"/>' % (MARG, y, W - MARG, y))
    y += 34
    for r in bryt('Källor: NOAA National Ocean Service (u.å.) What are El Niño and La Niña? NOAA Climate.gov (u.å.) What is the El Niño–Southern Oscillation (ENSO) in a nutshell? SMHI (2026) WMO: Exceptionellt varmt hav intensifierar El Niño.', 21, CONT - 8):
        t(MARG + 4, y, r, 21, '#4d5a52')
        y += 28
    for r in bryt('Affischen är ritad av AI som vektorgrafik och är inte en officiell affisch.', 21, CONT - 8, True):
        t(MARG + 4, y + 4, r, 21, '#8a4a0c', True)
        y += 28
    return y


if __name__ == '__main__':
    BOTTEN = H - MARG          # innehållet får sluta här
    SIDFOT_H = 34 + 28 * 3 + 6  # linje, tre källrader och en märkningsrad
    val = None
    for ts in (27, 26, 25, 24):
        y = bygg(ts)
        if y + 40 + SIDFOT_H <= BOTTEN:
            val = ts
            break
    if val is None:
        raise SystemExit('Innehållet ryms inte i A4 med brödtext 24 eller större: korta texten. Nedre kant %d, tillåtet %d' % (y + 40 + SIDFOT_H, BOTTEN))
    sidfot(BOTTEN - SIDFOT_H + 4)
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="210mm" height="297mm" '
           'font-family="Arial, Helvetica, \'Liberation Sans\', sans-serif" role="img" aria-labelledby="tt dd">'
           '<title id="tt">El Niño: affisch med förklaring (A4)</title>'
           '<desc id="dd">Affisch om El Niño med en förklaring av fenomenet, två tvärsnitt av Stilla havet (normalt och under El Niño), tre steg, vad det betyder för Sverige, kopplingen till klimatförändringen och läget hösten 2026. Källor: NOAA och SMHI.</desc>'
           % (W, H)) + ''.join(ut) + '</svg>'
    os.makedirs(os.path.join(NF, 'media'), exist_ok=True)
    with open(os.path.join(NF, 'media', 'el_nino_vektor.svg'), 'w', encoding='utf-8') as f:
        f.write(svg)
    luft = BOTTEN - SIDFOT_H - y
    print('klart: A4-förhållande, brödtext', val, 'enheter =', round(val * 0.15 / 0.3528, 1), 'pt, luft före sidfot', round(luft), 'enheter =', round(luft * 0.15), 'mm')

"""Genererar og-bild.jpg (1200x630) för sidorna, ur data/siffror.json.

Kör: python gen_og_bild.py (kräver Pillow och Windows-typsnitt: arialbd, calibrib, consolab).
Tiderna är energin i en mikrovågsugn på 1 000 W och hör till den ögonblicksbild som står i datafilen.
"""
import json, os, re
from PIL import Image, ImageDraw, ImageFont, ImageFilter

NF = os.path.dirname(os.path.abspath(__file__))
data = json.load(open(os.path.join(NF, 'data', 'siffror.json'), encoding='utf-8'))
P = {p['id']: p for p in data['poster']}
cache = {}


def v(id):
    if id in cache:
        return cache[id]
    p = P[id]
    if p['typ'] == 'beraknad':
        expr = re.sub(r'[A-Z][A-Z0-9_]*', lambda m: '(' + str(v(m.group(0))) + ')', p['formel'])
        cache[id] = eval(expr)
    else:
        cache[id] = p['varde']
    return cache[id]


def sek(wh):
    return wh * 3600 / v('MW_EFFEKT')


fraga = sek(v('GOOGLE_WH_FRAGA'))
bild = sek(v('BILD_WH'))
arbete = sek(v('ENERGI_BEDOMNING'))


def mmss(s, avrunda_min=False):
    if avrunda_min:
        m = round(s / 60)
        return '%d:00' % m
    s = round(s)
    return '%d:%02d' % (s // 60, s % 60)


def tid_enhet(s):
    if s < 90:
        return str(max(1, round(s))), 'sek'
    return str(round(s / 60)), 'min'


tider = [tid_enhet(fraga) + ('en textfråga',),
         tid_enhet(bild) + ('en genererad bild',),
         tid_enhet(arbete) + ('ett helt arbete',)]
print('tider', tider, 'sek', round(fraga, 2), round(bild, 2), round(arbete))

W, H = 1200, 630
BG = (14, 38, 31)
GRON = (92, 194, 154)
VIT = (240, 245, 242)
ORANGE = (255, 150, 60)
SVART = (10, 14, 13)

img = Image.new('RGB', (W, H), BG)
d = ImageDraw.Draw(img)
# svag diagonal toning
for y in range(H):
    t = y / H
    col = (int(14 + 10 * t), int(38 + 12 * t), int(31 + 8 * t))
    d.line([(0, y), (W, y)], fill=col)


def font(fil, storlek):
    return ImageFont.truetype(os.path.join(r'C:\Windows\Fonts', fil), storlek)


f_titel = font('arialbd.ttf', 66)
f_sub = font('calibrib.ttf', 32)
f_tid = font('consolab.ttf', 84)
f_etikett = font('calibrib.ttf', 34)
f_liten = font('calibrib.ttf', 26)
f_url = font('calibrib.ttf', 24)

# titel
d.text((70, 52), 'Energiåtgång', font=f_titel, fill=VIT)
d.text((70, 128), 'för AI', font=f_titel, fill=GRON)
d.text((70, 216), 'Mätt som tid i en', font=f_sub, fill=(190, 205, 198))
d.text((70, 254), 'mikrovågsugn på 1 000 W', font=f_sub, fill=(190, 205, 198))

# mikrovågsdisplay (höger)
bx0, by0, bx1, by1 = 540, 50, 1150, 548
mask = Image.new('L', (W, H), 0)
ImageDraw.Draw(mask).rounded_rectangle((bx0 - 4, by0 - 4, bx1 + 4, by1 + 4), radius=34, outline=255, width=14)
mask = mask.filter(ImageFilter.GaussianBlur(16)).point(lambda p: int(p * 0.8))
img.paste(Image.new('RGB', (W, H), ORANGE), (0, 0), mask)
d = ImageDraw.Draw(img)
d.rounded_rectangle((bx0, by0, bx1, by1), radius=30, fill=SVART, outline=ORANGE, width=4)

rad_h = 128
f_enhet = font('consolab.ttf', 46)
for i, (tal, enhet, etikett) in enumerate(tider):
    y = by0 + 50 + i * rad_h
    d.text((bx0 + 40, y + 12), tal, font=f_tid, fill=ORANGE)
    d.text((bx0 + 40 + int(d.textlength(tal, font=f_tid)) + 14, y + 52), enhet, font=f_enhet, fill=ORANGE)
    d.text((bx0 + 330, y + 38), etikett, font=f_etikett, fill=VIT)
    if i < 2:
        d.line([(bx0 + 40, y + rad_h - 6), (bx1 - 40, y + rad_h - 6)], fill=(60, 52, 44), width=2)

d.text((bx0 + 40, by0 + 16), 'tid i en mikrovågsugn på 1 000 W', font=f_liten, fill=(255, 190, 120))
d.text((bx0 + 40, by1 - 46), 'cirka-tider. Det sista är en bedömning', font=f_liten, fill=(190, 150, 110))

# nederkant
d.text((70, 380), 'Analys med källor.', font=f_sub, fill=VIT)
d.text((70, 420), 'Gissa först, läs sedan.', font=f_sub, fill=GRON)
d.text((70, 488), 'Förslag på eget initiativ,', font=f_url, fill=(150, 175, 165))
d.text((70, 518), 'inte beslutat av någon förening', font=f_url, fill=(150, 175, 165))
d.text((70, 562), 'kentlundgren.github.io/AI-teknik', font=f_url, fill=(150, 175, 165))

out = os.path.join(NF, 'og-bild.jpg')
img.save(out, 'JPEG', quality=88, optimize=True)
print('sparad', out, os.path.getsize(out) // 1024, 'kB')


# ---------- egna delningsbilder för två sidor ----------
GRA = (190, 205, 198)
DIM = (150, 175, 165)


def ny_bakgrund():
    im = Image.new('RGB', (W, H), BG)
    dd = ImageDraw.Draw(im)
    for yy in range(H):
        t = yy / H
        dd.line([(0, yy), (W, yy)], fill=(int(14 + 10 * t), int(38 + 12 * t), int(31 + 8 * t)))
    return im, dd


def centrerad(dd, mitt, text, fnt, fill):
    bb = dd.textbbox((0, 0), text, font=fnt)
    dd.text((mitt[0] - (bb[0] + bb[2]) / 2, mitt[1] - (bb[1] + bb[3]) / 2), text, font=fnt, fill=fill)


def fot(dd):
    dd.text((70, 488), 'Förslag på eget initiativ,', font=f_url, fill=DIM)
    dd.text((70, 518), 'inte beslutat av någon förening', font=f_url, fill=DIM)
    dd.text((70, 562), 'kentlundgren.github.io/AI-teknik', font=f_url, fill=DIM)


def spara_bild(im, namn):
    sokv = os.path.join(NF, namn)
    im.save(sokv, 'JPEG', quality=88, optimize=True)
    print('sparad', sokv, os.path.getsize(sokv) // 1024, 'kB')


# Hot från agentisk AI: tio tomma platser som väntar på en rangordning
img2, d2 = ny_bakgrund()
d2.text((70, 52), 'Vilket hot', font=f_titel, fill=VIT)
d2.text((70, 128), 'är värst?', font=f_titel, fill=GRON)
d2.text((70, 226), 'Hot från agentisk AI', font=f_sub, fill=GRA)
d2.text((70, 380), 'Tio hot ur källorna.', font=f_sub, fill=VIT)
d2.text((70, 420), 'Rangordna själv.', font=f_sub, fill=GRON)
fot(d2)
cell, gap, gx0, gy0 = 100, 14, 594, 170
f_nr = font('consolab.ttf', 46)
for i in range(10):
    kol, rad = i % 5, i // 5
    x0 = gx0 + kol * (cell + gap)
    y0 = gy0 + rad * (cell + gap)
    forst = (i == 0)
    d2.rounded_rectangle((x0, y0, x0 + cell, y0 + cell), radius=18,
                         fill=(56, 38, 20) if forst else (20, 52, 43), outline=ORANGE if forst else GRON, width=4 if forst else 3)
    centrerad(d2, (x0 + cell / 2, y0 + cell / 2 - 2), str(i + 1), f_nr, ORANGE if forst else (150, 215, 185))
d2.text((gx0, gy0 + 2 * (cell + gap) + 12), 'Plats 1 är det värsta hotet', font=f_liten, fill=(255, 190, 120))
d2.text((gx0, gy0 + 2 * (cell + gap) + 52), 'Underlag från elva källor', font=f_liten, fill=DIM)
spara_bild(img2, 'og-agentisk.jpg')

# AI i proportion: AI:s plats i WEF:s riskrangordning, plats 30 till plats 5
plats2, plats10 = int(v('WEF_AI_2AR')), int(v('WEF_AI_10AR'))
img3, d3 = ny_bakgrund()
d3.text((70, 52), 'AI i', font=f_titel, fill=VIT)
d3.text((70, 128), 'proportion', font=f_titel, fill=GRON)
d3.text((70, 226), 'Vad oroar och drabbar', font=f_sub, fill=GRA)
d3.text((70, 264), 'världens människor?', font=f_sub, fill=GRA)
d3.text((70, 380), 'En fråga bland många.', font=f_sub, fill=VIT)
d3.text((70, 420), 'Rangordna själv.', font=f_sub, fill=GRON)
fot(d3)
bx0, by0, bx1, by1 = 540, 50, 1150, 548
mask = Image.new('L', (W, H), 0)
ImageDraw.Draw(mask).rounded_rectangle((bx0 - 4, by0 - 4, bx1 + 4, by1 + 4), radius=34, outline=255, width=14)
mask = mask.filter(ImageFilter.GaussianBlur(16)).point(lambda p: int(p * 0.8))
img3.paste(Image.new('RGB', (W, H), ORANGE), (0, 0), mask)
d3 = ImageDraw.Draw(img3)
d3.rounded_rectangle((bx0, by0, bx1, by1), radius=30, fill=SVART, outline=ORANGE, width=4)
f_stor = font('consolab.ttf', 120)
f_pl = font('consolab.ttf', 44)
f_lbl = font('calibrib.ttf', 32)
d3.text((bx0 + 40, by0 + 16), 'AI:s plats bland världens risker (WEF 2026)', font=f_liten, fill=(255, 190, 120))
for i, (tal, lbl) in enumerate([(plats2, 'på två års sikt'), (plats10, 'på tio års sikt')]):
    yy = by0 + 78 + i * 190
    s = str(tal)
    d3.text((bx0 + 40, yy), s, font=f_stor, fill=ORANGE)
    xx = bx0 + 40 + int(d3.textlength(s, font=f_stor)) + 14
    d3.text((xx, yy + 78), 'plats', font=f_pl, fill=ORANGE)
    d3.text((xx + int(d3.textlength('plats', font=f_pl)) + 24, yy + 82), lbl, font=f_lbl, fill=VIT)
# pil ned mellan raderna
ax, ay = bx0 + 100, by0 + 78 + 150
d3.polygon([(ax - 22, ay), (ax + 22, ay), (ax, ay + 30)], fill=(255, 190, 120))
d3.text((bx0 + 40, by1 - 46), 'Största uppgången i rangordningen', font=f_liten, fill=(190, 150, 110))
spara_bild(img3, 'og-proportion.jpg')

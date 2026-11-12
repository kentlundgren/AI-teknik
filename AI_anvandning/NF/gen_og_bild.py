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

"""Skapar PDF-filer i exakt sidstorlek (A4 och A3) av media/el_nino_vektor.svg.

Kör: python gor_pdf.py (kräver PyMuPDF: pip install pymupdf)
Resultat: media/el_nino_affisch_A4.pdf och media/el_nino_affisch_A3.pdf. Båda är en sida i vektorgrafik.
Ritningen har förhållandet 1 : 1,414, så A3 är samma ritning i större storlek.
Typsnittet byts för PDF:en till Helvetica, som har samma teckenbredder som Arial, så texten bryts likadant.
Ritningen använder bara enfärgade ytor och ritade pilspetsar, eftersom PyMuPDF inte återger toningar och markörer.

UPPDATERING 2026-11-12: första versionen. Version 1.15.
"""
import os
import re
import sys

import fitz

NF = os.path.dirname(os.path.abspath(__file__))
SVG = os.path.join(NF, 'media', 'el_nino_vektor.svg')
FORMAT = {'A4': (210, 297), 'A3': (297, 420)}


def main():
    svg = open(SVG, encoding='utf-8').read()
    svg = re.sub(r'font-family="[^"]*"', 'font-family="Helvetica"', svg, count=1)
    svg = svg.replace('<text ', '<text font-family="Helvetica" ')  # PyMuPDF läser typsnittet per textelement
    for namn, (b, h) in FORMAT.items():
        s = re.sub(r'width="210mm" height="297mm"', 'width="%dmm" height="%dmm"' % (b, h), svg, count=1)
        doc = fitz.open(stream=s.encode('utf-8'), filetype='svg')
        pdf = fitz.open('pdf', doc.convert_to_pdf())
        pdf.set_metadata({'title': 'El Niño: affisch (%s)' % namn, 'author': 'Kent Lundgren',
                          'subject': 'Affisch om El Niño, ritad av AI som vektorgrafik. Källor: NOAA och SMHI.'})
        mal = os.path.join(NF, 'media', 'el_nino_affisch_%s.pdf' % namn)
        pdf.save(mal, deflate=True)
        p = fitz.open(mal)[0]
        mm = (round(p.rect.width / 72 * 25.4, 1), round(p.rect.height / 72 * 25.4, 1))
        print(namn, 'sidor 1, mått', mm, 'mm,', os.path.getsize(mal), 'byte')
        if mm != (float(b), float(h)):
            sys.exit('Fel sidstorlek för ' + namn)


if __name__ == '__main__':
    main()

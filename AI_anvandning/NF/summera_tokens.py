"""Summerar tokenanvändningen i en Claude Code-session ur dess transkriptfil (.jsonl).

Användning:
    python summera_tokens.py <sökväg till session.jsonl> [<mapp med subagent-filer>]

Skriptet läser fältet `usage` i varje assistent-meddelande och dedupar på meddelande-id
(strömmade meddelanden kan förekomma flera gånger). Det skriver bara ut summor.
Fält: input_tokens (ej cachade), cache_creation_input_tokens (nya cachade),
cache_read_input_tokens (återlästa ur cache) och output_tokens (producerade).
Obs: det är oklart om output_tokens även räknar modellens interna resonemang
(se F-29 i Forbattringar_261112.md).
"""
import glob
import json
import os
import sys


def summera(path):
    msgs = {}
    for line in open(path, encoding='utf-8', errors='replace'):
        try:
            o = json.loads(line)
        except Exception:
            continue
        m = o.get('message') if isinstance(o, dict) else None
        if not isinstance(m, dict) or m.get('role') != 'assistant':
            continue
        u = m.get('usage')
        if not isinstance(u, dict):
            continue
        key = m.get('id') or o.get('uuid')
        prev = msgs.get(key)
        if prev is None or (u.get('output_tokens') or 0) >= (prev.get('output_tokens') or 0):
            msgs[key] = u
    tot = {'anrop': len(msgs), 'inp': 0, 'cc': 0, 'cr': 0, 'out': 0}
    for u in msgs.values():
        tot['inp'] += u.get('input_tokens') or 0
        tot['cc'] += u.get('cache_creation_input_tokens') or 0
        tot['cr'] += u.get('cache_read_input_tokens') or 0
        tot['out'] += u.get('output_tokens') or 0
    return tot


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return
    delar = [summera(sys.argv[1])]
    if len(sys.argv) > 2:
        for p in glob.glob(os.path.join(sys.argv[2], '*.jsonl')):
            delar.append(summera(p))
    tot = {k: sum(d[k] for d in delar) for k in delar[0]}
    print('Modellanrop:', tot['anrop'])
    print('Ej cachad indata:', tot['inp'])
    print('Nya cachade (cache_creation):', tot['cc'])
    print('Återlästa ur cache (cache_read):', tot['cr'])
    print('Producerade (output):', tot['out'])
    print('Nya tokens (output + ej cachad + nya cachade):', tot['out'] + tot['inp'] + tot['cc'])
    print('Alla bearbetade tokens:', tot['out'] + tot['inp'] + tot['cc'] + tot['cr'])


if __name__ == '__main__':
    main()

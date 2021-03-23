import json
from pathlib import Path

here = Path(__file__).parent

characters = (here / "codepoints.txt").read_text(encoding="UTF-8").splitlines()


def uplus2char(s):
    assert s.startswith("U+")
    assert len(s) == 6
    return chr(int(s[2:], base=16))


chars = []

for desc in characters:
    char = "".join(uplus2char(uplus) for uplus in desc.split(";"))
    chars.append(char)

print(json.dumps(chars, ensure_ascii=False))

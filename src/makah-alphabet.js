const COMPOSED_CHARACTERS = [
  'C̓',
  'c̓',
  'Č̓',
  'č̓',
  'K̓',
  'k̓',
  'P̓',
  'p̓',
  'T̓',
  't̓',
  'ƛ̓',
  'Q̓',
  'q̓',
  'X̌',
  'x̌',
];
const KEYBOARD_SET = [
  "!",
  "#",
  "$",
  "&",
  "'",
  "*",
  "0",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ";",
  "X̌",
  "[",
  "]",
  "`",
  "x̌",
  "{",
  "}",
  "~",
  "«",
  "°",
  "·",
  "»",
  "Č",
  "č",
  "ŋ",
  "Š",
  "š",
  "ƛ",
  "Ɂ",
  "ɫ",
  "ʷ",
  "̓",
  "Ḥ",
  "ḥ",
  "‘",
  "’",
  "“",
  "”",
  "Ɫ",
];

export const ALPHABET = "ɁABCČC̓Č̓DEFGHḤIJKKʷK̓K̓ʷLⱢƛMNŋOPP̓QQʷQ̓Q̓ʷRSŠTT̓UVWXX̌YZ Ɂabcčc̓č̓defghḥijkk̓lƛ̓ɫmnŋopp̓qq̓rsštt̓uvwxx̌yz";
export const CHARACTER_SET = combineLists();

function combineLists() {
  const MIN_ASCII_PRINTABLE = ' '.charCodeAt(0);
  const MAX_ASCII_PRINTABLE = '~'.charCodeAt(0);

  let ascii = [];

  for (let i = MIN_ASCII_PRINTABLE; i <= MAX_ASCII_PRINTABLE; i++) {
    ascii.push(String.fromCharCode(i));
  }

  let uniqueChars = Array.from(new Set([].concat(ascii, KEYBOARD_SET, COMPOSED_CHARACTERS)));
  return uniqueChars.sort((a, b) => {
    return charCodeOfBaseCharacter(a) - charCodeOfBaseCharacter(b)
  });
};

function charCodeOfBaseCharacter(c) {
  return c.normalize("NFD").charCodeAt(0);
}

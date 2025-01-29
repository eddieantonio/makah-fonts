import { ALPHABET } from "./makah-alphabet";

const TOP_PICKS = new Set([
  "Andika", "Arial", "Times New Roman", "Tahoma",
]);

// Copy-pasted form form.
const RAW_DATA = {
  "Andika": {
    "Style": "Handwritten",
    "Specifically requested by community?": "Yes",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "Yes",
    "Has font rendering oddities?": "No",
  },
  "Calibri": {
    "Style": "Sans serif",
    "Specifically requested by community?": "Yes",
    "Available on Google Fonts?": "No",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Has font rendering oddities": "",
  },
  "Lucida Sans Unicode": {
    "Style": "Sans serif",
    "Specifically requested by community?": "Yes",
    "Available on Google Fonts?": "No",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
  },
  "Papyrus": {
    "Style": "Misc",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Devoid of rendering oddities?": "",
  },
  "Noto Sans": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Has font rendering oddities": "No",
    "Recommended": ""
  },
  "PT Sans": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "PT Sans Narrow": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Pangolin": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Proxima Nova": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Roboto": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Nunito": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Trebuchet MS": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Varela Round": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Arial": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "Yes",
    "Has font rendering oddities?": "No",
    "Recommended": ""
  },
  "Arimo": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Montserrat": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Roboto Mono": {
    "Style": "Monospace",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "EB Garamond": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Gentium Basic": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Alegreya": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Times New Roman": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "Yes",
    "Has font rendering oddities?": "No",
  },
  "Cambria": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Playfair Display": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Noto Serif": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Georgia": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Lobster": {
    "Style": "Script",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Kalam": {
    "Style": "Script",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Cabin Sketch": {
    "Style": "Misc",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Shadows Into Light": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Bree Serif": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Comic Sans MS": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Josefin Sans": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Righteous": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Comfortaa": {
    "Style": "Sans Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "The Girl Next Door": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Indie Flower": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Courier New": {
    "Style": "Monospace",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "Yes",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Verdana": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "Tahoma": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "Yes",
    "Has font rendering oddities?": "No",
    "Recommended": ""
  },
  "Impact": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
    "Recommended": ""
  },
  "URW Palladio HOT": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "No",
    "Has all glyphs?": "No",
    "Has font rendering oddities?": "Yes",
  }
};

class CandidateFont {
  constructor(_family, rawData) {
    this._family = _family;
    this._rawData = rawData;
  }

  get family() {
    return this._family;
  }

  get isTopPick() {
    return TOP_PICKS.has(this.family);
  }

  get isRecommended() {
    return this.isQualified && this.hasAllNecessaryGlyphs && this.rendersOk;
  }

  get isDiscouraged() {
    if (!this.isQualified) return true;

    return !this.isRecommended && allFieldsNotNull(this._rawData);

    function allFieldsNotNull(datums) {
      if (datums["Has all glyphs?"] === undefined) return false;
      if (datums["Has font rendering oddities?"] === undefined) return false;

      return true;
    }
  }

  get comments() {
    let reasons = [];

    if (!this.isAvailableOnGoogleFonts && !this.isWebSafeFont)
      reasons.push("Not available on Chromebooks (probably only available with Microsoft Office installed)");

    if (this.hasFontRenderingOddity)
      reasons.push("Has graphical glitches (check «č̓», «k̓», «x̌»)");

    if (this.isMissingGlyphs)
      reasons.push("Does not contain all characters necessary (check «ʔ», «ƛ̓», «ɫ», «ʷ», «ŋ»)");

    return reasons;
  }

  get style() {
    return this._rawData["Style"];
  }

  get isQualified() {
    return this.isAvailableOnGoogleFonts || this.isWebSafeFont;
  }

  get isAvailableOnGoogleFonts() {
    return toTristate(this._rawData["Available on Google Fonts?"]) === true;
  }

  get isWebSafeFont() {
    return toTristate(this._rawData["Web safe font"]) === true;
  }

  get rendersOk() {
    return this.hasFontRenderingOddity === false;
  }

  get hasFontRenderingOddity() {
    return toTristate(this._rawData["Has font rendering oddities?"]) === true;
  }

  get hasAllNecessaryGlyphs() {
    return toTristate(this._rawData["Has all glyphs?"]) === true;
  }

  get isMissingGlyphs() {
    return toTristate(this._rawData["Has all glyphs?"]) === false;
  }

  get googleFontsURL() {
    let familyWithPluses = this.family.replace(/[ ]/g, '+');
    return `https://fonts.googleapis.com/css2?family=${familyWithPluses}`;
  }

  get css() {
    return `font-family: ${this.family}!important`;
  }
}

function toTristate(value) {
  if (!value) return null;

  if (typeof value != "string") {
    throw new TypeError(`Expected value to be a string, but it's a ${typeof value}`);
  }

  switch (value.toLowerCase()) {
    case "yes":
      return true;
    case "no":
      return false;
    default:
      throw new RangeError(`invalid tristate: ${value}`);
  }
}

const FONT_DATABASE = [];
for (let [_family, data] of Object.entries(RAW_DATA)) {
  FONT_DATABASE.push(new CandidateFont(_family, data));
}

export default FONT_DATABASE;


// See: https://developers.google.com/fonts/docs/css2
export function makeGoogleFontsURL() {
  let endpoint = new URL('https://fonts.googleapis.com/css2');
  let params = new URLSearchParams();
  let i = 0;

  for (let font of FONT_DATABASE) {
    if (font.isAvailableOnGoogleFonts) {
      params.append("family", font.family);
    }
  }

  params.set("text", ALPHABET);
  params.set("display", "swap");

  endpoint.search = params;
  return endpoint.href;
}

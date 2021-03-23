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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
  },
  "Calibri": {
    "Style": "Sans serif",
    "Specifically requested by community?": "Yes",
    "Available on Google Fonts?": "No",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
  },
  "Noto Sans": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
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
    "Devoid of rendering oddities?": "",
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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
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
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Noto Serif": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Georgia": {
    "Style": "Serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Lobster": {
    "Style": "Script",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Comfortaa": {
    "Style": "Handwritten",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "Yes",
    "Web safe font": "No",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
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
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Courier New": {
    "Style": "Monospace",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Verdana": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Tahoma": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
  },
  "Impact": {
    "Style": "Sans serif",
    "Specifically requested by community?": "No",
    "Available on Google Fonts?": "No",
    "Web safe font": "Yes",
    "Has all glyphs?": "",
    "Devoid of rendering oddities?": "",
    "Recommended": ""
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

  get style() {
    return this._rawData["Style"];
  }

  get isQualified() {
    return this.isAvailableOnGoogleFonts || this.isWebSafeFont;
  }

  get isAvailableOnGoogleFonts() {
    return toBoolean(this._rawData["Available on Google Fonts?"])
  }

  get isWebSafeFont() {
    return toBoolean(this._rawData["Web safe font"]);
  }

  get isRecommended() {
    return this.isQualified;
  }

  // TODO: give a reason why?
  get isDiscouraged() {
    return !this.isRecommended;
  }

  get isTopPick() {
    return TOP_PICKS.has(this.family);
  }

  get googleFontsURL() {
    let familyWithPluses = this.family.replace(/[ ]/g, '+');
    return `https://fonts.googleapis.com/css2?family=${familyWithPluses}`;
  }

  get css() {
    return `font-family: ${this.family}!important`;
  }
}

function toBoolean(value) {
  if (value.toLowerCase() == "yes") {
    return true;
  } else {
    return false;
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

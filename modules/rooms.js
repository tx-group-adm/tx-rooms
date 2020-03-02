const BUILDINGS = {
  ERNST_NOBS_PLATZ_7: {
    code: "CH-WE-A",
    address: "Ernst Nobs Platz 7",
    nickname: "Glass Building",
    imgUrl: "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
  },
  WERDSTRASSE_25: {
    code: "CH-WE-D",
    address: "Werdstrasse 25",
    nickname: "The Werdino / Post Building",
    imgUrl: "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
  },
  WERDSTRASSE_21: {
    code: "CH-WE-C",
    address: "Werdstrasse 21",
    nickname: "The Wood Building",
    imgUrl: "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
  },
  STAUFFACHERQUAI_8: {
    code: "CH-WE-B",
    address: "Stauffacherquai 8",
    nickname: "",
    imgUrl: "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
  }
};

const FLOORS = {
  NEGATIVE1: "Floor -1",
  ZERO: "Floor 0",
  ONE: "Floor 1",
  TWO: "Floor 2",
  THREE: "Floor 3",
  FOUR: "Floor 4",
  FIVE: "Floor 5",
  SIX: "Floor 6",
  Z: "Floor Z"
};

const ERNST_NOBS_PLATZ_7 = {
  
  1: {
    name: "Ad Services",
    floor: FLOORS.NEGATIVE1,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  2: {
    name: "Prepress",
    floor: FLOORS.NEGATIVE1,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  3: {
    name: "Konferenzzentrum / Atrium",
    floor: FLOORS.NEGATIVE1,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  4: {
    name: "Plenum A",
    floor: FLOORS.NEGATIVE1,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  5: {
    name: "Plenum B",
    floor: FLOORS.NEGATIVE1,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  6: {
    name: "Plenum C",
    floor: FLOORS.NEGATIVE1,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  7: {
    name: "Informatik",
    floor: FLOORS.ZERO,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  8: {
    name: "Marktforschung",
    floor: FLOORS.ZERO,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  9: {
    name: "Seattle",
    floor: FLOORS.ZERO,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  10: {
    name: "Homegate",
    floor: FLOORS.ONE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  11: {
    name: "Leitung Bereich Rubriken & Marketplätze",
    floor: FLOORS.ONE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  12: {
    name: "Leitung Bereich IT & Beteiligungen",
    floor: FLOORS.ONE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  13: {
    name: "Leitung Bereich Verlagsservices",
    floor: FLOORS.ONE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  14: {
    name: "San Francisco",
    floor: FLOORS.ONE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  15: {
    name: "Finanz und Wirtschaft",
    floor: FLOORS.TWO,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  16: {
    name: "Tutti",
    floor: FLOORS.TWO,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  17: {
    name: "New York",
    floor: FLOORS.TWO,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  18: {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  19: {
    name: "Schweizer Familie",
    floor: FLOORS.THREE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  20: {
    name: "Chicago",
    floor: FLOORS.THREE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  21: {
    name: "Annabelle",
    floor: FLOORS.FOUR,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  22: {
    name: "Debitoren",
    floor: FLOORS.FOUR,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  23: {
    name: "Finanz und Wirtschaft Forum",
    floor: FLOORS.FOUR,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  24: {
    name: "Cinerent",
    floor: FLOORS.FIVE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  25: {
    name: "Olmero",
    floor: FLOORS.FIVE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  26: {
    name: "Starticket",
    floor: FLOORS.FIVE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  27: {
    name: "Boston",
    floor: FLOORS.FIVE,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  28: {
    name: "eat.ch",
    floor: FLOORS.SIX,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  29: {
    name: "Lounge",
    floor: FLOORS.SIX,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  30: {
    name: "Presseclub 1",
    floor: FLOORS.SIX,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  31: {
    name: "Presseclub 2",
    floor: FLOORS.SIX,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  32: {
    name: "VR-Sitzungszimmer",
    floor: FLOORS.SIX,
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  }
};

const WERDSTRASSE_25 = {
  33: {
    name: "Immobilien-Management",
    floor: FLOORS.FIVE,
    ...BUILDINGS.WERDSTRASSE_25
  },
  34: {
    name: "Unternehmensentwicklung",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_25
  },
  35: {
    name: "Unternehmenskommunikation",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_25
  },
  36: {
    name: "Unternehmensleitung",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_25
  },
  37: {
    name: "Verwalungsrat",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_25
  },
  38: {
    name: "Einkauf",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_25
  },
  39: {
    name: "Human Resources",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_25
  },
  40: {
    name: "Advertising: Regionalmedien 2",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_25
  },
  41: {
    name: "Advertising: Sales Support",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_25
  },
  42: {
    name: "Tags-Anzeiger",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_25
  },
  43: {
    name: "Webvideo-Team",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_25
  },
  44: {
    name: "Advertising: Regionalmedien 1",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_25
  },
  45: {
    name: "Olmero Informatik",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_25
  },
  46: {
    name: "Informatik Schulung",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_25
  },
  47: {
    name: "Sitzungszimmer D 1 Kopenhagen",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54071',
    ...BUILDINGS.WERDSTRASSE_25
  }, 47.1: {
    name: "Sitzungszimmer D 1 Oslo",
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54072',
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_25
  },
  47.1: {
    name: "Sitzungszimmer D 1 London",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54070',
    ...BUILDINGS.WERDSTRASSE_25
  },
  47.2: {
    name: "Sitzungszimmer D 1 Luxemburg",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54069',
    ...BUILDINGS.WERDSTRASSE_25
  },
  47.3: {
    name: "Sitzungszimmer D 1 Paris",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54068',
    ...BUILDINGS.WERDSTRASSE_25
  },  47.4: {
    name: "Sitzungszimmer D 1 Rom",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54066',
    ...BUILDINGS.WERDSTRASSE_25
  },47.5: {
    name: "Sitzungszimmer D 1 Athen",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54063',
    ...BUILDINGS.WERDSTRASSE_25
  },
  47.6: {
    name: "Sitzungszimmer D 1 Madrid",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54065',
    ...BUILDINGS.WERDSTRASSE_25
  },  47.7: {
    name: "Sitzungszimmer D 1 SchulungsraumInformatik",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54064',
    ...BUILDINGS.WERDSTRASSE_25
  },47.8: {
    name: "Sitzungszimmer D 1 Berlin",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54067',
    ...BUILDINGS.WERDSTRASSE_25
  },
  48: {
    name: "Hausdienst (Bouygues)",
    floor: FLOORS.Z,
    ...BUILDINGS.WERDSTRASSE_25
  },
  49: {
    name: "Lehrlingszimmer",
    floor: FLOORS.Z,
    ...BUILDINGS.WERDSTRASSE_25
  },
  50: {
    name: "Leitung Personalrestaurant Werdino",
    floor: FLOORS.Z,
    ...BUILDINGS.WERDSTRASSE_25
  },
  51: {
    name: "Hauspost",
    floor: FLOORS.ZERO,
    ...BUILDINGS.WERDSTRASSE_25
  },
  52: {
    name: "Personalrestaurant Werdino",
    floor: FLOORS.ZERO,
    ...BUILDINGS.WERDSTRASSE_25
  }
};

const WERDSTRASSE_21 = {
  53: {
    name: "Advertising: 20 Minuten",
    floor: FLOORS.FIVE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  54: {
    name: "20 Minuten",
    floor: FLOORS.FIVE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  55: {
    name: "20 Minuten Friday",
    floor: FLOORS.FIVE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  56: {
    name: "20 Minuten Tillate",
    floor: FLOORS.FIVE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  57: {
    name: "Sitzungszimmer C 5.2 Seoul",
    floor: FLOORS.FIVE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  58: {
    name: "Leitung Bereich Werdung & Pendlermedien",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  59: {
    name: "20 Minuten (4th Floor)",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  60: {
    name: "Advertising: 20 Minuten",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  61: {
    name: "Advertising: Digital Advertising Sales",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  62: {
    name: "Advertising: Digital Classified & Tamedia Network",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  63: {
    name: "Customer Contact Center",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  64: {
    name: "Digital News & Development",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  65: {
    name: "Sitzungszimmer C 4.1 Bangkok",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  66: {
    name: "Sitzungszimmer C 4.2 Kuala Lumpur",
    floor: FLOORS.FOUR,
    ...BUILDINGS.WERDSTRASSE_21
  },
  67: {
    name: "Leitung Bereich Bezahlmedien",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  68: {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_21
  },  
  69: {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_21
  },  70: {
    name: "Nutzermarkt: Dialogmarketing",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_21
  }, 71: {
    name: "Nutzermarkt: überregionale Medien Deutschweiz",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  72: {
    name: "Sitzungszimmer C 3.1 Mumbai",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_21
  },  
  73: {
    name: "Sitzungszimmer C 3.2 Singapur",
    floor: FLOORS.THREE,
    ...BUILDINGS.WERDSTRASSE_21
  },  74: {
    name: "Tages-Anzeiger",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_21
  },75: {
    name: "Tages-Anzeiger Newsroom",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_21
  },76: {
    name: "Sitzungszimmer C 2.1 Shanghai",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_21
  },
  77: {
    name: "Sitzungszimmer C 2.3 Hongkong",
    floor: FLOORS.TWO,
    ...BUILDINGS.WERDSTRASSE_21
  }, 78: {
    name: "Das Magazin",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_21
  },79: {
    name: "Digital News & Development",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_21
  },80: {
    name: "Tagblatt der Stadt Zürich",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_21
  },81: {
    name: "Tages-Anzeiger",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  82: {
    name: "Sitzungszimmer C 1.1 Tokyo",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_21
  },
  83: {
    name: "Sitzungszimmer C 1.2 Beijing",
    floor: FLOORS.ONE,
    ...BUILDINGS.WERDSTRASSE_21
  } , 84: {
    name: "Zwischengeschoss",
    floor: FLOORS.Z,
    ...BUILDINGS.WERDSTRASSE_21
  }, 85: {
    name: "Haupteingang",
    floor: FLOORS.ZERO,
    ...BUILDINGS.WERDSTRASSE_21
  }, 86: {
    name: "Empfang",
    floor: FLOORS.ZERO,
    ...BUILDINGS.WERDSTRASSE_21
  }, 87: {
    name: "Inseratenannahme",
    floor: FLOORS.ZERO,
    ...BUILDINGS.WERDSTRASSE_21
  }, 88: {
    name: "Personalrestaurant Werdino (Erweiterung)",
    floor: FLOORS.ZERO,
    ...BUILDINGS.WERDSTRASSE_21
  }
};

const STAUFFACHERQUAI_8 = {
  89: {
    name: "20 Minuten Newsroom",
    floor: FLOORS.FIVE,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  90: {
    name: "Finanz und Rechnungswesen",
    floor: FLOORS.FOUR,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  91: {
    name: "Controlling",
    floor: FLOORS.FOUR,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  92: {
    name: "Leitung Bereich Finanzen & Personal",
    floor: FLOORS.FOUR,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  93: {
    name: "Sitzungszimmer B 4.1 Lausanne",
    floor: FLOORS.FOUR,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  94: {
    name: "Sitzungszimmer B 4.2 Genf",
    floor: FLOORS.FOUR,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  95: {
    name: "Tages-Anzeiger",
    floor: FLOORS.THREE,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  96: {
    name: "SonntagsZeitung",
    floor: FLOORS.TWO,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  97: {
    name: "Tages-Anzeiger",
    floor: FLOORS.TWO,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  98: {
    name: "Encore",
    floor: FLOORS.ONE,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  99: {
    name: "SonntagsZeitung",
    floor: FLOORS.ONE,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  100: {
    name: "Tages-Anzeiger",
    floor: FLOORS.ONE,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  101: {
    name: "Sitzungszimmer B 1.1 Bern",
    floor: FLOORS.ONE,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
  102: {
    name: "Doodle",
    floor: FLOORS.ZERO,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },  
  103: {
    name: "Annabelle Studio",
    floor: FLOORS.ZERO,
    ...BUILDINGS.STAUFFACHERQUAI_8
  },
};

const rooms = {
  ...ERNST_NOBS_PLATZ_7,
  ...WERDSTRASSE_25,
  ...WERDSTRASSE_21,
  ...STAUFFACHERQUAI_8
};

module.exports = {
  rooms,
};

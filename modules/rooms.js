const buildings = {
  ERNST_NOBS_PLATZ_7: {
    code: "CH-WE-A",
    address: "Ernst-Nobs-Platz 7",
    nickname: "Glass Building",
    imgUrl: "https://user-images.githubusercontent.com/5614571/76119608-15c14980-5ff0-11ea-9a2b-26af4b4a3021.png",
    icon: ':tumbler_glass:',
    value: 'ERNST_NOBS_PLATZ_7'
  },
  WERDSTRASSE_25: {
    code: "CH-WE-D",
    address: "Werdstrasse 25",
    nickname: "The Werdino / Post Building",
    imgUrl: "https://user-images.githubusercontent.com/5614571/76119622-1f4ab180-5ff0-11ea-96fd-c93ea87bd87f.png",
    icon: ':postbox:',
    value: 'WERDSTRASSE_25'
  },
  WERDSTRASSE_21: {
    code: "CH-WE-C",
    address: "Werdstrasse 21",
    nickname: "The Wood Building",
    imgUrl: "https://user-images.githubusercontent.com/5614571/76119618-1c4fc100-5ff0-11ea-9380-dbd513c6e221.png",
    icon: ':evergreen_tree:',
    value: 'WERDSTRASSE_21'
  },
  STAUFFACHERQUAI_8: {
    code: "CH-WE-B",
    address: "Stauffacherquai 8",
    nickname: "The Classic Building",
    imgUrl: "https://user-images.githubusercontent.com/5614571/76119615-19ed6700-5ff0-11ea-89d6-2f717c8e821b.png",
    icon: ':classical_building:',
    value: 'STAUFFACHERQUAI_8'
  }
};

const FLOORS = {
  NEGATIVE1: 'Floor -1',
  ZERO: 'Floor 0',
  Z: 'Floor Z',
  ONE: 'Floor 1',
  TWO: 'Floor 2',
  THREE: 'Floor 3',
  FOUR: 'Floor 4',
  FIVE: 'Floor 5',
  SIX: 'Floor 6',
};

/**
 * ERNST_NOBS_PLATZ_7 Rooms.
 * 
 * In descending order to save us from sorting them 
 * later when we build the home tab. 
 */
const ERNST_NOBS_PLATZ_7 = [
  // 6th Floor
  {
    name: "eat.ch",
    floor: FLOORS.SIX,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Lounge",
    floor: FLOORS.SIX,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Presseclub 1",
    floor: FLOORS.SIX,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54045',
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Presseclub 2",
    floor: FLOORS.SIX,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54046',
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "VR-Sitzungszimmer",
    floor: FLOORS.SIX,
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 5th Floor
  {
    name: "Nutzermarkt (Tappeiner)",
    floor: FLOORS.FIVE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Olmero",
    floor: FLOORS.FIVE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Doodle TX Group Ventures",
    floor: FLOORS.FIVE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Magazin Tamedia",
    floor: FLOORS.FIVE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Sitzungszimmer A5.1 Boston",
    floor: FLOORS.FIVE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54050',
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 4th Floor
  {
    name: "Corporate Services TX Group",
    floor: FLOORS.FOUR,
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 3rd Floor
  {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Corporate Services TX Group",
    floor: FLOORS.THREE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Sitzungszimmer A3.1 Chicago",
    floor: FLOORS.THREE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54049',
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 2nd Floor
  {
    name: "TX Markets Leiung",
    floor: FLOORS.TWO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "TX Group Technologies + Ventures",
    floor: FLOORS.TWO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Tutti",
    floor: FLOORS.TWO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Sitzungszimmer A2.1 New York",
    floor: FLOORS.TWO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 1st Floor
  {
    name: "Homegate",
    floor: FLOORS.ONE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Sitzungszimmer A1.1 San Francisco",
    floor: FLOORS.ONE,
    ...buildings.ERNST_NOBS_PLATZ_7,
  },

  // 0th Floor
  {
    name: "Informatik",
    floor: FLOORS.ZERO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Finanz und Wirtschaft + Forum",
    floor: FLOORS.ZERO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Sitzungszimmer A0.1 Seattle",
    floor: FLOORS.ZERO,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54047',
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // Floor -1
  {
    name: "Co Working Space",
    floor: FLOORS.NEGATIVE1,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Konferenzzentrum / Atrium",
    floor: FLOORS.NEGATIVE1,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54044',
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Plenum A",
    floor: FLOORS.NEGATIVE1,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54041',
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Plenum B",
    floor: FLOORS.NEGATIVE1,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54042',
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Plenum C",
    floor: FLOORS.NEGATIVE1,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54043',
    ...buildings.ERNST_NOBS_PLATZ_7
  }
];

/**
 * WERDSTRASSE_25 Rooms.
 * 
 * In descending order to save us from sorting them 
 * later when we build the home tab. 
 */
const WERDSTRASSE_25 = [
  // 5th Floor
  {
    name: "Immobilien-Management",
    floor: FLOORS.FIVE,
    ...buildings.WERDSTRASSE_25
  },

  // 4th Floor
  {
    name: 'Sitzungszimmer E4.1 Bellevue',
    floor: FLOORS.FOUR,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11698/spaces/54014',
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Unternehmensentwicklung",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Unternehmenskommunikation",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Unternehmensleitung",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Verwalungsrat",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_25
  }, 

  // 3rd Floor
  {
    name: "Redaktion Tamedia DCH",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_25
  },

  // 2nd Floor
  {
    name: "Tages-Anzeiger",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_25
  },

  // 1st Floor
  {
    name: "TES, Redaktion Tamedia",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sonntagszeitung",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  }, 
  {
    name: "Informatik Schulung",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D1.13 Kopenhagen",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54071",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D1.14 Oslo",
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54072",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D1.11 London",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54070",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D1.9 Luxemburg",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54069",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D1.7 Paris",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54068",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D.1 Rom",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54066",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D1.1 Athen",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54063",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D1.3 Madrid",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54065",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D.1 SchulungsraumInformatik",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54064",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D.1 Berlin",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54067",
    ...buildings.WERDSTRASSE_25
  },

  // Z Floor
  {
    name: "Hausdienst (Bouygues)",
    floor: FLOORS.Z,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Lehrlingszimmer",
    floor: FLOORS.Z,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Leitung Personalrestaurant Werdino",
    floor: FLOORS.Z,
    ...buildings.WERDSTRASSE_25
  },

  // 0th Floor
  {
    name: "Hauspost",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Personalrestaurant Werdino",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_25
  }
];

/**
 * WERDSTRASSE_21 Rooms.
 * 
 * In descending order to save us from sorting them 
 * later when we build the home tab. 
 */
const WERDSTRASSE_21 = [
  {
    name: "20 Minuten Redaktion",
    floor: FLOORS.FIVE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "20 Minuten Verlang",
    floor: FLOORS.FIVE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C5.2 Seoul",
    floor: FLOORS.FIVE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54062',
    ...buildings.WERDSTRASSE_21
  },
  
  // 4th Floor
  {
    name: "20 Minuten Verlag",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "20 Minuten Advertising",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Goldbach neXT",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C4.1 Bangkok",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C4.2 Kuala Lumpur",
    floor: FLOORS.FOUR,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54061',
    ...buildings.WERDSTRASSE_21
  },

  // 3rd Floor
  {
    name: "Goldbach Publishing",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Goldbach Audience",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C3.1 Mumbai",
    floor: FLOORS.THREE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54058',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C3.2 Singapur",
    floor: FLOORS.THREE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54059',
    ...buildings.WERDSTRASSE_21
  },

  // 2nd Floor
  {
    name: "Redaktion Tamedia Newsroom",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Redaktion Tamedia Sport",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "TES",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C2.1 Shanghai",
    floor: FLOORS.TWO,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54056',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C2.3 Hongkong",
    floor: FLOORS.TWO,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54057',
    ...buildings.WERDSTRASSE_21
  },

  // 1st Floor
  {
    name: "Tamedia Product, Revenue und Technology",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C1.1 Tokyo",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54054',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C1.2 Beijing",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54055',
    ...buildings.WERDSTRASSE_21
  },

  // Z Floor
  {
    name: "Zwischengeschoss",
    floor: FLOORS.Z,
    ...buildings.WERDSTRASSE_21
  },

  // Oth Floor
  {
    name: "Empfang",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Veranstaltungsraum",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_21
  },
];

/**
 * STAUFFACHERQUAI_8 Rooms.
 * 
 * In descending order to save us from sorting them 
 * later when we build the home tab. 
 */
const STAUFFACHERQUAI_8 = [
  {
    name: "20 Minuten Redaktion",
    floor: FLOORS.FIVE,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "20 Minuten Videostudio",
    floor: FLOORS.FIVE,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Finanzen",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Controlling",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Sitzungszimmer B4.1 Lausanne",
    floor: FLOORS.FOUR,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11699/spaces/54052',
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Sitzungszimmer B4.2 Genf",
    floor: FLOORS.FOUR,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11699/spaces/54053',
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Sitzungszimmer B4.3",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  }, 
  {
    name: "Sitzungszimmer B4.4",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Sitzungszimmer Gilbert",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  },
];

const rooms = [
  ...ERNST_NOBS_PLATZ_7,
  ...WERDSTRASSE_25,
  ...WERDSTRASSE_21,
  ...STAUFFACHERQUAI_8,
];

module.exports = {
  rooms,
  buildings,
};

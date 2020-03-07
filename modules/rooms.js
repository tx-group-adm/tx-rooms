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
  },
  MYSTERIOUS_BUILDING: {
    code: "CH-WE-E",
    address: "Unknown (please share)",
    nickname: "Where is this place?",
    imgUrl: "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png",
    icon: ':question:',
    value: 'MYSTERIOUS_BUILDING'
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
 * This space is a mystery to me, because we have an entry in Robin, but 
 * nothing about it in the building directories.
 * 
 * In descending order to save us from sorting them 
 * later when we build the home tab. 
 */
const MYSTERIOUS_BUILDING = [
  {
    name: 'Bellevue',
    floor: FLOORS.SIX,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11698/spaces/54014',
    ...buildings.MYSTERIOUS_BUILDING
  }
];

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
    name: "Cinerent",
    floor: FLOORS.FIVE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Olmero",
    floor: FLOORS.FIVE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Starticket",
    floor: FLOORS.FIVE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Boston",
    floor: FLOORS.FIVE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54050',
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 4th Floor
  {
    name: "Annabelle",
    floor: FLOORS.FOUR,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Debitoren",
    floor: FLOORS.FOUR,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Finanz und Wirtschaft Forum",
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
    name: "Schweizer Familie",
    floor: FLOORS.THREE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Chicago",
    floor: FLOORS.THREE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54049',
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Finanz und Wirtschaft",
    floor: FLOORS.TWO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 2nd Floor
  {
    name: "Tutti",
    floor: FLOORS.TWO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "New York",
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
    name: "Leitung Bereich Rubriken & Marketplätze",
    floor: FLOORS.ONE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Leitung Bereich IT & Beteiligungen",
    floor: FLOORS.ONE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Leitung Bereich Verlagsservices",
    floor: FLOORS.ONE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "San Francisco",
    floor: FLOORS.ONE,
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // 0th Floor
  {
    name: "Informatik",
    floor: FLOORS.ZERO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Marktforschung",
    floor: FLOORS.ZERO,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Seattle",
    floor: FLOORS.ZERO,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/10016/spaces/54047',
    ...buildings.ERNST_NOBS_PLATZ_7
  },

  // Floor -1
  {
    name: "Ad Services",
    floor: FLOORS.NEGATIVE1,
    ...buildings.ERNST_NOBS_PLATZ_7
  },
  {
    name: "Prepress",
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
  {
    name: "Immobilien-Management",
    floor: FLOORS.FIVE,
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
  {
    name: "Einkauf",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Human Resources",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Advertising: Regionalmedien 2",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Advertising: Sales Support",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Tags-Anzeiger",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Webvideo-Team",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Advertising: Regionalmedien 1",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Olmero Informatik",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Informatik Schulung",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Kopenhagen",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54071",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Oslo",
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54072",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 London",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54070",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Luxemburg",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54069",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Paris",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54068",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Rom",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54066",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Athen",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54063",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Madrid",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54065",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 SchulungsraumInformatik",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54064",
    ...buildings.WERDSTRASSE_25
  },
  {
    name: "Sitzungszimmer D 1 Berlin",
    floor: FLOORS.ONE,
    robinLink:
      "https://dashboard.robinpowered.com/tamedia/locations/11701/spaces/54067",
    ...buildings.WERDSTRASSE_25
  },
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
    name: "Advertising: 20 Minuten",
    floor: FLOORS.FIVE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "20 Minuten",
    floor: FLOORS.FIVE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "20 Minuten Friday",
    floor: FLOORS.FIVE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "20 Minuten Tillate",
    floor: FLOORS.FIVE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 5.2 Seoul",
    floor: FLOORS.FIVE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54062',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Leitung Bereich Werdung & Pendlermedien",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "20 Minuten (4th Floor)",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Advertising: 20 Minuten",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Advertising: Digital Advertising Sales",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Advertising: Digital Classified & Tamedia Network",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Customer Contact Center",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Digital News & Development",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 4.1 Bangkok",
    floor: FLOORS.FOUR,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 4.2 Kuala Lumpur",
    floor: FLOORS.FOUR,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54061',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Leitung Bereich Bezahlmedien",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Nutzermarkt: Dialogmarketing",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Nutzermarkt: überregionale Medien Deutschweiz",
    floor: FLOORS.THREE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 3.1 Mumbai",
    floor: FLOORS.THREE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54058',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 3.2 Singapur",
    floor: FLOORS.THREE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54059',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Tages-Anzeiger",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Tages-Anzeiger Newsroom",
    floor: FLOORS.TWO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 2.1 Shanghai",
    floor: FLOORS.TWO,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54056',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 2.3 Hongkong",
    floor: FLOORS.TWO,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54057',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Das Magazin",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Digital News & Development",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Tagblatt der Stadt Zürich",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Tages-Anzeiger",
    floor: FLOORS.ONE,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 1.1 Tokyo",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54054',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Sitzungszimmer C 1.2 Beijing",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11700/spaces/54055',
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Zwischengeschoss",
    floor: FLOORS.Z,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Haupteingang",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Empfang",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Inseratenannahme",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_21
  },
  {
    name: "Personalrestaurant Werdino (Erweiterung)",
    floor: FLOORS.ZERO,
    ...buildings.WERDSTRASSE_21
  }
];

/**
 * STAUFFACHERQUAI_8 Rooms.
 * 
 * In descending order to save us from sorting them 
 * later when we build the home tab. 
 */
const STAUFFACHERQUAI_8 = [
  {
    name: "20 Minuten Newsroom",
    floor: FLOORS.FIVE,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Finanz und Rechnungswesen",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Controlling",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Leitung Bereich Finanzen & Personal",
    floor: FLOORS.FOUR,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Sitzungszimmer B 4.1 Lausanne",
    floor: FLOORS.FOUR,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11699/spaces/54052',
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Sitzungszimmer B 4.2 Genf",
    floor: FLOORS.FOUR,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11699/spaces/54053',
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Tages-Anzeiger",
    floor: FLOORS.THREE,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "SonntagsZeitung",
    floor: FLOORS.TWO,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Tages-Anzeiger",
    floor: FLOORS.TWO,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Encore",
    floor: FLOORS.ONE,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "SonntagsZeitung",
    floor: FLOORS.ONE,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Tages-Anzeiger",
    floor: FLOORS.ONE,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Sitzungszimmer B 1.1 Bern",
    floor: FLOORS.ONE,
    robinLink: 'https://dashboard.robinpowered.com/tamedia/locations/11698/spaces/54051',
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Doodle",
    floor: FLOORS.ZERO,
    ...buildings.STAUFFACHERQUAI_8
  },
  {
    name: "Annabelle Studio",
    floor: FLOORS.ZERO,
    ...buildings.STAUFFACHERQUAI_8
  }
];

const rooms = [
  ...ERNST_NOBS_PLATZ_7,
  ...WERDSTRASSE_25,
  ...WERDSTRASSE_21,
  ...STAUFFACHERQUAI_8,
  ...MYSTERIOUS_BUILDING,
];

module.exports = {
  rooms,
  buildings,
};

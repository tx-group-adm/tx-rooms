const BUILDINGS = {
  ERNST_NOBS_PLATZ_7: {
    code: 'CH-1',
    address: "Ernst Nobs Platz 7",
    nickname: "Glass Building",
    imgUrl: 'https://api.slack.com/img/blocks/bkb_template_images/palmtree.png',
  },
  WERDSTRASSE_25: {
    code: 'CH-2',
    address: "Werdstrasse 25",
    nickname: "The Werdino / Post Building",
    imgUrl: 'https://api.slack.com/img/blocks/bkb_template_images/palmtree.png',
  },
  WERDSTRASSE_21: {
    code: 'CH-3',
    address: "Werdstrasse 21",
    nickname: "The Wood Building",
    imgUrl: 'https://api.slack.com/img/blocks/bkb_template_images/palmtree.png',
  }
};

const FLOORS = {
  NEGATIVE1: 'Floor -1',
  ZERO: 'Floor 0',
  ONE: 'Floor 1',
  TWO: 'Floor 2',
  THREE: 'Floor 3',
  FOUR: 'Floor 4',
  FIVE: 'Floor 5',
  SIX: 'Floor 6',
  Z: 'Floor Z'
};

const ERNST_NOBS_PLATZ_7 = {
  adservices: {
    name: "Ad Services",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  prepress: {
    name: "Prepress",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  konferenzzentrumatrium: {
    name: "Konferenzzentrum / Atrium",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  plenuma: {
    name: "Plenum A",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  plenumb: {
    name: "Plenum B",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  plenumc: {
    name: "Plenum C",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  informatik: {
    name: "Informatik",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  marktforschung: {
    name: "Marktforschung",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  seattle: {
    name: "Seattle",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  homegate: {
    name: "Homegate",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  leitungbereichrubrikenmarketplätze: {
    name: "Leitung Bereich Rubriken & Marketplätze",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  leitungbereichitbeteiligungen: {
    name: "Leitung Bereich IT & Beteiligungen",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  leitungbereichverlagsservices: {
    name: "Leitung Bereich Verlagsservices",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  sanfrancisco: {
    name: "San Francisco",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  finanzundwirtschaft: {
    name: "Finanz und Wirtschaft",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  tutti: {
    name: "Tutti",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  newyork: {
    name: "New York",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  advertisingnationalemedien: {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  schweizerfamilie: {
    name: "Schweizer Familie",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  chicago: {
    name: "Chicago",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  annabelle: {
    name: "Annabelle",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  debitoren: {
    name: "Debitoren",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  finanzundwirtschaftforum: {
    name: "Finanz und Wirtschaft Forum",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  cinerent: {
    name: "Cinerent",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  olmero: {
    name: "Olmero",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  starticket: {
    name: "Starticket",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  boston: {
    name: "Boston",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  eatch: {
    name: "eat.ch",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  lounge: {
    name: "Lounge",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  presseclub1: {
    name: "Presseclub 1",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  presseclub2: {
    name: "Presseclub 2",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  },
  vrsitzungszimmer: {
    name: "VR-Sitzungszimmer",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7
  }
};

const WERDSTRASSE_25 = {
  immobilienmanagement: {
    name: "Immobilien-Management",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  unternehmensentwicklung: {
    name: "Unternehmensentwicklung",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  unternehmenskommunikation: {
    name: "Unternehmenskommunikation",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  unternehmensleitung: {
    name: "Unternehmensleitung",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  verwalungsrat: {
    name: "Verwalungsrat",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  einkauf: {
    name: "Einkauf",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  humanresources: {
    name: "Human Resources",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  advertisingregionalmedien2: {
    name: "Advertising: Regionalmedien 2",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  advertisingsalessupport: {
    name: "Advertising: Sales Support",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  tagsanzeiger: {
    name: "Tags-Anzeiger",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  webvideoteam: {
    name: "Webvideo-Team",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  advertisingregionalmedien1: {
    name: "Advertising: Regionalmedien 1",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  olmeroinformatik: {
    name: "Olmero Informatik",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  informatikschulung: {
    name: "Informatik Schulung",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  sitzungszimmerd11d114: {
    name: "Sitzungszimmer D 1.1-D 1.14",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  hausdienstbouygues: {
    name: "Hausdienst (Bouygues)",
    floor: FLOORS.Z,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  lehrlingszimmer: {
    name: "Lehrlingszimmer",
    floor: FLOORS.Z,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  leitungpersonalrestaurantwerdino: {
    name: "Leitung Personalrestaurant Werdino",
    floor: FLOORS.Z,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  hauspost: {
    name: "Hauspost",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  },
  personalrestaurantwerdino: {
    name: "Personalrestaurant Werdino",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_25
  }
};

const WERDSTRASSE_21 = {
  advertising20minuten: {
    name: "Advertising: 20 Minuten",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  "20minuten5thfloor": {
    name: "20 Minuten (5th fLoor)",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  "20minutenfriday": {
    name: "20 Minuten Friday",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  "20minutentillate": {
    name: "20 Minuten Tillate",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  sitzungszimmerc52seoul: {
    name: "Sitzungszimmer C 5.2 Seoul",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  leitungbereichwerdungpendlermedien: {
    name: "Leitung Bereich Werdung & Pendlermedien",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  "20minuten4thfloor": {
    name: "20 Minuten (4th Floor)",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  advertising20minuten: {
    name: "Advertising: 20 Minuten",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  advertisingdigitaladvertisingsales: {
    name: "Advertising: Digital Advertising Sales",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  advertisingdigitalclassifiedtamedianetwork: {
    name: "Advertising: Digital Classified & Tamedia Network",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  customercontactcenter: {
    name: "Customer Contact Center",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  digitalnewsdevelopment: {
    name: "Digital News & Development",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  digitalnewsdevelopment: {
    name: "Digital News & Development",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  sitzungszimmerc41bangkok: {
    name: "Sitzungszimmer C 4.1 Bangkok",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  sitzungszimmerc42kualalumpur: {
    name: "Sitzungszimmer C 4.2 Kuala Lumpur",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  },
  leitungbereichbezahlmedien: {
    name: "Leitung Bereich Bezahlmedien",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.WERDSTRASSE_21
  }
};

const rooms = {
  ...ERNST_NOBS_PLATZ_7,
  ...WERDSTRASSE_25,
  ...WERDSTRASSE_21
};

const allRooms = Object.keys(rooms);

module.exports = {
  rooms,
  allRooms
};

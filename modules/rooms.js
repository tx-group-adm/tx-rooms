
const BUILDINGS = {
    ERNST_NOBS_PLATZ_7: {
        address: 'Ernst Nobs Platz 7',
        niceName: 'Glass Building'
    }
};

const FLOORS = {
    NEGATIVE1: -1,
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6
};

const rooms = {
  'adservices': {
    name: "Ad Services",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'prepress': {
    name: "Prepress",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'konferenzzentrumatrium': {
    name: "Konferenzzentrum / Atrium",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'plenuma': {
    name: "Plenum A",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'plenumb': {
    name: "Plenum B",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'plenumc': {
    name: "Plenum C",
    floor: FLOORS.NEGATIVE1,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'informatik': {
    name: "Informatik",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'marktforschung': {
    name: "Marktforschung",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'seattle': {
    name: "Seattle",
    floor: FLOORS.ZERO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'homegate': {
    name: "Homegate",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'leitungbereichrubrikenmarketplätze': {
    name: "Leitung Bereich Rubriken & Marketplätze",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'leitungbereichitbeteiligungen': {
    name: "Leitung Bereich IT & Beteiligungen",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'leitungbereichverlagsservices': {
    name: "Leitung Bereich Verlagsservices",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'sanfrancisco': {
    name: "San Francisco",
    floor: FLOORS.ONE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'finanzundwirtschaft': {
    name: "Finanz und Wirtschaft",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'tutti': {
    name: "Tutti",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'newyork': {
    name: "New York",
    floor: FLOORS.TWO,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'advertisingnationalemedien': {
    name: "Advertising: Nationale Medien",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'schweizerfamilie': {
    name: "Schweizer Familie",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },  
  'chicago': {
    name: "Chicago",
    floor: FLOORS.THREE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },  
  'annabelle': {
    name: "Annabelle",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'debitoren': {
    name: "Debitoren",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'finanzundwirtschaftforum': {
    name: "Finanz und Wirtschaft Forum",
    floor: FLOORS.FOUR,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'cinerent': {
    name: "Cinerent",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'olmero': {
    name: "Olmero",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'starticket': {
    name: "Starticket",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'boston': {
    name: "Boston",
    floor: FLOORS.FIVE,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  }, 
  'eatch': {
    name: "eat.ch",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },  
  'lounge': {
    name: "Lounge",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'presseclub1': {
    name: "Presseclub 1",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'presseclub2': {
    name: "Presseclub 2",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
  'vrsitzungszimmer': {
    name: "VR-Sitzungszimmer",
    floor: FLOORS.SIX,
    directions: "Lorem ipsum dolar sit amet.",
    ...BUILDINGS.ERNST_NOBS_PLATZ_7,
  },
};

const allRooms = Object.keys(rooms);

module.exports = {
  rooms,
  allRooms
};

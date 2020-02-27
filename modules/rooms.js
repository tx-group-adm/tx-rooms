const buildings = {
    GLASS: 'Glass',
    WOOD: 'Wood',
};

const rooms = {
    'paris': { name: 'Paris', floor: '4th', building: buildings.GLASS, directions: 'Lorem ipsum dolar sit amet.' },
    'singapore': { name: 'Singapore', floor: '5th', building: buildings.WOOD, directions: 'Lorem ipsum dolar sit amet.' }
};

const allRooms = Object.keys(rooms);

module.exports = {
    buildings,
    rooms,
    allRooms
};
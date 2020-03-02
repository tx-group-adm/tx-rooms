const { rooms  } = require('../../modules/rooms');
const { slugify } = require('../../modules/utilities');

describe('rooms', () => {
    test('should all have correct structure', () => {
        const allRoomObjects = Object.values(rooms);
        expect.assertions(allRoomObjects.length * 6);
        const room = rooms[1];

        allRoomObjects.forEach(room => {
            expect(room.name).toBeTruthy();
            expect(room.floor).toBeTruthy();
            expect(room.code).toBeTruthy();
            expect(room.address).toBeTruthy();
            expect(typeof room.nickname).toBe('string');
            expect(room.imgUrl).toBeTruthy();
        })
    });   
});
const { rooms  } = require('../../modules/rooms');
const { slugify } = require('../../modules/utilities');

describe('rooms', () => {
    test('should all have correct structure', () => {
        expect.assertions(rooms.length * 6);

        rooms.forEach(room => {
            expect(typeof room.name).not.toBe('undefined');
            expect(typeof room.floor).not.toBe('undefined');
            expect(room.code).toBeTruthy();
            expect(room.address).toBeTruthy();
            expect(typeof room.nickname).toBe('string');
            expect(room.imgUrl).toBeTruthy();
        })
    });   
});
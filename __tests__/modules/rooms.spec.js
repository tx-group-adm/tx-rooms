const { rooms, allRooms  } = require('../../modules/rooms');
const { slugify } = require('../../modules/utilities');

describe('rooms', () => {
    test('should have all allRooms object', () => {
        expect(Object.keys(rooms)).toMatchObject(allRooms);
    });

    test('should all have correct slugs', () => {
        expect.assertions(allRooms.length);

        allRooms.forEach(roomSlug => {
            const room = rooms[roomSlug];
            const roomName = room.name;
            const actualRoomSlug = slugify(roomName);

            expect(actualRoomSlug).toBe(roomSlug);
        });
    });   
});
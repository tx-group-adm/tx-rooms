const { rooms } = require('../modules/rooms');
const { slugify } = require('../modules/utilities');
const generatedRooms = require("../build/generated-rooms");

/**
 * Search the room objects for a specific name.
 */
const search = searchTerm => {

  const slugifiedRoomName = slugify(searchTerm);

  // Search all room slugs for partial or full matches,
  // since there are rooms on different floors with the
  // same names.
  const exactMatches = [];
  const partialMatches = [];

  let totalMatchesFound = 0;

  Object.values(generatedRooms).forEach(roomObj => {
    const roomSlug = roomObj.slug;

    if (roomSlug.includes(slugifiedRoomName)) {
      if (slugifiedRoomName.length === roomSlug) {
        exactMatches.push(roomObj);
        totalMatchesFound += 1;
      } else {
        partialMatches.push(roomObj);
        totalMatchesFound += 1;
      }
    }
  });

  return {
      exactMatches,
      partialMatches,
      totalMatchesFound
  }
};

module.exports = search;
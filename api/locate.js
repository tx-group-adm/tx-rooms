const qs = require("querystring");
const { rooms, allRooms } = require("../modules/rooms");
const responseBuilder = require("../modules/responseBuilder");
const { slugify } = require("../modules/utilities");

module.exports.locate = async event => {
  const data = qs.parse(event.body);
  const room = data && data.text ? data.text : "";

  const slugifiedRoomName = slugify(room);

  // console.log({ event, allRooms, rooms, slugifiedRoomName });
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If the room text is empty.
  if (slugifiedRoomName.trim() === "") {
    response.body = JSON.stringify({
      response_type: "ephemeral",
      text: "You need to enter a room name to search for. Try `/room paris`"
    });

    return response;
  }

  // Search all room slugs for partial or full matches,
  // since there are rooms on different floors with the
  // same names.
  const exactMatches = [];
  const partialMatches = [];

  allRooms.forEach(roomSlug => {
    //   console.log('searching for  ', slugifiedRoomName);
    if (roomSlug.includes(slugifiedRoomName)) {
      if (slugifiedRoomName.length === roomSlug) {
        exactMatches.push(rooms[roomSlug]);
      } else {
        partialMatches.push(rooms[roomSlug]);
      }
    }
  });

  //   console.log({exactMatches, partialMatches});

  const blocks = responseBuilder(exactMatches, partialMatches, room);
    response.body = JSON.stringify({ blocks });

   return response;

//   // Room was found.
//   if (exactMatches.length > 0 || partialMatches.length > 0) {
    
//   }

//   // The room was not found.
//   response.body = JSON.stringify({
//     response_type: "ephemeral",
//     text: `The meeting room ${room} is not recognized`
//   });

//   return response;
};

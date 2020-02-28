const qs = require("querystring");
const { rooms, allRooms } = require("../modules/rooms");
const responseBuilder = require("../modules/responseBuilder");
const { slugify } = require('../modules/utilities');

module.exports.locate = async event => {
  const data = qs.parse(event.body);
  const room = data && data.text ? data.text : "";

  const slugifiedRoomName = slugify(room);

  // console.log({ allRooms, rooms, slugifiedRoomName });
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Room was found.
  if (allRooms.includes(slugifiedRoomName)) {
    const roomObject = rooms[slugifiedRoomName];
    const blocks = responseBuilder(roomObject);
    response.body = JSON.stringify({ blocks })

    return response;
  }

  // The room was not found.
  response.body = JSON.stringify({
    response_type: "ephemeral",
    text: `The meeting room ${room} is not recognized`
  });

  return response;
};

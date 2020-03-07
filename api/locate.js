const qs = require("querystring");
const responseBuilder = require("../modules/responseBuilder");
const { slugify } = require("../modules/utilities");
const search = require("../modules/search");

module.exports.locate = async event => {
  const data = qs.parse(event.body);
  const room = data && data.text ? data.text : "";

  const slugifiedRoomName = slugify(room);

  // console.log({ event, rooms, slugifiedRoomName });
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

  const { exactMatches, partialMatches } = search(room);

  const blocks = responseBuilder(exactMatches, partialMatches, room);
  response.body = JSON.stringify({ blocks });

  return response;
};

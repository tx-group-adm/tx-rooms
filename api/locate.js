const qs = require("querystring");
const responseBuilder = require("../modules/responseBuilder");
const { slugify } = require("../modules/utilities");
const search = require("../modules/search");

module.exports.locate = async event => {
  const data = qs.parse(event.body);
  const room = data && data.text ? data.text : "";

  const slugifiedRoomName = slugify(room);

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If the room text is empty then show the user some help text
  if (slugifiedRoomName.trim() === "") {
    response.body = JSON.stringify({
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": ":mag_right: You need to enter a full (or partial) room name to search for.\n\n*Syntax:* `/room [room to search for]`\n*Example:* `/room paris`"
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "context",
          "elements": [
            {
              "type": "mrkdwn",
              "text": "Having trouble? <https://github.com/tamediadigital/tx-rooms/issues|Report an Issue> "
            }
          ]
        }
      ]
    });

    return response;
  }

  const { exactMatches, partialMatches } = search(room);

  const blocks = responseBuilder(exactMatches, partialMatches, room);
  response.body = JSON.stringify({ blocks });

  return response;
};

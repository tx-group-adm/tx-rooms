const DIVIDER = { type: "divider" };

/**
 * Build the search results header that show the number of results found.
 *
 * @param {Number} num
 * @param {String} searchTerm
 */
function getSearchResultsHeader(num, searchTerm) {
  const pluralOrNot = num === 1 ? "" : "s";

  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${num}* room${pluralOrNot} found for \`${searchTerm}\``
    }
  };
}

/**
 * Generate the section that will show the room details after the
 * user does a room search.
 *
 * @param {Object} roomObject
 * @returns {Object}
 */
function generateRoomEntry(roomObject) {
  const { name, floor, type, nickname, address, imgUrl, code } = roomObject;
  const typeString = type ? `_(${type})_` : "";
  const nicknameString =
    nickname && nickname.length > 0 ? `_\"${nickname}\"_` : "";

  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `:white_small_square: \`${name}\` ${typeString}\n:white_small_square: *${address}* ${nicknameString}\n:white_small_square: *${floor}*\n:white_small_square: ${code}`
    },
    accessory: {
      type: "image",
      image_url: `${imgUrl}`,
      alt_text: `${name} ${floor}`
    }
  };
}

/**
 * Get the footer we will use with the search results.
 *
 * @returns {Object}
 */
const getFooter = () => (
  {
    type: "divider"
  },
  {
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text:
          "Having trouble? <https://github.com/tamediadigital/tx-rooms/issues|Report an Issue>"
      }
    ]
  }
);

/**
 * Build the response to Slack.
 * @param {Array} exactMatches
 * @param {Array} partialMatches
 * @note: you can edit the template here: https://api.slack.com/tools/block-kit-builder?mode=message&blocks=%5B%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*2*%20rooms%20match%20your%20search%20for%20%60paris%60%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Awhite_small_square%3A%20%60Paris%60%20_(Meeting%20Room)_%5Cn%3Awhite_small_square%3A%20*123%20Main%20St.*%20_%5C%22The%20Glass%20Building_%5C%22%5Cn%3Awhite_small_square%3A%20*4th%20floor*%5Cn%3Awhite_small_square%3A%20CH-1-2-3%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22palm%20tree%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22actions%22%2C%22elements%22%3A%5B%7B%22type%22%3A%22button%22%2C%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22Send%20feedback%22%2C%22emoji%22%3Atrue%7D%2C%22value%22%3A%22click_me_123%22%7D%2C%7B%22type%22%3A%22overflow%22%2C%22options%22%3A%5B%7B%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22%3Awarning%3A%20Report%20a%20Problem%22%2C%22emoji%22%3Atrue%7D%2C%22value%22%3A%22value-0%22%7D%5D%7D%5D%7D%5D
 * @returns {Array}
 */
module.exports = function responseBuilder(
  exactMatches,
  partialMatches,
  searchTerm
) {
  const totalMatches = exactMatches.length + partialMatches.length;

  const blocks = [getSearchResultsHeader(totalMatches, searchTerm)];

  exactMatches.forEach(roomObject => {
    blocks.push(DIVIDER);
    blocks.push(generateRoomEntry(roomObject));
  });

  partialMatches.forEach(roomObject => {
    blocks.push(DIVIDER);
    blocks.push(generateRoomEntry(roomObject));
  });

  blocks.push(DIVIDER);
  blocks.push(getFooter());

  return blocks;
};

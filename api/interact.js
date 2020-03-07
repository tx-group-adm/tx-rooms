const qs = require("querystring");
const { buildings } = require("../modules/rooms");
const homeBuilder = require("../modules/homeBuilder");
const publishHome = require("../modules/publishHome");
const publishModal = require("../modules/publishModal");
const publishMessage = require("../modules/publishMessage");
const getSearchModal = require("../modules/getSearchModal");
const responseBuilder = require("../modules/responseBuilder");
const search = require("../modules/search");
const {
  BLOCK_ACTIONS,
  HOME,
  APP_HOME_ROOM_BUTTONS,
  SEARCH_ROOMS_BUTTON,
  VIEW_SUBMISSION,
  SEARCH_ROOMS_TEXT_INPUT
} = require("../modules/constants");

module.exports.interact = async (event, context, callback) => {
  console.log({ event });
  const body = event.body;

  // This endpoint will either get an encoded string with a payload
  // or a stringified JSON. This check might need to be loosened up
  // because it might be a bit too rigid.
  const payload =
    body.indexOf("payload=") === 0
      ? JSON.parse(qs.parse(body).payload)
      : JSON.parse(body);

  console.log("interact", JSON.stringify(payload, null, 2));

  const payloadType = payload && payload.type;
  const payloadViewType = payload && payload.view && payload.view.type;
  const payloadTriggerId = payload && payload.trigger_id;
  const userId = payload && payload.user && payload.user.id;

  const action = payload.actions && payload.actions[0];
  const actionBlockId = action && action.block_id;
  const actionValue = action && action.value;

  const token = process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN;

  // Detect Interactions from the Home Tab
  if (payloadType === BLOCK_ACTIONS && payloadViewType === HOME) {
    if (actionBlockId === APP_HOME_ROOM_BUTTONS) {
      // One of the room buttons was pressed on the home tab
      const selectedBuildingKey = action.value;
      const buildingObj = buildings[selectedBuildingKey];

  const userId = payload && payload.user && payload.user.id;
      await publishHome(userId, homeBuilder(buildingObj), token);
    }
  }

  // Detect interactions from the "Search for rooms" button on the Home Tab
  if (
    payloadType === BLOCK_ACTIONS &&
    payloadViewType === HOME &&
    actionValue === SEARCH_ROOMS_BUTTON
  ) {
    const searchView = getSearchModal();
    await publishModal(searchView, token, payloadTriggerId);
  }

  // Detect a view submission (i.e., the "Search Rooms Form" has been submitted)
  if (payloadType === VIEW_SUBMISSION) {
    // There is only one form submission we care about right now, and that is
    // when someone submits the form to search for a room.
    if (
      payload &&
      payload.view &&
      payload.view.state &&
      payload.view.state.values &&
      payload.view.state.values[SEARCH_ROOMS_TEXT_INPUT]
    ) {
      // Go get the search term. It is buried.
      const searchTerm = Object.values(
        payload.view.state.values[SEARCH_ROOMS_TEXT_INPUT]
      )
        .map(obj => obj.value)
        .pop();

      if (searchTerm) {
        const { exactMatches, partialMatches } = search(searchTerm);
        const blocks = responseBuilder(exactMatches, partialMatches, searchTerm);

        await publishMessage(userId, ':mag_right:', blocks, token )
      }
    }
  }
  const response = {
    statusCode: 200
  };

  callback(null, response);
};

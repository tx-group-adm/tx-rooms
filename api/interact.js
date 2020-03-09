const qs = require("querystring");
const { buildings } = require("../modules/rooms");
const homeBuilder = require("../modules/homeBuilder");
const publishHome = require("../modules/publishHome");
const {
  BLOCK_ACTIONS,
  HOME,
  APP_HOME_ROOM_BUTTONS
} = require("../modules/constants");

module.exports.interact = async (event, context, callback) => {
  const body = event.body;

  // This endpoint will either get an encoded string with a payload
  // or a stringified JSON. This check might need to be loosened up
  // because it might be a bit too rigid.
  const payload =
    body.indexOf("payload=") === 0
      ? JSON.parse(qs.parse(body).payload)
      : JSON.parse(body);

  const payloadType = payload && payload.type;
  const payloadViewType = payload && payload.view && payload.view.type;
  const userId = payload && payload.user && payload.user.id;

  const action = payload.actions && payload.actions[0];
  const actionBlockId = action && action.block_id;

  const token = process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN;

  const response = {
    statusCode: 200
  };

  // Detect button interactions from the Home Tab
  if (
    payloadType === BLOCK_ACTIONS &&
    payloadViewType === HOME &&
    actionBlockId === APP_HOME_ROOM_BUTTONS
  ) {
    const selectedBuildingKey = action.value;
    const buildingObj = buildings[selectedBuildingKey];

    await publishHome(userId, homeBuilder(buildingObj), token);
  }

  callback(null, response);
};

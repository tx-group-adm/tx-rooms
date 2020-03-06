const qs = require("querystring");
const homeBuilder = require("../modules/homeBuilder");
const publishHome = require("../modules/publishHome");
const { buildings } = require("../modules/rooms");
const { BLOCK_ACTIONS, HOME, APP_HOME_ROOM_BUTTONS } = require('../modules/constants');

module.exports.interact = async (event, context, callback) => {
  const body = qs.parse(event.body);
  const payload = JSON.parse(body.payload);

  console.log("interact", JSON.stringify(payload, null, 2));

  const payloadType = payload && payload.type;
  const payloadViewType = payload && payload.view && payload.view.type;

  if (payloadType === BLOCK_ACTIONS && payloadViewType === HOME) {
    const action = payload.actions && payload.actions[0];
    const actionBlockId = action && action.block_id;

    if (actionBlockId === APP_HOME_ROOM_BUTTONS) {
      // One of the room buttons was pressed on the home tab 
      const selectedBuildingKey = action.value;

      const buildingObj = buildings[selectedBuildingKey];

      const token = process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN;

      await publishHome(payload.user.id, homeBuilder(buildingObj), token);
    }
  }

  const response = {
    statusCode: 200
  };

  callback(null, response);
};

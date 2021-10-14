const { buildings } = require("../modules/rooms");
const {
  APP_HOME_ROOM_BUTTONS,
  SEARCH_ROOMS_BUTTON
} = require("../modules/constants");
const generatedFloorMaps = require("../build/generated-floor-maps");

/**
 * Get the row of room buttons, and select the active button.
 * @param {Object} buildings
 * @param {Object} selectedBuilding
 * @returns {Object}
 */
const getRoomButtons = (buildings, selectedBuilding) => {
  return {
    type: "actions",
    block_id: APP_HOME_ROOM_BUTTONS,
    elements: Object.keys(buildings).map(buildingKey => {
      const buildingObj = buildings[buildingKey];
      const { icon, address } = buildingObj;

      const obj = {
        type: "button",
        text: {
          type: "plain_text",
          text: `${icon} ${address}`,
          emoji: true
        },
        value: buildingKey
      };

      if (buildingObj.address === selectedBuilding.address) {
        obj.style = "primary";
      }

      return obj;
    })
  };
};

/**
 * Build the Home Tab content.
 *
 * @param {Object} buildingObj
 * @returns {Object}
 */
const homeBuilder = (buildingObj = buildings.STAUFFACHERQUAI_8) => {
  const { icon, address, code, imgUrl, nickname } = buildingObj;

  return {
    type: "home",
    blocks: [
      // FIXME: The SEARCH_ROOMS_BUTTON is not updating with search results.
      // {
      //   type: "section",
      //   text: {
      //     type: "mrkdwn",
      //     text:
      //       "Click the button below to *search for a room* by name (or partial name)"
      //   }
      // },
      // {
      //   type: "actions",
      //   block_id: SEARCH_ROOMS_BUTTON,
      //   elements: [
      //     {
      //       type: "button",
      //       style: "primary",
      //       text: {
      //         type: "plain_text",
      //         text: ":mag_right: Search for room",
      //         emoji: true
      //       },
      //       value: SEARCH_ROOMS_BUTTON
      //     }
      //   ]
      // },
      // {
      //   type: "divider"
      // },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "Click on one of the buttons below to see the room directory for each building."
        }
      },
      { ...getRoomButtons(buildings, buildingObj) },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `>${icon} *${address}*\n>${nickname}\n>_${code}_`
        }
      },
      {
        type: "image",
        title: {
          type: "plain_text",
          text: `${address} \"${nickname}\" is marked in green.`,
          emoji: true
        },
        image_url: `${imgUrl}`,
        alt_text: `${address}`
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${generatedFloorMaps[buildingObj.value]} \n\n `
        }
      },
      {
        "type": "divider"
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text:
              "- *Tip #1:* Search for rooms with the slash command `/rooms` (or Shortcut) in any Slack channel.\n - *Tip #2:* You can even search for partial room names.\n"
          }
        ]
      },
      {
        "type": "divider"
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text:
              "Made with ❤️ by *Michael Wuergler* so he can stop getting lost at work. | <https://github.com/tamedia-pmd/tx-rooms/issues|Report a Problem>"
          }
        ]
      }
    ]
  };
};

module.exports = homeBuilder;

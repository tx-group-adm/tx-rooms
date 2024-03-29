const { SEARCH_ROOMS_MODAL, SEARCH_ROOMS_TEXT_INPUT, SEARCH_ROOMS_TEXT_INPUT_BLOCK } = require('./constants');

/**
 * Return the view needed to construct the search modal.
 *
 * @returns {Object}
 */
const getSearchModal = () => ({
  type: "modal",
  callback_id: SEARCH_ROOMS_MODAL,
  title: {
    type: "plain_text",
    text: "TX Room Search",
    emoji: true
  },
  submit: {
    type: "plain_text",
    text: ":mag_right:  Search",
    emoji: true
  },
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "Here you can search all the rooms in the TX Group building in Zürich."
      }
    },
    {
      type: "divider"
    },
    {
      type: "input",
      block_id: SEARCH_ROOMS_TEXT_INPUT_BLOCK,
      element: {
        type: "plain_text_input",
        action_id: SEARCH_ROOMS_TEXT_INPUT
      },
      label: {
        type: "plain_text",
        text: "Enter the name of the room:",
        emoji: true
      }
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: ":bulb: *Hint*: You also type the partial name of the room"
        }
      ]
    }
  ]
});

module.exports = getSearchModal;

const qs = require("querystring");
const { buildings } = require("../modules/rooms");
const homeBuilder = require("../modules/homeBuilder");
const publishHome = require("../modules/publishHome");
const openModal = require("../modules/openModal");
const getSearchModal = require("../modules/getSearchModal");
const responseBuilder = require("../modules/responseBuilder");
const getModalHeader = require("../modules/getModalHeader");
const search = require("../modules/search");
const {
    BLOCK_ACTIONS,
    HOME,
    SHORTCUT,
    APP_HOME_ROOM_BUTTONS,
    SEARCH_ROOMS_BUTTON,
    VIEW_SUBMISSION,
    MODAL,
    LOCATE_VIA_SHORTCUT,
    SEARCH_ROOMS_TEXT_INPUT_BLOCK,
    SEARCH_ROOMS_TEXT_INPUT,
    SEARCH_ROOMS_MODAL,
} = require("../modules/constants");
const updateModal = require("../modules/updateModal");

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
    const triggerId = payload && payload.trigger_id;
    const callbackId =
        (payload && payload.view && payload.view.callback_id) ||
        (payload && payload.callback_id);

    const token = process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN;

    const response = {
        statusCode: 200,
    };

    // Useful for debugging in Cloudwatch Logs
    console.log("interact", {
        payload,
        payloadType,
        payloadViewType,
        userId,
        action,
        triggerId,
        actionBlockId,
        callbackId,
    });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Detect button interactions from the Home
    // Tab that switch the floor plans
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (
        payloadType === BLOCK_ACTIONS &&
        payloadViewType === HOME &&
        actionBlockId === APP_HOME_ROOM_BUTTONS
    ) {
        const selectedBuildingKey = action.value;
        const buildingObj = buildings[selectedBuildingKey];

        await publishHome(userId, homeBuilder(buildingObj), token);
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Detect the "Search for room" button
    // click on the Home Tab
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (
        payloadType === BLOCK_ACTIONS &&
        payloadViewType === HOME &&
        actionBlockId === SEARCH_ROOMS_BUTTON
    ) {
        await openModal(getSearchModal(), token, triggerId);
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Detect the "FIND A TX GROUP ROOM" shortcut
    // was clicked.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (payloadType === SHORTCUT && callbackId === LOCATE_VIA_SHORTCUT) {
        await openModal(getSearchModal(), token, triggerId);
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Detect the "Search" modal was submitted,
    // which will start the new search
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (
        payloadType === VIEW_SUBMISSION &&
        payloadViewType === MODAL &&
        callbackId === SEARCH_ROOMS_MODAL
    ) {
        // Grab the text submitted by the user by first
        // grabbing the input field value
        const payloadStateValues =
            payload &&
            payload.view &&
            payload.view.state &&
            payload.view.state.values;

        const userInput =
            payloadStateValues &&
            payloadStateValues[SEARCH_ROOMS_TEXT_INPUT_BLOCK] &&
            payloadStateValues[SEARCH_ROOMS_TEXT_INPUT_BLOCK][
                SEARCH_ROOMS_TEXT_INPUT
            ].value;

        // Search for the users text
        const matches = search(userInput);

        // Now build the results view
        const view = responseBuilder(
            matches.exactMatches,
            matches.partialMatches,
            userInput
        );

        // Clear the current modal
        // callback(null, response);

        // And now update the modal to show the search results
        await updateModal(
            {
                ...getModalHeader("Search results", "OK", "Cancel"),
                blocks: [...view],
            },
            token,
            triggerId
        );
    }

    callback(null, response);
};

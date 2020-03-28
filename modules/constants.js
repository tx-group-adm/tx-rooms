module.exports = {
    // These are Slack's reserved constants
    APP_HOME_OPENED: 'app_home_opened',
    EVENT_CALLBACK: 'event_callback',
    BLOCK_ACTIONS: 'block_actions',
    VIEW_SUBMISSION: 'view_submission',
    HOME: 'home',
    DIRECT_MESSAGE: 'directmessage',
    MODAL: 'modal',
    SHORTCUT: 'shortcut',

    // These are my custom Block Ids
    APP_HOME_ROOM_BUTTONS: 'APP_HOME_ROOM_BUTTONS',
    SEARCH_ROOMS_TEXT_INPUT_BLOCK: 'SEARCH_ROOMS_TEXT_INPUT_BLOCK',
    SEARCH_ROOMS_RESULTS_BLOCK: 'SEARCH_ROOMS_RESULTS_BLOCK',

    // This LOCATE_VIA_SHORTCUT value should match what you have 
    // put as the action_id for the app's configuration for the 
    // shortcut interaction
    LOCATE_VIA_SHORTCUT: 'locate_via_shortcut',

    // My custom values
    SEARCH_ROOMS_BUTTON: 'SEARCH_ROOMS_BUTTON',
    SEARCH_ROOMS_MODAL: 'SEARCH_ROOMS_MODAL',
    SEARCH_ROOMS_TEXT_INPUT: 'SEARCH_ROOMS_TEXT_INPUT',
    SEARCH_ROOMS_FORM_SUBMIT_BUTTON: 'SEARCH_ROOMS_FORM_SUBMIT_BUTTON',
};
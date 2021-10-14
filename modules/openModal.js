const { WebClient } = require("@slack/web-api");
/**
 * Kick off the POST request that will publish modal view for the supplied user.
 *
 * @param {Object} modalView
 * @param {String} token
 * @param {String} triggerId
 * @param {String} channelId
 */
async function openModal(modalView, token, triggerId, channelId) {
    try {
        const webClient = new WebClient(token);
        const response = await webClient.views.open({
            view: modalView,
            trigger_id: triggerId,
        });

        console.log("Request succeeded with JSON response", response);
        return response;
    } catch (err) {
        console.log("Request failed", err);
    }
}

module.exports = openModal;

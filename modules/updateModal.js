const { WebClient } = require("@slack/web-api");

/**
 * Kick off the POST request that will update the modal view for the supplied user.
 *
 * @param {Object} modalView
 * @param {String} viewId
 * @param {String} token
 * @param {String} hash
 */
async function updateModal(modalView, viewId, token, hash) {
    try {
        const webClient = new WebClient(token);

        console.log("updateModal\n", JSON.stringify(payload, null, 2));

        const response = await webClient.views.update({
            view: modalView,
            view_id: viewId,
            hash,
        });
        console.log("Request succeeded with JSON response", response);
    } catch (err) {
        console.log("Request failed", err);
    }
}

module.exports = updateModal;

const { WebClient } = require("@slack/web-api");

/**
 * Kick off the POST request that will publish the home view for the supplied user.
 *
 * @param {String} user_id
 * @param {Object} homeView
 * @param {String} token
 */
async function publishHome(user_id, homeView, token) {
    try {
        const webClient = new WebClient(token);
        const response = await webClient.views.publish({
            view: homeView,
            token: token,
            user_id: user_id,
        });
        console.log("Request succeeded with JSON response", response);
    } catch (err) {
        console.log("Request failed", err);
    }
}

module.exports = publishHome;

const { WebClient } = require("@slack/web-api");

/**
 * Kick off the POST request that will publish a message to a user.
 *
 * @param {String} channel
 * @param {String} text
 * @param {Object} blocks
 * @param {String} token
 */
async function publishMessage(channel, text, blocks, token) {
    try {
        const webClient = new WebClient(token);
        const response = await webClient.chat.postMessage({
            token,
            channel,
            text,
            blocks,
        });
        console.log("Request succeeded with JSON response", response);
    } catch (err) {
        console.log("Request failed", err);
    }
}

module.exports = publishMessage;

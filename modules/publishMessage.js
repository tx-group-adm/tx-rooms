import fetch from "node-fetch";

/**
 * Kick off the POST request that will publish a message to a user.
 *
 * @param {String} channel
 * @param {String} text
 * @param {Object} blocks
 * @param {String} token
 */
async function publishMessage(channel, text, blocks, token) {
    const payload = {
        token,
        channel,
        text,
        blocks,
    };

    return await fetch("https://slack.com/api/chat.postMessage", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then(function (data) {
            console.log("Request succeeded with JSON response", data);
        })
        .catch(function (error) {
            console.log("Request failed", error);
        });
}

module.exports = publishMessage;

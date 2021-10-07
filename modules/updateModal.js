import fetch from "node-fetch";

/**
 * Kick off the POST request that will update the modal view for the supplied user.
 *
 * @param {Object} modalView
 * @param {String} viewId
 * @param {String} token
 * @param {String} hash
 */
async function updateModal(modalView, viewId, token, hash) {
    const payload = {
        view: modalView,
        view_id: viewId,
        hash,
    };

    console.log("updateModal\n", JSON.stringify(payload, null, 2));

    return await fetch("https://slack.com/api/views.update", {
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

module.exports = updateModal;

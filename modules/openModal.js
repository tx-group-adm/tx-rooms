/**
 * Kick off the POST request that will publish modal view for the supplied user.
 *
 * @param {Object} modalView
 * @param {String} token
 * @param {String} triggerId
 * @param {String} channelId
 */
async function openModal(modalView, token, triggerId, channelId) {
  const payload = {
    view: modalView,
    trigger_id: triggerId
  };

  return await fetch("https://slack.com/api/views.open", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(function(data) {
      console.log("Request succeeded with JSON response", data);
      return data;
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
}

module.exports = openModal;

const crypto = require("crypto");

/**
 * Check if the event request coming from Slack is valid.
 *
 * See: https://api.slack.com/docs/verifying-requests-from-slack
 *
 * @param {Object} event
 * @returns {Object}
 */
const verifySlackRequest = event => {
  const body = JSON.parse(event.body);

  const XSlackSignature = event.headers["X-Slack-Signature"];
  const SigningSecret = process.env.SLACK_SIGNING_SECRET;

  const timestamp = Number(event.headers["X-Slack-Request-Timestamp"]);

  const failureReasons = [];

  // Let's make sure this is a recent request to prevent replay attacks.
  // We will use 5 minutes as our expiry time.
  const now = new Date().getTime();
  let isValidTime = true;

  // Check if the timestamp is older than 5 minutes,
  // If it is older than 5 minutes, we will invalidate the request.
  const diff = Math.abs(now - (timestamp * 1000));
  const fiveMinutesInMs = (60 * 5) * 1000;

  if (diff > fiveMinutesInMs) {
    failureReasons.push(`Timestamp failed. now: ${now} - ${timestamp} = ${diff}`)
    isValidTime = false;
  }

  // This is a fixed value for now.
  const versionNumber = "v0";

  const baseString = `${versionNumber}:${timestamp}:${event.body}`;
  const hmac = crypto.createHmac("sha256", SigningSecret);

  hmac.update(baseString);
  const generatedHash = `v0=${hmac.digest("hex")}`;

  if (XSlackSignature !== generatedHash) {
    failureReasons.push('Signatures do not match.');
  }

  const isValid = isValidTime && XSlackSignature === generatedHash;

  return { isValid, generatedHash, XSlackSignature, type: body.type, failureReasons };
};

module.exports = verifySlackRequest;
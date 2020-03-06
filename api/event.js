const homeBuilder = require("../modules/homeBuilder");
const verifySlackRequest = require("../modules/verifySlackRequest");
const publishHome = require("../modules/publishHome");

function verify(body, callback) {
  const response = {
    statusCode: 200,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: JSON.stringify({ challenge: body.challenge })
  };
  
  callback(null, response);
}

module.exports.event = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const token = process.env.SLACK_BOT_USER_OAUTH_ACCESS_TOKEN;

  console.log(event);

  console.log({ body, type: body.type });

  const request = verifySlackRequest(event);

  if (!request.isValid) {
    // The verification of the request failed. Ignore it, but still log
    // diagnostic info so it is easier to debug via the Cloudwatch logs.
    console.log('Verification request failed.');
    console.log('request', request);
    console.log('event', event);
    return;
  }

  const response = {
    statusCode: 200
  };

  if (request.type === 'url_verification') {
    return verify(body, callback);
  }

  if (request.type === 'event_callback' && body.event && body.event.type === 'app_home_opened') {
    // TODO: Juat let Slack know we heard them (we have three seconds for this), 
    // and we will publish the home tab afterwards.
    await publishHome(body.event.user, homeBuilder(), token);
  }

  callback(null, response);
};

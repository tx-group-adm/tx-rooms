<p align="center">
  <img alt="TX Rooms logo shows people standing around giant 3D letters T and X" src="media/TX-Rooms-Logo-993x539.png" width="546">
</p>

# TX Rooms

> :eyes: **Have you ever been lost in the TX Groups building in Zürich?**

> :hear_no_evil: **Have you ever been invited to a meeting in a room you have never heard of?**

> :running_man: **Have you ever learned 2 minutes before a meeting that the room is 6 minutes away?**

**TX Rooms Slack Bot is here to help you find your way** :tm: :rainbow: :sparkles:

---

## Getting Started

1. Install the Serverless framework 

```
$ npm install -g serverless
```

2. Save two files named `config/config.dev.json` and `config/config.prod.json` with the following structure:

```
{
    "SLACK_SIGNING_SECRET": "Your Apps's Signing Secret",
    "SLACK_VERIFICATION_TOKEN": "Your App's Verification Token",
    "SLACK_BOT_USER_OAUTH_ACCESS_TOKEN": "Your Slack App's User OAuth Access Token"
}
```

These files will help you keep your enviornments variables safely out of version control, but in a place that conveniently loads them to the lambda runtime when you are testing or invoking locally. 

:bulb: You only need the `config/config.prod.json` file if you ever want to try and envoke your lambda functions locally with production settings, for example, running commands with the `--stage prod` flag. Otherwise you can keep your production secrets secure in AWS Lamda console using the Enviornment Variables feature for your Lambda functions.

## Local Development 

We can use ngrok to get Slack to connect to our local instance of Lambda (which uses `serverless offline` behind the scenes).

To get started:

1. In a terminal window run `npm run start` to get lambda running locally
2. In a **new** terminal window run `npm run ngrok`
3. Copy the ngrok url into your [Slack App's](https://api.slack.com/apps) **Event Subscription**, **Slash Commands** and **Interactivity & Shortcuts** 

:rainbow: Now your app will use your local lambda functions to respond to your Slack interactions

## Serverless Configuration

This app uses the Serverless framework and Lambda functions. You can inspect the serverless.yaml file to see which functions are mapped to lambda functions. **Spoiler Alert:** All of the lambda functions are mapped to the files in the `api` directory.

## Updating the Room Directory

If you need to make any changes to the room entries, simply do the following:

1. Edit the file `modules/rooms.js` with your room updates

2. Run `npm run build`

> :bulb: Running the command `npm run build` will auto-generate some static files that are used in various parts of the app. The idea is that we can save in computation time (which costs money) if we use static files where we can get away with it.


## Deploying

**To deploy to your `staging` enviornment**

```
$ serverless deploy --stage dev
```

**To deploy to your `production` enviornment**

```
$ serverless deploy --stage prod
```

---

Made with :heart: by [Michael Wuergler](https://github.com/radiovisual) so he can stop getting lost at work. 
<p align="center">
  <img alt="TX Rooms logo shows people standing around giant 3D letters T and X" src="media/TX-Rooms-Logo-993x539.png" width="546">
</p>

# TX Rooms

> :eyes: **Have you ever been lost in the TX Groups building in Zürich?** _(I have!)_ :wave:

> :see_no_evil: **Have you ever been invited to a meeting in a room you have never heard of?** _(I have!)_ :wave:

> :running_man: **Did you just find out 2 minutes before your meeting starts that your meeting room is 10 minutes away?** _(I have!)_ :wave:

**TX Rooms Slack Bot is here to help you find your way** :tm: :rainbow: :sparkles:

## Local Development 

We can use ngrok to get Slack to connect to our local instance of Lambda (which uses `serverless offline` behind the scenes).

To get started:

1. In a terminal window run `yarn run start` to get lambda running locally
2. In a **new** terminal window run `yarn run ngrok`
3. Copy the ngrok url into your [Slack App's](https://api.slack.com/apps) **Event Subscription**, **Slash Commands** and **Interactivity & Shortcuts** 

:rainbow: Now your app will use your local lambda functions to respond to your Slack interactions


## Updating the Room Directory

If you need to make any changes to the room entries, simply do the following:

1. Edit the file `modules/rooms.js` with your room updates
2. Run `yarn run build`

> :bulb: Running the command `yarn run build` will auto-generate some static files that are used in various parts of the app. The idea is that we can save in computation time (which costs money) if we use static files where we can get away with it.

---

Made with :heart: by [Michael Wuergler](https://github.com/radiovisual) so he can stop getting lost at work. 
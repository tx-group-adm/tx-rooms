/**
 * Build the response to Slack.
 *
 * @note: you can edit the template here: https://api.slack.com/tools/block-kit-builder?mode=message&blocks=%5B%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*Meeting%20Room%3A*%20Paris%5Cn*Floor%3A*%204th%5Cn*Building%3A*%20Glass%20_(CH-1-2-3)_%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22_Take%20the%20stairs%20or%20the%20elevator%20to%20the%204th%20floor%20in%20the%20glass%20building._%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22actions%22%2C%22elements%22%3A%5B%7B%22type%22%3A%22button%22%2C%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22Send%20feedback%22%2C%22emoji%22%3Atrue%7D%2C%22value%22%3A%22click_me_123%22%7D%2C%7B%22type%22%3A%22overflow%22%2C%22options%22%3A%5B%7B%22text%22%3A%7B%22type%22%3A%22plain_text%22%2C%22text%22%3A%22%3Awarning%3A%20Report%20a%20Problem%22%2C%22emoji%22%3Atrue%7D%2C%22value%22%3A%22value-0%22%7D%5D%7D%5D%7D%5D
 */
module.exports = function responseBuilder(room) {
  const { name, floor, building, directions } = room;
  const blocks = [
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Meeting Room:* ${name}\n*Floor:* ${floor}\n*Building:* ${building}`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `_${directions}_`
      }
    },
    {
      type: "divider"
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "Send feedback",
            emoji: true
          },
          value: "click_me_123"
        },
        {
          type: "overflow",
          options: [
            {
              text: {
                type: "plain_text",
                text: ":warning: Report a Problem",
                emoji: true
              },
              value: "value-0"
            }
          ]
        }
      ]
    }
  ];

  return blocks;
};

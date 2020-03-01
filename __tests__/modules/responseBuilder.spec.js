const responseBuilder = require("../../modules/responseBuilder");

describe("responseBuilder", () => {
  test("it should generate a search response", () => {
    const exactMatches = [];
    const partialMatches = [
      {
        name: "Advertising: 20 Minuten",
        floor: 4,
        directions: "Lorem ipsum dolar sit amet.",
        code: "CH-3",
        address: "Werdstrasse 21",
        nickname: "The Wood Building",
        imgUrl:
          "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
      },
      {
        name: "20 Minuten (5th fLoor)",
        floor: 5,
        directions: "Lorem ipsum dolar sit amet.",
        code: "CH-3",
        address: "Werdstrasse 21",
        nickname: "The Wood Building",
        imgUrl:
          "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
      },
      {
        name: "20 Minuten Friday",
        floor: 5,
        directions: "Lorem ipsum dolar sit amet.",
        code: "CH-3",
        address: "Werdstrasse 21",
        nickname: "The Wood Building",
        imgUrl:
          "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
      },
      {
        name: "20 Minuten Tillate",
        floor: 5,
        directions: "Lorem ipsum dolar sit amet.",
        code: "CH-3",
        address: "Werdstrasse 21",
        nickname: "The Wood Building",
        imgUrl:
          "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
      },
      {
        name: "20 Minuten (4th Floor)",
        floor: 4,
        directions: "Lorem ipsum dolar sit amet.",
        code: "CH-3",
        address: "Werdstrasse 21",
        nickname: "The Wood Building",
        imgUrl:
          "https://api.slack.com/img/blocks/bkb_template_images/palmtree.png"
      }
    ];

    const actual = responseBuilder(exactMatches, partialMatches, '20');
    expect(actual).toMatchSnapshot();
  });
});

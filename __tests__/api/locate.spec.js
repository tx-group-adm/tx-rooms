const { locate } = require("../../api/locate");

const getRealBodyWithText = text => `"token=fZf6rkRHrkL9EpC3eUDUBi7Q&team_id=T8N20GRJT&team_domain=radiovisual&channel_id=DUJR38729&channel_name=directmessage&user_id=U8MRG1HUN&user_name=wuergler&command=%2Froom&text=${encodeURIComponent(text)}&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT8N20GRJT%2F970853870197%2FyCriSk4EAdH9H0pTP0DrnVHD&trigger_id=970381596788.294068569639.e645670ddd8d9cd7bd13b00aa991e36f"`;

describe("api.locate", () => {
  test("should find valid rooms", async () => {
    const event = {
      body: getRealBodyWithText('boston')
    };

    const actual = await locate(event);
    expect(JSON.stringify(actual)).toContain('`Boston`');
  });  
  
  test("returns the required payload", async () => {
    const event = {
      body: getRealBodyWithText('boston')
    };

    const result = await locate(event);
    expect(result.statusCode).toBe(200);
    expect(result.headers['Content-Type']).toBe('application/json');
    expect(result.body).toBeTruthy();
  });
  
  test("should report invalid rooms", async () => {
    const event = {
      body: getRealBodyWithText('noopRoom')
    };

    const actual = await locate(event);

    expect(JSON.stringify(actual)).toContain('*0* rooms found for `noopRoom`');
  });
  
  test("should report invalid rooms with empty data", async () => {
    const event = {
      body: ''
    };

    const actual = await locate(event);

    expect(JSON.stringify(actual)).toContain('You need to enter a room name to search for. Try `/room paris`');
  });  
  
  test("should find rooms with special characters provided", async () => {
    const actual1 = await locate({
        body: getRealBodyWithText('VR-Sitzungszimmer')
    });

    const actual2 = await locate({
        body: getRealBodyWithText('VR----Sitzungszimmer')
    }); 
    
    const actual3 = await locate({
        body: getRealBodyWithText('VR:----&/+Sitzungszimmer')
    });

    expect(JSON.stringify(actual1)).toContain('*1* room found for `VR-Sitzungszimmer`');
    expect(JSON.stringify(actual2)).toContain('*1* room found for `VR----Sitzungszimmer`');
    expect(JSON.stringify(actual3)).toContain('*1* room found for `VR:----&/+Sitzungszimmer`');
    expect(JSON.stringify(actual3)).toContain('VR-Sitzungszimmer');
  });
});

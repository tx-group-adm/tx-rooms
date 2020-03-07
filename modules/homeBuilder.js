const { rooms, buildings } = require("../modules/rooms");
const { APP_HOME_ROOM_BUTTONS } = require("../modules/constants");

const generateFloorTextForBuildingCode = (rooms, buildingCode) => {
  const floor6 = ["*6th Floor*\n"];
  const floor5 = ["*5th Floor*\n"];
  const floor4 = ["*4th Floor*\n"];
  const floor3 = ["*3rd Floor*\n"];
  const floor2 = ["*2nd Floor*\n"];
  const floor1 = ["*1st Floor*\n"];
  const floorZ = ["*Floor Z*\n"];
  const floor0 = ["*Floor 0*\n"];
  const floorn1 = ["*Floor -1*\n"];

  rooms.forEach(room => {
    if (room.code === buildingCode) {
      const floor = room.floor;
      let name = room.name;

      if (room.robinLink) {
        name = `<${room.robinLink}|${room.name}>`;
      }

      if (floor === "Floor 6") {
        floor6.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor 5") {
        floor5.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor 4") {
        floor4.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor 3") {
        floor3.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor 2") {
        floor2.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor 1") {
        floor1.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor Z") {
        floorZ.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor 0") {
        floor0.push(`:white_small_square: ${name}`);
      } else if (floor === "Floor -1") {
        floorn1.push(`:white_small_square: ${name}`);
      }
    }
  });

  let s = "";

  if (floor6.length > 1) {
    s += floor6.join("\n");
    s += "\n\n";
  }

  if (floor5.length > 1) {
    s += floor5.join("\n");
    s += "\n\n";
  }

  if (floor4.length > 1) {
    s += floor4.join("\n");
    s += "\n\n";
  }

  if (floor3.length > 1) {
    s += floor3.join("\n");
    s += "\n\n";
  }

  if (floor2.length > 1) {
    s += floor2.join("\n");
    s += "\n\n";
  }

  if (floor1.length > 1) {
    s += floor1.join("\n");
    s += "\n\n";
  }

  if (floor0.length > 1) {
    s += floor0.join("\n");
    s += "\n\n";
  }

  if (floorZ.length > 1) {
    s += floorZ.join("\n");
    s += "\n\n";
  }

  if (floorn1.length > 1) {
    s += floor1.join("\n");
    s += "\n\n";
  }

  return s;

  // const roomNames = (floorString, roomNameArray) => {
  //   const field = {
  //     type: "mrkdwn",
  //     text: `${floorString}\n`
  //   };
  //   field.text += roomNameArray
  //     .map(roomName => `:white_small_square: ${roomName}\n`)
  //     .join("");
  //   field.text += "\n∙";

  //   return field;
  // };

  // if (floor6.length) {
  //   s.push(roomNames("*6th Floor*", floor6));
  // }

  // if (floor5.length) {
  //   s.push(roomNames("*5th Floor*", floor5));
  // }

  // if (floor4.length) {
  //   s.push(roomNames("*4th Floor*", floor4));
  // }

  // if (floor3.length) {
  //   s.push(roomNames("*3rd Floor*", floor3));
  // }

  // if (floor2.length) {
  //   s.push(roomNames("*2nd Floor*", floor2));
  // }

  // if (floor1.length) {
  //   s.push(roomNames("*1st Floor*", floor1));
  // }

  // if (floor0.length) {
  //   s.push(roomNames("*Floor 0*", floor0));
  // }

  // if (floorZ.length) {
  //   s.push(roomNames("*Floor Z*", floorZ));
  // }

  // if (floorn1.length) {
  //   s.push(roomNames("*-1st Floor*", floorn1));
  // }

  // return s;
};

/**
 * Build the Home Tab content.
 *
 * Edit the template here: https://api.slack.com/tools/block-kit-builder?mode=appHome&view=%7B%22type%22%3A%22home%22%2C%22blocks%22%3A%5B%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Aclassical_building%3A%20*Stauffacherquai%208*%20%5C%22_The%20Classic%20Building_%5C%22%20_CH-WE-B_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*5th%20Floor*%5Cn%3Awhite_small_square%3A%2020%20Minuten%20Newsroom%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Finanz%20und%20Rechnungswesen%5Cn%3Awhite_small_square%3A%20Controlling%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Finanzen%20%26%20Personal%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11699%2Fspaces%2F54052%7CSitzungszimmer%20B%204.1%20Lausanne%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11699%2Fspaces%2F54053%7CSitzungszimmer%20B%204.2%20Genf%3E%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20SonntagsZeitung%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Encore%5Cn%3Awhite_small_square%3A%20SonntagsZeitung%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11698%2Fspaces%2F54051%7CSitzungszimmer%20B%201.1%20Bern%3E%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Doodle%5Cn%3Awhite_small_square%3A%20Annabelle%20Studio%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Stauffacherquai%208%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Aevergreen_tree%3A%20*Werdstrasse%2021*%20%5C%22_The%20Wood%20Building_%5C%22%20_CH-WE-C_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*5th%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%2020%20Minuten%5Cn%3Awhite_small_square%3A%2020%20Minuten%5Cn%3Awhite_small_square%3A%2020%20Minuten%20Friday%5Cn%3Awhite_small_square%3A%2020%20Minuten%20Tillate%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54062%7CSitzungszimmer%20C%205.2%20Seoul%3E%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Werdung%20%26%20Pendlermedien%5Cn%3Awhite_small_square%3A%2020%20Minuten%20(4th%20Floor)%5Cn%3Awhite_small_square%3A%20Advertising%3A%2020%20Minuten%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Digital%20Advertising%20Sales%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Digital%20Classified%20%26%20Tamedia%20Network%5Cn%3Awhite_small_square%3A%20Customer%20Contact%20Center%5Cn%3Awhite_small_square%3A%20Digital%20News%20%26%20Development%5Cn%3Awhite_small_square%3A%20Sitzungszimmer%20C%204.1%20Bangkok%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54061%7CSitzungszimmer%20C%204.2%20Kuala%20Lumpur%3E%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Bezahlmedien%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Nationale%20Medien%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Nationale%20Medien%5Cn%3Awhite_small_square%3A%20Nutzermarkt%3A%20Dialogmarketing%5Cn%3Awhite_small_square%3A%20Nutzermarkt%3A%20%C3%BCberregionale%20Medien%20Deutschweiz%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54058%7CSitzungszimmer%20C%203.1%20Mumbai%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54059%7CSitzungszimmer%20C%203.2%20Singapur%3E%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%20Newsroom%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54056%7CSitzungszimmer%20C%202.1%20Shanghai%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54057%7CSitzungszimmer%20C%202.3%20Hongkong%3E%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Das%20Magazin%5Cn%3Awhite_small_square%3A%20Digital%20News%20%26%20Development%5Cn%3Awhite_small_square%3A%20Tagblatt%20der%20Stadt%20Z%C3%BCrich%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54054%7CSitzungszimmer%20C%201.1%20Tokyo%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54055%7CSitzungszimmer%20C%201.2%20Beijing%3E%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Haupteingang%5Cn%3Awhite_small_square%3A%20Empfang%5Cn%3Awhite_small_square%3A%20Inseratenannahme%5Cn%3Awhite_small_square%3A%20Personalrestaurant%20Werdino%20(Erweiterung)%5Cn%5Cn%5Cn*Floor%20Z*%5Cn%3Awhite_small_square%3A%20Zwischengeschoss%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Werdstrasse%2021%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Apostbox%3A%20*Werdstrasse%2025*%20%5C%22_The%20Werdino%20%2F%20Post%20Building_%5C%22%20_CH-WE-D_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*5th%20Floor*%5Cn%3Awhite_small_square%3A%20Immobilien-Management%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Unternehmensentwicklung%5Cn%3Awhite_small_square%3A%20Unternehmenskommunikation%5Cn%3Awhite_small_square%3A%20Unternehmensleitung%5Cn%3Awhite_small_square%3A%20Verwalungsrat%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Einkauf%5Cn%3Awhite_small_square%3A%20Human%20Resources%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Regionalmedien%202%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Sales%20Support%5Cn%3Awhite_small_square%3A%20Tags-Anzeiger%5Cn%3Awhite_small_square%3A%20Webvideo-Team%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Regionalmedien%201%5Cn%3Awhite_small_square%3A%20Olmero%20Informatik%5Cn%3Awhite_small_square%3A%20Informatik%20Schulung%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54071%7CSitzungszimmer%20D%201%20Kopenhagen%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54072%7CSitzungszimmer%20D%201%20Oslo%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54070%7CSitzungszimmer%20D%201%20London%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54069%7CSitzungszimmer%20D%201%20Luxemburg%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54068%7CSitzungszimmer%20D%201%20Paris%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54066%7CSitzungszimmer%20D%201%20Rom%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54063%7CSitzungszimmer%20D%201%20Athen%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54065%7CSitzungszimmer%20D%201%20Madrid%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54064%7CSitzungszimmer%20D%201%20SchulungsraumInformatik%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54067%7CSitzungszimmer%20D%201%20Berlin%3E%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Hauspost%5Cn%3Awhite_small_square%3A%20Personalrestaurant%20Werdino%5Cn%5Cn%5Cn*Floor%20Z*%5Cn%3Awhite_small_square%3A%20Hausdienst%20(Bouygues)%5Cn%3Awhite_small_square%3A%20Lehrlingszimmer%5Cn%3Awhite_small_square%3A%20Leitung%20Personalrestaurant%20Werdino%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Werdstrasse%2025%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Atumbler_glass%3A%20*Ernst%20Nobs%20Platz%207*%20%5C%22_Glass%20Building_%5C%22%20_CH-WE-A_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*6th%20Floor*%5Cn%3Awhite_small_square%3A%20eat.ch%5Cn%3Awhite_small_square%3A%20Lounge%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54045%7CPresseclub%201%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54046%7CPresseclub%202%3E%5Cn%3Awhite_small_square%3A%20VR-Sitzungszimmer%5Cn%5Cn%5Cn*5th%20Floor*%5Cn%3Awhite_small_square%3A%20Cinerent%5Cn%3Awhite_small_square%3A%20Olmero%5Cn%3Awhite_small_square%3A%20Starticket%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54050%7CBoston%3E%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Annabelle%5Cn%3Awhite_small_square%3A%20Debitoren%5Cn%3Awhite_small_square%3A%20Finanz%20und%20Wirtschaft%20Forum%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Nationale%20Medien%5Cn%3Awhite_small_square%3A%20Schweizer%20Familie%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54049%7CChicago%3E%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20Finanz%20und%20Wirtschaft%5Cn%3Awhite_small_square%3A%20Tutti%5Cn%3Awhite_small_square%3A%20New%20York%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Homegate%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Rubriken%20%26%20Marketpl%C3%A4tze%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20IT%20%26%20Beteiligungen%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Verlagsservices%5Cn%3Awhite_small_square%3A%20San%20Francisco%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Informatik%5Cn%3Awhite_small_square%3A%20Marktforschung%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54047%7CSeattle%3E%5Cn%5Cn%5Cn*-1st%20Floor*%5Cn%3Awhite_small_square%3A%20Ad%20Services%5Cn%3Awhite_small_square%3A%20Prepress%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54044%7CKonferenzzentrum%20%2F%20Atrium%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54041%7CPlenum%20A%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54042%7CPlenum%20B%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54043%7CPlenum%20C%3E%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Ernst%20Nobs%20Platz%207%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Aquestion%3A%20*%3F%3F%3F%3F*%20%5C%22_%3F%3F%3F_%5C%22%20_CH-WE-E_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*6th%20Floor*%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11698%2Fspaces%2F54014%7CBellevue%3E%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22%3F%3F%3F%3F%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%5D%7D
 **/

const getRoomButtons = (buildings, selectedBuilding) => {
  return {
    type: "actions",
    block_id: APP_HOME_ROOM_BUTTONS,
    elements: Object.keys(buildings).map(buildingKey => {
      const buildingObj = buildings[buildingKey];
      const { icon, address } = buildingObj;

      const obj = {
        type: "button",
        text: {
          type: "plain_text",
          text: `${icon} ${address}`,
          emoji: true
        },
        value: buildingKey
      };

      if (buildingObj.address === selectedBuilding.address) {
        obj.style = "primary";
      }

      return obj;
    })
  };
};

const homeBuilder = (buildingObj = buildings.STAUFFACHERQUAI_8) => {
  const { icon, address, code, imgUrl, nickname } = buildingObj;

  return {
    type: "home",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "*Need to search for a room by name?* Use the slash command `/room` from anywhere in Slack, or use the search button below."
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            style: "primary",
            text: {
              type: "plain_text",
              text: ":mag_right: Search",
              emoji: true
            }
          }
        ]
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text:
            "Click on one of the buttons below to see the room directory for each building."
        }
      },
      { ...getRoomButtons(buildings, buildingObj) },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `>${icon} *${address}*\n>${nickname}\n>_${code}_`
        }
      },
      {
        type: "image",
        title: {
          type: "plain_text",
          text: `${address} \"${nickname}\" is marked in green.`,
          emoji: true
        },
        image_url: `${imgUrl}`,
        alt_text: `${address}`
      },
      {
        type: "divider"
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: generateFloorTextForBuildingCode(rooms, code)
        }
      },
      {
        type: "divider"
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text:
              "Made with ❤️ by Michael Wuergler so he can stop getting lost."
          }
        ]
      }
    ]
  };
};

module.exports = homeBuilder;

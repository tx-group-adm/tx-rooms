const { rooms, buildings } = require('../modules/rooms');


const generateFloorTextForBuildingCode = (rooms, buildingCode) => {
    const floor6 = [];
    const floor5 = [];
    const floor4 = [];
    const floor3 = [];
    const floor2 = [];
    const floor1 = [];
    const floorZ = [];
    const floor0 = [];
    const floorn1 = [];

    let s = '';

    rooms.forEach(room => {
        if (room.code === buildingCode) {
            const floor = room.floor;
            let name = room.name;

            if (room.robinLink) {
                name = `<${room.robinLink}|${room.name}>`
            }

            if (floor === 'Floor 6') {
                floor6.push(name);
            }
            else if (floor === 'Floor 5') {
                floor5.push(name);
            }
            else if (floor === 'Floor 4') {
                floor4.push(name);
            } 
            else if (floor === 'Floor 3') {
                floor3.push(name);
            } 
            else if (floor === 'Floor 2') {
                floor2.push(name);
            } 
            else if (floor === 'Floor 1') {
                floor1.push(name);
            } 
            else if (floor === 'Floor Z') {
                floorZ.push(name);
            }
            else if (floor === 'Floor 0') {
                floor0.push(name);
            }
            else if (floor === 'Floor -1') {
                floorn1.push(name);
            }
        }
    });

    if (floor6.length) {
        s += '*6th Floor*\n';
        s += floor6.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    }  
    if (floor5.length) {
        s += '*5th Floor*\n';
        s += floor5.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    } 
    if (floor4.length) {
        s += '*4th Floor*\n';
        s += floor4.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    }  
    if (floor3.length) {
        s += '*3rd Floor*\n';
        s += floor3.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    } 
    if (floor2.length) {
        s += '*2nd Floor*\n';
        s += floor2.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    } 
    if (floor1.length) {
        s += '*1st Floor*\n';
        s += floor1.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    }  
    if (floor0.length) {
        s += '*Floor 0*\n';
        s += floor0.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    }
    if (floorZ.length) {
        s += '*Floor Z*\n';
        s += floorZ.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    }
    if (floorn1.length) {
        s += '*-1st Floor*\n';
        s += floorn1.map(roomName => `:white_small_square: ${roomName}\n`).join('');
        s += '\n\n';
    }

    return s;
}

/**
 * Build the Home Tab content.
 * 
 * Edit the template here: https://api.slack.com/tools/block-kit-builder?mode=appHome&view=%7B%22type%22%3A%22home%22%2C%22blocks%22%3A%5B%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Aclassical_building%3A%20*Stauffacherquai%208*%20%5C%22_The%20Classic%20Building_%5C%22%20_CH-WE-B_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*5th%20Floor*%5Cn%3Awhite_small_square%3A%2020%20Minuten%20Newsroom%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Finanz%20und%20Rechnungswesen%5Cn%3Awhite_small_square%3A%20Controlling%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Finanzen%20%26%20Personal%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11699%2Fspaces%2F54052%7CSitzungszimmer%20B%204.1%20Lausanne%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11699%2Fspaces%2F54053%7CSitzungszimmer%20B%204.2%20Genf%3E%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20SonntagsZeitung%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Encore%5Cn%3Awhite_small_square%3A%20SonntagsZeitung%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11698%2Fspaces%2F54051%7CSitzungszimmer%20B%201.1%20Bern%3E%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Doodle%5Cn%3Awhite_small_square%3A%20Annabelle%20Studio%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Stauffacherquai%208%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Aevergreen_tree%3A%20*Werdstrasse%2021*%20%5C%22_The%20Wood%20Building_%5C%22%20_CH-WE-C_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*5th%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%2020%20Minuten%5Cn%3Awhite_small_square%3A%2020%20Minuten%5Cn%3Awhite_small_square%3A%2020%20Minuten%20Friday%5Cn%3Awhite_small_square%3A%2020%20Minuten%20Tillate%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54062%7CSitzungszimmer%20C%205.2%20Seoul%3E%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Werdung%20%26%20Pendlermedien%5Cn%3Awhite_small_square%3A%2020%20Minuten%20(4th%20Floor)%5Cn%3Awhite_small_square%3A%20Advertising%3A%2020%20Minuten%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Digital%20Advertising%20Sales%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Digital%20Classified%20%26%20Tamedia%20Network%5Cn%3Awhite_small_square%3A%20Customer%20Contact%20Center%5Cn%3Awhite_small_square%3A%20Digital%20News%20%26%20Development%5Cn%3Awhite_small_square%3A%20Sitzungszimmer%20C%204.1%20Bangkok%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54061%7CSitzungszimmer%20C%204.2%20Kuala%20Lumpur%3E%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Bezahlmedien%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Nationale%20Medien%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Nationale%20Medien%5Cn%3Awhite_small_square%3A%20Nutzermarkt%3A%20Dialogmarketing%5Cn%3Awhite_small_square%3A%20Nutzermarkt%3A%20%C3%BCberregionale%20Medien%20Deutschweiz%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54058%7CSitzungszimmer%20C%203.1%20Mumbai%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54059%7CSitzungszimmer%20C%203.2%20Singapur%3E%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%20Newsroom%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54056%7CSitzungszimmer%20C%202.1%20Shanghai%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54057%7CSitzungszimmer%20C%202.3%20Hongkong%3E%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Das%20Magazin%5Cn%3Awhite_small_square%3A%20Digital%20News%20%26%20Development%5Cn%3Awhite_small_square%3A%20Tagblatt%20der%20Stadt%20Z%C3%BCrich%5Cn%3Awhite_small_square%3A%20Tages-Anzeiger%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54054%7CSitzungszimmer%20C%201.1%20Tokyo%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11700%2Fspaces%2F54055%7CSitzungszimmer%20C%201.2%20Beijing%3E%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Haupteingang%5Cn%3Awhite_small_square%3A%20Empfang%5Cn%3Awhite_small_square%3A%20Inseratenannahme%5Cn%3Awhite_small_square%3A%20Personalrestaurant%20Werdino%20(Erweiterung)%5Cn%5Cn%5Cn*Floor%20Z*%5Cn%3Awhite_small_square%3A%20Zwischengeschoss%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Werdstrasse%2021%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Apostbox%3A%20*Werdstrasse%2025*%20%5C%22_The%20Werdino%20%2F%20Post%20Building_%5C%22%20_CH-WE-D_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*5th%20Floor*%5Cn%3Awhite_small_square%3A%20Immobilien-Management%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Unternehmensentwicklung%5Cn%3Awhite_small_square%3A%20Unternehmenskommunikation%5Cn%3Awhite_small_square%3A%20Unternehmensleitung%5Cn%3Awhite_small_square%3A%20Verwalungsrat%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Einkauf%5Cn%3Awhite_small_square%3A%20Human%20Resources%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Regionalmedien%202%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Sales%20Support%5Cn%3Awhite_small_square%3A%20Tags-Anzeiger%5Cn%3Awhite_small_square%3A%20Webvideo-Team%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Regionalmedien%201%5Cn%3Awhite_small_square%3A%20Olmero%20Informatik%5Cn%3Awhite_small_square%3A%20Informatik%20Schulung%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54071%7CSitzungszimmer%20D%201%20Kopenhagen%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54072%7CSitzungszimmer%20D%201%20Oslo%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54070%7CSitzungszimmer%20D%201%20London%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54069%7CSitzungszimmer%20D%201%20Luxemburg%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54068%7CSitzungszimmer%20D%201%20Paris%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54066%7CSitzungszimmer%20D%201%20Rom%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54063%7CSitzungszimmer%20D%201%20Athen%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54065%7CSitzungszimmer%20D%201%20Madrid%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54064%7CSitzungszimmer%20D%201%20SchulungsraumInformatik%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11701%2Fspaces%2F54067%7CSitzungszimmer%20D%201%20Berlin%3E%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Hauspost%5Cn%3Awhite_small_square%3A%20Personalrestaurant%20Werdino%5Cn%5Cn%5Cn*Floor%20Z*%5Cn%3Awhite_small_square%3A%20Hausdienst%20(Bouygues)%5Cn%3Awhite_small_square%3A%20Lehrlingszimmer%5Cn%3Awhite_small_square%3A%20Leitung%20Personalrestaurant%20Werdino%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Werdstrasse%2025%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Atumbler_glass%3A%20*Ernst%20Nobs%20Platz%207*%20%5C%22_Glass%20Building_%5C%22%20_CH-WE-A_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*6th%20Floor*%5Cn%3Awhite_small_square%3A%20eat.ch%5Cn%3Awhite_small_square%3A%20Lounge%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54045%7CPresseclub%201%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54046%7CPresseclub%202%3E%5Cn%3Awhite_small_square%3A%20VR-Sitzungszimmer%5Cn%5Cn%5Cn*5th%20Floor*%5Cn%3Awhite_small_square%3A%20Cinerent%5Cn%3Awhite_small_square%3A%20Olmero%5Cn%3Awhite_small_square%3A%20Starticket%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54050%7CBoston%3E%5Cn%5Cn%5Cn*4th%20Floor*%5Cn%3Awhite_small_square%3A%20Annabelle%5Cn%3Awhite_small_square%3A%20Debitoren%5Cn%3Awhite_small_square%3A%20Finanz%20und%20Wirtschaft%20Forum%5Cn%5Cn%5Cn*3rd%20Floor*%5Cn%3Awhite_small_square%3A%20Advertising%3A%20Nationale%20Medien%5Cn%3Awhite_small_square%3A%20Schweizer%20Familie%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54049%7CChicago%3E%5Cn%5Cn%5Cn*2nd%20Floor*%5Cn%3Awhite_small_square%3A%20Finanz%20und%20Wirtschaft%5Cn%3Awhite_small_square%3A%20Tutti%5Cn%3Awhite_small_square%3A%20New%20York%5Cn%5Cn%5Cn*1st%20Floor*%5Cn%3Awhite_small_square%3A%20Homegate%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Rubriken%20%26%20Marketpl%C3%A4tze%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20IT%20%26%20Beteiligungen%5Cn%3Awhite_small_square%3A%20Leitung%20Bereich%20Verlagsservices%5Cn%3Awhite_small_square%3A%20San%20Francisco%5Cn%5Cn%5Cn*Floor%200*%5Cn%3Awhite_small_square%3A%20Informatik%5Cn%3Awhite_small_square%3A%20Marktforschung%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54047%7CSeattle%3E%5Cn%5Cn%5Cn*-1st%20Floor*%5Cn%3Awhite_small_square%3A%20Ad%20Services%5Cn%3Awhite_small_square%3A%20Prepress%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54044%7CKonferenzzentrum%20%2F%20Atrium%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54041%7CPlenum%20A%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54042%7CPlenum%20B%3E%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F10016%2Fspaces%2F54043%7CPlenum%20C%3E%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22Ernst%20Nobs%20Platz%207%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%5Cn%5Cn%22%7D%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22%3Aquestion%3A%20*%3F%3F%3F%3F*%20%5C%22_%3F%3F%3F_%5C%22%20_CH-WE-E_%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%2C%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22*6th%20Floor*%5Cn%3Awhite_small_square%3A%20%3Chttps%3A%2F%2Fdashboard.robinpowered.com%2Ftamedia%2Flocations%2F11698%2Fspaces%2F54014%7CBellevue%3E%5Cn%5Cn%5Cn%22%7D%2C%22accessory%22%3A%7B%22type%22%3A%22image%22%2C%22image_url%22%3A%22https%3A%2F%2Fapi.slack.com%2Fimg%2Fblocks%2Fbkb_template_images%2Fpalmtree.png%22%2C%22alt_text%22%3A%22%3F%3F%3F%3F%22%7D%7D%2C%7B%22type%22%3A%22divider%22%7D%5D%7D
 **/
const homeBuilder = () => {
    const { STAUFFACHERQUAI_8, WERDSTRASSE_21, WERDSTRASSE_25, ERNST_NOBS_PLATZ_7, MYSTERIOUS_BUILDING } = buildings;

    const stauffNickname = STAUFFACHERQUAI_8.nickname.length > 0 ? `"_${STAUFFACHERQUAI_8.nickname}_"` : '';
    const werd21Nickname = WERDSTRASSE_21.nickname.length > 0 ? `"_${WERDSTRASSE_21.nickname}_"` : '';
    const werd25Nickname = WERDSTRASSE_25.nickname.length > 0 ? `"_${WERDSTRASSE_25.nickname}_"` : '';
    const ernstnNickname = ERNST_NOBS_PLATZ_7.nickname.length > 0 ? `"_${ERNST_NOBS_PLATZ_7.nickname}_"` : '';
    const mysterNickname = MYSTERIOUS_BUILDING.nickname.length > 0 ? `"_${MYSTERIOUS_BUILDING.nickname}_"` : '';

    const blocks = {
        "type": "home",
        "blocks": [
            // ------------------------
            // STAUFFACHERQUAI_8
            // ------------------------
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `${STAUFFACHERQUAI_8.icon} *${STAUFFACHERQUAI_8.address}* ${stauffNickname} _${STAUFFACHERQUAI_8.code}_`
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": generateFloorTextForBuildingCode(rooms, STAUFFACHERQUAI_8.code)
                },
                "accessory": {
                    "type": "image",
                    "image_url": `${STAUFFACHERQUAI_8.imgUrl}`,
                    "alt_text": `${STAUFFACHERQUAI_8.address}`
                }
            },
            {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "\n\n"
                }
            },
            // ------------------------
            // WERDSTRASSE_21
            // ------------------------
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `${WERDSTRASSE_21.icon} *${WERDSTRASSE_21.address}* ${werd21Nickname} _${WERDSTRASSE_21.code}_`
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": generateFloorTextForBuildingCode(rooms, WERDSTRASSE_21.code)
                },
                "accessory": {
                    "type": "image",
                    "image_url": `${WERDSTRASSE_21.imgUrl}`,
                    "alt_text": `${WERDSTRASSE_21.address}`
                }
            },
            {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "\n\n"
                }
            },
            // ------------------------
            // WERDSTRASSE_25
            // ------------------------
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `${WERDSTRASSE_25.icon} *${WERDSTRASSE_25.address}* ${werd25Nickname} _${WERDSTRASSE_25.code}_`
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": generateFloorTextForBuildingCode(rooms, WERDSTRASSE_25.code)
                },
                "accessory": {
                    "type": "image",
                    "image_url": `${WERDSTRASSE_25.imgUrl}`,
                    "alt_text": `${WERDSTRASSE_25.address}`
                }
            },
            {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "\n\n"
                }
            },
            // ------------------------
            // ERNST_NOBS_PLATZ_7
            // ------------------------
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `${ERNST_NOBS_PLATZ_7.icon} *${ERNST_NOBS_PLATZ_7.address}* ${ernstnNickname} _${ERNST_NOBS_PLATZ_7.code}_`
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": generateFloorTextForBuildingCode(rooms, ERNST_NOBS_PLATZ_7.code)
                },
                "accessory": {
                    "type": "image",
                    "image_url": `${ERNST_NOBS_PLATZ_7.imgUrl}`,
                    "alt_text": `${ERNST_NOBS_PLATZ_7.address}`
                }
            },
            {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": "\n\n"
                }
            },
            // ------------------------
            // MYSTERIOUS_BUILDING
            // ------------------------
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `${MYSTERIOUS_BUILDING.icon} *${MYSTERIOUS_BUILDING.address}* ${mysterNickname} _${MYSTERIOUS_BUILDING.code}_`
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": generateFloorTextForBuildingCode(rooms, MYSTERIOUS_BUILDING.code)
                },
                "accessory": {
                    "type": "image",
                    "image_url": `${MYSTERIOUS_BUILDING.imgUrl}`,
                    "alt_text": `${MYSTERIOUS_BUILDING.address}`
                }
            },
            {
                "type": "divider"
            }
        ]
    };

    console.log(JSON.stringify(blocks, null, 2));
    return blocks;
};

homeBuilder();

module.exports = homeBuilder;
function makeUrl(type, channel) {
    "use strict";
    return "https://wind-bow.gomix.me/twitch-api" + '/' + type + '/' + channel + '?callback=?';

}

function getInfo(channels) {
    channels.forEach(makeUrl());
}

$(document).ready(function() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    console.log(makeUrl("channels", channels[0]));
})

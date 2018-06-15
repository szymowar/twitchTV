function makeUrl(type, channel) {
    "use strict";
    return "https://wind-bow.gomix.me/twitch-api" + '/' + type + '/' + channel + '?callback=?';

}

function getInfo(channels) {
    channels.forEach(function (channel){
        $.getJSON(makeUrl("streams", channel),function (data) {
            console.log(data);
        })
    });
}

$(document).ready(function() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    getInfo(channels);
})

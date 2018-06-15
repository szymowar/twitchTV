function makeUrl(type, channel) {
    "use strict";
    return "https://wind-bow.gomix.me/twitch-api" + '/' + type + '/' + channel + '?callback=?';

}

function buildListItem(data) {
    const item = document.createElement("LI");
        item.setAttribute("class", "channelItem");
        item.innerText = data;
    const list = document.querySelector("#res");
        list.appendChild(item);
}

function getInfo(channels) {
    channels.forEach(function (channel){
        $.getJSON(makeUrl("channels", channel), function (data){
            buildListItem(data.status);
        })
    });
}

$(document).ready(function() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    getInfo(channels);
})

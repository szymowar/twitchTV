function makeUrl(type, channel) {
    "use strict";
    return "https://wind-bow.gomix.me/twitch-api" + '/' + type + '/' + channel + '?callback=?';

}


function buildListItem(data) {
    const item = document.createElement("LI");
        item.setAttribute("class", "channelItem");
    const img = document.createElement("IMG");
        img.setAttribute("src", data.logo);
        img.setAttribute("class", "imgSize listItem");
        item.appendChild(img);
    const titleItem = document.createElement("A");
        titleItem.setAttribute("class", "titleItem listItem");
        titleItem.setAttribute("href", data.url);
        titleItem.innerText = data.display_name;
        item.appendChild(titleItem);
    const textItem = document.createElement("DIV");
        textItem.setAttribute("class", "listItem")
        if(data.status === null){
            textItem.innerText = "Offline";
        }else{
            if(data.status != null && data.status.length > 20){
                textItem.innerText = data.status.slice(0,20) + "...";
            }else {
            textItem.innerText = data.status;
            }
        }
        item.appendChild(textItem);
    const list = document.querySelector("#res");
        list.appendChild(item);
}

function getInfo(channels) {
    channels.forEach(function (channel){
        $.getJSON(makeUrl("channels", channel), function (data){
            console.log(data);
            buildListItem(data);
        })
    });
}

$(document).ready(function() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    getInfo(channels);
})

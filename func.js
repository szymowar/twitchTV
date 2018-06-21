function makeUrl(type, channel) {
    "use strict";
    return "https://wind-bow.gomix.me/twitch-api" + '/' + type + '/' + channel + '?callback=?';
}

function changeDisplay(elem, val){
    elem = document.querySelectorAll(elem);
    for(let i = 0; i < elem.length; i++){
            elem[i].parentNode.style.display = val;
        }
}

function show_online() {
    changeDisplay(".online", "block");
    }
function hide_online() {
    changeDisplay(".online", "none");
    }

function show_offline() {
    changeDisplay(".offline", "block");
}
function hide_offline() {
    changeDisplay(".offline", "none");
}

function online(){
    show_online();
    hide_offline();
}
function offline() {
    show_offline();
    hide_online();
}

function show_all() {
    show_online();
    show_offline();
}

function buildListItem(data) {
    let item = document.createElement("LI");
        item.setAttribute("class", "channelItem");

    let img = document.createElement("IMG");
        img.setAttribute("src", data.logo);
        img.setAttribute("class", "imgSize listItem");
        item.appendChild(img);

    let titleItem = document.createElement("A");
        titleItem.setAttribute("class", "titleItem listItem");
        titleItem.setAttribute("href", data.url);
        titleItem.innerText = data.display_name;
        item.appendChild(titleItem);

    let textItem = document.createElement("DIV");
        if(data.status === null){
            textItem.innerText = "Offline";
            textItem.setAttribute("class", "offline listItem");
        }else{
            textItem.setAttribute("class", "online listItem");
            if(data.status != null && data.status.length > 20){
                textItem.innerText = data.status.slice(0,20) + "...";
            }else {
            textItem.innerText = data.status;
            }
        }
        item.appendChild(textItem);

    let list = document.querySelector("#res");
        list.appendChild(item);
}

function getInfo(channels) {
    channels.forEach(function (channel){
        $.getJSON(makeUrl("channels", channel), function (data){
            buildListItem(data);
        })
    });
}

$(document).ready(function() {
    const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        getInfo(channels);

})

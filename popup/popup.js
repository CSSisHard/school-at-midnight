"use strict";

document.querySelector("#settingsButton").addEventListener("click",() => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggle_settings"}, function(response) {});  
    });
})
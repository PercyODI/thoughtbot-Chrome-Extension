/// <reference path="types.js" />
/// <reference path="libs/lodash.js" />

// Check if page is valid for extension
function checkForValidFile(tabId, changeInfo, tab) {
    console.log("New Tab Url!");
    console.dir(tab);
    if (_.endsWith(tab.url, ".taskmd")) {
        chrome.pageAction.show(tabId);
        chrome.tabs.sendMessage(tabId, {"message": convert_to_html})
    }
}
chrome.tabs.onUpdated.addListener(checkForValidFile);

// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         var activeTab = tabs[0];
//         if(_.endsWith(activeTab.url, ".taskmd")){
//             chrome.pageAction.show();
//         }
//         chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" });
//     });
// });

// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {

//         switch (request.message) {
//             case open_new_tab:
//                 chrome.tabs.create({
//                     "url": request.url
//                 });
//         }
//     }
// );
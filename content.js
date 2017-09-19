/// <reference path="jquery-3.2.1.js"/>
/// <reference path="types.js" />

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "clicked_browser_action") {
            var firstHref = $("a[href^='http']").eq(0).attr("href");

            console.log(firstHref);

            chrome.runtime.sendMessage({"message": open_new_tab, "url": firstHref});
        }
    }
)


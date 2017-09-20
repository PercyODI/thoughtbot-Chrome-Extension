/// <reference path="libs/jquery-3.2.1.js"/>
/// <reference path="libs/showdown.min.js" />
/// <reference path="types.js" />

var hasRun = false;
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.message) {
            case convert_to_html:
                if (hasRun === true) break;

                console.log("Converting Html");
                var converter = new showdown.Converter({"tasklists": true})
                var allText = $("body>pre").html();
                console.log("Text Before: \n" + allText);

                var convertedHtml = converter.makeHtml(allText);
                console.log("Html After: \n" + convertedHtml);
                $("*").html(convertedHtml);
                $(".task-list-item>input").attr("disabled", false);

                hasRun = true;
                break;
            default:
                break;
        }
        // if(request.message === "clicked_browser_action") {
        //     var firstHref = $("a[href^='http']").eq(0).attr("href");

        //     console.log(firstHref);

        //     chrome.runtime.sendMessage({"message": open_new_tab, "url": firstHref});
        // }
    }
)
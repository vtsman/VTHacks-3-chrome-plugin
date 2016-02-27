/**
 * Created by Spencer on 2/27/16.
 */
var newsSites = ["nytimes.com", "cnn.com", "foxnews.com"];

var curl = document.location.href;

for(var ind in newsSites) {
    var url = newsSites[ind];
    if (curl.indexOf(url) != -1) {
        $.get(chrome.extension.getURL("src/button.html"), function (data) {
            $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', chrome.extension.getURL("src/style.css")));
            $('head').append($('<script></script>').attr('src', chrome.extension.getURL("src/bg.js")));
            $('head').append($('<script></script>').attr('src', chrome.extension.getURL("src/jquery.js")));
            $("body").append(data);
        });
    }
}
/**
 * Created by Spencer on 2/27/16.
 */

var api = "http://172.16.44.76:1337";
//var api = "http://localhost:1337";
    var content = '<div id="list">'+
    '<div class="hackathon_loader"></div>'+
    '</div>'
var hackathon_load_content = function(){
    $("#list").remove();
    $("body").append(content);
    $.get(api + "/sugg/" + document.location.href, function(data){
        $(".hackathon_link").remove();
        var obj = JSON.parse(data);
        console.log(obj);
        $(".hackathon_loader").remove();
        var links = "";
        for(var i in obj.rss){
            var r = obj.rss[i];
            links += '<a href="'+ r.link + '" class="hackathon_link" title="' + r.title + '">'+ r.title + '</a><br class="hackathon_link">';
        }
        $("#list").append('<div id="hackathon_keywords"></div>');
        obj.keywords.forEach(function(k){
            $.get(api + "/info/" + k.key, function(data){
                if(data != "none"){
                    $("#hackathon_keywords").append('<div class="h_k ' + data + '" title="' + k.word + '(' + data + ')'+ '" style="cursor: pointer;" onclick="window.location=' + "'https://en.wikipedia.org/wiki/" + k.word.split(" ").join("_") + "'" + ';">'+ k.word + "</div>");
                    if(k.wiki != undefined){

                    }
                }
            });
        });
        $("#list").append(links);
    });
}

function wrapText(text, f){
    var replace_str = $('body').html().replace(new RegExp(text, "g"), f(text)); $('body').html(replace_str);
}
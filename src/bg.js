/**
 * Created by Spencer on 2/27/16.
 */
    var content = '<div id="list">'+
    '<div class="hackathon_loader"></div>'+
    '</div>'
var hackathon_load_content = function(){
    $("body").append(content);
    $.get("http://localhost:1337/" + document.location.href, function(data){
        var obj = JSON.parse(data);
       console.log(obj);
        $(".hackathon_loader").remove();
        var links = "";
        for(var i in obj.rss){
            var r = obj.rss[i];
            links += '<a href="'+ r.link + '" class="hackathon_link" alt="' + r.title + '">'+ r.title + '</a><br>';
        }
        $("#list").append(links);
    });
}
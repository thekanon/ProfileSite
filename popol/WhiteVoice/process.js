var idx = 1;
function fImgClick(pIdx)
{
    idx = pIdx;

    ImgFadeInOut();
}
var document = window.document;
$(document).ready(function() {
    $("#gallery1").attr("onclick", "").unbind("click");
    $("#gallery2").attr("onclick", "").unbind("click");
    $("#gallery3").attr("onclick", "").unbind("click");
    $("#gallery4").attr("onclick", "").unbind("click");

    $("#gallery1").bind("click", function (){fImgClick('0');});
    $("#gallery2").bind("click", function (){fImgClick('1');});
    $("#gallery3").bind("click", function (){fImgClick('2');});
    $("#gallery4").bind("click", function (){fImgClick('3');});

    $("#gallery1").css("cursor","pointer");
    $("#gallery2").css("cursor","pointer");
    $("#gallery3").css("cursor","pointer");
    $("#gallery4").css("cursor","pointer");

    for (var i=1; i <= 4; i++)
    {
        if(idx == i){
            $(".gallery_bg" + i).show();
        }else{
            $(".gallery_bg" + i).hide();
        }
    }

    for (var i=1; i <= 3; i++)
    {
        if(idx == i){
            $(".gallery_bg2_" + i).show();
        }else{
            $(".gallery_bg2_" + i).hide();
        }
    }
    //setInterval("ImgFadeInOut()",7000)

});


function ImgFadeInOut(){

    idx++;

    for (var i=1; i <= 4; i++)
    {
        if(idx > 4){idx = 1;}
        if(idx == i){
            $(".gallery_bg" + i).fadeIn(500);
            $("#gallery" + i).attr("src", "../images/common/ball_r.png");
        }else{
            $(".gallery_bg" + i).fadeOut(500);
            $("#gallery" + i).attr("src", "../images/common/ball.png");
        }
    }
    for (var i=1; i <= 3; i++)
    {
        if(idx > 3){idx = 1;}
        if(idx == i){
            $(".gallery_bg2_" + i).fadeIn(500);
        }else{
            $(".gallery_bg2_" + i).fadeOut(500);
        }
    }
}

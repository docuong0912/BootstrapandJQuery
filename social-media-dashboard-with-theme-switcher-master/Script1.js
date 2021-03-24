// JavaScript source code
var mode = "daylight";
$(document).ready(function () {
    $("#sun").click(function () {
        mode = 'night';
        $(".toggle-background").css({ "background-image": "url('images/tk-stars.svg')" });
        $("body").css({
            "background-image": "url('images/IrF.gif')",
            "color": "white"
        });
        $(".card").css({
            "background-color": "hsl(228, 28%, 20%)",
            "color":"white"
        });
        $(".toggle").css({
            "transform": "rotate(-90deg)"
        });
        $(".day").animate({
            right: '110px'
        });
        $(".night").animate({
            left: '0'
        });
    });
    $("#moon").click(function () {
        mode = 'daylight';
        $(".toggle-background").css({ "background-image": "url('images/daylight.png')" });
        $(".card").css({
            "background-color": "hsl(0, 0%, 94%)",
            "color": "hsl(230, 17%, 14%)"
        });
        $("body").css(
            {
                "background-image": "url('images/1KL8.gif')",
                "color": "black"
            }

        );
        $(".day").animate({
            right: '0px'
        });
        $(".night").animate({
            left: '110px'
        });
        $(".toggle").css({
            "transform": "rotate(60deg)"
        });
    });
    $(".card").hover(function () {
        if (mode == 'daylight') {
            $(this).css({
                "background-color": "lightgrey"
            });
        }
        else {
            $(this).css({
                "background-color": "hsl(232, 19%, 15%)"
            });
        }
    }, function () {
                if (mode == 'daylight') {
                    $(this).css({
                        "background-color": "hsl(0, 0%, 94%)"
                    });
                }
                else {
                    $(this).css({
                        "background-color": "hsl(228, 28%, 20%)"
                    });
                }
        });
});
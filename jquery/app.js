'use strict'

$(document).ready(function(){
    $(".field").on({
        click: function(){
            if ($(this).css("background-color") === "rgb(0, 128, 0)") {

                $(this).css("background-color", "yellow");
                $(this).parent().appendTo($('body'));

            } else if ($(this).css("background-color") === "rgb(0, 0, 255)") {

                $(this).css("background-color", "green");
                $(this).parent().appendTo($('body'));

            } else {

                $(this).css("background-color", "blue");
                $(this).parent().appendTo($('body'));
            };
        },  
    });
});


$(".minus").on("click", function () {
    let value = +($(this).next().val());
    if (value > 0) {
        $(this).next().val(--value);
    };
})

$(".plus").on("click", function () {
    let value = +($(this).prev().val());
    $(this).prev().val(++value)
})
$(document).ready(function () {
    $(".card_1").mouseenter(function () {
        $(".card_1").css("opacity", "1");
        $(".card_2").css("opacity", "0.3");
        $(".card_3").css("opacity", "0.3");

    });
    $(".card_1").mouseleave(function () {
        $(".card_2").css("opacity", "1");
        $(".card_3").css("opacity", "1");
    });
$(".card_2").mouseenter(function () {
        $(".card_1").css("opacity", "0.3");
        $(".card_2").css("opacity", "1");
        $(".card_3").css("opacity", "0.3");

    });
    $(".card_2").mouseleave(function () {
        $(".card_1").css("opacity", "1");
        $(".card_3").css("opacity", "1");
    });
$(".card_3").mouseenter(function () {
        $(".card_1").css("opacity", "0.3");
        $(".card_2").css("opacity", "0.3");
        $(".card_3").css("opacity", "1");

    });
    $(".card_3").mouseleave(function () {
        $(".card_1").css("opacity", "1");
        $(".card_2").css("opacity", "1");
    });

});
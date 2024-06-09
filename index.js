$(document).ready(function () {

    $("[class*='icon-card']").hover(function () {
        $(this).children('i').addClass('colored')
    }, function () {
        $(this).children('i').removeClass('colored')
    });

    $('.carousel').carousel({
        pause: false,
        keyboard: true,
    })
});
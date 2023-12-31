$(document).ready(() => {

    // open and close the menu
    $('.open-menu').click(() => {
        $('.main-list').animate({
            'right': '0'
        }, 300);
    });

    $('.close-menu').click(() => {
        $('.main-list').animate({
            'right': '-100%'
        }, 300);
    });

});
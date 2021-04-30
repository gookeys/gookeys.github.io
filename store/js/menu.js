$(function () {
    $('#navbar').load('nav.html');
    $('#footerbar').load('footer.html');
})

$(document).ready(function () {
    $('.menu').click(function () {
        $('header ul').toggleClass('open');
    })
})
$(function () {
    $('#navbar').load('nav.html');
    $('#footerbar').load('footer.html');

    $('.menu').click(function () {
        $('header ul').toggleClass('open');
    })
})
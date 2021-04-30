$(function () {
    $('#navbar').load('nav.html');
    $('#footerbar').load('footer.html');

    $('.menu').click(function () {
        debugger
        $('header ul').toggleClass('open');
    })
})
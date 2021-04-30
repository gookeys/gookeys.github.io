$(function () {
    $('#footerbar').load('footer.html');

    $('.menu').click(function () {
        $('header ul').toggleClass('open');
    })
})
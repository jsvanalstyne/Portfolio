$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

$("#aboutBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top -95},
        'slow');
    console.log("scroll")
});
$("#portfolioBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top -100},
        'slow');
    console.log("scroll")
});
$("#contactBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactMe").offset().top -500},
        'slow');
    console.log("scroll")
});
// $("a.link").on("click",function(){
//     window.open('www.yourdomain.com','_blank');
// });


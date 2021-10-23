$('.header-btn').click(function(){
    $('.header-btn').toggleClass('header-btn__active');
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        loop: true
    });
});
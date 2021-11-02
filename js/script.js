$('.header-btn').click(function(){
    $('.header-btn').toggleClass('header-btn__active');
})
$(document).ready(function(){
    $(".order__slider").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        loop: true
    });
});
$(document).ready(function(){
    $(".delivery__slider").owlCarousel({
        dots: true,
        loop: true,
        URLhashListener:true,
        responsiveClass:true,
        responsive: {
            0 : {
                items: 0,
                nav: false
            },
            567 : {
                items: 1,
                nav: true
            }
        }
    });
});
$(document).ready(function(){
    $(".delivery__slider-mob").owlCarousel({
        dots: true,
        nav: false,
        loop: true,
        URLhashListener:true,
        responsiveClass:true,
        responsive: {
            0 : {
                items: 1,
            },
            567 : {
                items: 0,
            }
        }
    });
});
$(document).ready(function(){
    $(".emotions__slider").owlCarousel({
        dots: true,
        items: 1,
        loop: true,
        responsiveClass:true,
        responsive: {
            0 : {
                nav: false,
            },
            567 : {
                nav: true,
            }
        }
    });
});
$('.hash-nav__link').click(function(){
    $('.hash-nav__link').removeClass('hash-link__active');
    $(this).addClass('hash-link__active'); 
})
$('.hash-nav__text').click(function(){
    $('.hash-nav__text').removeClass('hash-text__active');
    $(this).addClass('hash-text__active');
})

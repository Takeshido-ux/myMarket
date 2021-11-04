$('.header-btn').click(function(){
    $('.header-btn').toggleClass('header-btn__active');
})
$(document).ready(function(){
    $(".order__slider").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        loop: true,
        URLhashListener:true
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
$(document).ready(function(){
    $(".actions__slider").owlCarousel({
        loop: false,
        nav: false,
        responsiveClass:true,
        responsive: {
            0 : {
                items: 1,
                dots: true,
            },
            567 : {
                items: 5,
                dots: false,
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
$('.question__inner-item').click(function(){
    if($(this).hasClass('question__inner-item__active') && $(this).next().hasClass('question__inner-item_down__active') && $(this).find('.inner__item-right').hasClass('inner__item-right__active')){
        $(this).removeClass('question__inner-item__active');
        $(this).next().removeClass('question__inner-item_down__active');
        $(this).find('.inner__item-right').removeClass('inner__item-right__active');
    }
    if(!$('.question__inner-item').hasClass('question__inner-item__active') && !$('.question__inner-item').next().hasClass('question__inner-item_down__active') && !$('.question__inner-item').find('.inner__item-right').hasClass('inner__item-right__active')){
        $('.question__inner-item')[2].classList.add('question__inner-item__active');
        $('.question__inner-item').next()[2].classList.add('question__inner-item_down__active');
        $('.question__inner-item').find('.inner__item-right')[2].classList.add('inner__item-right__active');
    }
    else{
        $('.question__inner-item').removeClass('question__inner-item__active');
        $('.question__inner-item_down').removeClass('question__inner-item_down__active');
        $('.inner__item-right').removeClass('inner__item-right__active');
        $(this).addClass('question__inner-item__active');
        $(this).next().addClass('question__inner-item_down__active');
        $(this).find('.inner__item-right').addClass('inner__item-right__active');
    }
    
})
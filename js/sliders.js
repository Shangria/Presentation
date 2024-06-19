import {resetForm} from "./helpers.js";

let pageSlider;
window.addEventListener("load", ()=>{
    /**
     * Initialize a page slider
     */
    let activePageIndex = 0;
     pageSlider = new Swiper('#page-slider', {
        slidesPerView: 1,
        direction: 'vertical',
        speed: 800,
        mousewheel: false,
        allowTouchMove: false,
        allowSlideNext: true,
        allowSlidePrev: true,
        effect: 'fade',
        initialSlide:0,
        fadeEffect: {
            crossFade: true,
        },
        on:{
            init: function(swiper) {
              //1sts slide animations
                animateFirstSlide();
            },

            beforeTransitionStart: function(swiper) {
                // Подготовка элементов к анимации

                prepareAnimation(swiper);
            },
            transitionStart: function(swiper) {
                // Запуск анимации после полного перехода
                startAnimation(swiper);
            },
        },
    });

    /**
     * Initialize a comprehensive slider
     */

    function initializeSwiper() {
        new Swiper('#comprehensive-slider', {
            slidesPerView: 'auto',
            freeMode: true,
            speed: 700,
            pagination: {
                el: '.comprehensive-coverage-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slideClass: 'comprehensive-slide-item',
            slideActiveClass: 'comprehensive-slide-item-active',
            grabCursor: true,
            preventInteractionOnTransition: true,
        });
    }

    if (window.innerWidth >= 1042) {
        initializeSwiper();
    }


    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1042 && !document.querySelector('.swiper-container-initialized')) {
            initializeSwiper();
        }
    });

})

function animateFirstSlide() {
    $('#slide1 [data-animate]').addClass('animate__animated animate__fadeInLeft animate__fast animate__smooth');
}

function prepareAnimation(swiper) {
    // Скрытие всех анимированных элементов
    $('[data-animate]').css('opacity', 0).removeClass('animate__animated animate__fadeInLeft animate__fadeInRight');
}

function startAnimation(swiper) {
    // Применение анимации в зависимости от направления перехода
    if (swiper.activeIndex > swiper.previousIndex) {
        $('#slide' + (swiper.activeIndex + 1) + ' [data-animate]').addClass('animate__animated animate__fadeInLeft animate__fast animate__smooth').css('opacity', 1);
    } else if (swiper.activeIndex < swiper.previousIndex) {
        $('#slide' + (swiper.activeIndex + 1) + ' [data-animate]').addClass('animate__animated animate__fadeInRight animate__fast animate__smooth').css('opacity', 1);
    }
}

/*
function hideFirstSlideAnimation () {
    $('[data-boost-style]').addClass('animate__fadeOutLeft  animate__fast ');
    $('[data-laptop-style]').addClass('animate__fadeOutLeft  animate__fast ');
}

function showFirstSlideAnimation () {
    $('[data-boost-style]').addClass('animate__fadeInRight animate__fast');
    $('[data-laptop-style]').addClass('animate__fadeInRight animate__fast');
}

,k

function showSecondSlideAnimation () {
    $('.section-select-target .section-back').removeClass('animate__fadeOut').addClass('animate__fadeIn');
    $('.section-select-target .section-close').removeClass('animate__fadeOut').addClass('animate__fadeIn');
    $('.section-select-target .title').removeClass('animate__fadeOutUp').addClass('animate__fadeInDown');
    $('#comprehensive-slider').removeClass('animate__fadeOutRight').addClass('animate__fadeInRight');
    $('.swiper-dots-wrapper').removeClass('animate__fadeOutDown').addClass('animate__fadeInUp');
}

function hideThirdSlideAnimation () {
    $('.presentation-menu').removeClass('animate__fadeInLeft').addClass('animate__fadeOutLeft');
    $('.section-modules .main').removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
}

function showThirdSlideAnimation () {
    $('.presentation-menu').removeClass('animate__fadeOutLeft').addClass('animate__fadeInLeft');
    $('.section-modules .main').removeClass('animate__fadeOutRight').addClass('animate__fadeInRight');
}*/

$(document).ready(function () {
    /**
     * Navigate between page slides
     */
    $('#getStarted, .btn-next, [data-request-invoice]').on('click', function () {
        pageSlider.slideNext();
    });

    $('.section-back').on('click', function () {
        pageSlider.slidePrev();
    });

    $('.section-close').on('click', function () {
        pageSlider.slideTo(0);
        resetForm()
    });

})
export {pageSlider}
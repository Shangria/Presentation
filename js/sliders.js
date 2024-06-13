import {resetForm} from "./helpers.js";

/**
 * Initialize a page slider
 */
let activePageIndex = 0;
const pageSlider = new Swiper('#page-slider', {
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
    on: {
        /**
         * Event will be fired when currently active slide is changed
         */
        slideChange: function (swiper) {
            // Animate when navigating from 1 to 2 slide
            if (activePageIndex === 0 && swiper.activeIndex === 1) {
                hideFirstSlideAnimation();
                showSecondSlideAnimation();
            }

            // Animate when navigating from 2 to 1 slide
            if (activePageIndex === 1 && swiper.activeIndex === 0) {
                showFirstSlideAnimation();
                hideSecondSlideAnimation();
            }

            // Animate when navigating from 2 to 3 slide
            if (activePageIndex === 1 && swiper.activeIndex === 2) {
                hideSecondSlideAnimation();
                showThirdSlideAnimation();

                $('.presentation-modules-item.presentation-modules-item-active').click();
            }

            // Animate when navigating from 3 to 2 slide
            if (activePageIndex === 2 && swiper.activeIndex === 1) {
                showSecondSlideAnimation();
                hideThirdSlideAnimation();
            }

            if (activePageIndex > 1 && swiper.activeIndex === 0) {
                // TODO: As it is the last slide implemented for now - so hide the third slide.
                hideThirdSlideAnimation();
                showFirstSlideAnimation();
            }

            activePageIndex = swiper.activeIndex;
        },
    },
});

/**
 * Initialize a comprehensive slider
 */
// Функция для инициализации Swiper
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

function hideFirstSlideAnimation () {
    $('[data-boost-style]').addClass('animate__fadeOutLeft');
    $('[data-laptop-style]').addClass('animate__fadeOutUpBig');
}

function showFirstSlideAnimation () {
    $('[data-boost-style]').removeClass('animate__fadeOutLeft');
    $('[data-laptop-style]').removeClass('animate__fadeOutUpBig');
}

function hideSecondSlideAnimation () {
    $('.section-select-target .section-back').removeClass('animate__fadeIn').addClass('animate__fadeOut');
    $('.section-select-target .section-close').removeClass('animate__fadeIn').addClass('animate__fadeOut');
    $('.section-select-target .title').removeClass('animate__fadeInDown').addClass('animate__fadeOutUp');
    $('#comprehensive-slider').removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
    $('.swiper-dots-wrapper').removeClass('animate__fadeInUp').addClass('animate__fadeOutDown');
}

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
}

$(document).ready(function () {
    /**
     * Navigate between page slides
     */
    $('#getStarted, .btn-next').on('click', function () {
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
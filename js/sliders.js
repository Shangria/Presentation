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
                prepareAnimation(swiper);
            },
            transitionStart: function(swiper) {
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
    $('[data-animate]').css('opacity', 0).removeClass('animate__animated animate__fadeInLeft animate__fadeInRight');
}

function startAnimation(swiper) {
    if (swiper.activeIndex > swiper.previousIndex) {
        $('#slide' + (swiper.activeIndex + 1) + ' [data-animate]').addClass('animate__animated animate__fadeInLeft animate__fast animate__smooth').css('opacity', 1);
    } else if (swiper.activeIndex < swiper.previousIndex) {
        $('#slide' + (swiper.activeIndex + 1) + ' [data-animate]').addClass('animate__animated animate__fadeInRight animate__fast animate__smooth').css('opacity', 1);
    }
}


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
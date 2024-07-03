import {resetForm} from "./helpers.js";

let pageSlider;
window.addEventListener("load", () => {
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
        initialSlide: 0,
        fadeEffect: {
            crossFade: true,
        },
        on: {
            init: function (swiper) {
                //1sts slide animations
                animateFirstSlide();
            },

            beforeTransitionStart: function (swiper) {
                prepareAnimation(swiper);
            },
            transitionStart: function (swiper) {
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


    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1042 && !document.querySelector('.swiper-container-initialized')) {
            initializeSwiper();
        }
    });

});

function animateFirstSlide() {
    $('#slide1 [data-animate]').addClass('animate__animated animate__fadeInLeft animate__fast animate__smooth');
}

function prepareAnimation(swiper) {
    $('.panel-animation').css('width', "auto");
    $('[data-animate]').removeClass('animate__animated animate__fadeInLeft animate__fadeInRight');
    $('[data-animate-fade-in-up]').removeClass('animate__animated animate__fadeInUp');
    $('[data-animate-left]').removeClass('animate__animated animate__fadeInLeft animate__fadeInRightSlower animate__fadeInLeftSlower animate__fadeInRight ');
    $('[data-animate-right]').removeClass('animate__animated animate__fadeInLeft animate__fadeInRightSlower animate__fadeInLeftSlower animate__fadeInRight ');
    $('[data-animate-bottom-left]').removeClass('animate__animated animate__fadeInBottomLeft');
    $('[data-animate-top-left]').removeClass('animate__animated animate__fadeInTopLeft');
    $('[data-animate-width]').removeClass('animate__animated animate__width animate__width-min');
    /*$('[data-animate-fade-in]').removeClass('animate__fadeInShow');*/
}

function startAnimation(swiper) {
    let slideDirection = swiper.activeIndex > swiper.previousIndex ? 'animate__fadeInRight' : 'animate__fadeInLeft';
    let slideDirectionShow = swiper.activeIndex === 3 ? 'animate__fadeInShow' : '';

    let slideDirectionFor2SlideLeft = swiper.activeIndex > swiper.previousIndex ? 'animate__fadeInRight' : '';
    let slideDirectionFor2SlideRight = swiper.activeIndex > swiper.previousIndex ? 'animate__fadeInLeft' : '';
    let slideDirectionFor2Width = swiper.activeIndex > swiper.previousIndex ? '' : 'animate__width';


    if (swiper.activeIndex === 0) {
        animateFirstSlide()
    }

    else if (swiper.activeIndex === 1) {
        $('#slide2 [data-animate]').addClass(`animate__animated ${slideDirection} `);
        $('#slide2 [data-animate-fade-in-up]').addClass(`animate__animated animate__fadeInUp `);
    }

    else if (swiper.activeIndex === 2) {
        $('#slide3 [data-animate-left]').addClass(`animate__animated  ${slideDirectionFor2SlideLeft}`);
        $('#slide3 [data-animate-right]').addClass(`animate__animated  ${slideDirectionFor2SlideRight}`);
        $('#slide3 [data-animate-width]').addClass(`animate__animated   ${slideDirectionFor2Width}`);
    }

    else if (swiper.activeIndex === 3) {
        $('#slide4 [data-animate-left]').addClass(`animate__animated  animate__fadeInRight`);
        $('#slide4 [data-animate-right]').addClass('animate__animated animate__fadeInLeft ');
        $('#slide4 [data-animate-width]').addClass(`animate__animated  animate__width-min`);
       /* $('#slide4 [data-animate-fade-in]').addClass(`animate__animated ${slideDirectionShow}`);*/
    }

    else if (swiper.activeIndex === 4) {
        $('#slide5 [data-animate-left]').addClass('animate__animated animate__fadeInRight');
        $('#slide5 [data-animate-bottom-left]').addClass('animate__animated animate__fadeInBottomLeft ');
        $('#slide5 [data-animate-top-left]').addClass('animate__animated animate__fadeInTopLeft ');
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
        resetForm();
    });

});
export {pageSlider};
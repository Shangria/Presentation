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

function animateFirstSlide(slideDirectionMobile) {
    //for desktop
    $('#slide1 [data-animate]').addClass('animate__animated animate__fadeInLeftOwn');

    //for mobile
    $('#slide1 [data-animate-mobile]').addClass(`animate__animated ${slideDirectionMobile} `);
}

function prepareAnimation(swiper) {
    /*$('.panel-animation').css('width', "auto");*/
    $('[data-animate]').removeClass('animate__animated animate__fadeInLeftOwn animate__fadeInRightOwn');
    $('[data-animate-fade-in-up]').removeClass('animate__animated animate__fadeInUpOwn');
    $('[data-animate-left]').removeClass('animate__animated animate__fadeInLeftOwn animate__fadeInRightSlowerOwn animate__fadeInLeftSlowerOwn animate__fadeInRightOwn ');
    $('[data-animate-right]').removeClass('animate__animated animate__fadeInLeftOwn animate__fadeInRightSlowerOwn animate__fadeInLeftSlowerOwn animate__fadeInRightOwn ');
    $('[data-animate-bottom-left]').removeClass('animate__animated animate__fadeInBottomLeftOwn');
    $('[data-animate-top-left]').removeClass('animate__animated animate__fadeInTopLeftOwn');
    $('[data-animate-width]').removeClass('animate__animated animate__widthOwn');

    $('[data-animate-width-max ]').removeClass('animate__animated animate__width-minOwn');
    $('[data-animate-mobile]').removeClass('animate__animated animate__fadeInRightOwnMobile animate__fadeInLeftOwnMobile');
}

function startAnimation(swiper) {
    let slideDirection = swiper.activeIndex > swiper.previousIndex ? 'animate__fadeInRightOwn' : 'animate__fadeInLeftOwn';
    let slideDirectionMobile = swiper.activeIndex > swiper.previousIndex ? 'animate__fadeInRightOwnMobile' : 'animate__fadeInLeftOwnMobile';
    let slideDirectionFor2SlideLeft = swiper.activeIndex > swiper.previousIndex ? 'animate__fadeInRightOwn' : '';
    let slideDirectionFor2SlideRight = swiper.activeIndex > swiper.previousIndex ? 'animate__fadeInLeftOwn' : '';
    let slideDirectionFor2Width = swiper.activeIndex > swiper.previousIndex ? '' : 'animate__widthOwn';
    let slideDirectionFor3Width = swiper.activeIndex > swiper.previousIndex ? 'animate__width-minOwn' : '';


    if (swiper.activeIndex === 0) {
        animateFirstSlide(slideDirectionMobile)
        $('#slide1 [data-animate-mobile]').addClass(`animate__animated ${slideDirection} `);
    }


    else if (swiper.activeIndex === 1) {
        $('#slide2 [data-animate-mobile]').addClass(`animate__animated ${slideDirectionMobile} `);
        $('#slide2 [data-animate]').addClass(`animate__animated ${slideDirection} `);
        $('#slide2 [data-animate-fade-in-up]').addClass(`animate__animated animate__fadeInUpOwn `);
    }

    else if (swiper.activeIndex === 2) {
        $('#slide3 [data-animate-mobile]').addClass(`animate__animated ${slideDirectionMobile}`);
        $('#slide3 [data-animate-left]').addClass(`animate__animated  ${slideDirectionFor2SlideLeft}`);
        $('#slide3 [data-animate-right]').addClass(`animate__animated  ${slideDirectionFor2SlideRight}`);
        $('#slide3 [data-animate-width]').addClass(`animate__animated   ${slideDirectionFor2Width}`);
    }

    else if (swiper.activeIndex === 3) {
        $('#slide4 [data-animate-mobile]').addClass(`animate__animated ${slideDirectionMobile} `);
        $('#slide4 [data-animate-left]').addClass(`animate__animated  animate__fadeInRightOwn`);
        $('#slide4 [data-animate-right]').addClass('animate__animated animate__fadeInLeftOwn ');
        $('#slide4 [data-animate-width-max]').addClass(`animate__animated  ${slideDirectionFor3Width}`);
    }

    else if (swiper.activeIndex === 4) {
        $('#slide5 [data-animate-mobile]').addClass(`animate__animated ${slideDirectionMobile} `);
        $('#slide5 [data-animate-left]').addClass('animate__animated animate__fadeInRightOwn');
        $('#slide5 [data-animate-bottom-left]').addClass('animate__animated animate__fadeInBottomLeftOwn ');
        $('#slide5 [data-animate-top-left]').addClass('animate__animated animate__fadeInTopLeftOwn ');
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
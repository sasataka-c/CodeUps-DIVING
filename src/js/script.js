
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    $('.js-hamburger').on('click', function () {
        if ($('.js-hamburger').hasClass('is-active')) {
            $('.js-hamburger').removeClass('is-active');
            $('body').removeClass('is-fixed');
            $('.js-sp-nav').fadeOut();
            // $('.js-sp-nav').removeClass('is-active');
        } else {
            $('.js-hamburger').addClass('is-active');
            $('body').addClass('is-fixed');
            $('.js-sp-nav').fadeIn();
            // $('.js-sp-nav').addClass('is-active');
        }
    });

    const mvSwiper = new Swiper(".js-mv-swiper", {
        // loop: true,
        effect: 'fade',
        speed: 1500,
        // autoplay: {
        //     delay: 3000,
        // }
    });

    const campaignSwiper = new Swiper(".js-campaign-Swiper", {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 16,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // autoplay: {
        //     delay: 3000,
        // },
    });

});

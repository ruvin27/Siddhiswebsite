jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });

    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });


    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    jQuery('.stellarnav').stellarNav({
        theme: 'dark'
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });

    /*--------------------------
       PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    /*---------------------------
        CLIENT SLIDER
    -----------------------------*/
    var $clientCarousel = $('.client-slider');
    $clientCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    var $testmonialCarousel = $('.testmonial-slider');
    $testmonialCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2.5
            },
            1200: {
                items: 3.5
            }
        }
    });

    /*---------------------------
        PRICE SLIDER
    -----------------------------*/
    var $priceCarousel = $('.price-list');
    $priceCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: false,
        autoplayTimeout: 3000,
        margin: -30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    /*---------------------------
        BLOG SLIDER
    -----------------------------*/
    var $blogCarousel = $('.blog-slider');
    $blogCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });


    /*-----------------------------------
        TESTMONIAL SLIDER ACTIVE
    -----------------------------------*/
    var clientDetails = $('.testmonial-details');
    clientDetails.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    // Book List Slider
    var clientPhoto = $('.testimonial-photo');
    clientPhoto.owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: true,
        touchDrag: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });
    $('.teamslide_nav .testi_next').on('click', function () {
        clientPhoto.trigger('next.owl.carousel');
    });
    $('.teamslide_nav .testi_prev').on('click', function () {
        clientPhoto.trigger('prev.owl.carousel');
    });

    clientPhoto.on('translate.owl.carousel', function (property) {
        $('.testmonial-details-content .owl-dot:eq(' + property.page.index + ')').click();
    });
    clientDetails.on('translate.owl.carousel', function (property) {
        $('.testmonial-photo-list .owl-dot:eq(' + property.page.index + ')').click();
    });

    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

    /*---------------------------
        PLACEHOLDER ANIMATION
    ----------------------------*/
    Placeholdem(document.querySelectorAll('[placeholder]'));

}(jQuery));


jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);

});
(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // Hero Slider Active Code
        $(".features-slides").owlCarousel({
            items: 5,
            loop: true,
            autoplay: false,
            smartSpeed: 2000,
            margin: 50,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        })
    }


    // matchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equal-height').matchHeight();
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 500,
            scrollText: '<i class="pe-7s-angle-up" aria-hidden="true"></i>'
        });
    }

    // onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#listingNav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    var $window = $(window);

    // Sticky Active JS
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

    // Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // selectpicker
    $(".selectpicker").selectpicker({
        dropupAuto: false,
        size: 5
    });

    function float () {
        $(this).parents(".form-group").children("label").addClass("float");
    }
    function unfloat () {
        $(this).parents(".form-group").children("label").removeClass("float");
    }
    function changefloat () {
        $(this).parents(".form-group").children("label").addClass("change-float");
    }

    $(".selectpicker").on("show.bs.select", float);
    $(".selectpicker").on("hide.bs.select", unfloat);
    $(".selectpicker").on("changed.bs.select", changefloat);

    // datePicker
    $('#datepicker input').datepicker({
        format: "yyyy-mm-dd",
        startDate: "today",
        clearBtn: true,
        orientation: "bottom left"
    });

    function dateFloat () {
        $(this).find(".form-control").addClass("date-Show-form");
        $(this).find("label").addClass("date-Show");
    }
    function dateUnfloat () {
        $(this).find(".form-control").removeClass("date-Show-form");
        $(this).find("label").removeClass("date-Show");
    }

    $('#datepicker').on("show", dateFloat);
    $('#datepicker').on("hide", dateUnfloat);
    $("#datepicker").on("show", function () {
        var ddwidth = $(".form-control").width();
        $(".datepicker").css({"width": ddwidth});
        $(this).find("i").css({"color": "#c43235"});
    });
    $('#datepicker').on("hide", function () {
        $(this).find("i").css({"color": "#1d3147"});
    });


})(jQuery);
jQuery(document).ready(function($) {
    "use strict";

	
	
    $('body').addClass('pace-done');
		
  

    $(".social-sharing-toggle,.mobile-sharing-toggle").live('click', function() {
		
        $("body").addClass('social-sharing-on');
        $("#social-modal").fadeIn();
        $("#social-modal").click(function(b) {
            $(this).fadeOut();
            $("body").removeClass('social-sharing-on');
        });
    });

 
    

   





    $('.slideshow_title,.static_slideshow_title')
        .stop()
        .delay( 10 )
        .animate({ opacity : 1 }, 450, '' );

    $('.slideshow_caption,.static_slideshow_caption')
        .stop()
        .delay( 500 )
        .animate({ opacity : 1 }, 450, '' );

    $('.slideshow_content_links,.static_slideshow_content_link')
        .stop()
        .delay( 700 )
        .animate({ opacity : 1 }, 450, '' );

    $(".modal-trigger-button").live('click', function() {
        var modal_display = $(this).data('modalid');
        displayModal(modal_display);
    });



    var deviceAgent = navigator.userAgent.toLowerCase();
    var isIOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    var curr_menu_item;
    var percent;




    if ($('#toggle-menu').length) {
 
        $("#toggle-menu").live('click', function() {
            $('#toggle-menu').toggleClass('toggle-menu-open');
			console.log("error is happening here");
			 
            $('body').toggleClass('minimal-menu-fadein sticky-menu-off');
        });

    }
    if ($('#mobile-toggle-menu').length) {
 
        $("#mobile-toggle-menu").live('click', function() {
			
        	$(".mobile-menu-toggle").toggleClass("hide_logo");
            $('#mobile-toggle-menu').toggleClass('mobile-toggle-menu-open');
            $('body').toggleClass('body-dashboard-push-left');
            $('.responsive-mobile-menu').toggle(10, function() {
                $(".responsive-mobile-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        });

    }

    function fotoramaResizer() {
        if ($.fn.fotorama) {

            var fotorama_window_width = $(window).width();

            if ($('body').hasClass('menu-is-vertical')) {
                if (fotorama_window_width < 1025) {
                    $('#fotorama-container-wrap').addClass('fotorama-fullwidth');
                } else {
                    $('#fotorama-container-wrap').removeClass('fotorama-fullwidth');
                }
            }

            $('.fotorama').data('fotorama').destroy();

            var fotorama_width = fotorama_window_width;
            var fotorama_header_height = 0;
            if ($('body').hasClass('compact-menu')) {
                fotorama_header_height = $('.outer-wrap').outerHeight();
            }
            var fotorama_footer_height = $('.fullscreen-footer-wrap').outerHeight();
            var fotorama_outer = fotorama_header_height + fotorama_footer_height;
            var fotorama_height = $(window).height() - fotorama_outer;

            if ($('body').hasClass('fotorama-style-contain')) {
                if ($('body').hasClass('boxed-site-layout')) {
                    fotorama_width = fotorama_window_width - 110;
                    $('#fotorama-container-wrap').css('left', '55px');
                }
                if (fotorama_window_width < 1025) {
                    fotorama_header_height = $('.mobile-menu-toggle').outerHeight();
                    fotorama_outer = fotorama_header_height + fotorama_footer_height;

                    fotorama_height = $(window).height() - fotorama_outer;
                    $('#fotorama-container-wrap').css('left', '0');
                    fotorama_width = '100%';
                }
            } else {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
            }

            if ($('body').hasClass('fullscreen-mode-on')) {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
                $('#fotorama-container-wrap').css('left', '0');
            }
            $('#fotorama-container-wrap').css('top',fotorama_header_height);
            $('.fotorama').fotorama({
                height: fotorama_height,
                width: fotorama_width
            });
        }
    }

    $(window).resize(function() {
        fotoramaResizer();
    });
    if ($.fn.fotorama) {

        var fotorama_window_width = $(window).width();

        if ($('body').hasClass('menu-is-vertical')) {
            if (fotorama_window_width < 1025) {
                $('#fotorama-container-wrap').addClass('fotorama-fullwidth');
            } else {
                $('#fotorama-container-wrap').removeClass('fotorama-fullwidth');
            }
        }

        var fotorama_width = fotorama_window_width;
        var fotorama_header_height = 0;
        if ($('body').hasClass('compact-menu')) {
            fotorama_header_height = $('.outer-wrap').outerHeight();
        }
        var fotorama_footer_height = $('.fullscreen-footer-wrap').outerHeight();
        var fotorama_outer = fotorama_header_height + fotorama_footer_height;
        var fotorama_height = $(window).height() - fotorama_outer;

        if ($('body').hasClass('fotorama-style-contain')) {
            if ($('body').hasClass('boxed-site-layout')) {
                fotorama_width = fotorama_window_width - 110;
                $('#fotorama-container-wrap').css('left', '55px');
            }
            if (fotorama_window_width < 1025) {
                fotorama_header_height = $('.mobile-menu-toggle').outerHeight();
                fotorama_outer = fotorama_header_height + fotorama_footer_height;

                fotorama_height = $(window).height() - fotorama_outer;
                $('#fotorama-container-wrap').css('left', '0');
                fotorama_width = '100%';
            }
        } else {
            fotorama_height = '100%';
            fotorama_header_height = 0;
            fotorama_width = '100%';
        }

        if ($('body').hasClass('fullscreen-mode-on')) {
            fotorama_height = '100%';
            fotorama_header_height = 0;
            fotorama_width = '100%';
            $('#fotorama-container-wrap').css('left', '0');
        }
        $('#fotorama-container-wrap').css('top',fotorama_header_height);
        $('.fotorama').fotorama({
            height: fotorama_height,
            width: fotorama_width
        });
    }

    // Fullscreen Toggle
    var events_toggle_element = $('.mtheme-events-carousel');
    var fullscreen_toggle_elements = $(".container-outer,.single-mtheme_photostory .portfolio-nav-wrap,.vertical-left-bar,.vertical-right-bar,#slidecaption,#static_slidecaption,.tp-bullets,#copyright,.edit-entry,.stickymenu-zone,.social-toggle-wrap,.fullscreen-footer-wrap,.toggle-menu,.page-is-not-fullscreen .container-wrapper");
    var nav_switch_elements = $('.prevnext-nav,#controls-wrapper,.mouse-pointer-wrap,#slidecounter');
    var reverse_switch_elements = $('.page-media-background #slidecaption,.page-media-background #static_slidecaption,.page-media-background .prevnext-nav,.page-media-background #controls-wrapper,.page-media-background .mouse-pointer-wrap,.page-media-background #slidecounter');
    var slideshow_caption = $('#static_slidecaption,#slidecaption');
    //Sidebar toggle function
    $(".fullscreen-toggle-off").live('click', function() {

        if ( $('body').hasClass('page-is-not-fullscreen') && $('body').hasClass('page-media-background') ) {
            var slide_color = $('#slideshow-data .data-active-slide').data('color');
            if ( slide_color != undefined) {
                $('body').removeClass('fullscreen-slide-bright');
                $('body').removeClass('fullscreen-slide-dark');
                $('body').addClass('fullscreen-slide-'+ slide_color );
            }
        }

        $('.mtheme-fullscreen-toggle').removeClass('fullscreen-toggle-off').addClass('fullscreen-toggle-on');
        $('body').removeClass('fullscreen-mode-off').addClass('fullscreen-mode-on');
        if ($('body').hasClass('has-fullscreen-eventbox')) {
            $('body').removeClass('has-fullscreen-eventbox').addClass('fullscreen-eventbox-inactive').addClass('fullscreen-eventbox-switched');
        }
        $('.mtheme-fullscreen-toggle').find('i').removeClass('fa-expand').addClass('fa-compress');

        events_toggle_element.addClass('mtheme-events-offscreen');
        fullscreen_toggle_elements.fadeOut();
        nav_switch_elements.fadeOut();
        reverse_switch_elements.fadeIn();

        fotoramaResizer();

    });

    //Sidebar toggle function
    $(".fullscreen-toggle-on").live('click', function() {

        if ( $('body').hasClass('page-is-not-fullscreen') && $('body').hasClass('page-media-background') ) {
            $('body').removeClass('fullscreen-slide-bright');
            $('body').removeClass('fullscreen-slide-dark');
        }

        $('.mtheme-fullscreen-toggle').removeClass('fullscreen-toggle-on').addClass('fullscreen-toggle-off');
        $('body').removeClass('fullscreen-mode-on').addClass('fullscreen-mode-off');
        if ($('body').hasClass('fullscreen-eventbox-switched')) {
            $('body').addClass('has-fullscreen-eventbox').removeClass('fullscreen-eventbox-inactive').removeClass('fullscreen-eventbox-switched');
        }

        events_toggle_element.removeClass('mtheme-events-offscreen');
        fullscreen_toggle_elements.fadeIn();
        nav_switch_elements.fadeIn();
        reverse_switch_elements.fadeOut();

        $('.mtheme-fullscreen-toggle').find('i').addClass('fa-expand').removeClass('fa-compress');

        var $filterContainer = $('#gridblock-container');
        if ($.fn.isotope) {
            $filterContainer.isotope('layout');
        }
        fotoramaResizer();
    });

    // One page menu scrolls
    var thebody = $('html, body');
    var one_page_adjust = 75;
    if ($('body').hasClass('menu-is-vertical')) {
        var one_page_adjust = -1;
    }
    if ($(".responsive-menu-wrap:visible").length) {
        var one_page_adjust = 53;
    }

    $('.button-has-a-color').each(function() {
        var button_color = $(this).data('backgroundafter');
        var button_id = $(this).data('buttonid');
        $('.button-shortcode-'+button_id+' .mtheme-button:after').css('background-color',button_color);
        console.log(button_id,button_color);
    });

    $(".service-column.alignicon-top-horizontal").hover(
        function() {
            var iconcolor = $(this).find('.service-icon').attr('data-iconcolor');
            var bgcolor = $(this).find('.service-icon').attr('data-bgcolor');
            $(this).find('.service-icon').find('.fontawesome').css('color', bgcolor);
            $(this).find('.service-icon').find('.fontawesome').css('background-color', iconcolor);
        },
        function() {
            var iconcolor = $(this).find('.service-icon').attr('data-iconcolor');
            var bgcolor = $(this).find('.service-icon').attr('data-bgcolor');
            $(this).find('.service-icon').find('.fontawesome').css('background-color', bgcolor);
            $(this).find('.service-icon').find('.fontawesome').css('color', iconcolor);
        });

    // Hero image
    var document_height = $(window).height();
    var document_width = $(window).width();
    $(".fullheight-parallax").height(document_height);
    $(".heroimage-wrap").height(document_height);
    $(".page-has-full-background.page-media-top #home").css("margin-top", document_height);

    var header_height = $(".outer-wrap").outerHeight() * -1;
    if (header_height !== 0) {
        // no height
    }
    $(window).resize(function() {

        document_height = $(window).height();

        if ($(".outer-wrap").is(":visible")) {
        	// visible code
        } else {
            $("#heroimage").css({
                "marginTop": "0",
                "background-size": "cover"
            });
        }
        $(".fullheight-parallax").height(document_height);
        $(".heroimage-wrap").height(document_height);
        $(".page-has-full-background.page-media-top #home").css("margin-top", document_height);
    });

    var range = 200;
    // Slideshow Hero titles
    var slidetext = $(".hero-text-wrap ul li");
    var slideIndex = -1;

    function showNextHeroText() {
        slideIndex++;
        slidetext.eq(slideIndex % slidetext.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextHeroText);
    }
    if ($(".hero-text-wrap ul").hasClass("slideshow")) {
        showNextHeroText();
    }
    $('.hero-link-to-base').live("click", function() {
        //dashboard toggle
        var scrollelement = $(this).closest('.heroimage-wrap');
        var fromtop = scrollelement.offset().top;
        var scrolltobase = scrollelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.slideshow-scroll-indicate').live("click", function() {
        //dashboard toggle
        var scrollelement = $('#supersized,#backgroundvideo');
        var fromtop = scrollelement.offset().top;
        var scrolltobase = scrollelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.page-has-full-background .fullpage-link-to-base').live("click", function() {
        var scrolltobase = $(window).height();
        $('body,html').stop().animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.hero-demo-to-base').live("click", function() {
        //dashboard toggle
        var demoelement = $('.hero-linked-demo');
        var fromtop = demoelement.offset().top;
        var demoscrolltobase = demoelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: demoscrolltobase
        }, 800);
    });
    $('.hero-demo-to-base2').live("click", function() {
        //dashboard toggle
        var demoelement = $('.hero-linked-demo2');
        var fromtop = demoelement.offset().top;
        var demoscrolltobase = demoelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: demoscrolltobase
        }, 800);
    });
    // Hero image End

    if (isIOS || isAndroid) {
        $('.fullpage-block,.title-container-wrap').css('background-attachment', 'scroll');
    }
    $('.side-dashboard-toggle').live("click", function() {
        //dashboard toggle
        $('body').toggleClass('body-dashboard-push-right');
        $('.side-dashboard-wrap').toggleClass('dashboard-push-onscreen');
    });

    $(window).resize(function() {
        $('#mobile-toggle-menu').removeClass('mobile-toggle-menu-open');
        $('body').removeClass('body-dashboard-push-left');
        $(".responsive-mobile-menu").hide();
        $(".responsive-mobile-menu").removeClass('menu-push-onscreen');
        $("body").removeClass('menu-is-onscreen');
    });

    if (isIOS || isAndroid) {
        $('.fullpage-block').css('background-attachment', 'scroll');
    }

    $(".ntips").tooltip({
        position: {
            my: "center bottom+40",
            at: "center bottom"
        },
        show: {
            effect: "fade",
            delay: 5
        }
    });
    $(".stips").tooltip({
        position: {
            my: "center top",
            at: "center top"
        },
        show: {
            effect: "fade",
            delay: 5
        }
    });

    // Detect Search Toggle and ESC

    // Open
    $('.header-search').live("click", function() {
        $('body').toggleClass('msearch-is-on');
        $('#header-search-bar-wrap').fadeIn();
        $("#hs").focus();
    });

    if ($('body').hasClass('error404')) {
        $("#s").focus();
    }

    // Close
    $('.header-search-close,#header-search-bar-wrap').live("click", function() {
        if ($('body').hasClass('msearch-is-on')) {
            $('body').toggleClass('msearch-is-on');
            $('#header-search-bar-wrap').fadeOut();
        }
    });
    $('.header-search-bar').click(function(event) {
        event.stopPropagation();
    });

    // Watch for ESC Key
    $('body').keyup(function(e) {
        //alert(e.keyCode);
        if (e.keyCode == 27) {
            // Close my modal window
            if ($('body').hasClass('msearch-is-on')) {
                $('body').toggleClass('msearch-is-on');
                $('#header-search-bar-wrap').fadeOut();
            }
        }
    });

    // end block of search toggle

    $(".fitVids").fitVids();

    if ($.fn.superfish) {
        $('.homemenu ul.sf-menu').superfish({
            animation: {
                opacity: 'show'
            },
            animationOut: {
                opacity: 'hide'
            },
            speed: 'normal',
            speedOut: 'fast',
            disableHI: true,
            delay: 500,
            autoArrows: true,
            dropShadows: true,
            onInit: function() {
                $(".homemenu .sf-menu .mega-item .children-depth-0").css('display', 'none');
            },
            onHide: function() {},
            onShow: function() {},
            onBeforeShow: function() {},
            onBeforeHide: function() {}
        });
    }

    $('.support-user-options-trigger').live("click", function() {
        $('.support-user-options-wrap').removeClass('support-monitor-active');
    });

    //Portfolio Hover effects
    $(".gototop,.hrule.top a").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

    // Responsive dropdown list triggered on Mobile platforms
    $('#top-select-menu').bind('change', function() { // bind change event to select
        var url = $(this).val(); // get selected value
        if (url != '') { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
    $(".toggle-shortcode").click(function() {
        $(this).toggleClass("active").next().slideToggle("fast");
        return false;
    });

    // Faq toggle shortcode
    $(".faq-toggle-shortcode-wrap").click(function() {
        $(this).toggleClass("active").find('a.faq-toggle-link').next().slideToggle("fast");
        return false;
    });

    $(".fotorama").hover(
        function() {
            $('.fotorama__nav-wrap').fadeIn();
        },
        function() {
            $('.fotorama__nav-wrap').fadeOut();
        });

    $(".service-item").hover(
        function() {
            $(this).children('.icon-large').animate({
                top: -10
            }, 300);
        },
        function() {
            $(this).children('.icon-large').animate({
                top: 0
            }, 300);
        });

    $("#main-gridblock-carousel .preload").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".gridblock-image-holder").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".thumbnail-image").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".pictureframe").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $(".filter-image-holder").hover(
        function() {
            $(this).stop().fadeTo("fast", 0.6);
        },
        function() {
            $(this).stop().fadeTo("fast", 1);
        });

    $("#popularposts_list li:even,#recentposts_list li:even").addClass('even');
    $("#popularposts_list li:odd,#recentposts_list li:odd").addClass('odd');

    $(".service-column .service-item:even").addClass('service-order-even');
    $(".service-column .service-item:odd").addClass('service-order-odd');

    $(".close_notice").click(function() {
        $(this).parent('.noticebox').slideUp('fast');
    });

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#goto-top').fadeIn();
            } else {
                $('#goto-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#goto-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    $('.pricing-column ul').each(function(e) {
        $(this).find('li:even').addClass('even');
        $(this).find('li:odd').addClass('odd');
    });

    // WooCommerce Codes
    // Thumnail hover for secondary image

    var header_cart_toggle = $('.header-cart-toggle');
    var header_cart_off = $('.header-cart-close');

    header_cart_toggle.live("click", function() {
        $('.mtheme-header-cart').fadeToggle();
    });
    $('.header-cart-close').live("click", function() {
        $('.mtheme-header-cart').fadeOut();
    });
    $('.container-wrapper').click(function(event) {
        $('.mtheme-header-cart').fadeOut();
    });
    $('.mtheme-header-cart').mouseleave(function() {
        $(this).fadeOut();
    });

    var woocommerce_active = $('body.woocommerce');
    if (woocommerce_active.length) {
        $('ul.products li.mtheme-hover-thumbnail').hover(function() {
            var woo_secondary_thumnail = $(this).find('.mtheme-secondary-thumbnail-image').attr('src');
            if (woo_secondary_thumnail !== undefined) {
                $(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
                $(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
            }
        }, function() {
            var woo_secondary_thumnail = $(this).find('.mtheme-secondary-thumbnail-image').attr('src');
            if (woo_secondary_thumnail !== undefined) {
                $(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
                $(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
            }
        });


        var woocommerce_ordering = $(".woocommerce-page .woocommerce-ordering select");
        if ((woocommerce_ordering).length) {
            var woocommerce_ordering_curr = $(".woocommerce-ordering select option:selected").text();
            var woocommerce_ordering_to_ul = woocommerce_ordering
                .clone()
                .wrap("<div></div>")
                .parent().html()
                .replace(/select/g, "ul")
                .replace(/option/g, "li")
                .replace(/value/g, "data-value");

            $('.woocommerce-ordering')
                .prepend('<div class="mtheme-woo-order-selection-wrap"><div class="mtheme-woo-order-selected-wrap"><span class="mtheme-woo-order-selected">' + woocommerce_ordering_curr + '</span><i class="woo-sorter-dropdown feather-icon-layers"></i></div><div class="mtheme-woo-order-list">' + woocommerce_ordering_to_ul + '</div></div>');
        }

        $(function() {
            //$('.woocommerce-page .woocommerce-ordering select').hide();
            $('.mtheme-woo-order-selected-wrap').click(function() {
                $('.mtheme-woo-order-list ul').slideToggle('fast');
                $('.woo-sorter-dropdown').toggleClass('feather-icon-layers').toggleClass('feather-icon-cross');
            });
            $('.mtheme-woo-order-list ul li').click(function(e) {
                //Set value
                var selected_option = $(this).data('value');
                $(".woocommerce-page .woocommerce-ordering select").val(selected_option).trigger('change');

                $('.mtheme-woo-order-selected').text($(this).text());
                $('.mtheme-woo-order-list').slideUp('fast');
                $(this).addClass('current');
                e.preventDefault();
            })
        });
    }

});

//


(function ( $ ) {

    var preloader_logo = $('.logoimage-preloader');
    $("<img/>").load(function () {
        $('.logoimage-preloader').animate({
            opacity : 1,
            top: 0
        }, 1000, '' );
    }).attr("src", preloader_logo.attr("src"));

    $.fn.scrollpoint = function() {
        var newValue = 0;
        var fadeOutOnScroll = $('#supersized');
        var pageScroll = $(window).scrollTop();
        var pageHeight = $(window).height();

        var MinValue = 0;
        var MaxValue = 10;
        var MinWindow = 0;
        var header_shift = 0;

        newValue = ((pageScroll - MinWindow) * (MaxValue - MinValue) / (MinWindow - pageHeight) + MinValue);
        return newValue;
    };
 
}( jQuery ));


jQuery(document).ready(function($) {
    $(document).on('mouseenter', ".positionaware-button", function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    }).on('mouseleave', ".positionaware-button", function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    });

});
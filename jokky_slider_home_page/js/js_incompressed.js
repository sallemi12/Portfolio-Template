$(document).ready(function() {
    //typed .js
    $("#typed").typed({
        strings: ["a web developer.", "a web designer.",
            "a web lover.", "JOKKY BRAIN."
        ],
        typeSpeed: 50,
        callback: function() {
            lift();
        }
    });

    function lift() {
            $(".head-text").addClass("lift-text");
        }
        /* bar scrolling */
    $("html").niceScroll({
        cursorcolor: "#43a1b0",
        scrollspeed: "100",
        cursorborder: " 0.01em solid #43a1b0",
        horizrailenabled: "false",
        cursorborderradius: "0px",
    });
    //bar header responsive
    $('.fancybox').fancybox();
    $('.menu_button').click(function() {
        $('header').toggleClass('header_open');
        $('.responsive_header_bar').toggleClass(
            'responsive_header_bar_slide');
    });
    $('.nav-bar  li').click(function() {
        $('header').removeClass('header_open');
        $('.responsive_header_bar >div').removeClass('open');
        $('.responsive_header_bar').removeClass(
            'responsive_header_bar_slide');
    });
    $('.title_responsive_header').click(function() {
        if ($('header').hasClass('header_open') || $(
            '.responsive_header_bar').hasClass(
            'responsive_header_bar_slide') || $(
            '.responsive_header_bar >div').hasClass('open')) {
            $('header').removeClass('header_open');
            $('.responsive_header_bar').removeClass(
                'responsive_header_bar_slide');
            $('.responsive_header_bar >div').removeClass('open');
        }
    });
    $('.main_content').click(function() {
        if ($('header').hasClass('header_open') || $(
            '.responsive_header_bar').hasClass(
            'responsive_header_bar_slide') || $(
            '.responsive_header_bar >div').hasClass('open')) {
            $('header').removeClass('header_open');
            $('.responsive_header_bar').removeClass(
                'responsive_header_bar_slide');
            $('.responsive_header_bar >div').removeClass('open');
        }
    });
    /* wow js*/
    new WOW().init();
    /*counter js*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //Initialize filterizr with default options
    $('.filtr-container').filterizr();
    /*super placeholder script*/
    superplaceholder({
            el: input1,
            sentences: ['Any format works', 'http://yahoo.com',
                'www.facebook.com', 'sallemianas.com'
            ],
            options: {
                letterDelay: 80,
                loop: true,
                startOnFocus: false
            }
        })
        //mobile menu toggling
    $('.menu_button').click(function() {
        $('.menu-open-close').toggleClass('open');
    });
    /*map js*/
    $('.bounce').click(function() {
        $('.overlay_map').css({
            "height": "50px",
            "margin-top": "-50px"
        });
        $('.bounce').hide();
        $('.point').hide();
        $('.overlay_map>p').hide();
        $('.bounce2').show();
    });
    $('.bounce2').click(function() {
        $('.overlay_map').css({
            "height": "350px",
            "margin-top": "-350px"
        });
        $('.bounce').show();
        $('.point').show();
        $('.overlay_map>p').show();
        $('.bounce2').hide();
    });
    /*work with us div effect*/
    $('.simplefilter>li').click(function() {
        $('.discover').slideUp();
    });
    $('.simplefilter>li:first-child').click(function() {
        $('.discover').slideDown();
    });
     //progress bar
         (function(){
            barScroll();
          })();
          function barScroll(){
                 setTimeout(function(){

                $('.progress-bar').each(function() {
                    var me = $(this);
                    var pe =  $(this).children('.precent-value');
                    var perc = me.attr("aria-valuenow");

                    var current_perc = 0;

                    var progress = setInterval(function() {
                        if (current_perc>=perc) {
                            clearInterval(progress);
                        } else {
                            current_perc +=1;
                            me.css('width', (current_perc)+'%');
                        }

                        pe.text((current_perc)+'%');

                    },90);
                });
            }, 100);}

});
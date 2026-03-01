$(function() {

    //notice tab
    $(document).on'click', 'div[class*="notice"] .titTab li > a', function(e) {
        var contents = $(this.hash);

        $(this).addClass'current'.parent'li'.siblings().find'a'.removeClass'current';
        $(contents).addClass'on'.siblings().removeClass'on';
        e.preventDefault();
    });

    //main visual
    var visualPrev = '.visual .prev';
    var visualNext = '.visual .next';
    var visualStop = '.visual .stop';
    var visualPlay = '.visual .play';
    $"#visualSlide".slick({
        slider: '.item',
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        autoplay: true,
        prevArrow: visualPrev,
        nextArrow: visualNext
    });
    $'.visual .control a'.click(function(e) {
        slickControl($(this), '#visualSlide', visualStop, visualPlay);
        e.preventDefault();
    });

    // main visual resize
    var delta = 100;
    var timer = null;
    $(window).on'resize', function() {
        clearTimeout(timer);
        timer = setTimeout(resizeDone, delta);
    });

    function resizeDone() {
        $"#visualSlide".slick'setPosition';
    }

    //popupZone visual
    var popupPrev = '.popupZone .prev';
    var popupNext = '.popupZone .next';
    var popupStop = '.popupZone .stop';
    var popupPlay = '.popupZone .play';
    $"#popupSlide".on'init', function(event, slick) {
        $'.popupZone .page strong'.text(slick.currentSlide + 1);
        $'.popupZone .page span'.text(slick.slideCount);
    }).slick({
        slider: '.item',
        infinite: true,
        autoplaySpeed: 4000,
        speed: 500,
        autoplay: true,
        prevArrow: popupPrev,
        nextArrow: popupNext
    }).on'beforeChange', function(event, slick, currentSlide, nextSlide) {
        $'.popupZone .page strong'.text(nextSlide + 1);
    });
    $'.popupZone .control a'.click(function(e) {
        slickControl($(this), '#popupSlide', popupStop, popupPlay);
        e.preventDefault();
    });

    //?앹뾽 由ъ뒪?몃낫湲?
    $"#Pop_ListOpen".click(function(e) {
        e.preventDefault();
        $".pop_layer_box".css"display", "block";
    });
    $"#Pop_ListClose".click(function(e) {
        e.preventDefault();
        $".pop_layer_box".css"display", "none";
    });

    //banner
    var bnPrev = '.banner_zone .prev';
    var bnNext = '.banner_zone .next';
    var bnStop = '.banner_zone .stop';
    var bnPlay = '.banner_zone .play';
    $"#bnSlider".slick({
        slider: '.item',
        infinite: true,
        autoplay: true,
        prevArrow: bnPrev,
        nextArrow: bnNext,
        slidesToShow: 5,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $'.banner_zone .btn a'.click(function(e) {
        slickControl($(this), '#bnSlider', bnStop, bnPlay);
        e.preventDefault();
    });

});

// slider Control
function slickControl($this, slick, stop, play) {
    var $slick = $(slick); //slider wrap
    var $stop = $(stop); //Stop Button
    var $play = $(play); //Play Button
    var display = $this.css"display"; // button's display

    if ($this.is(stop)) {
        $stop.css'display', 'none';
        $play.delay(100).css'display', display);
        $slick.slick'slickPause';
    }
    if ($this.is(play)) {
        $play.css'display', 'none';
        $stop.delay(100).css'display', display);
        $slick.slick'slickPlay';
    }
}
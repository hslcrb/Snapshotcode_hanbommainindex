$(function() {
    //tab
    if ($'div[class^="tab_st"]'.length > 0) {
        reactTab();
    }

    //FAQ
    if ($'.bbs_FaqA'.length > 0) {
        bbs_Faq();
    }


});

var check = false;

$(window).resize(function() {
    this.resizeTO = setTimeout(function() {
        $(this).trigger'resizeEnd';
    }, 150);
}).resize();

$(window).on'resizeEnd', function() {
    $w_w = $(window).innerWidth();
    resetImgZoom();
});

/** ?´ë?ì§€ ?•ë?ë³´ê¸° **/
function resetImgZoom() {
    var win_w = $(window).innerWidth();
    var zwObj = $'.rsp_img';

    if (win_w <= 768) {
        zwObj.each(function() {
            var this_s = $(this);
            var zwObjImg = this_s.children"img";
            var zwObjUrl = zwObjImg.attr"src";

            if (check == false) {
                this_s.append"<a href='" + zwObjUrl + "' class='btn-zoom' target='_blank' title='?ˆì°½?´ë¦¼'><span class='blind'>?´ë?ì§€ ?•ë?ë³´ê¸°</span></a>";
                zwObjImg.addClass"zoom";
            }
        });
        check = true;
    } else {
        zwObj.each(function() {
            var this_s = $(this);
            var zwObjImg = this_s.children"img";
            if (check == true) {
                $".btn-zoom, .btn-down", $(this).parent()).remove();
                zwObjImg.removeClass"zoom";
            }
        });
        check = false;
    }
}

// tab
function reactTab() {
    var $tab = $'div[class^="tab_st"]:not".notJS"';

    $(window).resize(function() {
        this.resizeTO = setTimeout(function() {
            $(this).trigger'resizeEnd';
        }, 100);
    }).resize();

    $(window).on'resizeEnd', function() {
        $tab.each(function() {
            if ($(window).width() < 1241) {
                $(this).addClass'reactTab';
            } else {
                $(this).removeClass'reactTab'.find'> ul'.removeAttr'style';
            }
        });
    });


    $tab.each(function(idx) {
        var $link = $(this).find' > ul > li.on > a';
        var $linkCopy = $link.addClass'select'.clone();

        $link.attr'title', $link.text() + ' ? íƒ???˜ì´ì§€';
        $(this).find'> ul'.before($linkCopy);
    });

    $(document).on'click', '.reactTab > a.select', function(e) {

        var $tabBox = $(this).next'ul';
        $tabBox.slideToggle();

        return false;
    });
}

/* ?•ë³´ê³µê°œ?œë„?ˆë‚´ ??/
$(function() {
    $".info_li li:first".addClass"active";
    $".info_data > div:first".show();
    $".info_li li a".click(function() {
        var thisIdx = $(this).parent"li".index();
        $(this).parent"li".addClass"active";
        $".info_li li".not($(this).parent"li").removeClass"active";
        $".info_data > div".hide();
        $".info_data > div:eq" + thisIdx + "".show();
    });


    // ë°°ë„ˆëª¨ìŒ
    var $banner = $"#banner";
    var bannerPrev = '.foot-banner .header-box .prev';
    var bannerNext = '.foot-banner .header-box .next';
    var bannerStop = '.foot-banner .header-box .stop';
    var bannerPlay = '.foot-banner .header-box .play';

    $banner.slick({
        slider: '.item',
        infinite: true,
        autoplay: true,
        prevArrow: bannerPrev,
        nextArrow: bannerNext,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $'.foot-banner .header-box .control a'.click(function(e) {
        slickControl($(this), '#banner', bannerStop, bannerPlay);
        e.preventDefault();
    });
});

//FAQ : A?€??
function bbs_Faq() {
    $'.bbs_FaqA .faq > a'.off'click';
    $'.bbs_FaqA .faq > a'.on'click', function(e) {
        var title = $(this).parent'.faq';
        if (title.hasClass'on') {
            title.removeClass"on".find'.faq_A'.stop().slideUp();
        } else {
            $".bbs_FaqA .faq".not(title).removeClass"on";
            $".bbs_FaqA .faq .faq_A".stop().slideUp();
            title.addClass"on".find'.faq_A'.stop().slideDown();
        }

        e.preventDefault();
    });
}


function slickControl($this, slick, stop, play) {
    var $slick = $(slick);
    var $stop = $(stop);
    var $play = $(play);
    var display = $this.css"display";

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
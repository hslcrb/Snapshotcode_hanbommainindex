$(function() {
    gnb();
    snb();
    mNav();

    //js로딩 후
    setTimeout(function() {
        $('html').addClass('shOn');
    }, 100);

    if ($('#quickMenu').length > 0) {
        quickMenu();
    }

    //moblie search
    $("#mSearchOpen").click(function(e) {
        if ($("#header .totalSearch").hasClass('active') == true) {
            $("#header .totalSearch").removeClass('active');
            $(this).prop('title', '모바일검색 열기').find('i').prop('class', 'xi-search');
        } else {
            $("#header .totalSearch").addClass('active');
            $(this).prop('title', '모바일검색 닫기').find('i').prop('class', 'xi-close');
        }
        e.preventDefault();
    });

    // HASH 버튼
    var hashtarget = '';
    $('.hash').on('click', function(e) {
        $(this.hash).fadeIn(200).find('a').first().focus();
        hashtarget = $(this);
        e.preventDefault();
    });
    $('.hashClose').on('click focusout', function(e) {
        $(this.hash).fadeOut(200);
        hashtarget.focus();
        hashtarget = '';
        e.preventDefault();
    });

    // HASH TOGGLE 버튼
    $('.hashToggle').on('click', function(e) {
        ($(this).hasClass('active') == true) ? $(this).removeClass('active'): $(this).addClass('active');
        $(this.hash).slideToggle(200);
        e.preventDefault();
    });
});

// web navigation
function gnb() {
    var $nav = $('#nav');
    $gnb = $('#gnb');
    $depth01 = $gnb.find('.depth01');
    $depth02 = $gnb.find('.depth02');
    $depth03 = $gnb.find('.depth03');
    $depth01.li = $depth01.find('> ul > li');
    $depth02.li = $depth02.find('> ul > li');
    $depth03.li = $depth03.find('> ul > li');
    defaultHeight = $depth01.li.innerHeight();

    //setting
    $gnb.find('li').each(function() {
        ($(this).find('> div > ul').length > 0) ? $(this).addClass('dep').find('> a').prop('title', '메뉴닫힘'): '';
    });
    $gnb.find('li').last().find('> a').addClass('lastGnb');

    //show 240305
    $(document).on('click', '#gnb li.dep > a', function(e) {
        var $this_li = $(this).parent('li');
        if ($this_li.hasClass('active')) {
            $this_li.removeClass('active').find(' > a').prop('title', '메뉴닫힘');
        } else {
            $this_li.addClass('active').find('> a').prop('title', '메뉴열림');
            $this_li.siblings().removeClass('active');
        }
        e.preventDefault();
    });
    $depth01.find('> ul > li > a').on('focus mouseover', function() {
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    // 240329 메인메뉴 웹접근성 수정
    $depth01.find('> ul > li > a').on('focus mouseover', function(e) {
        var $this_li = $(this).parent('li');
        if ($this_li.hasClass('on')) {
            $this_li.find(' > a').prop('title', '메뉴열림');
            $this_li.siblings().find(' > a').prop('title', '메뉴닫힘');
        }
        e.preventDefault();
    });

    $depth01.li.find('> a').on('focus mouseover', function() {
        $gnb.addClass('active');
        $('#gnbblind').fadeIn(100);
    });

    //fullDown show
    $(document).on('click', '#nav.fullDown .depth02 li.dep > a', function(e) {
        $(this).parents('.depth02').parent('li').addClass('on').siblings().removeClass('on');
    });

    //hide
    $gnb.on('mouseleave', function() {
        gnbHide();
    });

    $(document).on('focusout', '#gnb .lastGnb', function() {
        gnbHide();
    });

    function gnbHide() {
        $gnb.removeClass('active').find('li').removeClass('on');
        if ($nav.hasClass('oneDown') == true) {
            $depth02.li.removeClass('active');
            $depth02.find('> ul > li.dep > a').prop("title", "메뉴닫힘");
        }
        $('#gnbblind').fadeOut(100);
    }
}

//moblie navigation
function mNav() {
    // setting
    var gnb = $('#gnb > .depth01').clone();
    var headerUtil = $('#header .util_wrap ul').clone();

    $('#mNav .snb').append(headerUtil);

    $('#mgnb').append(gnb).find('li').removeAttr('style').find('.titBox').remove();

    // open & close
    $("#mNavOpen").click(function(e) {
        $("#mNav").addClass('active');
        $('body').addClass('bodyFix');
        e.preventDefault();
    });

    $("#mNavClose").click(function(e) {
        $("#mNav").removeClass('active');
        $('body').removeClass('bodyFix');
        e.preventDefault();
    });

    //show
    $(document).on('click', '#mNav li.dep > a', function(e) {
        $(this).parent('li').toggleClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
}

/* 2020.05.12 SY,CHo 클래스 적용으로 수정 */
$(function() {
    function check() {
        $("#menuOpen").click(function(e) {
            e.preventDefault();
            $("#mNavi").addClass("active");
            $('html, body').scrollTop(0);
        });

        $("#mtitle a").click(function(e) {
            e.preventDefault();
            $("#mNavi").removeClass("active");
        });

        //하위 메뉴 없을 경우
        $("#mNavi #mgnb ul li ul").parent("li").addClass('row');
        $("#mNavi #mgnb ul li.row > a").attr("href", "#none");

        // 하위 메뉴 있는 경우 클릭시
        $("#mNavi #mgnb ul li.row > a").click(function() {
            $(this).parent().siblings().children('ul').slideUp(300);
            $(this).siblings("ul").slideToggle(300);
            return false;
        });

        // 검색
        $("#searchOpen").click(function(e) {
            e.preventDefault();
            $("#mSearch").addClass("active");
        });
        $(".btnSearchClose").click(function(e) {
            e.preventDefault();
            $("#mSearch").removeClass("active");
        });
    }

    $(window).resize(function() {
        var winWidth = $(window).width();
        if (winWidth > 1024) {
            $("#mNavi").removeClass("active");
        }
    });

    check();

    // 맨위로 가기
    $('.btn_top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }
    });
    $('.btn_top').click(function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
    });
});


//서브메뉴  
function snb() {
    var $snb = $('#snb');

    $snb.find('.snb_wrap .active:last').parent().addClass('mobSnb');
    $snb.find('.snb_wrap .active:last').parents().addClass("active");
    $snb.find('li').each(function() {
        if ($(this).hasClass('active') == true) {
            var ul = $(this).parent();
            var active = $(this).clone().removeAttr('id');
            var lnbName = $(this).find('>a').clone().text();
            $(this).after(active).next().removeClass('active').find('ul').remove();
            $(this).find('>a').prop('title', lnbName + ' 메뉴 확장'); //접근성 : active 메뉴 타이틀 추가

            var activeCut = $(this).detach();
            var activeCut__test = $(this).clone();
            ul.prepend(activeCut);

        }
    });

    $snb.find('.snb_wrap li.active > a').on('click', function(e) {
        var $ul = $(this).parent().parent();
        if ($ul.hasClass('open') == true) {
            $ul.removeClass('open').find('> li > a').removeAttr('tabindex');
            $(this).prop('title', ' 메뉴 닫힘'); //접근성 : active 메뉴 타이틀 추가

        } else {
            $('#snb').find('ul.open').removeClass('open');
            $ul.addClass('open').find('> li > a').prop('tabindex', '1');
            $(this).prop('title', ' 메뉴 열림'); //접근성 : active 메뉴 타이틀 추가

        }
        depthCheck = true;
        e.preventDefault();
    });



    //접근성 : tabindex
    $(document).on('focusout', '.snb_wrap ul > li:last-child > a', function() {
        $('.snb_wrap').find('li > a').removeAttr('tabindex');
        if ($(this).parents('ul').hasClass('open') == false) {
            $(this).parent().parent().find('li.active > a').prop('title', '메뉴 닫힘');
        }
        if ($(this).parents('ul').hasClass('dep01') == true) {
            $('.snb_wrap .dep01').removeClass('open');
            $('.snb_wrap .dep02 > li:first-child > a').focus();
        }
        if ($(this).parents('ul').hasClass('dep02') == true) {
            $('.snb_wrap .dep02').removeClass('open');
            $('.snb_wrap .dep03 > li:first-child > a').focus();
        }
        if ($(this).parents('ul').hasClass('dep03') == true) {
            $('.snb_wrap .dep03').removeClass('open');
        }
    });

    //접근성
    $(document).on('keydown', '.snb_wrap ul.open > li.active > a', function(e) {
        if (e.shiftKey && e.keyCode == 9) {
            $(this).removeAttr('tabindex');
            $(this).parents('ul').removeClass('open');
        }
    });

    // 메뉴영역 외부 클릭 시, 메뉴닫기
    $(document).on('click', function(e) {
        if (!$(e.target).parents().is('#snb')) {
            $('#snb ul').removeClass('open');
            $(".dep01  li.active > a").prop('title', '메뉴 닫힘');
        };
    });

    // resize 대응
    var delta = 100;
    var timer = null;
    $(window).on('resize', function() {
        clearTimeout(timer);
        if ($(window).width() > 1024 || $(window).width() < 1024) {
            timer = setTimeout(resizeDone, delta);
        }
    });

    function resizeDone() {
        $('#snb').find('ul').removeClass('open');
    }

}

//sns
$(function() {
    $('.snsBox button.btnShare .hid').text('공유(상태 : 축소)');
    $('.snsBox button.btnShare').click(function() {
        if ($(this).hasClass('active') == true) {
            $('.sns_more').slideUp(300);
            $(this).find('.hid').text('공유(상태 : 축소)');
            $(this).removeClass('active');
        } else {
            $('.sns_more').slideDown(300);
            $(this).find('.hid').text('공유(상태 : 확장)');
            $(this).addClass('active');
        }
    });
    $(".sns_more button:last-of-type").focusout(function() {
        $(".sns_more").slideUp(300);
        $('.snsBox button.btnShare .hid').text('공유(상태 : 축소)');
    });

});

//퀵메뉴
function quickMenu() {
    $(document).on('click', '#quickMenuBtn', function(e) {
        $('#quickMenu').toggleClass('active');
        if ($('#quickMenu').hasClass('active')) {
            $('#quickMenuBtn span').text('퀵메뉴영역 닫기');
        } else {
            $('#quickMenuBtn span').text('퀵메뉴영역 열기');
        }
        return false;
    });

    $(document).on('focusout', '#quickMenu li:last-of-type > a', function(e) {
        $('#quickMenu').removeClass('active');
        $('#quickMenuBtn span').text('퀵메뉴영역 열기');
    });
}
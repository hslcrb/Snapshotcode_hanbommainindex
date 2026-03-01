$(function() {
    // 웹취약점 (Content-Security-Policy)
    //$("title").before(`<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' 'unsafe-eval' `+location.origin+` https://*.kakao.com https://*.kakaocdn.net https://*.daumcdn.net https://translate.google.com https://*.googleapis.com https://cdnjs.cloudflare.com https://www.youtube.com; style-src 'self' 'unsafe-inline' https:">`);

    //서브페이지 오픈팝업 제거
    if ($("#sub_container").length > 0) {
        $(".openPop").removeClass();
    }

    // 팝업 자세히보기 이벤트
    $('#upPopSlide > li div > .viewPopupBtn').on('click', function() {
        var popupSn = $(this).attr("data-seq");
        var popupTitle = $(this).attr("title");
        var popupWidth = $("#popupData" + popupSn).attr("data-width");
        var popupHeight = $("#popupData" + popupSn).attr("data-height");
        var popupWidthLc = $("#popupData" + popupSn).attr("data-widthLc");
        var popupHeightLc = $("#popupData" + popupSn).attr("data-heightLc");
        var popupFileId = $("#popupData" + popupSn).attr("data-fileId");
        var popupFileList = $("#popupData" + popupSn).attr("data-fileList");

        var fileHeight = "";
        if (popupFileId != "" && popupFileList != "") {
            fileHeight = popupFileList.split("},").length;
            popupHeight = parseInt(popupHeight) + parseInt(fileHeight) * 20;
            popupWidth = parseInt(popupWidth) + parseInt(fileHeight) * 5;
        }

        $("#popupNormal" + popupSn).dialog({
            autoOpen: true,
            modal: false,
            resizeable: false,
            title: popupTitle,
            width: popupWidth,
            height: popupHeight,
            show: {
                effect: "blind",
                duration: 100
            },
            hide: {
                effect: "blind",
                duration: 100
            },
            position: {
                my: 'left+' + popupWidthLc + ' top+' + popupHeightLc + '',
                at: 'left top'
            }
        }).dialog('open');
    });
    // end of 팝업 자세히보기 이벤트

    // 통합검색 엔터 버튼 누를때
    $("#total_search").keypress(function(e) {
        if (e.which == 13) {
            goSearchForm();
            return false;
        }
    });
    // 모바일 통합검색 엔터 버튼 누를때
    $("#mTotal_search").keypress(function(e) {
        if (e.which == 13) {
            goMSearchForm();
            return false;
        }
    });

    $(".orgNzt a").on('click', function(e) {
        var href = $(this).attr("href");
        $(".orgNztWrap > div").hide();
        $(href).show();
        e.preventDefault();
    });

    $(".orgNztScrll a").on('click', function(e) {
        var href = $(this).attr("href");
        $(".orgNztWrapScrll > div").hide();
        $(href).show();
    });


    //콘텐츠 페이지 상단의 탭 클릭시에, 별도의 콘텐츠가아닌, 해당 데이터의 위치만 이동하고자할경우 사용하기위함
    $(".contentTap").on('click', function(e) {
        $(this).parent('li').addClass('on').siblings().removeClass('on');
    });


    { /* (tab클릭에 따른 content display 이벤트) */
        const navList = document.querySelectorAll('.nav_list li a'); // [ul.nav_list]
        const itemList = document.querySelectorAll('.item_list li[id^="tab"]'); // [ul.item_list]

        navList.forEach(function(tab, index) {
            if (index === 0) tab.parentNode.className = 'on';
            const tabId = tab.className;
            tab.href = '#' + tabId;

            tab.addEventListener('click', function() {
                navList.forEach(function(item) {
                    item.parentNode.className = ''
                });
                tab.parentNode.className = 'on';

                const displayId = tab.className;
                itemList.forEach(function(content) {
                    content.id === displayId ? content.style.display = '' : content.style.display = 'none';
                });
            });
        });

        itemList.forEach(function(content, index) {
            index === 0 ? content.style.display = '' : content.style.display = 'none';
        });
    }
});

// 배너 리스트 이벤트 (배너 리스트 페이지 이동)
function bannerListAct(sysId) {
    location.href = "/" + sysId + "/ba/banner/selectBannerColl.do";
}

// 통합검색
function goSearchForm() {
    if ($("#total_search").valueEmpty()) {
        alert("검색어를 입력해주세요.");
        $("#total_search").focus();
        return false;
    } else {
        $("#searchForm").attr("action", $(location).attr("protocol") + "//" + $(location).attr('host') + "/search/front/Search.jsp").submit();
    }
}
// 모바일 통합검색
function goMSearchForm() {
    if ($("#mTotal_search").valueEmpty()) {
        alert("검색어를 입력해주세요.");
        $("#mTotal_search").focus();
        return false;
    } else {
        $("#searchForm").attr("action", "https://" + $(location).attr('host') + "/search/front/Search.jsp").submit();
    }
}
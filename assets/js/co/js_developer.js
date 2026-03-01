$(function() {
    // ?¹ì·¨?½ì  (Content-Security-Policy)
    //$"title".before(`<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' 'unsafe-eval' `+location.origin+` https://*.kakao.com https://*.kakaocdn.net https://*.daumcdn.net https://translate.google.com https://*.googleapis.com https://cdnjs.cloudflare.com https://www.youtube.com; style-src 'self' 'unsafe-inline' https:">`);

    //?œë¸Œ?˜ì´ì§€ ?¤í”ˆ?ì—… ?œê±°
    if ($"#sub_container".length > 0) {
        $".openPop".removeClass();
    }

    // ?ì—… ?ì„¸?ˆë³´ê¸??´ë²¤??
    $'#upPopSlide > li div > .viewPopupBtn'.on'click', function() {
        var popupSn = $(this).attr"data-seq";
        var popupTitle = $(this).attr"title";
        var popupWidth = $"#popupData" + popupSn).attr"data-width";
        var popupHeight = $"#popupData" + popupSn).attr"data-height";
        var popupWidthLc = $"#popupData" + popupSn).attr"data-widthLc";
        var popupHeightLc = $"#popupData" + popupSn).attr"data-heightLc";
        var popupFileId = $"#popupData" + popupSn).attr"data-fileId";
        var popupFileList = $"#popupData" + popupSn).attr"data-fileList";

        var fileHeight = "";
        if (popupFileId != "" && popupFileList != "" {
            fileHeight = popupFileList.split"},".length;
            popupHeight = parseInt(popupHeight) + parseInt(fileHeight) * 20;
            popupWidth = parseInt(popupWidth) + parseInt(fileHeight) * 5;
        }

        $"#popupNormal" + popupSn).dialog({
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
        }).dialog'open';
    });
    // end of ?ì—… ?ì„¸?ˆë³´ê¸??´ë²¤??

    // ?µí•©ê²€???”í„° ë²„íŠ¼ ?„ë???
    $"#total_search".keypress(function(e) {
        if (e.which == 13) {
            goSearchForm();
            return false;
        }
    });
    // ëª¨ë°”???µí•©ê²€???”í„° ë²„íŠ¼ ?„ë???
    $"#mTotal_search".keypress(function(e) {
        if (e.which == 13) {
            goMSearchForm();
            return false;
        }
    });

    $".orgNzt a".on'click', function(e) {
        var href = $(this).attr"href";
        $".orgNztWrap > div".hide();
        $(href).show();
        e.preventDefault();
    });

    $".orgNztScrll a".on'click', function(e) {
        var href = $(this).attr"href";
        $".orgNztWrapScrll > div".hide();
        $(href).show();
    });


    //ì½˜í…ì¸??˜ì´ì§€ ?ë‹¨?????´ë¦­?œì—, ë³„ë„??ì½˜í…ì¸ ê??„ë‹Œ, ?´ë‹¹ ?°ì´?°ì˜ ?„ì¹˜ë§??´ë™?˜ê³ ?í• ê²½ìš° ?¬ìš©?˜ê¸°?„í•¨
    $".contentTap".on'click', function(e) {
        $(this).parent'li'.addClass'on'.siblings().removeClass'on';
    });


    { /* (tab?´ë¦­???°ë¥¸ content display ?´ë²¤?? */
        const navList = document.querySelectorAll'.nav_list li a'; // [ul.nav_list]
        const itemList = document.querySelectorAll'.item_list li[id^="tab"]'; // [ul.item_list]

        navList.forEach(function(tab, index) {
            if (index === 0) tab.parentNode.className = 'on';
            const tabId = tab.className;
            tab.href = '#' + tabId;

            tab.addEventListener'click', function() {
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

// ë°°ë„ˆ ë¦¬ìŠ¤???´ë²¤??(ë°°ë„ˆ ë¦¬ìŠ¤???˜ì´ì§€ ?´ë™)
function bannerListAct(sysId) {
    location.href = "/" + sysId + "/ba/banner/selectBannerColl.html";
}

// ?µí•©ê²€??
function goSearchForm() {
    if ($"#total_search".valueEmpty()) {
        alert"ê²€?‰ì–´ë¥??…ë ¥?´ì£¼?¸ìš”.";
        $"#total_search".focus();
        return false;
    } else {
        $"#searchForm".attr"action", $(location).attr"protocol" + "//" + $(location).attr'host' + "/search/front/Search.jsp".submit();
    }
}
// ëª¨ë°”???µí•©ê²€??
function goMSearchForm() {
    if ($"#mTotal_search".valueEmpty()) {
        alert"ê²€?‰ì–´ë¥??…ë ¥?´ì£¼?¸ìš”.";
        $"#mTotal_search".focus();
        return false;
    } else {
        $"#searchForm".attr"action", "https://" + $(location).attr'host' + "/search/front/Search.jsp".submit();
    }
}
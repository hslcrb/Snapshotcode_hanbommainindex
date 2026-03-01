$(function() {
    // ?뱀랬?쎌젏 (Content-Security-Policy)
    //$"title".before(`<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' 'unsafe-eval' `+location.origin+` https://*.kakao.com https://*.kakaocdn.net https://*.daumcdn.net https://translate.google.com https://*.googleapis.com https://cdnjs.cloudflare.com https://www.youtube.com; style-src 'self' 'unsafe-inline' https:">`);

    //?쒕툕?섏씠吏 ?ㅽ뵂?앹뾽 ?쒓굅
    if ($"#sub_container".length > 0) {
        $".openPop".removeClass();
    }

    // ?앹뾽 ?먯꽭?덈낫湲??대깽??
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
    // end of ?앹뾽 ?먯꽭?덈낫湲??대깽??

    // ?듯빀寃???뷀꽣 踰꾪듉 ?꾨???
    $"#total_search".keypress(function(e) {
        if (e.which == 13) {
            goSearchForm();
            return false;
        }
    });
    // 紐⑤컮???듯빀寃???뷀꽣 踰꾪듉 ?꾨???
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


    //肄섑뀗痢??섏씠吏 ?곷떒?????대┃?쒖뿉, 蹂꾨룄??肄섑뀗痢좉??꾨땶, ?대떦 ?곗씠?곗쓽 ?꾩튂留??대룞?섍퀬?먰븷寃쎌슦 ?ъ슜?섍린?꾪븿
    $".contentTap".on'click', function(e) {
        $(this).parent'li'.addClass'on'.siblings().removeClass'on';
    });


    { /* (tab?대┃???곕Ⅸ content display ?대깽?? */
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

// 諛곕꼫 由ъ뒪???대깽??(諛곕꼫 由ъ뒪???섏씠吏 ?대룞)
function bannerListAct(sysId) {
    location.href = "/" + sysId + "/ba/banner/selectBannerColl.html";
}

// ?듯빀寃??
function goSearchForm() {
    if ($"#total_search".valueEmpty()) {
        alert"寃?됱뼱瑜??낅젰?댁＜?몄슂.";
        $"#total_search".focus();
        return false;
    } else {
        $"#searchForm".attr"action", $(location).attr"protocol" + "//" + $(location).attr'host' + "/search/front/Search.jsp".submit();
    }
}
// 紐⑤컮???듯빀寃??
function goMSearchForm() {
    if ($"#mTotal_search".valueEmpty()) {
        alert"寃?됱뼱瑜??낅젰?댁＜?몄슂.";
        $"#mTotal_search".focus();
        return false;
    } else {
        $"#searchForm".attr"action", "https://" + $(location).attr'host' + "/search/front/Search.jsp".submit();
    }
}
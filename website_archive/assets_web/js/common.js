$(document).ready(function() {
    // ë©”ë‰´ ?†ì„ ê²½ìš° ë§?ë§ˆì?ë§‰ì— ?¤í–‰?´ì•¼??
    if ($"#subContent".length > 0) {
        if (typeof $"#tabBaseMi".val() == "undefined" || $"#tabBaseMi".val() == "" || $"#tabBaseMi".val() == null) {
            //?™êµ
            if ($".subCntBody".length > 0) {
                $".dep01".empty();
                $".dep01".addClass"active";

                var appendli = "<li class='active'><a href='#' title='ë©”ë‰´ ?«í˜'>" + $"#pageTitle".text() + "</a></li>";
                $".snb_wrap .dep01".append(appendli);

                var cntntsNm = $"#cntntsNm".val();

                if (typeof cntntsNm == "undefined" || cntntsNm == "" || cntntsNm == null) {
                    var appendTit = $"#pageTitle".text() + " | " + $"meta[property='og:title']".attr'content';
                    $(document).find"title".text(appendTit);
                    $"meta[property='og:description']".attr'content', appendTit);
                    $"meta[name='description']".attr'content', appendTit);
                } else {
                    var cntntsNmTit = cntntsNm + " | " + $"meta[property='og:title']".attr'content';
                    $(document).find"title".text(cntntsNmTit);
                    $"meta[property='og:description']".attr'content', cntntsNmTit);
                    $"meta[name='description']".attr'content', cntntsNmTit);
                    $"#pageTitle".text(cntntsNm);
                    $".snb_wrap > ul > li > a".text(cntntsNm);
                }
            } else {
                // ê¸°ê?
                if ($".clearfix".length > 0) {
                    $".location".children().not"a".remove();
                    var appendli = "<strong>" + $"#pageTitle".text() + "</strong>";
                    $".location".append(appendli);

                    var cntntsNm = $"#cntntsNm".val();

                    if (typeof cntntsNm == "undefined" || cntntsNm == "" || cntntsNm == null) {
                        var appendTit = $"#pageTitle".text() + " | " + $"meta[property='og:title']".attr'content';
                        $(document).find"title".text(appendTit);
                        $"meta[property='og:description']".attr'content', appendTit);
                        $"meta[name='description']".attr'content', appendTit);
                    } else {
                        var cntntsNmTit = cntntsNm + " | " + $"meta[property='og:title']".attr'content';
                        $(document).find"title".text(cntntsNmTit);
                        $"meta[property='og:description']".attr'content', cntntsNmTit);
                        $"meta[name='description']".attr'content', cntntsNmTit);
                        $"#pageTitle".text(cntntsNm);
                        $".location > strong".text(cntntsNm);
                    }
                }
            }
        }
    }

    //?ì—… ?´ë?ì§€ ë¦¬ì‚¬?´ì¦ˆ
    $"#popupSlide".find"img".attr"style", "max-width:100%;";
})

/* function valueEmpty */
jQuery.fn.valueEmpty = function() {
    if (jQuery.trim(jQuery(this).val()).length < 1) {
        return true;
    } else {
        return false;
    }
};

/* function number and comma */
function numComma(data) {
    if (jQuery.trim(data).length > 3) {
        var returnValue = "";
        var commaValue = "" + data;
        for (idx = commaValue.length - 1, chk = 0; idx >= 0; idx--, chk++) {
            if (chk == 3) {
                chk = 0;
                returnValue = commaValue.substr(idx, 1) + "," + returnValue;
            } else {
                returnValue = commaValue.substr(idx, 1) + returnValue;
            }
        }
        return returnValue;
    } else {
        return data;
    }
}

var nowZoom = 1;
var maxZoom = 2;
var minZoom = 1;
var reduceMinZoom = 0.5;

//?”ë©´ ?¤ìš´??
function zoomIn() {
    if (nowZoom < maxZoom) {
        nowZoom += 0.05;
    } else {
        return;
    }

    document.getElementById"wrap".style.transformOrigin = "50% 0%";
    document.getElementById"wrap".style.transform = "scale" + nowZoom + "";
}


function zoomOut() {
    if (nowZoom > minZoom) {
        nowZoom -= 0.05;
    } else {
        return;
    }
    document.getElementById"wrap".style.transformOrigin = "50% 0%";
    document.getElementById"wrap".style.transform = "scale" + nowZoom + "";
}

function zoomInit() {
    nowZoom = 1;
    document.getElementById"wrap".style.transformOrigin = "50% 0%";
    document.getElementById"wrap".style.transform = "scale" + nowZoom + "";
}

$(function() {
    /* function onlyNumber */
    $".onylNum".change(function() {
        $(this).val($(this).val().replace(/[^0-9]/g, "");
    });
})

//?Œì¼ ?¤ìš´ë¡œë“œ
function mfn_fileDownload(fileKey) {
    if (fileKey != "" || fileKey == null) {
        location.href = "/common/fileDownload.do?fileKey=" + fileKey;
    }
};

// ?¸ì‡„
$(document).on"click", ".btnPrint", function() {
    var initBody = document.body.innerHTML;

    window.onbeforeprint = function() {
        document.body.innerHTML = document.getElementById"subContent".innerHTML;
    }

    window.onafterprint = function() {
        document.body.innerHTML = initBody;
    }

    window.print();
});

// ì£¼ì†Œ ë³µì‚¬
$(document).on"click", ".btnUrlCopy", function() {

    var currentUrl = window.location.href;
    copyToClipboard(currentUrl, $(this)); // jQuery ê°ì²´ë¡?ë²„íŠ¼ ?”ì†Œ ?„ë‹¬
});


// ?´ë¦½ë³´ë“œ???ìŠ¤??ë³µì‚¬?˜ëŠ” ?¨ìˆ˜
function copyToClipboard(text, $target) {
    // ?„ì‹œ ?…ë ¥ ?”ì†Œ ?ì„±
    var tempInput = document.createElement'input';
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand'copy';
    document.body.removeChild(tempInput);

    // Alert ë©”ì‹œì§€ ?œì‹œ ??ê°•ì œë¡??¬ì»¤???´ë™
    setTimeout(function() {
        alert"?„ì¬ ì£¼ì†Œê°€ ?´ë¦½ë³´ë“œ??ë³µì‚¬?˜ì—ˆ?µë‹ˆ?? Ctrl+Vë¡?ë¶™ì—¬?£ê¸°?´ì„œ ?¬ìš©?˜ì„¸??\n" + text);

        // alert ì¢…ë£Œ ??ì§§ì? ?œê°„ ?€ê¸????¬ì»¤???´ë™
        setTimeout(function() {
            $target.focus();
        }, 10); // 10ms ?œë ˆ?´ë¡œ alert ?«íŒ ???¬ì»¤???´ë™??ë³´ì¥
    }, 0);
}

$(function() {
    //?„ì?ë§ê¸°???œì‘
    $".adminHpcmIcon".click(function() {

        var obj = $(this);
        chk = obj.attr'chk';
        if (chk == null) {
            chk = 1;
        }

        if (chk == 1) {
            $.ajax({
                type: "get",
                url: "/apple/hc/hpcm/selectHpcm.do",
                data: {
                    "hpcmSn": $(this).attr"data-hp"
                },
                dataType: "json",
                success: function(data) {
                    obj.popover({
                        title: data.hpcmSj,
                        container: "body",
                        toggle: "popover",
                        placement: "right",
                        trigger: 'focus',
                        html: "true",
                        content: data.hpcmDc
                    }).popover'show';
                    obj.attr'chk', '0';
                },
                error: function(error) {
                    alert"?¤ë¥˜ê°€ ë°œìƒ?˜ì??µë‹ˆ??\nê´€ë¦¬ì?ê²Œ ë¬¸ì˜?˜ì„¸??";
                }
            });
        } else {
            obj.attr'chk', '1';
        }
    })

    //?„ì?ë§ê¸°???œì‘(ê³µí†µ)
    $".hpcmIcon".click(function() {

        var obj = $(this);
        chk = obj.attr'chk';
        if (chk == null) {
            chk = 1;
        }

        if (chk == 1) {
            $.ajax({
                type: "get",
                url: "/common/hc/hpcm/selectHpcm.do",
                data: {
                    "hpcmSn": $(this).attr"data-hp"
                },
                dataType: "json",
                success: function(data) {
                    obj.popover({
                        title: data.hpcmSj,
                        container: "body",
                        toggle: "popover",
                        placement: "right",
                        trigger: 'focus',
                        html: "true",
                        content: data.hpcmDc
                    }).popover'show';
                    obj.attr'chk', '0';
                },
                error: function(error) {
                    alert"?¤ë¥˜ê°€ ë°œìƒ?˜ì??µë‹ˆ??\nê´€ë¦¬ì?ê²Œ ë¬¸ì˜?˜ì„¸??";
                }
            });
        } else {
            obj.attr'chk', '1';
        }
    })


})
//?„ì?ë§ê¸°????

// ë©”ë‰´ ?‘ê·¼ ê¶Œí•œ ì²´í¬
function menuAccessCheck(mi, sysId) {
    var url = "/" + sysId + "/mn/menu/menuAccess.do"

    $.ajax({
        type: "post",
        url: url,
        data: {
            menuId: mi
        },
        dataType: "json",
        success: function(data) {
            var accessVal = JSON.parse(data.accessVal);
            var menuTy = JSON.parse(data.menuTy);
            if (accessVal == "Y" {
                var accessUrl = JSON.parse(data.menuUrl);
                if (menuTy != 'MENU' {
                    location.href = accessUrl;
                } else {
                    //snb_wrapìª? ë©”ë‰´ ?‘ê·¼ê¶Œí•œ ?ˆì„ê²½ìš°??ë¬¸ì œ?˜ëŠ”ë¶€ë¶?ì²˜ë¦¬
                    var classNm = $'#currMenuId' + mi).attr'class' || '-';
                    if (classNm.indexOf'active' == -1) {
                        location.href = accessUrl;
                    }
                }
            } else {
                alert"?‘ê·¼ ê¶Œí•œ???†ìŠµ?ˆë‹¤.";
                return false;
            }
        },
        error: function(data) {
            alert"?¤ë¥˜ê°€ ë°œìƒ?˜ì??µë‹ˆ??\nê´€ë¦¬ì?ê²Œ ë¬¸ì˜?˜ì„¸??";
        }
    });
}

$(function() {
    // ?ì—… ?«ê¸°(ì¿ í‚¤?¤ì • ?í•˜??ê¸°ê°„?ˆì— ?´ëŒ?˜ì? ?Šê¸°)
    $'.pop_close'.on'click', function() {
        $'#wrap'.removeClass'openPop';

        //?ì—… ?¼ì •ê¸°ê°„?™ì•ˆ ?´ì? ?Šê¸°(ì¿ í‚¤?¤ì •)
        var popSysId = $(this).attr"data-sysid";
        var cookieNM = "popCookie" + popSysId;
        var closePd = Number($(this).attr"data-closepd")

        setCookie(cookieNM, "hide", closePd);
        //location.reload(); (?ì—…ë¦¬ìŠ¤?¸ì—??ë¦¬ìŠ¤?¸ë‹«ê¸°ì‹œ ?ˆë¡œê³ ì¹¨?¼ë¡œ ??ì£¼ì„ì²˜ë¦¬ : ?ˆë¡œê³ ì¹¨ ?„ìš”?†ì–´ë³´ì„)
    })
    var cookieName = "popCookie" + $"#pop_close1".attr"data-sysid";
    if (getCookie(cookieName) != "hide" {
        $'.up_pop'.removeClass'upPopClose';
        $'.up_pop'.addClass'upPopOpen';
    }

    if (getCookie(cookieName) == "hide" {
        $'.up_pop'.css'display', 'none';
        $'.popBtn'.css'display', 'none';
        $'#wrap'.removeClass'openPop';
        $"link[rel=stylesheet][href*='../../website_archive/assets_common/css/up_pop.css']".remove();
    }
})


//?ì—… ì¿ í‚¤ ?€??
function setCookie(cookieName, value, closePd) {
    var exdays = Number(closePd);
    var exdate = new Date();
    var day = exdate.getDate() * 1;

    exdate.setDate(day + exdays);
    //    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = cookieName + "=" + cookieValue;
}

// ì¿ í‚¤ì¡°íšŒ
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if (start != -1) {
        start += cookieName.length;
        var end = cookieData.indexOf';', start);
        if (end == -1) end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

// ?ì—… ?«ê¸°(ì¿ í‚¤?¤ì • ?í•˜??ê¸°ê°„?ˆì— ?´ëŒ?˜ì? ?Šê¸°)
$(document).on'click', '.popupCookieSet', function() {
    var popValue = $(this).attr"data-seq";
    var cookieNM = "popCookie" + popValue;
    var closePd = Number($(this).attr"data-closepd");

    setCookie(cookieNM, "hide", closePd);
    $"#popupNormal" + popValue).parent().remove();
    $"#popupNormalHide" + popValue).parent().remove();
});


function rssFeed(sysId, menuId, bbsId) {
    var meintext = location.origin + "/" + sysId + "/na/ntt/selectRssFeed.do?mi=" + menuId + "&bbsId=" + bbsId;
    if (window.clipboardData) {
        window.clipboardData.setData"Text", meintext);
        alert"?„ë˜ì£¼ì†Œê°€ ?´ë¦½ë³´ë“œ??ë³µì‚¬?˜ì—ˆ?µë‹ˆ?? Ctrl+Vë¡?ë¶™ì—¬?£ê¸°?´ì„œ ?¬ìš©?˜ì„¸??\n" + meintext);
    } else {
        temp = prompt"Ctrl+Cë¥??ŒëŸ¬ ?´ë¦½ë³´ë“œë¡?ë³µì‚¬?˜ì„¸??, meintext);
    }
}

// ë¡œê·¸???œê°„
var pathname = window.location.pathname;
const arr = pathname.split"/";
var sysId = arr[1];

var iMinute; // ?œê°„ ì§€??ë¶?
var iSecond; //ì´ˆë‹¨?„ë¡œ ?˜ì‚°
var timerchecker = null;

window.onload = function() {
    var timeLimitVal = $"#timeLimit".val() == undefined ? 30 : $"#timeLimit".val();

    fncClearTime(timeLimitVal);
    initTimer(); //?˜ì´ì§€ ë¡œë“œ??initTimer?¨ìˆ˜ ?¤í–‰(?œê°„ ì¹´ìš´??
}

Lpad = function(str, len) {
    str = str + "";
    while (str.length < len) {
        str = "0" + str;
    }
    return str;
}

initTimer = function() {
    rMinute = parseInt(iSecond / 60);
    rSecond = iSecond % 60;
    if (iSecond > 0 && rMinute > 1) {
        iSecond--;
        timerchecker = setTimeout"initTimer()", 1000); // 1ì´?ê°„ê²©?¼ë¡œ ì²´í¬
    } else if (iSecond > 0 && rMinute < 2) {
        kcreTable();
        var addedFormDiv = document.getElementById"timer";

        addedFormDiv.innerHTML = "" + Lpad(rMinute, 2) + ":" + Lpad(rSecond, 2);
        iSecond--;
        timerchecker = setTimeout"initTimer()", 1000); // 1ì´?ê°„ê²©?¼ë¡œ ì²´í¬

    } else {
        clearTimeout(timerchecker); //?€?´ë¨¸ ì¤‘ì?
        location.href = "/" + sysId + "/lo/login/logout.do"; // ?¸ì…˜?„ì›ƒ
        //location.href = "/" + sysId + "/lo/login/timeLogout.do"; // ?¸ì…˜?„ì›ƒ
    }
}

//?œê°„ ?¤ì •
function fncClearTime(strM) {
    iMinute = strM;
    iSecond = iMinute * 60;
}

// font-family: 'NotoSans', '?‹ì?', 'Dotum', 'êµ´ë¦¼', 'Gulim', AppleGothic, UnDotum, Arial, Tahoma, Verdana, sans-serif; font-weight: 200; font-size: 0.7rem; color: #666;

//?”ë©´ ?ì„±
function kcreTable() {
    var addHtml = document.getElementById"timeLoadingView";
    var str1 = "";
    str1 += "<div id='timeLoadingViewInfo' style='position:absolute; background:url(/images/web/common/timeout/pop_bg.png) no-repeat; width:440px; height:300px; top:10%; left:40%; z-index:999999999;'> ";
    str1 += "	<h1 style='font-family:NotoSans, ?‹ì?, Dotum; font-size:17px; color:#fff; line-height:42px; padding-left:20px;'>?ë™ ë¡œê·¸?„ì›ƒ ?ˆë‚´</h1> ";
    str1 += "	<p style='font-family:NotoSans, ?‹ì?, Dotum; font-size:15px; color:#267ab8; font-weight:bold; text-align:center; padding:30px 0 5px 0 ;margin: 10px 0 0 0;'><span id='timer'></span>ì´????ë™?¼ë¡œ ë¡œê·¸?„ì›ƒ ?ˆì •?…ë‹ˆ??</p> ";
    str1 += "	<div style='width:300px; height:24px; line-height:18px; border:1px solid #bedceb; margin:0 auto 15px; text-align:center;'><img src='../../website_archive/assets_web/images/'web/common/timeout/loading_bar.gif' alt='loading' /></div> ";
    str1 += "	<div style='width:381px; height:70px; padding-top:15px; padding-left:15px; border:1px solid #ddd; background:#fbfbfb; margin:0 auto 20px;'> ";
    str1 += "		<ul style='list-style-type:none; margin:0; padding:0; font-family:NotoSans, ?‹ì?, Dotum; font-size:13px; color:#898989; line-height:20px;'> ";
    str1 += "			<li style='font-weight: 500;'><span style='color:#D64500;'>ë¡œê·¸????" + iMinute + "ë¶„ê°„</span> ?¬ìš©???†ìœ¼??ê²½ìš° ?ë™?¼ë¡œ ë¡œê·¸?„ì›ƒ ?©ë‹ˆ??</li> ";
    str1 += "			<li style='font-weight: 500;'>ë¡œê·¸?„ì›ƒ???í•˜ì§€ ?Šìœ¼?œë©´ <span style='color:#D64500;'>[ë¡œê·¸???°ì¥?˜ê¸°]</span>ë¥??´ë¦­ ??ì£¼ì„¸??</li> ";
    str1 += "		</ul> ";
    str1 += "	</div> ";
    str1 += "	<div style='width: 255px; margin:0 auto'> ";
    str1 += "		<a href='#' onClick='javascript:sReset();' style='font-family:NotoSans, ?‹ì?, Dotum; display:inline-block; width: 120px; height:28px; line-height:24px; color:#fff; font-size:14px; text-align:center; background-color:#DB5C00; border:1px solid #DB5C00; text-decoration:none'>ë¡œê·¸???°ì¥?˜ê¸°</a>";
    str1 += "		<a href='/" + sysId + "/lo/login/logout.do' style='font-family:NotoSans, ?‹ì?, Dotum; display:inline-block; width: 120px; height:28px; line-height:24px; color:#fff; font-size:14px; text-align:center; background-color:#7c7d82; border:1px solid #6e6e72; margin-left:10px; text-decoration:none'>ë¡œê·¸?„ì›ƒ</a>";
    str1 += "	</div>";
    str1 += "	<a href='#' onClick='javascript:kdelTable();' title='?«ê¸°' style='position:absolute; width: 20px; height: 20px; padding: 0px; top: 9px;right: 12px;; border:0'><img src='../../website_archive/assets_web/images/'web/common/timeout/btn_close.gif' alt='?«ê¸°' style='border:0'></a> ";
    str1 += "</div> ";

    addHtml.innerHTML = str1;
}

//?”ë©´ ?? œ
function kdelTable() {
    if (!confirm"ì°½ì„ ?«ìœ¼ë©??ë™ ë¡œê·¸?„ì›ƒ ?©ë‹ˆ??") return;
    var addHtml = document.getElementById"timeLoadingView";
    addHtml.parentNode.removeChild(addHtml); // ???? œ  
    location.href = "/" + sysId + "/lo/login/logout.do";
}

//ë¡œê·¸???°ì¥
function sReset() {
    // document.location.reload();

    // reload() ?€??ê¸°ì¡´ ???? œ ???°ì¥?????ˆë„ë¡?ë³€ê²?
    var timeLimitVal = $"#timeLimit".val() == undefined ? 30 : $"#timeLimit".val();
    fncClearTime(timeLimitVal);

    if (!confirm"ë¡œê·¸???°ì¥?˜ì—ˆ?µë‹ˆ??") return;
    var addHtml = document.getElementById"timeLoadingViewInfo";
    addHtml.parentNode.removeChild(addHtml); // ???? œ  
}

//?“ê????€???…ë ¥ ???œí•œ
$(document).ready(function() {
    $'#answerCn'.on'keyup', function() {
        $'#_writedByte'.html($(this).val().length);

        if ($(this).val().length > 1000) {
            $(this).val($(this).val().substring(0, 1000));
            $'#_writedByte'.html"1000";
        }
    });
});
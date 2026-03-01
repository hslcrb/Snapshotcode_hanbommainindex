$(document).ready(function() {
    // 硫붾돱 ?놁쓣 寃쎌슦 留?留덉?留됱뿉 ?ㅽ뻾?댁빞??
    if ($"#subContent".length > 0) {
        if (typeof $"#tabBaseMi".val() == "undefined" || $"#tabBaseMi".val() == "" || $"#tabBaseMi".val() == null) {
            //?숆탳
            if ($".subCntBody".length > 0) {
                $".dep01".empty();
                $".dep01".addClass"active";

                var appendli = "<li class='active'><a href='#' title='硫붾돱 ?ロ옒'>" + $"#pageTitle".text() + "</a></li>";
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
                // 湲곌?
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

    //?앹뾽 ?대?吏 由ъ궗?댁쫰
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

//?붾㈃ ?ㅼ슫??
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

//?뚯씪 ?ㅼ슫濡쒕뱶
function mfn_fileDownload(fileKey) {
    if (fileKey != "" || fileKey == null) {
        location.href = "/common/fileDownload.html?fileKey=" + fileKey;
    }
};

// ?몄뇙
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

// 二쇱냼 蹂듭궗
$(document).on"click", ".btnUrlCopy", function() {

    var currentUrl = window.location.href;
    copyToClipboard(currentUrl, $(this)); // jQuery 媛앹껜濡?踰꾪듉 ?붿냼 ?꾨떖
});


// ?대┰蹂대뱶???띿뒪??蹂듭궗?섎뒗 ?⑥닔
function copyToClipboard(text, $target) {
    // ?꾩떆 ?낅젰 ?붿냼 ?앹꽦
    var tempInput = document.createElement'input';
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand'copy';
    document.body.removeChild(tempInput);

    // Alert 硫붿떆吏 ?쒖떆 ??媛뺤젣濡??ъ빱???대룞
    setTimeout(function() {
        alert"?꾩옱 二쇱냼媛 ?대┰蹂대뱶??蹂듭궗?섏뿀?듬땲?? Ctrl+V濡?遺숈뿬?ｊ린?댁꽌 ?ъ슜?섏꽭??\n" + text);

        // alert 醫낅즺 ??吏㏃? ?쒓컙 ?湲????ъ빱???대룞
        setTimeout(function() {
            $target.focus();
        }, 10); // 10ms ?쒕젅?대줈 alert ?ロ엺 ???ъ빱???대룞??蹂댁옣
    }, 0);
}

$(function() {
    //?꾩?留먭린???쒖옉
    $".adminHpcmIcon".click(function() {

        var obj = $(this);
        chk = obj.attr'chk';
        if (chk == null) {
            chk = 1;
        }

        if (chk == 1) {
            $.ajax({
                type: "get",
                url: "/apple/hc/hpcm/selectHpcm.html",
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
                    alert"?ㅻ쪟媛 諛쒖깮?섏??듬땲??\n愿由ъ옄?먭쾶 臾몄쓽?섏꽭??";
                }
            });
        } else {
            obj.attr'chk', '1';
        }
    })

    //?꾩?留먭린???쒖옉(怨듯넻)
    $".hpcmIcon".click(function() {

        var obj = $(this);
        chk = obj.attr'chk';
        if (chk == null) {
            chk = 1;
        }

        if (chk == 1) {
            $.ajax({
                type: "get",
                url: "/common/hc/hpcm/selectHpcm.html",
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
                    alert"?ㅻ쪟媛 諛쒖깮?섏??듬땲??\n愿由ъ옄?먭쾶 臾몄쓽?섏꽭??";
                }
            });
        } else {
            obj.attr'chk', '1';
        }
    })


})
//?꾩?留먭린????

// 硫붾돱 ?묎렐 沅뚰븳 泥댄겕
function menuAccessCheck(mi, sysId) {
    var url = "/" + sysId + "/mn/menu/menuAccess.html"

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
                    //snb_wrap履? 硫붾돱 ?묎렐沅뚰븳 ?덉쓣寃쎌슦??臾몄젣?섎뒗遺遺?泥섎━
                    var classNm = $'#currMenuId' + mi).attr'class' || '-';
                    if (classNm.indexOf'active' == -1) {
                        location.href = accessUrl;
                    }
                }
            } else {
                alert"?묎렐 沅뚰븳???놁뒿?덈떎.";
                return false;
            }
        },
        error: function(data) {
            alert"?ㅻ쪟媛 諛쒖깮?섏??듬땲??\n愿由ъ옄?먭쾶 臾몄쓽?섏꽭??";
        }
    });
}

$(function() {
    // ?앹뾽 ?リ린(荑좏궎?ㅼ젙 ?먰븯??湲곌컙?덉뿉 ?대엺?섏? ?딄린)
    $'.pop_close'.on'click', function() {
        $'#wrap'.removeClass'openPop';

        //?앹뾽 ?쇱젙湲곌컙?숈븞 ?댁? ?딄린(荑좏궎?ㅼ젙)
        var popSysId = $(this).attr"data-sysid";
        var cookieNM = "popCookie" + popSysId;
        var closePd = Number($(this).attr"data-closepd")

        setCookie(cookieNM, "hide", closePd);
        //location.reload(); (?앹뾽由ъ뒪?몄뿉??由ъ뒪?몃떕湲곗떆 ?덈줈怨좎묠?쇰줈 ??二쇱꽍泥섎━ : ?덈줈怨좎묠 ?꾩슂?놁뼱蹂댁엫)
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
        $"link[rel=stylesheet][href*='./assets/css/up_pop.css']".remove();
    }
})


//?앹뾽 荑좏궎 ???
function setCookie(cookieName, value, closePd) {
    var exdays = Number(closePd);
    var exdate = new Date();
    var day = exdate.getDate() * 1;

    exdate.setDate(day + exdays);
    //    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = cookieName + "=" + cookieValue;
}

// 荑좏궎議고쉶
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

// ?앹뾽 ?リ린(荑좏궎?ㅼ젙 ?먰븯??湲곌컙?덉뿉 ?대엺?섏? ?딄린)
$(document).on'click', '.popupCookieSet', function() {
    var popValue = $(this).attr"data-seq";
    var cookieNM = "popCookie" + popValue;
    var closePd = Number($(this).attr"data-closepd");

    setCookie(cookieNM, "hide", closePd);
    $"#popupNormal" + popValue).parent().remove();
    $"#popupNormalHide" + popValue).parent().remove();
});


function rssFeed(sysId, menuId, bbsId) {
    var meintext = location.origin + "/" + sysId + "/na/ntt/selectRssFeed.html?mi=" + menuId + "&bbsId=" + bbsId;
    if (window.clipboardData) {
        window.clipboardData.setData"Text", meintext);
        alert"?꾨옒二쇱냼媛 ?대┰蹂대뱶??蹂듭궗?섏뿀?듬땲?? Ctrl+V濡?遺숈뿬?ｊ린?댁꽌 ?ъ슜?섏꽭??\n" + meintext);
    } else {
        temp = prompt"Ctrl+C瑜??뚮윭 ?대┰蹂대뱶濡?蹂듭궗?섏꽭??, meintext);
    }
}

// 濡쒓렇???쒓컙
var pathname = window.location.pathname;
const arr = pathname.split"/";
var sysId = arr[1];

var iMinute; // ?쒓컙 吏??遺?
var iSecond; //珥덈떒?꾨줈 ?섏궛
var timerchecker = null;

window.onload = function() {
    var timeLimitVal = $"#timeLimit".val() == undefined ? 30 : $"#timeLimit".val();

    fncClearTime(timeLimitVal);
    initTimer(); //?섏씠吏 濡쒕뱶??initTimer?⑥닔 ?ㅽ뻾(?쒓컙 移댁슫??
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
        timerchecker = setTimeout"initTimer()", 1000); // 1珥?媛꾧꺽?쇰줈 泥댄겕
    } else if (iSecond > 0 && rMinute < 2) {
        kcreTable();
        var addedFormDiv = document.getElementById"timer";

        addedFormDiv.innerHTML = "" + Lpad(rMinute, 2) + ":" + Lpad(rSecond, 2);
        iSecond--;
        timerchecker = setTimeout"initTimer()", 1000); // 1珥?媛꾧꺽?쇰줈 泥댄겕

    } else {
        clearTimeout(timerchecker); //??대㉧ 以묒?
        location.href = "/" + sysId + "/lo/login/logout.html"; // ?몄뀡?꾩썐
        //location.href = "/" + sysId + "/lo/login/timeLogout.html"; // ?몄뀡?꾩썐
    }
}

//?쒓컙 ?ㅼ젙
function fncClearTime(strM) {
    iMinute = strM;
    iSecond = iMinute * 60;
}

// font-family: 'NotoSans', '?뗭?', 'Dotum', '援대┝', 'Gulim', AppleGothic, UnDotum, Arial, Tahoma, Verdana, sans-serif; font-weight: 200; font-size: 0.7rem; color: #666;

//?붾㈃ ?앹꽦
function kcreTable() {
    var addHtml = document.getElementById"timeLoadingView";
    var str1 = "";
    str1 += "<div id='timeLoadingViewInfo' style='position:absolute; background:url(/images/web/common/timeout/pop_bg.png) no-repeat; width:440px; height:300px; top:10%; left:40%; z-index:999999999;'> ";
    str1 += "	<h1 style='font-family:NotoSans, ?뗭?, Dotum; font-size:17px; color:#fff; line-height:42px; padding-left:20px;'>?먮룞 濡쒓렇?꾩썐 ?덈궡</h1> ";
    str1 += "	<p style='font-family:NotoSans, ?뗭?, Dotum; font-size:15px; color:#267ab8; font-weight:bold; text-align:center; padding:30px 0 5px 0 ;margin: 10px 0 0 0;'><span id='timer'></span>珥????먮룞?쇰줈 濡쒓렇?꾩썐 ?덉젙?낅땲??</p> ";
    str1 += "	<div style='width:300px; height:24px; line-height:18px; border:1px solid #bedceb; margin:0 auto 15px; text-align:center;'><img src='./assets/images/'web/common/timeout/loading_bar.gif' alt='loading' /></div> ";
    str1 += "	<div style='width:381px; height:70px; padding-top:15px; padding-left:15px; border:1px solid #ddd; background:#fbfbfb; margin:0 auto 20px;'> ";
    str1 += "		<ul style='list-style-type:none; margin:0; padding:0; font-family:NotoSans, ?뗭?, Dotum; font-size:13px; color:#898989; line-height:20px;'> ";
    str1 += "			<li style='font-weight: 500;'><span style='color:#D64500;'>濡쒓렇????" + iMinute + "遺꾧컙</span> ?ъ슜???놁쑝??寃쎌슦 ?먮룞?쇰줈 濡쒓렇?꾩썐 ?⑸땲??</li> ";
    str1 += "			<li style='font-weight: 500;'>濡쒓렇?꾩썐???먰븯吏 ?딆쑝?쒕㈃ <span style='color:#D64500;'>[濡쒓렇???곗옣?섍린]</span>瑜??대┃ ??二쇱꽭??</li> ";
    str1 += "		</ul> ";
    str1 += "	</div> ";
    str1 += "	<div style='width: 255px; margin:0 auto'> ";
    str1 += "		<a href='#' onClick='javascript:sReset();' style='font-family:NotoSans, ?뗭?, Dotum; display:inline-block; width: 120px; height:28px; line-height:24px; color:#fff; font-size:14px; text-align:center; background-color:#DB5C00; border:1px solid #DB5C00; text-decoration:none'>濡쒓렇???곗옣?섍린</a>";
    str1 += "		<a href='/" + sysId + "/lo/login/logout.html' style='font-family:NotoSans, ?뗭?, Dotum; display:inline-block; width: 120px; height:28px; line-height:24px; color:#fff; font-size:14px; text-align:center; background-color:#7c7d82; border:1px solid #6e6e72; margin-left:10px; text-decoration:none'>濡쒓렇?꾩썐</a>";
    str1 += "	</div>";
    str1 += "	<a href='#' onClick='javascript:kdelTable();' title='?リ린' style='position:absolute; width: 20px; height: 20px; padding: 0px; top: 9px;right: 12px;; border:0'><img src='./assets/images/'web/common/timeout/btn_close.gif' alt='?リ린' style='border:0'></a> ";
    str1 += "</div> ";

    addHtml.innerHTML = str1;
}

//?붾㈃ ??젣
function kdelTable() {
    if (!confirm"李쎌쓣 ?レ쑝硫??먮룞 濡쒓렇?꾩썐 ?⑸땲??") return;
    var addHtml = document.getElementById"timeLoadingView";
    addHtml.parentNode.removeChild(addHtml); // ????젣  
    location.href = "/" + sysId + "/lo/login/logout.html";
}

//濡쒓렇???곗옣
function sReset() {
    // document.location.reload();

    // reload() ???湲곗〈 ????젣 ???곗옣?????덈룄濡?蹂寃?
    var timeLimitVal = $"#timeLimit".val() == undefined ? 30 : $"#timeLimit".val();
    fncClearTime(timeLimitVal);

    if (!confirm"濡쒓렇???곗옣?섏뿀?듬땲??") return;
    var addHtml = document.getElementById"timeLoadingViewInfo";
    addHtml.parentNode.removeChild(addHtml); // ????젣  
}

//?볤???????낅젰 ???쒗븳
$(document).ready(function() {
    $'#answerCn'.on'keyup', function() {
        $'#_writedByte'.html($(this).val().length);

        if ($(this).val().length > 1000) {
            $(this).val($(this).val().substring(0, 1000));
            $'#_writedByte'.html"1000";
        }
    });
});
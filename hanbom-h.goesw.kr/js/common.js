$(document).ready(function() {
    // 메뉴 없을 경우 맨 마지막에 실행해야함
    if ($("#subContent").length > 0) {
        if (typeof $("#tabBaseMi").val() == "undefined" || $("#tabBaseMi").val() == "" || $("#tabBaseMi").val() == null) {
            //학교
            if ($(".subCntBody").length > 0) {
                $(".dep01").empty();
                $(".dep01").addClass("active");

                var appendli = "<li class='active'><a href='#' title='메뉴 닫힘'>" + $("#pageTitle").text() + "</a></li>";
                $(".snb_wrap .dep01").append(appendli);

                var cntntsNm = $("#cntntsNm").val();

                if (typeof cntntsNm == "undefined" || cntntsNm == "" || cntntsNm == null) {
                    var appendTit = $("#pageTitle").text() + " | " + $("meta[property='og:title']").attr('content');
                    $(document).find("title").text(appendTit);
                    $("meta[property='og:description']").attr('content', appendTit);
                    $("meta[name='description']").attr('content', appendTit);
                } else {
                    var cntntsNmTit = cntntsNm + " | " + $("meta[property='og:title']").attr('content');
                    $(document).find("title").text(cntntsNmTit);
                    $("meta[property='og:description']").attr('content', cntntsNmTit);
                    $("meta[name='description']").attr('content', cntntsNmTit);
                    $("#pageTitle").text(cntntsNm);
                    $(".snb_wrap > ul > li > a").text(cntntsNm);
                }
            } else {
                // 기관
                if ($(".clearfix").length > 0) {
                    $(".location").children().not("a").remove();
                    var appendli = "<strong>" + $("#pageTitle").text() + "</strong>";
                    $(".location").append(appendli);

                    var cntntsNm = $("#cntntsNm").val();

                    if (typeof cntntsNm == "undefined" || cntntsNm == "" || cntntsNm == null) {
                        var appendTit = $("#pageTitle").text() + " | " + $("meta[property='og:title']").attr('content');
                        $(document).find("title").text(appendTit);
                        $("meta[property='og:description']").attr('content', appendTit);
                        $("meta[name='description']").attr('content', appendTit);
                    } else {
                        var cntntsNmTit = cntntsNm + " | " + $("meta[property='og:title']").attr('content');
                        $(document).find("title").text(cntntsNmTit);
                        $("meta[property='og:description']").attr('content', cntntsNmTit);
                        $("meta[name='description']").attr('content', cntntsNmTit);
                        $("#pageTitle").text(cntntsNm);
                        $(".location > strong").text(cntntsNm);
                    }
                }
            }
        }
    }

    //팝업 이미지 리사이즈
    $("#popupSlide").find("img").attr("style", "max-width:100%;");
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

//화면 키운다.
function zoomIn() {
    if (nowZoom < maxZoom) {
        nowZoom += 0.05;
    } else {
        return;
    }

    document.getElementById("wrap").style.transformOrigin = "50% 0%";
    document.getElementById("wrap").style.transform = "scale(" + nowZoom + ")";
}


function zoomOut() {
    if (nowZoom > minZoom) {
        nowZoom -= 0.05;
    } else {
        return;
    }
    document.getElementById("wrap").style.transformOrigin = "50% 0%";
    document.getElementById("wrap").style.transform = "scale(" + nowZoom + ")";
}

function zoomInit() {
    nowZoom = 1;
    document.getElementById("wrap").style.transformOrigin = "50% 0%";
    document.getElementById("wrap").style.transform = "scale(" + nowZoom + ")";
}

$(function() {
    /* function onlyNumber */
    $(".onylNum").change(function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ""));
    });
})

//파일 다운로드
function mfn_fileDownload(fileKey) {
    if (fileKey != "" || fileKey == null) {
        location.href = "/common/fileDownload.do?fileKey=" + fileKey;
    }
};

// 인쇄
$(document).on("click", ".btnPrint", function() {
    var initBody = document.body.innerHTML;

    window.onbeforeprint = function() {
        document.body.innerHTML = document.getElementById("subContent").innerHTML;
    }

    window.onafterprint = function() {
        document.body.innerHTML = initBody;
    }

    window.print();
});

// 주소 복사
$(document).on("click", ".btnUrlCopy", function() {

    var currentUrl = window.location.href;
    copyToClipboard(currentUrl, $(this)); // jQuery 객체로 버튼 요소 전달
});


// 클립보드에 텍스트 복사하는 함수
function copyToClipboard(text, $target) {
    // 임시 입력 요소 생성
    var tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Alert 메시지 표시 후 강제로 포커스 이동
    setTimeout(function() {
        alert("현재 주소가 클립보드에 복사되었습니다. Ctrl+V로 붙여넣기해서 사용하세요.\n" + text);

        // alert 종료 후 짧은 시간 대기 후 포커스 이동
        setTimeout(function() {
            $target.focus();
        }, 10); // 10ms 딜레이로 alert 닫힌 후 포커스 이동을 보장
    }, 0);
}

$(function() {
    //도움말기능 시작
    $(".adminHpcmIcon").click(function() {

        var obj = $(this);
        chk = obj.attr('chk');
        if (chk == null) {
            chk = 1;
        }

        if (chk == 1) {
            $.ajax({
                type: "get",
                url: "/apple/hc/hpcm/selectHpcm.do",
                data: {
                    "hpcmSn": $(this).attr("data-hp")
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
                    }).popover('show');
                    obj.attr('chk', '0');
                },
                error: function(error) {
                    alert("오류가 발생하였습니다.\n관리자에게 문의하세요.");
                }
            });
        } else {
            obj.attr('chk', '1');
        }
    })

    //도움말기능 시작(공통)
    $(".hpcmIcon").click(function() {

        var obj = $(this);
        chk = obj.attr('chk');
        if (chk == null) {
            chk = 1;
        }

        if (chk == 1) {
            $.ajax({
                type: "get",
                url: "/common/hc/hpcm/selectHpcm.do",
                data: {
                    "hpcmSn": $(this).attr("data-hp")
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
                    }).popover('show');
                    obj.attr('chk', '0');
                },
                error: function(error) {
                    alert("오류가 발생하였습니다.\n관리자에게 문의하세요.");
                }
            });
        } else {
            obj.attr('chk', '1');
        }
    })


})
//도움말기능 끝

// 메뉴 접근 권한 체크
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
            if (accessVal == "Y") {
                var accessUrl = JSON.parse(data.menuUrl);
                if (menuTy != 'MENU') {
                    location.href = accessUrl;
                } else {
                    //snb_wrap쪽, 메뉴 접근권한 있을경우에 문제되는부분 처리
                    var classNm = $('#currMenuId' + mi).attr('class') || '-';
                    if (classNm.indexOf('active') == -1) {
                        location.href = accessUrl;
                    }
                }
            } else {
                alert("접근 권한이 없습니다.");
                return false;
            }
        },
        error: function(data) {
            alert("오류가 발생하였습니다.\n관리자에게 문의하세요.");
        }
    });
}

$(function() {
    // 팝업 닫기(쿠키설정 원하는 기간안에 열람하지 않기)
    $('.pop_close').on('click', function() {
        $('#wrap').removeClass('openPop');

        //팝업 일정기간동안 열지 않기(쿠키설정)
        var popSysId = $(this).attr("data-sysid");
        var cookieNM = "popCookie" + popSysId;
        var closePd = Number($(this).attr("data-closepd"))

        setCookie(cookieNM, "hide", closePd);
        //location.reload(); (팝업리스트에서 리스트닫기시 새로고침으로 인 주석처리 : 새로고침 필요없어보임)
    })
    var cookieName = "popCookie" + $("#pop_close1").attr("data-sysid");
    if (getCookie(cookieName) != "hide") {
        $('.up_pop').removeClass('upPopClose');
        $('.up_pop').addClass('upPopOpen');
    }

    if (getCookie(cookieName) == "hide") {
        $('.up_pop').css('display', 'none');
        $('.popBtn').css('display', 'none');
        $('#wrap').removeClass('openPop');
        $("link[rel=stylesheet][href*='/00_common/css/up_pop.css']").remove();
    }
})


//팝업 쿠키 저장
function setCookie(cookieName, value, closePd) {
    var exdays = Number(closePd);
    var exdate = new Date();
    var day = exdate.getDate() * 1;

    exdate.setDate(day + exdays);
    //    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = cookieName + "=" + cookieValue;
}

// 쿠키조회
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if (start != -1) {
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1) end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

// 팝업 닫기(쿠키설정 원하는 기간안에 열람하지 않기)
$(document).on('click', '.popupCookieSet', function() {
    var popValue = $(this).attr("data-seq");
    var cookieNM = "popCookie" + popValue;
    var closePd = Number($(this).attr("data-closepd"));

    setCookie(cookieNM, "hide", closePd);
    $("#popupNormal" + popValue).parent().remove();
    $("#popupNormalHide" + popValue).parent().remove();
});


function rssFeed(sysId, menuId, bbsId) {
    var meintext = location.origin + "/" + sysId + "/na/ntt/selectRssFeed.do?mi=" + menuId + "&bbsId=" + bbsId;
    if (window.clipboardData) {
        window.clipboardData.setData("Text", meintext);
        alert("아래주소가 클립보드에 복사되었습니다. Ctrl+V로 붙여넣기해서 사용하세요.\n" + meintext);
    } else {
        temp = prompt("Ctrl+C를 눌러 클립보드로 복사하세요", meintext);
    }
}

// 로그인 시간
var pathname = window.location.pathname;
const arr = pathname.split("/");
var sysId = arr[1];

var iMinute; // 시간 지정 분
var iSecond; //초단위로 환산
var timerchecker = null;

window.onload = function() {
    var timeLimitVal = $("#timeLimit").val() == undefined ? 30 : $("#timeLimit").val();

    fncClearTime(timeLimitVal);
    initTimer(); //페이지 로드시 initTimer함수 실행(시간 카운트)
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
        timerchecker = setTimeout("initTimer()", 1000); // 1초 간격으로 체크
    } else if (iSecond > 0 && rMinute < 2) {
        kcreTable();
        var addedFormDiv = document.getElementById("timer");

        addedFormDiv.innerHTML = "" + Lpad(rMinute, 2) + ":" + Lpad(rSecond, 2);
        iSecond--;
        timerchecker = setTimeout("initTimer()", 1000); // 1초 간격으로 체크

    } else {
        clearTimeout(timerchecker); //타이머 중지
        location.href = "/" + sysId + "/lo/login/logout.do"; // 세션아웃
        //location.href = "/" + sysId + "/lo/login/timeLogout.do"; // 세션아웃
    }
}

//시간 설정
function fncClearTime(strM) {
    iMinute = strM;
    iSecond = iMinute * 60;
}

// font-family: 'NotoSans', '돋움', 'Dotum', '굴림', 'Gulim', AppleGothic, UnDotum, Arial, Tahoma, Verdana, sans-serif; font-weight: 200; font-size: 0.7rem; color: #666;

//화면 생성
function kcreTable() {
    var addHtml = document.getElementById("timeLoadingView");
    var str1 = "";
    str1 += "<div id='timeLoadingViewInfo' style='position:absolute; background:url(/images/web/common/timeout/pop_bg.png) no-repeat; width:440px; height:300px; top:10%; left:40%; z-index:999999999;'> ";
    str1 += "	<h1 style='font-family:NotoSans, 돋움, Dotum; font-size:17px; color:#fff; line-height:42px; padding-left:20px;'>자동 로그아웃 안내</h1> ";
    str1 += "	<p style='font-family:NotoSans, 돋움, Dotum; font-size:15px; color:#267ab8; font-weight:bold; text-align:center; padding:30px 0 5px 0 ;margin: 10px 0 0 0;'><span id='timer'></span>초 후 자동으로 로그아웃 예정입니다.</p> ";
    str1 += "	<div style='width:300px; height:24px; line-height:18px; border:1px solid #bedceb; margin:0 auto 15px; text-align:center;'><img src='/images/web/common/timeout/loading_bar.gif' alt='loading' /></div> ";
    str1 += "	<div style='width:381px; height:70px; padding-top:15px; padding-left:15px; border:1px solid #ddd; background:#fbfbfb; margin:0 auto 20px;'> ";
    str1 += "		<ul style='list-style-type:none; margin:0; padding:0; font-family:NotoSans, 돋움, Dotum; font-size:13px; color:#898989; line-height:20px;'> ";
    str1 += "			<li style='font-weight: 500;'><span style='color:#D64500;'>로그인 후 " + iMinute + "분간</span> 사용이 없으실 경우 자동으로 로그아웃 됩니다.</li> ";
    str1 += "			<li style='font-weight: 500;'>로그아웃을 원하지 않으시면 <span style='color:#D64500;'>[로그인 연장하기]</span>를 클릭 해 주세요.</li> ";
    str1 += "		</ul> ";
    str1 += "	</div> ";
    str1 += "	<div style='width: 255px; margin:0 auto'> ";
    str1 += "		<a href='#' onClick='javascript:sReset();' style='font-family:NotoSans, 돋움, Dotum; display:inline-block; width: 120px; height:28px; line-height:24px; color:#fff; font-size:14px; text-align:center; background-color:#DB5C00; border:1px solid #DB5C00; text-decoration:none'>로그인 연장하기</a>";
    str1 += "		<a href='/" + sysId + "/lo/login/logout.do' style='font-family:NotoSans, 돋움, Dotum; display:inline-block; width: 120px; height:28px; line-height:24px; color:#fff; font-size:14px; text-align:center; background-color:#7c7d82; border:1px solid #6e6e72; margin-left:10px; text-decoration:none'>로그아웃</a>";
    str1 += "	</div>";
    str1 += "	<a href='#' onClick='javascript:kdelTable();' title='닫기' style='position:absolute; width: 20px; height: 20px; padding: 0px; top: 9px;right: 12px;; border:0'><img src='/images/web/common/timeout/btn_close.gif' alt='닫기' style='border:0'></a> ";
    str1 += "</div> ";

    addHtml.innerHTML = str1;
}

//화면 삭제
function kdelTable() {
    if (!confirm("창을 닫으면 자동 로그아웃 됩니다.")) return;
    var addHtml = document.getElementById("timeLoadingView");
    addHtml.parentNode.removeChild(addHtml); // 폼 삭제  
    location.href = "/" + sysId + "/lo/login/logout.do";
}

//로그인 연장
function sReset() {
    // document.location.reload();

    // reload() 대신 기존 폼 삭제 후 연장될 수 있도록 변경
    var timeLimitVal = $("#timeLimit").val() == undefined ? 30 : $("#timeLimit").val();
    fncClearTime(timeLimitVal);

    if (!confirm("로그인 연장되었습니다.")) return;
    var addHtml = document.getElementById("timeLoadingViewInfo");
    addHtml.parentNode.removeChild(addHtml); // 폼 삭제  
}

//댓글에 대한 입력 수 제한
$(document).ready(function() {
    $('#answerCn').on('keyup', function() {
        $('#_writedByte').html($(this).val().length);

        if ($(this).val().length > 1000) {
            $(this).val($(this).val().substring(0, 1000));
            $('#_writedByte').html("1000");
        }
    });
});
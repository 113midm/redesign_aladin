//페이지 전체 a효과 막기
$("a").click(function () {
  return false;
});

function Header_init() {
  //'헤더-전체 카테고리 보기' 클릭하면 카테고리 팝업이 나옴
  $(".btn-category").click(function () {
    if ($(".popup-category").hasClass("active")) {
      $(".popup-category").removeClass("active");
    } else {
      $(".popup-category").addClass("active");
    }
  });
  $(".popup-category .btn-close").click(function () {
    $(".popup-category").removeClass("active");
  });
}

function Topbar_init() {
  //스크롤을 내리면 고정탑바가 맨 위에 고정됨
  $(window).scroll(function () {
    let scroll_top = $(this).scrollTop();

    console.log(scroll_top);

    if (scroll_top > 194) {
      $(".top-bar").addClass("active");
    } else {
      $(".top-bar").removeClass("active");
    }
  });

  //'고정탑바-검색버튼'을 누르면 검색 팝업이 나옴
  $(".btn-search-topbar").click(function () {
    if ($(".top-bar > .popup-search").hasClass("active")) {
      $(".top-bar > .popup-search").removeClass("active");
    } else {
      $(".top-bar > .popup-search").addClass("active");
    }
  });
  $(".top-bar > .popup-search .btn-close").click(function () {
    $(".top-bar > .popup-search").removeClass("active");
  });
}

function Topbar_scroll_0() {
  //'탑바-알라딘 추천 도서' 클릭하면 '추천도서' 위치로 이동
  $(".top-bar .btn-sec-0 > a").click(function () {
    $("html, body").animate({
        scrollTop: 0
      },
      500
    );
    return false;
  });
}

function Topbar_scroll_1() {
  //'탑바-알라딘 추천 도서' 클릭하면 '추천도서' 위치로 이동
  $(".top-bar .btn-sec-1 > a").click(function () {
    $("html, body").animate({
        scrollTop: 199
      },
      500
    );
    return false;
  });
}

function Topbar_scroll_2() {
  //'탑바-알라딘 추천 음반' 클릭하면 '추천음반' 위치로 이동
  $(".top-bar .btn-sec-2 > a").click(function () {
    $("html, body").animate({
        scrollTop: 2110
      },
      500
    );
    return false;
  });
}

function Topbar_scroll_3() {
  //'탑바-이 달의 이벤트' 클릭하면 '이벤트' 위치로 이동
  $(".top-bar .btn-sec-3 > a").click(function () {
    $("html, body").animate({
        scrollTop: 2833
      },
      500
    );
    return false;
  });
}

function Topbar_scroll_4() {
  //'탑바-중고매장' 클릭하면 '이벤트' 위치로 이동
  $(".top-bar .btn-sec-4 > a").click(function () {
    $("html, body").animate({
        scrollTop: 3766
      },
      500
    );
    return false;
  });
}
Header_init();
Topbar_init();
Topbar_scroll_0();
Topbar_scroll_1();
Topbar_scroll_2();
Topbar_scroll_3();
Topbar_scroll_4();

$(".header_mobile-bar").click(function () {
  if ($(".header_mobile-menu").hasClass("active")) {
    $(".header_mobile-menu").removeClass("active");
  } else {
    $(".header_mobile-menu").addClass("active");
  }
});
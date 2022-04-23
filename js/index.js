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
    // console.log(scroll_top);
    if (scroll_top > 240) {
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



//페이지 전체 a효과 막기
$("a").click(function () {
  return false;
});

function SectionSlide_init() {
  //'메인 슬라이드'
  const swiper_main_slide = new Swiper(".swiper-main-slide", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "fade",

    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },

    on: {
      slideChange: function () {
        $('.slide-title > ul > li').removeClass('active');
        $('.slide-title > ul > li').eq(this.realIndex).addClass('active');
      }
    }
  });

  //'메인 슬라이드' 목록 클릭하는 대로 화면 변하기
  $(".slide-title > ul > li:first-child").click(function () {
    swiper_main_slide.slideTo(1, 1000, false);
  });
  $(".slide-title > ul > li:nth-child(2)").click(function () {
    swiper_main_slide.slideTo(2, 1000, false);
  });
  $(".slide-title > ul > li:nth-child(3)").click(function () {
    swiper_main_slide.slideTo(3, 1000, false);
  });
  $(".slide-title > ul > li:nth-child(4)").click(function () {
    swiper_main_slide.slideTo(4, 1000, false);
  });
}

function SectionRecom_init() {
  //'추천 마법사' 슬라이드
  const swiper_recom = new Swiper(".swiper-recom", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
      nextEl: ".swiper-recom .swiper-button-next",
      prevEl: ".swiper-recom .swiper-button-prev"
    },
  });
}

function SectionToday_init() {
  //'오늘의 한 문장' 책 이미지에 마우스 올리면 설명 글 나옴
  $(".section-today > div > .inner .book-img-box > .book-left").mouseenter(function () {
    $(".section-today > div > .inner .book-text-box > .book-left").addClass("active");
  });
  $(".section-today > div > .inner .book-img-box > .book-left").mouseleave(function () {
    $(".section-today > div > .inner .book-text-box > .book-left").removeClass("active");
  });
  $(".section-today > div > .inner .book-img-box > .book-right").mouseenter(function () {
    $(".section-today > div > .inner .book-text-box > .book-right").addClass("active");
  });
  $(".section-today > div > .inner .book-img-box > .book-right").mouseleave(function () {
    $(".section-today > div > .inner .book-text-box > .book-right").removeClass("active");
  });

  //'오늘의 한 문장' 책 클릭하면 해당 내용으로 변함
  $(".section-today > div > .inner .book-img-box > .book-left").click(function () {
    if ($(".section-today > div > .inner .book-main > .book-left").hasClass("active")) {
      $(".section-today > div > .inner .book-main > .text-box").removeClass("active");
      $(".section-today > div > .inner .book-main > .book-center").addClass("active");

      var centerImg = document.getElementById("book-img-center");
      centerImg.setAttribute("src", "https://image.aladin.co.kr/product/29246/9/cover500/8932922055_1.jpg")
      var leftImg = document.getElementById("book-img-left");
      leftImg.setAttribute("src", "https://image.aladin.co.kr/product/29250/62/cover500/k982837392_1.jpg");

      $(".section-today > div > .inner .book-text-box > .book-left .book-title").html("그래서... 이런 말이 생겼습니다");
      $(".section-today > div > .inner .book-text-box > .book-left .book-writer").html("금정연 지음");

      $(".section-today > .today-bg").css("background-color", "#018B7B");
      $(".section-today > div > .inner .book-main > .text-box > *").css("color", "#fff");
    } else {
      $(".section-today > div > .inner .book-main > .text-box").removeClass("active");
      $(".section-today > div > .inner .book-main > .book-left").addClass("active");

      var centerImg = document.getElementById("book-img-center");
      centerImg.setAttribute("src", "https://image.aladin.co.kr/product/29250/62/cover500/k982837392_1.jpg")
      var leftImg = document.getElementById("book-img-left");
      leftImg.setAttribute("src", "https://image.aladin.co.kr/product/29246/9/cover500/8932922055_1.jpg");
      var rightImg = document.getElementById("book-img-right");
      rightImg.setAttribute("src", "https://image.aladin.co.kr/product/29231/77/cover500/k252837196_1.jpg");

      $(".section-today > div > .inner .book-text-box > .book-left .book-title").html("미래가 우리 손을 떠나기 전에");
      $(".section-today > div > .inner .book-text-box > .book-left .book-writer").html("나오미 클라인,리베카 스테포프 지음");
      $(".section-today > div > .inner .book-text-box > .book-right .book-title").html("더러운 손을 거기에 닦지 마");
      $(".section-today > div > .inner .book-text-box > .book-right .book-writer").html("아시자와 요 지음");

      $(".section-today > .today-bg").css("background-color", "#A4D5F5");
      $(".section-today > div > .inner .book-main > .text-box > *").css("color", "#333");
    }

  });

  $(".section-today > div > .inner .book-img-box > .book-right").click(function () {
    if ($(".section-today > div > .inner .book-main > .book-right").hasClass("active")) {
      $(".section-today > div > .inner .book-main > .text-box").removeClass("active");
      $(".section-today > div > .inner .book-main > .book-center").addClass("active");

      var centerImg = document.getElementById("book-img-center");
      centerImg.setAttribute("src", "https://image.aladin.co.kr/product/29246/9/cover500/8932922055_1.jpg")
      var rightImg = document.getElementById("book-img-right");
      rightImg.setAttribute("src", "https://image.aladin.co.kr/product/29231/77/cover500/k252837196_1.jpg");

      $(".section-today > div > .inner .book-text-box > .book-right .book-title").html("더러운 손을 거기에 닦지 마");
      $(".section-today > div > .inner .book-text-box > .book-right .book-writer").html("아시자와 요 지음");

      $(".section-today > .today-bg").css("background-color", "#018B7B");
      $(".section-today > div > .inner .book-main > .text-box > *").css("color", "#fff");
    } else {
      $(".section-today > div > .inner .book-main > .text-box").removeClass("active");
      $(".section-today > div > .inner .book-main > .book-right").addClass("active");

      var centerImg = document.getElementById("book-img-center");
      centerImg.setAttribute("src", "https://image.aladin.co.kr/product/29231/77/cover500/k252837196_1.jpg")
      var rightImg = document.getElementById("book-img-right");
      rightImg.setAttribute("src", "https://image.aladin.co.kr/product/29246/9/cover500/8932922055_1.jpg");
      var leftImg = document.getElementById("book-img-left");
      leftImg.setAttribute("src", "https://image.aladin.co.kr/product/29250/62/cover500/k982837392_1.jpg");

      $(".section-today > div > .inner .book-text-box > .book-right .book-title").html("미래가 우리 손을 떠나기 전에");
      $(".section-today > div > .inner .book-text-box > .book-right .book-writer").html("나오미 클라인,리베카 스테포프 지음");
      $(".section-today > div > .inner .book-text-box > .book-left .book-title").html("그래서... 이런 말이 생겼습니다");
      $(".section-today > div > .inner .book-text-box > .book-left .book-writer").html("금정연 지음");

      // $(".section-today > .today-bg").css("background-color", "#75B8BE");
      $(".section-today > .today-bg").css("background-color", "#B9AFA5");
      $(".section-today > div > .inner .book-main > .text-box > *").css("color", "#333");
    }
  });
}

Header_init();
Topbar_init();
SectionSlide_init();
SectionRecom_init();
SectionToday_init();
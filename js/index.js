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

$(window).scroll(function () {
  let scroll_top = $(this).scrollTop();
  // console.log(scroll_top);
  if (scroll_top > 240) {
    $(".top-bar").addClass("active");
  } else {
    $(".top-bar").removeClass("active");
  }
});

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

$("a").click(function () {
  return false;
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  effect: "fade",

  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },

  pagination: {
    el: ".swiper-pagination",
    // type: 'progressbar', // 지우면 `bullet` 기본값, 'fraction', 'progressbar' 선택 가능
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  on: {
    slideChange: function () {
      $('.slide-title > ul > li').removeClass('active');
      $('.slide-title > ul > li').eq(this.realIndex).addClass('active');
    }
  }
});

$(".slide-title > ul > li:first-child").click(function () {
    swiper.slideTo(1, 1000, false);
});
$(".slide-title > ul > li:nth-child(2)").click(function () {
  swiper.slideTo(2, 1000, false);
});
$(".slide-title > ul > li:nth-child(3)").click(function () {
  swiper.slideTo(3, 1000, false);
});
$(".slide-title > ul > li:nth-child(4)").click(function () {
  swiper.slideTo(4, 1000, false);
});
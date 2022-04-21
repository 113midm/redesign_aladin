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
  console.log(scroll_top);
  if (scroll_top > 240) {
    $(".top-bar").addClass("active");
  }
  else {
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

$("a").click(function(){
  return false;
});
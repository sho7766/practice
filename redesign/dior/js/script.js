let header = document.querySelector("header");
let nav = document.querySelectorAll(".nav ul li");
let menu = document.querySelectorAll(".nav ul li a");

$(nav).mouseenter(function () {
  $(header).addClass("active");
  $(this).siblings().addClass("on");
});
$(nav).mouseleave(function () {
  $(header).removeClass("active");
  $(this).siblings().removeClass("on");
});

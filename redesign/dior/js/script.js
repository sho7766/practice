let header = document.querySelector("header");
let nav = document.querySelectorAll(".nav ul li");
let menu = document.querySelectorAll(".nav > ul > li");

$(nav).mouseenter(function () {
  $(header).addClass("active");
  $(menu).siblings().addClass("on");
});
$(nav).mouseleave(function () {
  $(header).removeClass("active");
});

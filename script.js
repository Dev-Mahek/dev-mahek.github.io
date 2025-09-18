const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  let elemC = document.querySelector("#elem-container");
  let fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  // -------------can also be done with this method but its a bit long method-------------
  // let elem1 = document.querySelector("#elem1");

  // elem1.addEventListener("mouseenter", function () {
  //   let image = elem1.getAttribute("data-image");
  //   fixed.style.backgroundImage = `url(${image})`;
  // });
  // -------------------------easy methiod using foreach👇👇------------------------------

  let elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

swiperAnimation();

page4Animation();

let menu = document.querySelector("nav h3");
let full = document.querySelector("#full-scr");
let navimg = document.querySelector("nav img");
let flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    navimg.style.opacity = 0;
    flag = 1;
  } else {
    full.style.top = "-100%";
    navimg.style.opacity = 1;
    flag = 0;
  }
});

let load = document.querySelector("#loader");
setTimeout(function () {
  load.style.top = "-100%";
}, 4000);

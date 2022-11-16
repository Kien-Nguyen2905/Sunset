function handleSlider() {
  var elem = document.querySelector(".slider__wrap-main");
  if (!elem) return;
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    draggable: ">1",
    prevNextButtons: false,
    wrapAround: true,
  });
  let btnPrev = document.querySelector(".btn-arrow.prev"),
    btnNext = document.querySelector(".btn-arrow.next"),
    blackPrev = document.querySelector(".slider-btn.prev"),
    blackNext = document.querySelector(".slider-btn.next");
  btnPrev.addEventListener("click", (e) => {
    e.preventDefault();
    flkty.previous(true);
  });
  btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    flkty.next(true);
  });
  blackPrev.addEventListener("click", () => {
    flkty.previous(true);
  });
  blackNext.addEventListener("click", () => {
    flkty.next(true);
  });
}
handleSlider();
// header
function handleHeader() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var header = document.querySelector("header");
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0px";
    } else {
      if (currentScrollPos > header.offsetHeight) {
        header.style.top = "-100px";
      }
    }
    prevScrollpos = currentScrollPos;
  };
}
handleHeader();
// gallery
Fancybox.bind('[data-fancybox="image"]', {
  infinite: true,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowRight: "next",
    ArrowLeft: "prev",
  },
});
// Menu Mobile
function menuMobile() {
  let btnMenu = document.querySelector(".btn__mobile"),
    navMb = document.querySelector(".nav");
  btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    navMb.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}
menuMobile();
// Brand
// function handleBrand() {
//   let brand = document.querySelector(".events__brand");
//   if (!brand) return;
//   var flkty = new Flickity(brand, {
//     // options
//     cellAlign: "left",
//     contain: true,
//     draggable: ">1",
//     prevNextButtons: false,
//     wrapAround: true,
//     freeScroll: true,
//   });
// }
// handleBrand();
function video() {
  let iconPlay = document.querySelector(".video__play"),
    popUpVideo = document.querySelector(".popupvideo"),
    iframe = document.querySelector(".popupvideo__inner-iframe iframe"),
    btnClose = document.querySelector(".popupvideo__inner-close");
  if (!iconPlay) return;
  iconPlay.addEventListener("click", (e) => {
    e.preventDefault();
    popUpVideo.classList.add("active");
  });
  btnClose.addEventListener("click", () => {
    popUpVideo.classList.remove("active");
  });
}
video();
// brand
// function scrollBrand() {
//   let brand = document.querySelector(".events__brand");
//   var flkty = new Flickity(brand, {
//     // options
//     cellAlign: "left",
//     contain: true,
//     draggable: ">1",
//     prevNextButtons: false,
//     wrapAround: true,
//     pageDots: false,
//     freeScroll: true,
//     lazyLoad: 3,
//   });
// }
// scrollBrand();
// Header
function scrollService() {
  let carousel = document.querySelector(".carousel__wrap");
  var flkty = new Flickity(carousel, {
    // options
    cellAlign: "center",
    contain: true,
    draggable: ">1",
    prevNextButtons: false,
    wrapAround: true,
    pageDots: true,
    freeScroll: true,
    lazyLoad: 3,
  });
}
scrollService();
// client
function handleClient() {
  let textClient = document.querySelectorAll(".out__item"),
    prev = document.querySelector(".be__arrow-prev"),
    next = document.querySelector(".be__arrow-next");
  if (!next) return;
  let currentClient = 0;
  next.addEventListener("click", () => {
    if (currentClient < textClient.length - 1) {
      textClient[currentClient].classList.remove("active");
      textClient[currentClient + 1].classList.add("active");
      currentClient++;
    } else {
      textClient[currentClient].classList.remove("active");
      currentClient = 0;
      textClient[currentClient].classList.add("active");
    }
  });
  prev.addEventListener("click", () => {
    if (currentClient > 0) {
      textClient[currentClient].classList.remove("active");
      textClient[currentClient - 1].classList.add("active");
      currentClient--;
    } else {
      textClient[currentClient].classList.remove("active");
      currentClient = textClient.length - 1;
      textClient[textClient.length - 1].classList.add("active");
    }
  });
}
handleClient();
function handleLang() {
  var currentLang = document.querySelector(".header__lang span");
  var option = document.querySelector(".header__lang-option");
  var optionItem = document.querySelectorAll(
    ".header__lang-option .option-item"
  );

  currentLang.addEventListener("click", (e) => {
    option.classList.toggle("active");
    e.stopPropagation();
  });
  optionItem.forEach((item) => {
    item.addEventListener("click", () => {
      var optionText = item.textContent;
      var currentTetx = currentLang.textContent;
      item.innerHTML = currentTetx;
      currentLang.innerHTML = optionText;
    });
  });
  document.addEventListener("click", () => {
    option.classList.remove("active");
  });
}
handleLang();
// btt
function handleBtt() {
  var backToTop = document.querySelector(".btt");
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y > document.body.offsetHeight / 2) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });
  backToTop.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
  });
}
handleBtt();
function handleTag() {
  let tab = document.querySelectorAll(".scroll__tab-item");
  let list = document.querySelectorAll(".gallery-wrap");
  tab.forEach((tabs) => {
    tabs.addEventListener("click", (e) => {
      e.preventDefault();
      tab.forEach((tabs) => {
        tabs.classList.remove("active");
      });
      tabs.classList.add("active");
      let id = tabs.dataset.tab;
      list.forEach((item) => {
        item.classList.remove("active");
      });
      document.querySelector(".list-" + id).classList.add("active");
    });
  });
}
handleTag();
function handleAccordion() {
  let accordion = document.querySelectorAll(".accordion__item");
  accordion.forEach(function (items) {
    items.addEventListener("click", function (e) {
      e.preventDefault();
      const next = items.nextElementSibling;
      if (items.classList.contains("active")) {
        items.classList.remove("active");
        next.classList.remove("active");
        // next.removeAttribute("style");
      } else {
        items.classList.add("active");
        next.classList.add("active");
        // next.style.height = `${next.scrollHeight}px`;
      }
    });
  });
}
handleAccordion();

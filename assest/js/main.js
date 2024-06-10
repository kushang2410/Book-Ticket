var swiper = new Swiper(".mySwiper", {
  speed: 500,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
$(".light").on("click", function (e) {
  e.preventDefault();
  $(":root").css({ "--aside-white-bg": "#ffffff" });
  $(":root").css("--bs-secondary-rgb", " 108, 117, 125");
  $(":root").css("--bs-dark-rgb", " 33, 37, 41");
  $(":root").css("--bs-body-bg", "#fff");
  $(":root").css("--bs-body-bg", "248, 249, 250");
  $(":root").css("--bs-bg-opacity", "1");
  $(":root").css("--gray-color", "#f7f7f7");
  $(":root").css("--bs-body-bg-rgb", " 255, 255, 255");
  $(":root").css("--bs-accordion-border-color", " #dee2e6");
  $(".logo-light").attr("src","assest/images/logo.svg");
});
$(".dark").on("click", function (e) {
  e.preventDefault();
  $(":root").css("--aside-white-bg", "#222529");
  $(":root").css("--bs-secondary-rgb", "173, 181, 189");
  $(":root").css("--bs-dark-rgb", "206, 212, 218");
  $(":root").css("--bs-body-bg", "#212529");
  $(":root").css("--bs-body-bg", "34, 37, 41");
  $(":root").css("--bs-bg-opacity", "0");
  $(":root").css("--gray-color", "34, 37, 41");
  $(":root").css("--bs-body-bg-rgb", "34, 37, 41");
  $(":root").css("--bs-accordion-border-color", "#222529");
  $(".logo-light").attr("src","assest/images/logo-light.svg");
});
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

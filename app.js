var swiper = new Swiper(".Destacado-slider", {
  slidesPerView: 3,
  spaceBetween: 80,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

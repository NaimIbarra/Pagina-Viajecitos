var swiper = new Swiper(".carrousel-slider", {
  slidesPerView: 3,
  spaceBetween: 50,
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

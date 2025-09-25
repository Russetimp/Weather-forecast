/**
 * Инициализирует и настраивает экземпляр Swiper для горизонтального слайдера
 *
 * @see {@link https://swiperjs.com/swiper-api} Swiper API Documentation
 */

import Swiper from "swiper/bundle";

export function initSwiper() {
  const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    resistance: true, // Включаем сопротивление краям (по умолчанию)
    resistanceRatio: 0, // Убираем "растяжение" при сопротивлении
    slidesPerView: 5, // Количество видимых слайдов
    slidesPerGroup: 1,
    spaceBetween: 10, // Расстояние между слайдами
    //  loop: false,
    navigation: {
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    },

    breakpoints: {
      600: {
        slidesPerView: 6,
      },
      700: {
        slidesPerView: 7,
      },
      800: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  return swiper;
}

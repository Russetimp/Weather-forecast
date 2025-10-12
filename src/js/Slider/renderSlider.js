/**
 * Добавляет слайдер с почасовым прогнозом погоды на ближайшие 2 дня
 * Фильтрует данные API для отображения прогноза до конца второго дня
 * После фильтрации формирует HTML слайды и вставляет их в контейнер с классом ".swiper-wrapper".
 * Пересоздаёт слайдер, если он уже существует.
 *
 * @param {Object} api - Данные от API OpenWeatherMap (5-day forecast)
 * @param {number} timezone - Смещение временной зоны в секундах
 * @param {Date} today - Текущая дата (в UTC)
 */

import { initSwiper } from "./swiperInit.js";
import { createSlide } from "./createSlide.js";

let swiper = null;

export async function renderSlider(api, timezone, today) {
  try {
    // Определяем третий день для фильтрации слайдера
    const thirdDayDt =
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate() + 2,
        0,
        0,
        0
      ) /
        1000 -
      timezone;

    // Фильтруем список прогнозов — текущий и следующий день до 24:00
    const filteredList = api.list.filter((item) => item.dt <= thirdDayDt);

    // Сбор контейнера
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    if (!swiperWrapper) {
      console.error("Контейнер слайдера не найден");
      return;
    }

    swiperWrapper.innerHTML = filteredList
      .map((item) => createSlide(item, timezone))
      .join("");

    // Если слайдер существует - уничтожаем его
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }

    // Инициализируем слайдер заново
    swiper = initSwiper();
  } catch (error) {
    console.error("Ошибка запроса погоды на 5 дней", error.message);
  }
}

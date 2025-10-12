/**
 * Добавляет таблицу с прогнозом погоды на 5 дней
 *
 * @param {Object} data - Данные от API OpenWeatherMap (5-day forecast)
 * @param {Array} data.list - Список прогнозов с интервалом 3 часа
 * @param {Date} today - Текущая дата и время в UTC
 */

import { getFiveDays } from "./getFiveDays";
import { getIndexFiveDays } from "./getIndexFiveDays";

export function renderTable(data, today) {
  const container = document.querySelector(".weather-grid__wrapper");
  if (!container) {
    console.error("Контейнер для таблицы не найден");
    return;
  }

  try {
    const fiveDays = getFiveDays(today);
    const indexFiveDays = getIndexFiveDays(today);

    // Заполнение таблицы
    let html = '<div class="weather-grid__header">Прогноз на пять дней</div>';

    for (let i = 0; i < 5; i++) {
      const item = data.list[indexFiveDays[i]];

      html += `
        <div class="weather-grid__day">${fiveDays[i]}</div>
        <div class="weather-grid__icon-wrapper">
          <img src="https://openweathermap.org/img/wn/${
            item.weather[0].icon
          }@2x.png" alt="" width="75" height="75" class="weather-grid__icon" />
        </div>
        <div class="weather-grid__temp">${
          (Math.round(item.main.feels_like) > 0 ? "+" : "") + Math.round(item.main.feels_like) + "&deg"
        }</div>
        <div class="weather-grid__description">${
          item.weather[0].description
        }</div>`;
    }
    container.innerHTML = html;

  } catch (error) {
    console.error("Ошибка при добавлении таблицы", error.message);
  }
}

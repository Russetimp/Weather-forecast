/**
 * Добавляет слайдер с почасовым прогнозом погоды на ближайшие 2 дня
 * Фильтрует данные API для отображения прогноза до конца второго дня
 * 
 * @param {Object} api - Данные от API OpenWeatherMap (5-day forecast)
 * @param {number} timezone - Смещение временной зоны в секундах
 * @param {Date} today - Текущая дата (в UTC)
*/

import { initSwiper } from "./swiperInit.js";

let swiper = null;
export async function addSlider(api, timezone, today) {
  const data = api;
  try {
    // Определяем третий день для фильтрации слайдера
    let thirdDay = new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate() + 2,
        0,
        0,
        0
      )
    );
    //  console.log("thirdDay:", thirdDay);
    let thirdDayDt = thirdDay.getTime() / 1000 - timezone;

    // console.log("thirdDay:", thirdDayDt);
    const displaySwiperWrapper = function () {
      // Фильтруем список прогнозов — текущий и следующий день до 24:00
      const filteredList = [];
      for (const i of data.list) {
        const iData = i.dt;
        // console.log(iData);
        if (iData > thirdDayDt) {
          break;
        } else {
          filteredList.push(i);
          // console.log(i);
        }
      }
      // console.log(filteredList.length);
      // console.log(filteredList);

      // Очищаем контейнер
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      swiperWrapper.innerHTML = "";

      // Добавляем слайды в слайдер
      filteredList.forEach((item) => {
        const data = new Date((item.dt + timezone) * 1000);
        const hours = data.getUTCHours().toString().padStart(2, "0");
        // console.log(hours);
        const minutes = data.getUTCMinutes().toString().padStart(2, "0");
        const time = `${hours}:${minutes}`;
        const slideHTML = `
                        <div class="swiper-slide">
                          <time class="swiper-slide__time" datetime="${time}">${time}</time>
                          <img src="https://openweathermap.org/img/wn/${
                            item.weather[0].icon
                          }@2x.png" alt="" width="75" height="75" class="swiper-slide__image" />
                          <p class="swiper-slide__temperature">${
                            Math.round(item.main.temp) + "&deg"
                          };</p>
                        </div>
                      `;

        // Вставляем слайд
        swiperWrapper.insertAdjacentHTML("beforeend", slideHTML);
      });

      // Если слайдер существует - уничтожаем его
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }

      // Инициализируем слайдер заново
      swiper = initSwiper();
    };

    displaySwiperWrapper();
  } catch (error) {
    console.log("Ошибка запроса погоды на 5 дней", error.message);
  }
}

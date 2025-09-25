/**
 * Запрашивает у пользователя разрешение на доступ к геолокации
 * При успешном получении координат отображает текущую погоду
 * и детальный прогноз для местоположения пользователя
 *
 *
 * @see {@link module:renderWeatherData} Функция отображения данных на страницы
 * @see {@link module:api} Функция запроса детального прогноза
 */

import { renderWeatherData } from "./renderWeatherData";

export function displayWeatherByUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        renderWeatherData(null, lat, lon);
      },

      function (error) {
        console.log("Ошибка определения геолокации: " + error.message);
      }
    );
  } else {
    console.log("Геолокация не поддерживается вашим браузером");
  }
}

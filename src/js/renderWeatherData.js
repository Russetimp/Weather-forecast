/**
 * Отображает данные погоды на странице по названию города или координатам.
 *
 * Если указано название города, функция запрашивает данные по названию,
 * затем получает данные по геопозиции города для отображения детального прогноза.
 * Если указаны координаты (широта и долгота), функция сначала получает данные
 * по координатам, затем данные по названию города.
 *
 * @param {string|null} locationName - Название населённого пункта для поиска погоды (опционально).
 * @param {number|null} lat - Широта геолокации (опционально).
 * @param {number|null} lon - Долгота геолокации (опционально).
 *
 * @throws {Error} Если ни название города, ни координаты не заданы.
 *
 * @see {@link module:getWeatherByCityName} Запрос данных погоды по названию города.
 * @see {@link module:getWeatherByCoordinates} Запрос данных погоды по координатам геолокации.
 * @see {@link module:addSlider} Функция создания слайдера прогноза.
 * @see {@link module:addTable} Функция создания таблицы прогноза.
 * @see {@link module:displayCurrentWeather} Функция отображения текущей погоды.
 */

import { getWeatherByCityName } from "./getWeatherByCityName";
import { getWeatherByCoordinates } from "./getWeatherByCoordinates";
import { addSlider } from "./addSlider";
import { addTable } from "./addTable";
import { displayCurrentWeather } from "./displayCurrentWeather";
import { rainEffect } from "./rainEffect";

export async function renderWeatherData(
  locationName = null,
  lat = null,
  lon = null
) {
  try {
    let data;
    let timezone;
    let today;
    let dataGeolocation;

    if (lat == null && locationName != null) {
      data = await getWeatherByCityName(locationName);
      console.log(data);
      timezone = data.city.timezone;
      lat = data.city.coord.lat;
      lon = data.city.coord.lon;
      dataGeolocation = await getWeatherByCoordinates(lat, lon);
    } else if (lat != null && locationName == null) {
      dataGeolocation = await getWeatherByCoordinates(lat, lon);
      console.log(dataGeolocation);
      locationName = dataGeolocation.name;
      data = await getWeatherByCityName(locationName);
      console.log(data);
      timezone = data.city.timezone;
    } else {
      throw new Error("lat и locationName не заданы");
    }

    //Получение первого дня
    today = new Date((data.list[0].dt + timezone) * 1000);

    // Заполнение  "current"
    await displayCurrentWeather(dataGeolocation);

    // Заполнение слайдера
    await addSlider(data, timezone, today);
    document.querySelector(".one-day").style.visibility = "visible"; // показываем таблицу

    // Заполнение таблицы
    await addTable(data, today);
    document.querySelector(".weather-grid").style.visibility = "visible"; // показываем таблицу

    //Дождь
    await rainEffect(dataGeolocation);
  } catch (error) {
    console.error("Ошибка при отображении данных:", error.message);
  }
}

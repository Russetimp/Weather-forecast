/**
Отображает данные погоды на странице по названию города или координатам.
Если указано название города, функция запрашивает данные по названию,
затем получает данные по геопозиции города для отображения детального прогноза.
Если указаны координаты (широта и долгота), функция сначала получает данные
по координатам, затем данные по названию города.

@param {string|null} locationName - Название населённого пункта для поиска погоды (опционально).
@param {number|null} lat - Широта геолокации (опционально).
@param {number|null} lon - Долгота геолокации (опционально).
@throws {Error} Если ни название города, ни координаты не заданы.
@throws {Error} При ошибках получения данных с сервера.
@see {@link module:getWeatherByCityName} Запрос данных погоды по названию города.
@see {@link module:getWeatherByCoordinates} Запрос данных погоды по координатам геолокации.
@see {@link module:renderSlider} Функция создания слайдера прогноза.
@see {@link module:renderTable} Функция создания таблицы прогноза.
@see {@link module:renderCurrentWeather} Функция отображения текущей погоды.
@see {@link module:updateRainEffect} Функция обновления эффекта дождя.
@see {@link module:updateWeatherBackground} Функция обновления фона в зависимости от погоды.
@see {@link module:updateColorTheme} Функция обновления цветовой темы.
@see {@link module:addNewHistoryItem} Функция добавления элемента истории поиска.
@see {@link module:renderHistory} Функция отрисовки истории поиска.
@see {@link module:closePreloader} Функция скрытия истории заставки.
*/

import { getWeatherByCityName } from "./Api/getWeatherByCityName";
import { getWeatherByCoordinates } from "./Api/getWeatherByCoordinates";
import { renderSlider } from "./Slider/renderSlider";
import { renderTable } from "./Table/renderTable";
import { renderCurrentWeather } from "./renderCurrentWeather";
import { updateWeatherEffects } from "../js/WeatherEffects/updateWeatherEffects";
import { updateWeatherBackground } from "./updateWeatherBackground";
import { updateColorTheme } from "./updateColorTheme";
import { addNewHistoryItem } from "./HistoryPopup/historyService";
import { renderHistory } from "./HistoryPopup/renderHistory";
import { closePreloader } from "./Preloader/closePreloader";

export async function renderWeatherData(
  locationName = null,
  lat = null,
  lon = null
) {
  try {
    // Валидация входных данных
    if (
      (lat == null && locationName == null) ||
      (lat != null && locationName != null)
    ) {
      throw new Error(
        "Должен быть задан либо lat/lon, либо locationName, но не оба."
      );
    }

    let data, timezone, dataGeolocation;
    if (locationName) {
      // Получаем данные по названию города
      data = await getWeatherByCityName(locationName);
      timezone = data.city.timezone;
      lat = data.city.coord.lat;
      lon = data.city.coord.lon;
      // Получаем данные по координатам
      dataGeolocation = await getWeatherByCoordinates(lat, lon);
    } else {
      // Получаем данные по координатам
      dataGeolocation = await getWeatherByCoordinates(lat, lon);
      locationName = dataGeolocation.name;
      data = await getWeatherByCityName(locationName);
      timezone = data.city.timezone;
    }

    if (!data || !data.list?.length) {
      throw new Error("Получены некорректные данные погоды");
    }

    //Получение первого дня
    const today = new Date((data.list[0].dt + timezone) * 1000);
    
    // Скрытие Preloader
    closePreloader();

    // Отображаем разные части интерфейса
    renderCurrentWeather(dataGeolocation);
    await renderSlider(data, timezone, today);
    document.querySelector(".one-day").style.visibility = "visible"; // показываем слайдер

    await renderTable(data, today);
    document.querySelector(".weather-grid").style.visibility = "visible"; // показываем таблицу
    let snowContainer = document.getElementById("snow-container");
    if (snowContainer) {
      // если элемент найден
      snowContainer.remove(); // удаляем его из DOM
    }

    updateWeatherEffects(dataGeolocation);
    updateWeatherBackground(dataGeolocation);
    updateColorTheme(dataGeolocation);

    await addNewHistoryItem();

    renderHistory();
  } catch (error) {
    console.error("Ошибка при отображении данных:", error.message);
  }
}

/**
 * Обновляет визуальные эффекты погоды (дождь или снег) в зависимости от иконки погоды из данных.
 *
 * @param {Object} dataGeolocation - Объект с данными о погоде, содержащий поле weather с массивом, где [0].icon — иконка погоды.
 */
import { updateRainEffect } from "./updateRainEffect";
import { updateSnowEffect } from "./updateSnowEffect";

export function updateWeatherEffects(dataGeolocation) {
  if (!dataGeolocation?.weather?.[0]?.icon) {
    console.log("Иконка погоды не найдена");
    return;
  }

  const weatherIcon = dataGeolocation.weather[0].icon;
  const rainIcons = ["09n", "09d", "10n", "10d", "11d", "11n"];
  const snowIcons = ["13n", "13d"];

  const rainContainer = document.getElementById("rain-container");
  if (rainContainer) rainContainer.remove();
  const snowContainer = document.getElementById("snow-container");
  if (snowContainer) snowContainer.remove();

  if (rainIcons.includes(weatherIcon)) {
    updateRainEffect();
  } else if (snowIcons.includes(weatherIcon)) {
    updateSnowEffect();
  }
}

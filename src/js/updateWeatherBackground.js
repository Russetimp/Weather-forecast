/**
 * Обновляет фон страницы в зависимости от иконки погоды, меняя класс у body.
 * Если иконка погоды отсутствует, выводит предупреждение и завершает выполнение.

 * @param {Object} dataGeolocation - Объект с данными о погоде.
 */

export function updateWeatherBackground(dataGeolocation) {
  if (!dataGeolocation?.weather?.[0]?.icon) {
    console.error("Иконка погоды не найдена");
    return;
  }

  const weatherIcon = dataGeolocation.weather[0].icon;
  document.body.className = document.body.className.replace(
    /\bweather-\w+/g,
    ""
  );
  document.body.classList.add(`weather-${weatherIcon}`);
}

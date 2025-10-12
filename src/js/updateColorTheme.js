/**

 * Функция проверяет текущую тему (дневная или ночная) и иконку погоды,
 * и переключает класс `light-theme` у тега body при необходимости,
 * чтобы тема соответствовала времени суток, определённому по иконке.
 *
 * @param {Object} dataGeolocation - Объект с данными геолокации и погодой.
 * @param {Array} dataGeolocation.weather - Массив погодных условий.
 * @param {string} dataGeolocation.weather[0].icon - Код иконки погоды (например, "01d" или "04n").

 */

export function updateColorTheme(dataGeolocation) {
  if (!dataGeolocation?.weather?.[0]?.icon) {
    console.log("Иконка погоды не найдена");
    return;
  }

  const dayIcons = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "50d"];
  const body = document.body;

  const weatherIcon = dataGeolocation.weather[0].icon;
  const isDayIcon = dayIcons.includes(weatherIcon);
  body.classList.toggle("light-theme", isDayIcon);
}

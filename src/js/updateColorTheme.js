/**
 * Обновляет цветовую тему сайта в зависимости от иконки погоды.
 *
 * Функция проверяет текущую тему (дневная или ночная) и иконку погоды,
 * и переключает класс `light-theme` у тега body при необходимости,
 * чтобы тема соответствовала времени суток, определённому по иконке.
 *
 * @param {Object} dataGeolocation - Объект с данными геолокации и погодой.
 * @param {Array} dataGeolocation.weather - Массив погодных условий.
 * @param {string} dataGeolocation.weather[0].icon - Код иконки погоды (например, "01d" или "04n").
 * @returns {Promise<void>} Функция ничего не возвращает, работает с DOM.
 *
 * @example
 * updateColorTheme({
 *   weather: [{ icon: "01d" }]
 * });
 */


export async function updateColorTheme(dataGeolocation) {
const dayIcons = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "50d"];
const body = document.body;
// Получаем иконку погоды
const weatherIcon = dataGeolocation.weather[0].icon;
const isDayIcon = dayIcons.includes(weatherIcon);
const hasLightTheme = body.classList.contains('light-theme');

if (isDayIcon !== hasLightTheme) {
  body.classList.toggle('light-theme');
}
}
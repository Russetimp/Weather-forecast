/**
 * Получает данные текущей погоды и стиля для записи в историю.
 *
 * @returns {Object} Объект с полями:
 *   - cityName {string} - Название города.
 *   - weatherIcon {string} - URL иконки текущей погоды.
 *   - weatherTemperature {string} - Текстовое значение температуры.
 *   - linearGradientBody {string|null} - CSS-градиент фона body или null, если не найден.
 */

export function getDataForNewHistoryItem() {
  const cityName = document.querySelector(".current__city").textContent;
  const weatherIcon = document.querySelector(".current-perceived__icon").src;
  const weatherTemperature = document.querySelector(
    ".current__temperature"
  ).textContent;
  const bodyStyle = getComputedStyle(document.querySelector("body"));

  // Поиск linear-gradient в background-body
  const backgroundBody = bodyStyle.background.match(/linear-gradient\((.+)\)/);
  const linearGradientBody = backgroundBody ? backgroundBody[0] : null;

  return {
    cityName: cityName,
    weatherIcon: weatherIcon,
    weatherTemperature: weatherTemperature,
    linearGradientBody: linearGradientBody,
  };
}

/**
 * Устанавливает обработчик события отправки формы.
 * Обрабатывает ввод города, вызывает функцию получения погоды,
 * очищает поле ввода и снимает с него фокус.
 *
 * @param {HTMLFormElement} form - Элемент формы.
 * @param {HTMLInputElement} input - Поле ввода города.
 * @param {function} renderWeatherData - Функция Отображения данных погоды на страницы.
 */

import { validateCityName } from "./validateCityName";
import { renderWeatherData } from "../renderWeatherData";

export function handleFormSubmit(form, input) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const city = input.value.trim();

    if (!validateCityName(city)) {
      input.focus();
      return;
    }

    renderWeatherData(city);
    input.value = "";
    input.blur();
  });
}

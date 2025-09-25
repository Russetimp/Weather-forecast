/**
 * Устанавливает обработчик события отправки формы.
 * Обрабатывает ввод города, вызывает функцию получения погоды,
 * очищает поле ввода и снимает с него фокус.
 *
 * @param {HTMLFormElement} form - Элемент формы.
 * @param {HTMLInputElement} input - Поле ввода города.
 * @param {function} renderWeatherData - Функция Отображения данных погоды на страницы.
 */

import { renderWeatherData } from "./renderWeatherData";

export function handleFormSubmit(form, input) {
  form.addEventListener("submit", function (e) {
    // отменяем перезагрузку страницы при помощи Event.preventDefault()
    e.preventDefault();
    // trim() удаляет пробельные символы с начала и конца строки(пробел, табуляция,
    // неразрывный пробел и прочие) и все символы конца строки
    const city = input.value.trim();

    if (!city) {
      alert("Пожалуйста, введите название города");
      return;
    }

    renderWeatherData(city);
    input.value = "";
    input.blur();
  });
}

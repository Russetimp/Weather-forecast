/**
 * Устанавливает обработчик события отправки формы.
 * Обрабатывает ввод города, вызывает функцию получения погоды,
 * очищает поле ввода и снимает с него фокус.
 *
 * @param {HTMLFormElement} form - Элемент формы.
 * @param {HTMLInputElement} input - Поле ввода города.
 * @param {function} getWeatherByLocation - Функция для получения погоды по городу.
*/

export function handleFormSubmit(form, input, getWeatherByLocation) {
  form.onsubmit = function (e) {
    // отменяем перезагрузку страницы при помощи Event.preventDefault()
    e.preventDefault();
      // trim() удаляет пробельные символы с начала и конца строки(пробел, табуляция,
      // неразрывный пробел и прочие) и все символы конца строки
    const city = input.value.trim();
    getWeatherByLocation(city);
    input.value = '';
    input.blur();
  };
}
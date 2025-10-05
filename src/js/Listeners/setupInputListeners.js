/**
 * Добавляет слушатели событий к полю ввода для обновления состояния формы.
 * Скрываем input::after
 * @param {HTMLInputElement} input - Поле ввода
 * @param {HTMLElement} form - Элемент формы
 */

export function setupInputListeners(input, form) {
  function updateFormState() {
    if (document.activeElement === input || input.value.trim() !== "") {
      form.classList.add("hide-after");
    } else {
      form.classList.remove("hide-after");
    }
  }

  // Добавляем слушатели событий
  input.addEventListener("input", updateFormState);
  input.addEventListener("focus", updateFormState);
  input.addEventListener("blur", updateFormState);
}

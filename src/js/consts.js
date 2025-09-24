/**
 * DOM-элементы главной формы поиска погоды
 * Экспортируются для использования в модулях обработки событий
 * 
 * @type {HTMLFormElement} form - Форма для ввода города
 * @type {HTMLInputElement} input - Поле ввода названия города
*/

const form = document.querySelector(".header__form");
const input = document.querySelector(".header__input");

export {form, input}

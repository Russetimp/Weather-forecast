import "swiper/css/bundle";
import "../scss/main.scss";
import { getUserLocation } from "./getUserLocation.js";
import { displayCurrentWeather } from "./displayCurrentWeather.js";
import { displayDetailed } from "./displayDetailed.js";
import { initSwiper } from "./swiperInit.js";
import { setupFormListeners } from "./setupFormListeners.js";
import { handleFormSubmit } from "./formHandler.js";
import { api } from "./api.js";

//Элементы страницы
const form = document.querySelector(".header__form");
const input = document.querySelector(".header__input");
// Слайдер
// const swiper = initSwiper();
//Скрываем input::after
setupFormListeners(input, form);

//Обработка работы Формы
// **Переписать
handleFormSubmit(form, input, displayDetailed);

// //Запрос у пользователя геолокации
// getUserLocation();

//////Проверка displayCurrentWeather
//// Токио UTC +9:00
// displayCurrentWeather(35.6895, 139.692);
////Измайлово
// displayCurrentWeather(55.8097935, 37.792030999999994);
//// Веллингтон UTC +12:00
displayCurrentWeather(-41.2866, 174.776);
// getWeatherByLocation("Уфа");

// getWeatherByLocation("Москва");
displayDetailed("Вашингтон");



//// Вашингтон, UTC -7:00
//// Майами UTC -4:00
//// Измайлово UTC +3:00
//// Токио UTC +9:00
//// Веллингтон UTC +12:00

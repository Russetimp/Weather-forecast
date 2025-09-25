import "swiper/css/bundle";
import "../scss/main.scss";
import { displayWeatherByUserLocation } from "./displayWeatherByUserLocation.js";
import { setupInputListeners } from "./setupInputListeners.js";
import { handleFormSubmit } from "./handleFormSubmit.js";
import { form, input } from "./consts.js";

//Запрос у пользователя геолокации
displayWeatherByUserLocation();

//Добавляет слушатели событий к полю ввода
setupInputListeners(input, form);

//Обработка работы Формы
handleFormSubmit(form, input);

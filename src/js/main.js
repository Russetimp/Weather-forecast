import "swiper/css/bundle";
import "../scss/main.scss";
import { displayWeatherByUserLocation } from "./displayWeatherByUserLocation.js";
import { handleFormSubmit } from "./handleFormSubmit.js";
import { form, input } from "./consts.js";
import { setupAllListeners } from "./Listeners/setupAllListeners.js";


//Запрос у пользователя геолокации
displayWeatherByUserLocation();

//Добавляет слушатели событий
setupAllListeners();

//Обработка работы Формы
handleFormSubmit(form, input);

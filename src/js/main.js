import "swiper/css/bundle";
import "../scss/main.scss";
import { renderWeatherByUserLocation } from "./renderWeatherByUserLocation.js";
import { handleFormSubmit } from "./FormSubmit/handleFormSubmit.js";
import { form, input } from "./consts.js";
import { setupAllListeners } from "./Listeners/setupAllListeners.js";

//Запрос у пользователя геолокации
renderWeatherByUserLocation();

//Добавляет слушатели событий
setupAllListeners();

//Обработка работы Формы
handleFormSubmit(form, input);

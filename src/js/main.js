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

// Добавляем контейнер для дождя в документа, чтобы он был позади всего контента
const rainContainer = document.createElement('div');
rainContainer.id = 'rain-container';
document.body.insertBefore(rainContainer, document.body.firstChild);

// Функция случайного числа в диапазоне
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Создаем 150 капель с рандомным положением и скоростью
const dropsCount = 150;

for (let i = 0; i < dropsCount; i++) {
  const drop = document.createElement('div');
  drop.className = 'rain-drop';

  // Горизонтальная позиция
  drop.style.left = `${random(0, window.innerWidth)}px`;

  // Задаем задержку, чтобы капли падали не синхронно
  drop.style.animationDelay = `${random(0, 5)}s`;

  // Скорость падения от 1.5 до 3.5 секунд
  drop.style.animationDuration = `${random(1.5, 3.5)}s`;

  // Начальная вертикальная позиция вне экрана (чтобы не появлялись сразу)
  drop.style.top = `${random(-100, 0)}px`;

  rainContainer.appendChild(drop);
}
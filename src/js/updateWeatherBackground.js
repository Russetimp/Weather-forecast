export async function updateWeatherBackground(dataGeolocation) {
// Получаем иконку погоды
const weatherIcon = dataGeolocation.weather[0].icon;
console.log (weatherIcon);
// Удаляем предыдущий класс погоды
document.body.className = document.body.className.replace(/\bweather-\w+/g, '');

// Добавляем новый класс
document.body.classList.add(`weather-${weatherIcon}`);
console.log (`weather-${weatherIcon}`);
// setTimeout(() => {
//     body.classList.add(`weather-${weatherIcon}`);
//   }, 10);
}
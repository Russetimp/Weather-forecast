export async function updateWeatherBackground(dataGeolocation) {
// Получаем иконку погоды
const weatherIcon = dataGeolocation.weather[0].icon;

// Удаляем предыдущий класс погоды
document.body.className = document.body.className.replace(/\bweather-\w+/g, '');

// Добавляем новый класс
document.body.classList.add(`weather-${weatherIcon}`);
}
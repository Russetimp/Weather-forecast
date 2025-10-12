/**
 * Выполняет запрос к OpenWeatherMap API для получения прогноза погоды на 5 дней
 * с интервалом 3 часа для указанного населенного пункта
 *
 * @param {string} locationName - Название города или населенного пункта
 * @returns {Promise<Object>} Ответ API с данными прогноза погоды
 * @throws {Error} При ошибках сети, неверном API ключе или городе
 * @see {@link https://openweathermap.org/api/5-day-forecast} Документация API
 */

const apiKey = import.meta.env.VITE_KEY;
const baseApiUrlByCityName = "https://api.openweathermap.org/data/2.5/forecast";

export async function getWeatherByCityName(locationName) {
  const url = `${baseApiUrlByCityName}?q=${locationName}&appid=${apiKey}&lang=ru&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка сети или API");
    return response.json();
  } catch (error) {
    console.error("Ошибка запроса погоды:", error.message);
    throw error;
  }
}

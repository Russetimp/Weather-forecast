/**
 * Запрос данных о погоде по координатам (широта и долгота) через API OpenWeatherMap.
 *
 * @async
 * @param {number} lat - Широта.
 * @param {number} lon - Долгота.
 * @returns {Promise<Object>} Объект с данными о погоде.
 * @throws {Error} При ошибках сети или некорректном ответе API.
 */

const apiKey = import.meta.env.VITE_KEY;
const baseApiUrlByCoordinates = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherByCoordinates(lat, lon) {
  const url = `${baseApiUrlByCoordinates}?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка сети или API");
    return response.json();
  } catch (error) {
    console.error("Ошибка запроса погоды:", error.message);
    throw error;
  }
}

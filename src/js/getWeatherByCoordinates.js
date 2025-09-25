const API_KEY = import.meta.env.VITE_KEY;
const BASE_API_URL2 = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherByCoordinates(lat, lon) {
  const url = `${BASE_API_URL2}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка сети или API");
    return await response.json();
  } catch (error) {
    console.error("Ошибка запроса погоды:", error.message);
    throw error;
  }
}

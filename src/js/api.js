const API_KEY = import.meta.env.VITE_KEY;
const BASE_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function api(locationName) {
  const url = `${BASE_API_URL}?q=${locationName}&appid=${API_KEY}&lang=ru&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка сети или API");
    return await response.json();
  } catch (error) {
    console.error("Ошибка запроса погоды:", error.message);
    throw error;
  }
}

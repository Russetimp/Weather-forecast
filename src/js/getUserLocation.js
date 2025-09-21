// Запрос у пользователя геолокации

import { displayCurrentWeather } from "./displayCurrentWeather";
import { api } from "./api";

export function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Координаты", lat, lon);
        const locationName = await displayCurrentWeather(lat, lon);
        api(locationName);
      },
      function (error) {
        console.log("Ошибка определения геолокации: " + error.message);
      }
    );
  } else {
    console.log("Геолокация не поддерживается вашим браузером");
  }
}

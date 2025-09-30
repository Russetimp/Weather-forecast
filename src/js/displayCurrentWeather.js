/**
 * Запрашивает и текущую погоду для указанных координат
 * Создает разметку "current" - информация о текущей погоде, включая температуру,
 * влажность, ветер и видимость с локализованной датой на русском языке
 *
 * @param {number} lat - Широта местоположения
 * @param {number} lon - Долгота местоположения
 * @throws {Error} При ошибках сети или некорректном ответе API
 */

const main = document.querySelector(".main");
const current = document.querySelector(".current");

export async function displayCurrentWeather(api) {
  try {
    /*Добавить обработку ошибок 
    try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Ошибка сети или API: ${response.status} ${response.statusText}`);
    return await response.json();
} catch (error) {
    console.error("Ошибка запроса погоды:", error.message);
    throw error; // или обработать, как нужно
}*/
    const data = api;
    console.log(data);
    console.log(data.name);
    console.log(data.weather[0].icon);

    // Получаем дату с учетом UTC
    let today = new Date((data.dt + data.timezone) * 1000);
    console.log(today.toUTCString());

    // Получаем день недели на русском языке:
    let firstDayOfWeek = today.toLocaleDateString("ru-RU", {
      weekday: "long",
      timeZone: "UTC",
    });
    console.log(firstDayOfWeek);
    //Создаем содержимое current__data
    let currentData =
      firstDayOfWeek +
      ", " +
      today.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });

    // Заменяем в строке формат даты, который получился с точкой после "г."
    currentData = currentData.replace(/\sг\./, "г");

    //Очищаем перед заполнением current
    current.innerHTML = "";
    //Разметка current__city-data
    const currentContent = `
                            <div class="current__city-data">
                              <p class="current__city">${data.name}</p>
                              <p class="current__data">${currentData}</p>
                            </div>

                            <div class="current__weather">
                              <p class="current__temperature">${
                                Math.round(data.main.temp) + "&deg"
                              };</p>
                              <div class="current-perceived">
                                <div class="current-perceived__top">  
                                  <img
                                    src="https://openweathermap.org/img/wn/${
                                      data.weather[0].icon
                                    }@2x.png"
                                    alt=""
                                    width="45"
                                    height="45"
                                    class="current-perceived__icon"
                                  />
                                  <span class="current-perceived__description">
                                    ${data.weather[0].description}
                                  </span>
                                </div>
                                <p class="current-perceived__temperature">Ощущается как  ${
                                  Math.round(data.main.feels_like) + "&deg"
                                };</p>
                              </div>
                              <div class="weather-conditions">
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.wind.speed) + " м/c"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplet-icon lucide-droplet"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.main.humidity) + " %"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.visibility / 1000) + " км"
                                  }</p>
                                </>

                              </div>
                            </div>`;

    //Добавляем на страницу current
    current.insertAdjacentHTML("afterbegin", currentContent);

    return data.name;
  } catch (error) {
    console.log("Ошибка запроса текущей погоды", error.message);
  }
}

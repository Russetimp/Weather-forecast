/**
 * Запрашивает и текущую погоду для указанных координат
 * Создает разметку "current" - информация о текущей погоде, включая температуру,
 * влажность, ветер и видимость с локализованной датой на русском языке
 *
 * @param {number} lat - Широта местоположения
 * @param {number} lon - Долгота местоположения
 * @throws {Error} При ошибках сети или некорректном ответе API
*/

const API_KEY = import.meta.env.VITE_KEY;
const BASE_API_URL2 = "https://api.openweathermap.org/data/2.5/weather";
const main = document.querySelector(".main");
const current = document.querySelector(".current");

export async function displayCurrentWeather(lat, lon) {
  const url = `${BASE_API_URL2}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`;

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

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.name);

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
                                    <img
                                      src="/images/wind.svg"
                                      alt=""
                                      width="90"
                                      height="90"
                                      class="weather-condition__icon"
                                    />
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.wind.speed) + " м/c"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <img
                                      src="/images/humidity.svg"
                                      alt=""
                                      width="90"
                                      height="90"
                                      class="weather-condition__icon"
                                    />
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.main.humidity) + " %"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <img
                                      src="/images/visibility.svg"
                                      alt=""
                                      width="90"
                                      height="90"
                                      class="weather-condition__icon"
                                    />
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

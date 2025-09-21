
<!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplet-icon lucide-droplet"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg> -->
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="24"
     viewBox="0 0 51 24" preserveAspectRatio="xMidYMid meet"
     fill="none" stroke="white" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     class="lucide lucide-droplet-icon lucide-droplet">
  <path d="M25.5 22c3.134 0 5.95-2.664 5.95-5.95 0-2.125-1.275-4-3.4-5.525-1.827-1.275-2.98-3.4-3.4-5.525-0.425 2.125-1.575 4.25-3.4 5.525-2.125 1.53-3.4 3.4-3.4 5.525 0 2.66 2.664 5.95 5.95 5.95z"/>
</svg>

<!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg> -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 60 24"
     fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     class="lucide lucide-eye-icon lucide-eye" preserveAspectRatio="xMidYMid meet">
  <path d="M20.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
  <circle cx="30" cy="12" r="3"/>
</svg>



<!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg> -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 60 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind" preserveAspectRatio="xMidYMid meet">
  <path d="M31.8 19.6A2 2 0 1 0 33 16H20"/>
  <path d="M36.5 8a2.5 2.5 0 1 1 2 4H20"/>
  <path d="M28.8 4.4A2 2 0 1 1 30 8H20"/>
</svg>






//Запрос текущей погоды и отрисовка current__city-data

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
                                  <img
                                    src="/images/wind.svg"
                                    alt=""
                                    width="90"
                                    height="90"
                                    class="weather-condition__icon"
                                  />
                                  <p class="weather-condition__value">${
                                    Math.round(data.wind.speed) + " м/c"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <img
                                    src="/images/humidity.svg"
                                    alt=""
                                    width="90"
                                    height="90"
                                    class="weather-condition__icon"
                                  />
                                  <p class="weather-condition__value">${
                                    Math.round(data.main.humidity) + " %"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <img
                                    src="/images/visibility.svg"
                                    alt=""
                                    width="90"
                                    height="90"
                                    class="weather-condition__icon"
                                  />
                                  <p class="weather-condition__value">${
                                    Math.round(data.visibility / 1000) + " км"
                                  }</p>
                                </div>

                              </div>
                            </div>`;

    //Добавляем на страницу current
    current.insertAdjacentHTML("afterbegin", currentContent);

    return data.name;
  } catch (error) {
    console.log("Ошибка запроса текущей погоды", error.message);
  }
}

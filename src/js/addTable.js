/**
 * Создает и отображает таблицу с прогнозом погоды на 5 дней
 *
 * @param {Object} data - Данные от API OpenWeatherMap (5-day forecast)
 * @param {Array} data.list - Список прогнозов с интервалом 3 часа
 * @param {Date} today - Текущая дата и время в UTC
*/

export async function addTable(data, today) {
  let firstDayOfWeek = today.toLocaleDateString("ru-RU", {
    weekday: "long",
    timeZone: "UTC",
  });
//   console.log("firstDayOfWeek", firstDayOfWeek);

  //Получение дней недели для таблицы
  const daysMap = {
    понедельник: "Пн",
    вторник: "Вт",
    среда: "Ср",
    четверг: "Чт",
    пятница: "Пт",
    суббота: "Сб",
    воскресенье: "Вс",
  };
  let shortDay = daysMap[firstDayOfWeek.toLowerCase()];
  const daysArr = Object.keys(daysMap);
  // Найти индекс текущего дня
  const startIndex = daysArr.indexOf(firstDayOfWeek.toLowerCase());

  // Создать массив из 5 подряд идущих дней, циклически
  const fiveDays = [];
  for (let i = 0; i < 5; i++) {
    const dayIndex = (startIndex + i) % daysArr.length;
    fiveDays.push(daysMap[daysArr[dayIndex]]);
  }
//   console.log(fiveDays);

  // Получение номеров из массива
  let hours = today.getUTCHours();
//   console.log(hours);
  const fiveDays2 = [];
  const nowNext = function (hours) {
    let now;
    let next;
    if (hours >= 15) {
      now = 0;
      if (Math.floor(hours / 3) === 5) {
        next = 8;
        // console.log("=== 15 hours:", hours, "now:", now, "next:", next);
      } else {
        next = ((15 - Math.floor(hours / 3) * 3 + 24) % 24) / 3;
        // console.log("> 15 hours:", hours, "now:", now, "next:", next);
      }
    } else {
      now = ((15 - Math.floor(hours / 3) * 3 + 24) % 24) / 3;
      next = now + 8;
    //   console.log("< 15 hours:", hours, "now:", now, "next:", next);
    }
    fiveDays2.push(now);
    fiveDays2.push(next);
    fiveDays2.push(next + 8);
    fiveDays2.push(next + 16);
    fiveDays2.push(next + 24);

    // console.log("fiveDays2:", fiveDays2);
  };
  nowNext(hours);
  // console.log("next", next);

  // Заполнение таблицы
  const container = document.querySelector(".weather-grid__wrapper");
  container.innerHTML =
    '<div class="weather-grid__header">Прогноз на пять дней</div>';

  for (let i = 0; i < 5; i++) {
    container.innerHTML += `
        <div class="weather-grid__day">${fiveDays[i]}</div>
        <div class="weather-grid__icon-wrapper">
          <img src="https://openweathermap.org/img/wn/${
            data.list[fiveDays2[i]].weather[0].icon
          }@2x.png" alt="" width="75" height="75" class="weather-grid__icon" />
        </div>
        <div class="weather-grid__temp">${
          "+" + Math.round(data.list[fiveDays2[i]].main.feels_like) + "&deg"
        }</div>
        <div class="weather-grid__description">${
          data.list[fiveDays2[i]].weather[0].description
        }</div>`;
  }
}

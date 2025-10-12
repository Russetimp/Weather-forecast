/**
 * Создаёт HTML-разметку для одного слайда с погодой.
 *
 * @param {Object} item - Объект с данными прогноза на определённый временной интервал.
 * @param {number} item.dt - Временная метка прогноза в формате Unix (секунды).
 * @param {Array<Object>} item.weather - Массив с описаниями погоды.
 * @param {string} item.weather[0].icon - Иконка погодного состояния.
 * @param {Object} item.main - Объект с температурными данными.
 * @param {number} item.main.temp - Температура в градусах Цельсия.
 * @param {number} timezone - Смещение временной зоны в секундах.
 *
 * @returns {string} Возвращает HTML-строку с разметкой слайда для слайдера.
 */

export function createSlide(item, timezone) {
  const dataTime = new Date((item.dt + timezone) * 1000);
  const hours = dataTime.getUTCHours().toString().padStart(2, "0");
  const minutes = dataTime.getUTCMinutes().toString().padStart(2, "0");
  const timeStr = `${hours}:${minutes}`;

  return `
          <div class="swiper-slide">
            <time class="swiper-slide__time" datetime="${timeStr}">${timeStr}</time>
            <img src="https://openweathermap.org/img/wn/${
              item.weather[0].icon
            }@2x.png" alt="" width="75" height="75" class="swiper-slide__image" />
          <p class="swiper-slide__temperature">${
            (Math.round(item.main.temp) > 0 ? "+" : "") +
            Math.round(item.main.temp) +
            "&deg"
          };</p>
        </div>
       `;
}

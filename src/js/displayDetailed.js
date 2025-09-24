/**
 * Создание "detailed" - совместное отображение данных слайдера и таблицы прогноза
 * 
 * @param {string} locationName - Название населенного пункта для поиска погоды
 * 
 * @see {@link module:api} Функция запроса к API
 * @see {@link module:addSlider} Функция создания слайдера
 * @see {@link module:addTable} Функция создания таблицы
*/

import { api } from "./api";
import { addSlider } from "./addSlider";
import { addTable } from "./addTable";

export async function displayDetailed(locationName) {
  try {
    const data = await api(locationName);

    console.log(data);
    const timezone = data.city.timezone;

    //Получение первого дня
    let today = new Date((data.list[0].dt + timezone) * 1000);
    console.log(today);

    // Заполнение слайдера
    await addSlider(data, timezone, today);

    // Заполнение таблицы
    await addTable(data, today);
  } catch (error) {
    console.error("Ошибка при отображении данных:", error);
  }
}

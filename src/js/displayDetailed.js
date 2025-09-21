// Функция Запроса к серверу

import { addSlider } from "./addSlider";
import { api } from "./api";
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

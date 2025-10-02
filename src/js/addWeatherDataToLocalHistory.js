import { getWeatherDataForLocalHistory } from "./getWeatherDataForLocalHistory";

export async function addWeatherDataToLocalHistory() {
  // Получение данных из localStorage или создание пустого массива
  const historyJSON = localStorage.getItem("weatherHistory");
  const history = historyJSON ? JSON.parse(historyJSON) : [];

  // Добавление новой записи в начало массива
  history.unshift(await getWeatherDataForLocalHistory());

  // Ограничение количества записей в истории
  if (history.length > 20) {
    history.pop(); // Удаление последнего элемента, чтобы остаться в лимите
  }

  // Сохранение обновленного массива в localStorage
  localStorage.setItem("weatherHistory", JSON.stringify(history));
}

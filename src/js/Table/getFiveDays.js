/**
 * Возвращает массив сокращённых названий пяти дней, начиная с указанного дня.
 * @param {Date} today - Текущая дата для определения первого дня.
 * @returns {string[]} Массив из 5 элементов с сокращёнными названиями дней недели.
 *
 * @example
 * getFiveDays(new Date('2025-10-08')); // ["Ср", "Чт", "Пт", "Сб", "Вс"]
 */


export function getFiveDays(today) {
  const daysMap = {
    понедельник: "Пн",
    вторник: "Вт",
    среда: "Ср",
    четверг: "Чт",
    пятница: "Пт",
    суббота: "Сб",
    воскресенье: "Вс",
  };
  const firstDay = today.toLocaleDateString("ru-RU", {
    weekday: "long",
    timeZone: "UTC",
  });

  const daysArr = Object.keys(daysMap);
  const startIndex = daysArr.indexOf(firstDay.toLowerCase());

  const fiveDays = [];
  for (let i = 0; i < 5; i++) {
    const dayIndex = (startIndex + i) % daysArr.length;
    fiveDays.push(daysMap[daysArr[dayIndex]]);
  }

  return fiveDays
}

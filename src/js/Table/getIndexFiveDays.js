/**
 * Возвращает массив индексов прогноза погоды для пяти дней
 * Выбирается 15:00 по местному времени. Если в момент запроса больше 15:00, для первого дня выбирается ближайшее время.
 * 
 * @param {Date} today - Текущая дата для расчёта индексов.
 * @returns {number[]} Массив из 5 индексов.
 *
 * @example
 * getIndexFiveDays(new Date("2025-10-08")); // [0, 8, 16, 24, 32]
 */

export function getIndexFiveDays(today) {
  const hours = today.getUTCHours();
  const indexFiveDays = [];
  let now, next;
  if (hours >= 15) {
    now = 0;
    if (Math.floor(hours / 3) === 5) {
      next = 8;
    } else {
      next = ((15 - Math.floor(hours / 3) * 3 + 24) % 24) / 3;
    }
  } else {
    now = ((15 - Math.floor(hours / 3) * 3 + 24) % 24) / 3;
    next = now + 8;
  }
  indexFiveDays.push(now, next, next + 8, next + 16, next + 24);
  return indexFiveDays;
}

/**
 * Модуль для работы с историей запросов погоды, хранящейся в localStorage.
 * Предоставляет функции для получения, сохранения, удаления и добавления записей истории.
 *
 * Содержит:
 * - getHistory()       — получить массив записей истории,
 * - setHistory(history) — сохранить массив истории,
 * - removeHistoryItem(id) — удалить конкретную запись по уникальному id,
 * - addNewHistoryItem() — добавить новую запись в историю.
 */

import { getDataForNewHistoryItem } from "./getDataForNewHistoryItem";

// Получить массив истории из localStorage
export function getHistory() {
  const historyJSON = localStorage.getItem("weatherHistory");
  return historyJSON ? JSON.parse(historyJSON) : [];
}

// Сохранить массив истории в localStorage
export function setHistory(history) {
  localStorage.setItem("weatherHistory", JSON.stringify(history));
}

// Удалить запись из истории по id (уникальный ключ)
export function removeHistoryItem(id) {
  const history = getHistory();
  //  console.log("id", id);
  // console.log("history", history);
  // const newHistory = history.filter((item) => item.id !== id);
  const newHistory = history.splice(id, 1);
  setHistory(history);
  // console.log("newHistory", history);
}

export async function addNewHistoryItem() {
  const history = getHistory();

  // Добавление новой записи в начало массива
  history.unshift(await getDataForNewHistoryItem());

  // Ограничение количества записей в истории
  if (history.length > 16) {
    history.pop(); // Удаление последнего элемента, чтобы остаться в лимите
  }

  // Сохранение обновленного массива в localStorage
  setHistory(history);
}

  const container = document.querySelector(".history-popup__content");
  export async function clearHistory() {
    container.replaceChildren(); // Очистить контейнер
    await new Promise(resolve => setTimeout(resolve, 0));
    setHistory([]);
}

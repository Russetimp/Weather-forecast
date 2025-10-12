/**
 * Модуль для работы с историей запросов погоды, хранящейся в localStorage.
 * Предоставляет функции для получения, сохранения, удаления и добавления записей истории.
 *
 * Содержит:
 * - getHistory()       — получить массив записей истории,
 * - setHistory(history) — сохранить массив истории,
 * - removeHistoryItem(id) — удалить конкретную запись по уникальному id,
 * - addNewHistoryItem() — добавить новую запись в историю с проверкой повторных запросов
 * - clearHistory() — очищает историю и DOM-контейнер для отображения истории.
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

// Удалить запись из истории
export function removeHistoryItem(id) {
  const history = getHistory();
  if (id >= 0 && id < history.length) {
    history.splice(id, 1);
    setHistory(history);
  }
}

//Добавить новую запись в историю.
export function addNewHistoryItem() {
  const history = getHistory();
  const cityNow = document.querySelector(".current__city").textContent;
  if (history[0] && history[0].cityName == cityNow) {
    history[0] = getDataForNewHistoryItem();
  } else {
    history.unshift(getDataForNewHistoryItem());
  }

  if (history.length > 16) {
    history.pop();
  }

  setHistory(history);
}

//Очистить историю
const container = document.querySelector(".history-popup__content");
export function clearHistory() {
  container.replaceChildren();
  setHistory([]);
}

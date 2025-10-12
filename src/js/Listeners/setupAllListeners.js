/**
 * Устанавливает группу слушателей событий в приложении.
 *
 * - Инициализирует слушатели истории через setupHistoryListeners.
 * - При загрузке DOM отрисовывает историю запросов вызовом renderHistory.
 */


import { setupHistoryListeners } from "./setupHistoryListeners";
import { renderHistory } from "../HistoryPopup/renderHistory";
import { form, input } from "../consts";

export function setupAllListeners() {
  setupHistoryListeners();

  // При загрузке страницы отрисовать историю
  document.addEventListener("DOMContentLoaded", () => {
    renderHistory();
  });
}

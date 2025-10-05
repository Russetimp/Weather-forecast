import { setupHistoryListeners } from "./setupHistoryListeners";
import { setupInputListeners } from "./setupInputListeners";
import { renderHistory } from "../HistoryPopup/renderHistory";

import { form, input } from "../consts";

export async function setupAllListeners() {
  setupHistoryListeners();
  setupInputListeners(input, form);

  // При загрузке страницы отрисовать историю
  document.addEventListener("DOMContentLoaded", () => {
    renderHistory();
  });

  
}

/**
 * Устанавливает группу слушателей событий в приложении.
 *
 * - Инициализирует слушатели истории через setupHistoryListeners.
 */

import { setupHistoryListeners } from "./setupHistoryListeners";

const header = document.querySelector("header");
const historyPopup = document.querySelector(".history-popup");
const footer = document.querySelector("footer");
const headerBurgerButton = document.querySelector(".header__burger-button");

export function setupAllListeners() {
  setupHistoryListeners();

  //События после отрисовки DOM
  document.addEventListener("DOMContentLoaded", () => {
    header.style.visibility = "visible";
    historyPopup.style.visibility = "visible";
    footer.style.visibility = "visible";
  });

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      historyPopup.style.transition = "transform 0.5s ease-in-out";
      headerBurgerButton.classList.add("hover-bg-color");
    }, 500);
  });
}

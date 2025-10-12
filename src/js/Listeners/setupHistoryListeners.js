/**
 * Настраивает слушатели для управления открытием и закрытием всплывающего окна истории.
 *
 * Добавляет обработчик клика на кнопку бургер-меню для показа окна,
 * обработчик клика на кнопку закрытия окна,
 * а также обработчик нажатия на клавишу Escape для закрытия окна.
 *
 */
import { clearHistory } from "../HistoryPopup/historyService";

export function setupHistoryListeners() {
  const headerBurgerButton = document.querySelector(".header__burger-button");
  const historyPopup = document.querySelector(".history-popup");
  const historyCloseButton = document.querySelector(
    ".history-popup__close-button"
  );
  const historyCleanButton = document.querySelector(
    ".history-popup__clean-button"
  );

  // Открытие окна по клику на кнопку открытия истории
  headerBurgerButton.addEventListener("click", () => {
    historyPopup.classList.add("visible");
  });

  // Обработчик клика на кнопку закрытия истории
  historyCloseButton.addEventListener("click", () => {
    historyPopup.classList.remove("visible");
    headerBurgerButton.blur();
  });

  // Обработчик клика на кнопку очистки истории
  historyCleanButton.addEventListener("click", () => {
    clearHistory();
    setTimeout(() => {
      historyPopup.classList.remove("visible");
    }, 300);
  });

  // Закрытие окна по нажатию Escape (один обработчик)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      historyPopup.classList.remove("visible");
      headerBurgerButton.blur(); // Убираем фокус с кнопки
    }
  });
}

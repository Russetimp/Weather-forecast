/**
 * Отрисовывает историю запросов погоды в контейнере .history-popup__content.
 * Для каждой записи создается карточка с информацией о городе, погоде и кнопкой удаления.
 * При клике на кнопку удаления удаляет запись из истории и обновляет отображение.
 * При клике по самой карточке (кроме кнопки удаления) отображает погоду по названию города и закрывает окно истории.
 */

import { getHistory, removeHistoryItem } from "./historyService";
import { renderWeatherData } from "../renderWeatherData";

// Отрисовка карточек в контейнере .history-popup__content
export function renderHistory() {
  const container = document.querySelector(".history-popup__content");
  container.replaceChildren();

  const history = getHistory();

  history.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "history-card";

    // Если у item нет id, создаём уникальный идентификатор на основе индекса
    card.dataset.id = item.id !== undefined ? item.id : `${index}`;
    card.innerHTML = `
          <div class="history-card__info">
            <span class="history-card__city">${item.cityName}</span>
            <div class="history-card__weather">
              <img
                src="${item.weatherIcon}"
                alt=""
                width="45"
                height="45"
                class="history-card__icon"
              />
              <span class="history-card__temperature"> ${item.weatherTemperature} </span>
            </div>
          </div>

          <button
            class="history-card__delete-button"
            aria-label="Удалить запрос из истории"
          >
            <svg

              width="100%"
              height="100%"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
              aria-hidden="true"
            >
              <line
                x1="1"
                y1="1"
                x2="15"
                y2="15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="15"
                y1="1"
                x2="1"
                y2="15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>`;

    // Фон с градиентом карточки
    card.style.background = `${item.linearGradientBody}`;

    // Обработчик клика на карточку
    card.addEventListener("click", (event) => {
      // Проверка: если клик был по кнопке удаления — удалить карточку и обновить LocalStorage
      if (event.target.closest(".history-card__delete-button")) {
        const id = card.dataset.id;
        removeHistoryItem(id);
        renderHistory();
        return;
      }

      // Если клик не по кнопке — вызвать функцию renderWeatherData с названием города
      const city = card.querySelector(".history-card__city").textContent.trim();
      renderWeatherData(city);
      const historyPopup = document.querySelector(".history-popup");
      historyPopup.classList.remove("visible");
    });

    container.appendChild(card);
  });
}

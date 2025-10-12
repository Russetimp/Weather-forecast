/**
Обновляет эффект дождя на странице в зависимости от иконки погоды.
Создаёт контейнер с каплями дождя, используя DocumentFragment для эффективной вставки.
*/

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export function updateRainEffect() {
  try {
    let rainContainer = document.getElementById("rain-container");

    if (!rainContainer) {
      rainContainer = document.createElement("div");
      rainContainer.id = "rain-container";

      const fragment = document.createDocumentFragment();

      for (let i = 0; i < 150; i++) {
        const drop = document.createElement("div");
        drop.className = "rain-drop";

        drop.style.left = `${random(0, window.innerWidth)}px`;
        drop.style.top = `${random(-40, -20)}px`;
        drop.style.animationDelay = `${random(0, 5)}s`;
        drop.style.animationDuration = `${random(0.5, 1.5)}s`;

        fragment.appendChild(drop);
      }

      rainContainer.appendChild(fragment);
      document.body.insertBefore(rainContainer, document.body.firstChild);
    }
  } catch (error) {
    console.log("Ошибка при обновлении эффекта дождя", error.message);
  }
}

/**
 * Обновляет эффект снега на странице в зависимости от погодной иконки.
 * Создаёт контейнер со снежинками, используя DocumentFragment для эффективной вставки.
 */

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export function updateSnowEffect() {
  try {
    let snowContainer = document.getElementById("snow-container");

    if (!snowContainer) {
      snowContainer = document.createElement("div");
      snowContainer.id = "snow-container";

      const fragment = document.createDocumentFragment();

      for (let i = 0; i < 1000; i++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";

        const size = random(4, 7);
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.left = `${random(0, window.innerWidth)}px`;
        flake.style.top = `${random(-50, -10)}px`;
        flake.style.animationDelay = `${random(0, 10)}s`;
        flake.style.animationDuration = `${random(5, 10)}s`;

        fragment.appendChild(flake);
      }

      snowContainer.appendChild(fragment);
      document.body.insertBefore(snowContainer, document.body.firstChild);
    }
  } catch (error) {
    console.log("Ошибка при обновлении эффекта снега", error.message);
  }
}

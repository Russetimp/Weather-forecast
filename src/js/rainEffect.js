export async function rainEffect(dataGeolocation) {
  let rainContainer = document.getElementById("rain-container");

  const rainIcon = dataGeolocation.weather[0].icon;

  // Массив иконок, при которых нужно выполнить формулу
  const rainIcons = ["09n", "09d", "10n", "10d", "11d", "11n"];

  // Проверяем, содержится ли значение в массиве
  if (rainIcons.includes(rainIcon)) {
    if (!rainContainer) {
      // Добавляем контейнер для дождя в документа, чтобы он был позади всего контента
      rainContainer = document.createElement("div");
      rainContainer.id = "rain-container";
      document.body.insertBefore(rainContainer, document.body.firstChild);
      // Функция случайного числа в диапазоне
      function random(min, max) {
        return Math.random() * (max - min) + min;
      }

      // Создаем 150 капель с рандомным положением и скоростью
      const dropsCount = 150;

      for (let i = 0; i < dropsCount; i++) {
        const drop = document.createElement("div");
        drop.className = "rain-drop";
        // Горизонтальная позиция
        drop.style.left = `${random(0, window.innerWidth)}px`;
        // Задаем задержку, чтобы капли падали не синхронно
        drop.style.animationDelay = `${random(0, 5)}s`;
        // Скорость падения от 0.5 до 1.0 секунд
        drop.style.animationDuration = `${random(0.5, 1.5)}s`;
        // Начальная вертикальная позиция вне экрана (чтобы не появлялись сразу)
        drop.style.top = `${random(-40, -20)}px`;

        rainContainer.appendChild(drop);
      }
    }
  } else {
    if (rainContainer) {
      rainContainer.remove();
    }
  }
}

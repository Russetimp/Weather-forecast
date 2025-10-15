/**
 * Скрывает заставку(Preloader) на странице.
 * Добавляет класс "hide" для плавного перехода, 
 * затем через 500 мс полностью убирает элемент из отображения.
 */
const preloader = document.querySelector(".preloader")

export async function closePreloader() {
  preloader.classList.add("hide");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
}

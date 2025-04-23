import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "../scss/style.scss";
// запрос погоды
// const API_KEY = import.meta.env.VITE_KEY;
// const BASE_API_URL = " https://api.openweathermap.org/data/2.5/forecast";

// async function getWeatherByLocation(locationName) {
//   const url = `${BASE_API_URL}?q=${locationName}&appid=${API_KEY}&lang=ru&units=metric`;
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(data.city.name);
//     });
// }

// //Получаем город из формы
// const form = document.querySelector(".header__form");
// const input = document.querySelector(".header__input");
// let city;

// //Делаем запрос
// form.onsubmit = function (e) {
//   // отменяем перезагрузку страницы при помощи Event.preventDefault()
//   e.preventDefault();
//   // trim() удаляет пробельные символы с начала и конца строки(пробел, табуляция,
//   // неразрывный пробел и прочие) и все символы конца строки
//   city = input.value.trim();
//   getWeatherByLocation(city);
// };




////Вариант через async/await
// async function getWeatherByLocation(locationName) {
//   const apiUrl = `${BASE_API_URL}?q=${locationName}&appid=${API_KEY}&lang=ru&units=metric`;
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);
//     console.log(data.city.name)
//   } catch (error) {
//     console.error("Error fetching data.", error);
//   }
// }

// // Проверка вызова на разных языках - пройдена
// getWeatherByLocation("Москва");
// // getWeatherByLocation("Moscow");

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 4, // Количество видимых слайдов
  spaceBetween: 30, // Расстояние между слайдами
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
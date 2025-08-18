import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "../scss/main.scss";

//Переменные
const form = document.querySelector(".header__form");
const input = document.querySelector(".header__input");

// Слайдер
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  resistance: true, // Включаем сопротивление краям (по умолчанию)
  resistanceRatio: 0, // Убираем "растяжение" при сопротивлении
  slidesPerView: 5, // Количество видимых слайдов
  spaceBetween: 10, // Расстояние между слайдами
  navigation: {
    prevEl: ".custom-prev",
    nextEl: ".custom-next",
  },

  breakpoints: {
    600: {
      slidesPerView: 6,
    },
    700: {
      slidesPerView: 7,
    },
    800: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1500: {
      slidesPerView: 6,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// СКРЫВАЕМ ::AFTER ПРИ ФОКУСЕ ИЛИ ЗАПОЛНЕННОСТИ (обязательно наличие const form и input)
function updateFormState() {
  if (document.activeElement === input || input.value.trim() !== "") {
    form.classList.add("hide-after");
  } else {
    form.classList.remove("hide-after");
  }
}
input.addEventListener("input", updateFormState);
input.addEventListener("focus", updateFormState);
input.addEventListener("blur", updateFormState);


// Функция Запроса к серверу
const API_KEY = import.meta.env.VITE_KEY;
const BASE_API_URL = " https://api.openweathermap.org/data/2.5/forecast";

async function getWeatherByLocation(locationName) {
  const url = `${BASE_API_URL}?q=${locationName}&appid=${API_KEY}&lang=ru&units=metric`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.city.name);
      console.log(url);

      //Отображаем Current
    });
}

//Функция работы формы
form.onsubmit = function (e) {
  let city;
  // отменяем перезагрузку страницы при помощи Event.preventDefault()
  e.preventDefault();
  // trim() удаляет пробельные символы с начала и конца строки(пробел, табуляция,
  // неразрывный пробел и прочие) и все символы конца строки
  city = input.value.trim();
  getWeatherByLocation(city);
};

//
//
//


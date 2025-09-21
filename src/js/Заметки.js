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



// Проверка вызова на разных языках - пройдена
// getWeatherByLocation("Москва");
// getWeatherByLocation("Moscow");





      //Проверка деления на 8
      const a = data.list.filter((_, index) => index % 8 === 5);
      console.log(a);

//// Ссылка на иконки
// https://openweathermap.org/img/wn/10d@2x.png


//  // Находим контейнер для слайдов swiper-wrapper и очищаем его
//       const swiperWrapper = document.querySelector('.swiper-wrapper');
//       swiperWrapper.innerHTML = '';

//       // Проходим по каждому отфильтрованному элементу и создаем HTML слайдов
//       filteredList.forEach(item => {
//         // Получаем время в формате ЧЧ:00 с добавлением ведущего нуля
//         const date = new Date(item.dt * 1000);
//         const hours = date.getHours().toString().padStart(2, '0') + ':00';

//         // Берем иконку погоды, описание и округленную температуру
//         const icon = item.weather[0].icon;
//         const description = item.weather.description;
//         const temp = Math.round(item.main.temp);

//         // Формируем HTML слайда с нужной структурой и вставляем в DOM
//         const slideHTML = `
//           <div class="swiper-slide">
//             <time class="swiper-slide__time" datetime="${hours}">${hours}</time>
//             <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" width="75" height="75" class="swiper-slide__image" />
//             <p class="swiper-slide__temperature">${temp}&deg;</p>
//           </div>
//         `;
//         swiperWrapper.insertAdjacentHTML('beforeend', slideHTML);
//       });

//       // Инициализируем Swiper с нужными настройками
//       const swiper = new Swiper('.swiper', {
//         slidesPerView: 'auto', // несколько слайдов видны одновременно
//         spaceBetween: 10,      // расстояние между слайдами
//         // можно добавить другие настройки по необходимости...
//       });
//     })
//     .catch(error => {
//       // Если ошибка при запросе, можно обработать ее здесь
//       console.error('Ошибка загрузки данных погоды:', error);
//     });
// }

// // Вызываем функцию загрузки погоды при загрузке страницы или по событию
// loadWeatherForecast();

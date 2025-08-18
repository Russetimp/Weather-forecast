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

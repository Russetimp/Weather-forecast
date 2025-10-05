////Получение данных для записи в addNewHistoryItem

export async function getDataForNewHistoryItem() {
  const cityName = document.querySelector(".current__city").textContent;
  const weatherIcon = document.querySelector(".current-perceived__icon").src;
  const weatherTemperature = document.querySelector(
    ".current__temperature"
  ).textContent;

  const style = getComputedStyle(document.querySelector("body"));
  // console.log("style", style);

  const backgroundBody = style.background.match(/linear-gradient\((.+)\)/);
  // console.log("backgroundBody", backgroundBody);

  const linearGradientBody = backgroundBody ? backgroundBody[0] : null;
  //   console.log(linearGradientBody);
  const lastRequestData = {
    cityName: cityName,
    weatherIcon: weatherIcon,
    weatherTemperature: weatherTemperature,
    linearGradientBody: linearGradientBody,
  };
  return lastRequestData;
}

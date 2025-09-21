    const currentContent = `
                            <div class="current__city-data">
                              <p class="current__city">${data.name}</p>
                              <p class="current__data">${currentData}</p>
                            </div>

                            <div class="current__weather">
                              <p class="current__temperature">${
                                Math.round(data.main.temp) + "&deg"
                              };</p>
                              <div class="current-perceived">
                                <div class="current-perceived__top">  
                                  <img
                                    src="https://openweathermap.org/img/wn/${
                                      data.weather[0].icon
                                    }@2x.png"
                                    alt=""
                                    width="45"
                                    height="45"
                                    class="current-perceived__icon"
                                  />
                                  <span class="current-perceived__description">
                                    ${data.weather[0].description}
                                  </span>
                                </div>
                                <p class="current-perceived__temperature">Ощущается как  ${
                                  Math.round(data.main.feels_like) + "&deg"
                                };</p>
                              </div>
                              <div class="weather-conditions">
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <img
                                      src="/images/wind.svg"
                                      alt=""
                                      width="90"
                                      height="90"
                                      class="weather-condition__icon"
                                    />
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.wind.speed) + " м/c"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <img
                                      src="/images/humidity.svg"
                                      alt=""
                                      width="90"
                                      height="90"
                                      class="weather-condition__icon"
                                    />
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.main.humidity) + " %"
                                  }</p>
                                </div>
                                <div class="weather-condition">
                                  <div class="weather-condition__icon-wrapper">
                                    <img
                                      src="/images/visibility.svg"
                                      alt=""
                                      width="90"
                                      height="90"
                                      class="weather-condition__icon"
                                    />
                                  </div>
                                  <p class="weather-condition__value">${
                                    Math.round(data.visibility / 1000) + " км"
                                  }</p>
                                </>

                              </div>
                            </div>`;
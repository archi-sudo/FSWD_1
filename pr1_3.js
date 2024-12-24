
let weatherData = [];


function addCityWeather(cityName, temperature, condition) {
  weatherData.push({ cityName, temperature, condition });
}

function findHottestCity() {
  return weatherData.find(
    (city) => city.temperature === Math.max(...weatherData.map((c) => c.temperature))
  );
}


function filterByCondition(condition) {
  return weatherData.filter((city) => city.condition === condition);
}

function getCityNamesWithTemperatures() {
  return weatherData.map((city) => `City: ${city.cityName}, Temp: ${city.temperature}°C`);
}


function logWeatherSummary() {
  weatherData.forEach((city) => {
    console.log(`City: ${city.cityName}, Temp: ${city.temperature}°C, Condition: ${city.condition}`);
  });
}


addCityWeather("New York", 30, "Sunny");
addCityWeather("London", 22, "Cloudy");
addCityWeather("Mumbai", 35, "Rainy");
addCityWeather("Tokyo", 28, "Sunny");

console.log("Hottest City:", findHottestCity());
console.log("Cities with Rainy Weather:", filterByCondition("Rainy"));
console.log("City Temperatures:", getCityNamesWithTemperatures());

logWeatherSummary();

let weatherData = [];

constaddCityWeather = (cityName, temperature, condition) => {
    weatherData.push({ cityName, temperature, condition });
};

constfindHottestCity = () =>
    weatherData.reduce((hottest, city) =>city.temperature>hottest.temperature ? city : hottest, weatherData[0]);

constfilterByCondition = (condition) =>
    weatherData.filter(city =>city.condition === condition);

constlistCityTemperatures = () =>
    weatherData.map(city => `City: ${city.cityName}, Temp: ${city.temperature}°C`);

constlogWeatherSummary = () => {
    console.log("Weather Summary:");


    weatherData.forEach(({ cityName, temperature, condition }) => {
        console.log(`City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);});};
addCityWeather("New York", 28, "Sunny");
addCityWeather("London", 19, "Cloudy");
addCityWeather("Tokyo", 32, "Rainy");
addCityWeather("Sydney", 24, "Sunny");

console.log("\nList of City Temperatures:");
console.log(listCityTemperatures());

consthottestCity = findHottestCity();
console.log("\nHottest City:");
console.log(`City: ${hottestCity.cityName}, Temp: ${hottestCity.temperature}°C, Condition: ${hottestCity.condition}`);

console.log("\nCities with 'Sunny' Condition:");
console.log(filterByCondition("Sunny"));

console.log("\nWeather Summary for All Cities:");
logWeatherSummary();

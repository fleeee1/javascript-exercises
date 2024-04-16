const convertToCelsius = function(fahrBegin) {
  newTemp = (fahrBegin - 32) * 5/9;
  rounded = Math.round(newTemp * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(Fahrenheit) {
  celTemp = (9/5 * Fahrenheit) + 32;
  roundedCel = Math.round(celTemp * 10) / 10;
  return roundedCel;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Topic : AJAX - Asynchronus Javascript

// API - Application Programming Interface - a piece of code that can be by another piece of code.
// API will return values/data in JSON format basically (99.999%) (JavaScript Object Notation)
// API can also retun data other than JSON also - XML, Txt etc.etc.
// Syntax of JSON: {key:value} - just like object of JS

// Many types of API are there
// GEO location, Map, Weather API (Public)
// Cricket Data API - (Private)

// Tool for API run - Postman

// Public API are available in GITHUB

const countryName = "Japan";
const request = new XMLHttpRequest();
request.open("get", `https://restcountries.com/v3.1/name/${countryName}`);
request.send();

request.addEventListener("load", function () {
  const [country] = JSON.parse(this.responseText);
  console.log(country);
  console.log(country.area);
  console.log(country.population);
  console.log(country.name.official);
});

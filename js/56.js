// Topic : Consuming Promises with Asunc / Await function

/*
- introduced in ES2017
- Async/Await is just a syntactic sugar of Promise/then
- it makes your code more look like synchronus coding, without any callback hell or blocking
*/

// Using Promise
// function getCountry(country) {
//   fetch("https://restcountries.com/v3.1/name/" + country)
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// }
// getCountry("peru");

// Using Async/Await

async function getCountry(country) {
  const result = await fetch("https://restcountries.com/v3.1/name/" + country);
  console.log(await result.json());
}
getCountry("peru");

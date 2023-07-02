// Topic : Running multiple promises

// Separate callling of promise,- time consuming

// const getCountries = async function (c1, c2, c3) {
//   try {
//     const country1 = await fetch(
//       "https://restcountries.com/v3.1/name/" + c1
//     ).then((res) => res.json());
//     const country2 = await fetch(
//       "https://restcountries.com/v3.1/name/" + c2
//     ).then((res) => res.json());
//     const country3 = await fetch(
//       "https://restcountries.com/v3.1/name/" + c3
//     ).then((res) => res.json());

//     console.log(country1, country2, country3);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// Call API at once

const getCountries = async function (c1, c2, c3) {
  // syntax : Promise.all([array of promise/fetch api calls])

  try {
    const result = await Promise.all([
      fetch("https://restcountries.com/v3.1/name/" + c1).then((res) =>
        res.json()
      ),
      fetch("https://restcountries.com/v3.1/name/" + c2).then((res) =>
        res.json()
      ),
      fetch("https://restcountries.com/v3.1/name/" + c3).then((res) =>
        res.json()
      ),
    ]);

    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
};

getCountries("peru", "japan", "china");

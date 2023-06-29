// Topic : Promise

// Promise is an object that is used as a receiver for the future results of asynchronus tasks
// Promise is a container of future value (ex : ajax call)

/*
Promise
1. Pending
2. Settled
3. Fullfilled
4. Reject
*/

// ----------------------------------------------------------------

// Simple Promise call

// fetch("https://restcountries.com/v3.1/name/peru")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// -----------------------------------------------------------------

// Promise with error catching - Method 1

// fetch("https://restcountries.com/v3.1/name/peru")
//   .then(
//     (res) => res.json(),
//     (err) => console.log(err)
//   )
//   .then(
//     (res) => console.log(res),
//     (err) => console.log(err)
//   );

// Promise with error catching - Method 2

// fetch("https://restcountries.com/v3.1/name/peru")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`Error: ${err}`));

// Promise Finally

// fetch("https://restcountries.com/v3.1/name/peru")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`Error: ${err}`))
//   .finally(() => {
//     alert("Record Fetched");
//   });

// -----------------------------------------------------------------------------------------

// Promise manual handling of errors

fetch("https://restcountries.com/v3.1/name/perfffu")
  .then((res) => {
    if (!res.ok) throw new Error("No country found");
    res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(`The error: ${err}`));

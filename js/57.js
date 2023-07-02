// Topic: Error Handling in Async/Await

// try{
//     let me = "raj";
//     const collage = "db collage";
//     collage = "xyg";
// }
// catch(e){
//     console.info(e.message);
// }

// manual error handling + try catch
// async function getCountry(country) {
//   try {
//     const res = await fetch(
//       "https://restcountries.com/v3.1/name/" + country
//     ).then((res) => null);
//     if (!res) throw new Error("mistake");
//     console.log(await res.json());
//   } catch (e) {}
// }
// getCountry("peru");

// Return value from Async function

async function getCountry(country) {
  try {
    const res = await fetch("https://restcountries.com/v3.1/name/" + country);
    if (!res) throw new Error("mistake");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
getCountry("peru").then((res) => console.log(res));

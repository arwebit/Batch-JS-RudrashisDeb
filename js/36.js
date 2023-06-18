// Topic : Map, Reduce, Filter - 3 data transformation methods

// Map : This method creates a new array with the results of applied conditions on each array

// Syntax : array.map(()=>{})

// Ex :

// const arr = [1, 2, 3, 4];
// const newArr = arr.map((item) => {
//   return item * 2;
// });

// console.log(newArr);

// ----------------------------------------------------------------------------------

// Reduce : It is to return single/calculated value

// Syntax : arr.reduce((prev, curr)=>{}, defaultValue)

// Ex :

// const arr = [1, 2, 3, 4];

// const total = arr.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);

// console.log(total);

// -------------------------------------------------------------------------------------

// Filter : It is a method that creates a new array that passes the condition/test

const words = ["knife", "gun", "bomb", "apple", "raj"];
const newWords = words.filter((item) => item.length > 3);
console.log(newWords);

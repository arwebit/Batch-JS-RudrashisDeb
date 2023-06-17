// Topic : First class function

// - js treats functions as values
// - so functions are just another types objects

// Higher Order function and Lower order functions

// A function A() that receive another function B() as argument, only possible because, functions are value.

// Ex : Call back function

// const oneWord = function (word) {
//   return word.replaceAll(" ", "");
// };
// const transform = (str, fn) => {
//   console.log(`Orginal string : ${str}`);
//   console.log(`Transformed string : ${fn(str)}`);
// };

// transform("Hello World", oneWord);

// ---------------------------------------------------------------------

// return a function : expression function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// greet("Hi")("X");

// return a function : arrow function

const greet = (greeting) => (name) => console.log(`${greeting}, ${name}`);
greet("Hi")("X");

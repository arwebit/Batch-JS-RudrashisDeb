// Topic : IIFE - Immidiately Invoked Function Expression

// A function with a name is/can be called multiple times

// function hi() {
//   console.log("Hi");
// }
// hi();
// hi();

// IIFE is such type of function, which runs only once and cannot be called again
//  Syntax : wrap the function using - ()

// Ex 1

// (function () {
//   console.log("Hi");
// })();

// Ex 2:
// (() => console.log("Hello"))();

// Ex 3 . Parameterized

((a, b) => console.log(+a + b))("3", 4);
((a, b) => console.log(a + b))(5, 8);

// will learn more about IIFE in async/await

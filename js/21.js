//Topic : this' keyword
// Most important

/*

1. takes the value of or point to its owner.
2. special variable which is created for every EC (execution context), so you can say every function.
3. 'this' keyword is not static. It is dynamic, it depends on how the function is being called and then its
   value defined, when the function is actually called.

*/

// Cases of 'this'

/*

Declaration function : this = undefined;
Arrow functioon : no support, laxical scoping (down to up)
Global function : this=window
Regular/expression : better option for use of 'this'

*/

// console.log(this); // Global

// Declaration function

// let nm = "X";
// function hello() {
//   //   const nm = "X";
//   console.log(this.nm);
// }

// hello();

// Ex .1 .
// const std = {
//   nm: "X",
//   sayHello: function () {
//     console.log(`Hello ${this.nm}`);
//   },
// };

// std.sayHello();

// Here the owner of 'this' is sayHello which is under 'std' object

// const hi = function () {
//   console.log(this);
// };
// hi();

// Ex : 2. Arrow function - no support, laxical scoping

// let age = 20;
// const std2 = {
//   age: 15,
//   sayAge: () => {
//     console.log(`Age:${age}`);
//   },
// };
// std2.sayAge();

// Here 'this' will not work. it will execute laxical scoping. Hence it will reach on global.

// Ex 3.
// const std3 = {
//   nm: "X",
//   hello: function () {
//     // Here nm is not defined
//     const bye = function () {
//       console.log(`${this.nm}`);
//     };
//     bye();
//   },
// };

// Here owner of 'this' is bye(), which is under hello() that doesnot have 'nm' property

// Soln 1 of Ex.3 ...
// use arrow function and take laxical scoping advantage
// const std3 = {
//   nm: "X",
//   hello: function () {
//     const bye = () => {
//       console.log(`${this.nm}`);
//     };
//     bye();
//   },
// };

// Soln 2 of Ex.3 ...
// use separate value to store this

// const std3 = {
//   nm: "X",
//   hello: function () {
//     const self = this;
//     const bye = function () {
//       console.log(`${self.nm}`);
//     };
//     bye();
//   },
// };

// std3.hello();

// const nm = "F";
// const stdtest = {
//   nm: "x",
//   sayHello: function () {
//     console.log(`${this.nm}`);
//   },
// };

// // Ex 4
// const std4 = stdtest.sayHello;
// std4(); // undefined

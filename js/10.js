// Declaration function

// How to declare

// function sayHello() {
//   console.log("Hello");
// }

// How to call

// sayHello();
/*
function add() {
  let a = 2;
  let b = 2;
  let c = a + b;
  return c;
}
let d = add();
console.log(d);
*/

// Passing parameters

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(6, 7));

// > it can be called before it declares, it will still works because of "Hoisting" feature.

// Hoisting
// --  var variable without value
// -- declaration function with value
// -- a variable can be used before it has been declared.

hello();

function hello() {
  console.log("Hello");
}

// Decalaration function is a bad practise because it is called before defined.
// it cannot be stored in a value.

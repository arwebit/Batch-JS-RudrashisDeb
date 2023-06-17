// Closure : Closure makes a function remember all the variables that existed at the function birth place even
// it's a parent function variables

// Ex:

// const booking = function () {
//   let bookID = 1;
//   return function () {
//     return ++bookID;
//   };
// };

// const book1 = booking();
// console.log(`${book1()}`);
// console.log(`${book1()}`);

// Ex 2 :

let f; // global scope

const g = function () {
  const a = 10;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

console.dir(f);

// Arguments keyowrd

// It is available in declaration/expression function.
// It will not work in arrow function

// Ex : Declaration function

// function hi(x, y) {
//   console.log(arguments);
// }

// Ex 2 : Expression/Regular function

// const hi = function (x, y) {
//   console.log(arguments);
// };

// hi(10, 20);

// But in modern JS, we write Argument function as

// const test = function (x, y, ...z) {
//   console.log(z);
// };

// test(2, 4, 5, 6, 8);

// N.B. Here "...z" is called "Rest parameter". In this function x & y will take the first two values
// respectively while ...z will take the rest values as an array. Rest parameter will always be
// the last parameter

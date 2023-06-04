// Topic : Conditional statement

/*

two types :
1. if-else / if-elseif-else
2. switch-case

*/

// --------------------------------------------------

// if-elseif-else
// when we want to put some condition

// Ex 1 :
/*
const years = 18;
if (years < 18) {
  console.log("Not mature");
} else {
  console.log("Mature");
}
*/

// Ex 2 :

// const price = 120;

// if (price < 120) {
//   console.log("Too low");
// } else if (price == 120) {
//   console.log("Best price");
// } else {
//   console.log("High price");
// }

// --------------------------------------------------------

// switch case

/*

-> alternative of if-elseif-else
-> it is based on user preference
-> it is faster in most cases as compared to if-else-if
-> Disadvantage : you cannot put condition

*/

// Ex :
// const colour = "Red";

// switch (colour) {
//   case "Blue":
//     console.log("Blue");
//     break;
//   case "Red":
//     console.log("Red");
//     break;
//   default:
//     console.log("Not matched");
//     break;
// }

// N.B. : In if-else block, 'if' block will execute only in 'true' condition

// ---------------------------------------------------------------------

// Turnery operator

// -> it is just the short form of if-else.
// -> it is denoted by ? and :

// Ex 1 :
// const age = 18;
// const isMatured = age >= 18 ? "Matured" : "Not matured";
// console.log(isMatured);

// Ex 2 :
const mark = 50;
const division = mark >= 60 ? "First division" : "Second division";
console.log(division);

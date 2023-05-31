// Topic : Short circuit

// -> these are logical operators - OR, AND

// Myth :  Logical operator always returns - true/false.
// Fact :  Logical operators can return any data type.

// 0, undefined, '', null and NaN - these are only falsy values. Rest all are truthy values.
// console.log(Boolean(0));

// ***************************************************************************

// Ex : OR operator - denoted by : ||
// -> returns true, if any one is true/truthy
/*
console.log(3 || "X"); // 3
console.log(3 || "X" || false); // 3
console.log(3 || false || "X"); // 3
console.log(undefined || null); // null, as both falsy, but have to return something. So, it goes
//  to second parameters and returns it.
console.log(null || 4); // 4
*/

// ***************************************************************************

// Ex : AND operator - denoted by : &&
// -> returns true, if all the values are true/truthy.

// console.log(0 && "X"); // 0
// console.log(7 && "X"); // X
// console.log(71 && "Y" && null && true); // null, as it is falsy value.

// Use case

// console.log(7 || (null && "tt") || (true && 33)); // 7
// console.log((7 && null && "tt") || (true && 33)); /// 33

// N.B.:
// 1. OR returns truthy/true values
// 2. AND returns falsy/false values

// ----------------------------------------------------------------------

// Short circuit - Use case

// Ex. :
const me = {
  nm: "X",
  age: 30,
  //   salary: 50000,
  sayHi: function () {
    console.log(`hi ${this.nm}`);
  },
};

// OR operator

// Ex 1 :

// const age = me.age || 18;
// console.log(age); // 30

// Ex 2 :

// const salary = me.salary || 30000;
// console.log(salary); // 50000

// ----------------------------------------------------------------

// AND operator

// Ex 1 :
// const age = me.age && 18;
// console.log(age);

// Ex 2 :
const sal = me.salary && 30000;
console.log(salary); // 30000

// Ex 3
// me.sayHi && me.sayHi();

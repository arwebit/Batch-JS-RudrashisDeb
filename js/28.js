// Loops
// Loops means to repeat the same task.
// Loops are generally used in array.

// In JS following types of loops are used

// ---------------------------------------------------------

// FOR loop
// Syntax : for(initialization; condition; increment/decrement){ do your code }

// Normal

// for (let counter = 1; counter < 5; counter++) {
//   console.log("Number" + counter);
// }

// Array
// const me = ["X", 1992, true, ["Y", "Z"]];
// for (let i = 0; i < me.length; i++) {
//   console.log(me[i]);
// }

// Creating parallel array for storing type

// const me = ["X", 1992, true, ["Y", "Z"]];
// const meType = [];
// for (let i = 0; i < me.length; i++) {
//   meType[i] = typeof me[i];
//   //meType.push(typeof me[i]);
// }
// console.log(meType);

// -----------------------------------------------------------------------

// FOR-OF Loop

// It will work only in array

// Syntax : for(value of arr)

// const friends = ["X", "Y", "Z"];
// for (const f of friends) {
//   console.log(f);
// }

// --------------------------------------------------------------------------

// WHILE Loop

// Syntax :

/*

initialization;
while(condition){
    // do your code;

    increment/decrement/ or any mathematical operation
}
*/

// Ex :

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`Number ${i}`);
//   //i++;
// }

// --------------------------------------------------------------------------

// FOR-EACH  Loop

// it will work only in array

/// Syntax : arr.foreach(){}

// Ex 1:
// const txn = [100, 200, -40, -50, 500, -200];

// Method 1 :

// txn.forEach(function (amt) {
//   let type = amt > 0 ? "deposited" : "withdrawn";
//   console.log(`You have ${type} a amount of Rs ${Math.abs(amt)}`);
// });

// Method 2 :

// txn.forEach((amt, index) => {
//   let type = amt > 0 ? "deposited" : "withdrawn";
//   console.log(`${index + 1}. You have ${type} a amount of Rs ${Math.abs(amt)}`);
// });

// Ex 2 : Sets

// const set = new Set(["a", "b", "c"]);
// set.forEach((res, _, s) => {
//   console.log(`Set :${res}`);
// });

// Ex 3. Maps :
const map = new Map([
  [1, "X"],
  [2, "Y"],
  [3, "z"],
]);
map.forEach((val, key, map) => {
  console.log(`${val}, ${key}, ${map}`);
});

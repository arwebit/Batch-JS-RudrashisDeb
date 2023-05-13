// Modern operators:

// Array destructuring

/*

 1. it is available in ES6 feature.
 2. Unpack arrays into separate variables

 */

//Ex 1 :

const arr = [1, 2, 3, 4];

// Normal way :
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

// Array destructuring
// const [x, y, z, p] = arr;
// console.log(x, y, z, p);

// const [x, y] = arr;
// console.log(x, y);

// const [x, , , z] = arr;
// console.log(x, z);

//  -----------------------------------------

// Variable switching

/*
let nm = "X";
let job = "Y";
[nm, job] = [job, nm];
console.log(nm, job);
*/

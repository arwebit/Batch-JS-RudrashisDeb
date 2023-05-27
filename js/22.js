// Topic : Spread Operator

/* 

-> Un-packs the iterables (Strings, Arrays, Objects, Maps, Sets)
-> Used to spread out iterables. It takes elements out of the iterables and place it individually.
-> Template literals don't support iterables.
-> Copy the array values not the address of array, means "shallow copy"
-> If '...' is on right side of '=' sign, then it is spread operator

*/

// Sub topic :  Spread operator for arrays

// Ex : 1

// const arr = [3, 4, 5];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// Ex : 2
// const arr = [1, 2, 3];
// const arr2 = arr; // copying address pf 'arr'
// const arr3 = [...arr2]; // value of 'arr'
// console.log(arr3);

//Ex : 3
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]; // Merged array
// console.log(arr3);

// ------------------------------------------------------------------------------

// Sub topic :  Spread operator for string

// Ex :
// const nm = "XYZ";
// console.log(...nm);
// const newArr = [...nm, "", "A"];
// console.log(newArr);

// ------------------------------------------------------------------------------

// Sub topic :  Spread operator in functions

// Ex 1:
// function hello(nm, age) {
//   console.log(`Hello ${nm}, Age : ${age}`);
// }
// const me = ["X", 23];
// hello(...me); // function will call like 'hello(X,23)'

// Ex : 2

// const add = (x, y) => console.log(x + y);
// const nos = [2, 5];
// add(...nos); // function will call like 'hello(2,5)'

// ------------------------------------------------------------------------------

// Sub topic :  Spread operator for object

// Ex 1 :
// const restaurent = { nm: "X", price: 100 };
// const myRest = { ...restaurent, mobile: "+91-12345677890" };
// console.log(myRest);

// Ex 2 :
// const rest = { type: "X", price: 1222 };
// const myRest = { ...rest }; // copying value only, not address
// console.log(myRest);

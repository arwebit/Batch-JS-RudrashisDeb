// Topic : Objects -> ********************most important

/*

We can store multiple/all types of values (numbers, strings, boolean, functions), just like arrays but with user
defined names as keys instead of numbers.

 Syntax : {key:value}
 
   --> 'key' must be string
 */

// Ex :
//const obj = { firstname: "X", age: 29 };
// console.log(obj);

// ------------------------------------------------------

// Get the value of object :

// Method 1 : Dot notation -> .
// console.log(obj.age);

// Method 2 : Bracket notation -> []
// console.log(obj["firstname"]);

// Bracket notation is effective for dynamic keys.

// Ex:
// let key = "first";
// console.log(obj[key + "name"]);

// ----------------------------------------------------------

// Ex :
// let key = "age";
// console.log(obj.key);

// ---------------------------------------------------------

// Advanced way
// -> if methods/properties in objects don't have any name, it automatically takes the method/property
//name as its key.

// Ex :
// const obj = {
//   name: "X",
//   sayhi() {
//     console.log("Ok");
//   },
// };
// console.log(obj.name);
// obj.sayhi();

// ->  computed property names, using -> []
// Ex :
const me = { name: "x", [`test-${7 - 5}`]: "Y" };
console.log(me["test-2"]);

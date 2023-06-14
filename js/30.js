// Topic : Array.entries()

// Normal loops dont give us keys of array in javascript, So, we can  use trick - Array.entries()

// Ex : 1 : Normal

// const friends = ["z", "a", "b", "c"];
// console.log(friends);
// console.log(friends.entries()); // [ [0:'z'], [1:'a'],......]

// for (let f of friends.entries()) {
//   console.log(`key : ${f[0]}, value : ${f[1]}`);
// }

// Ex : 2 Array destructure

// for (let [key, value] of friends.entries()) {
//   console.log(`key : ${key}, value : ${value}`);
// }

// N.B. :  Arrray.entries() will give only arrays

// ---------------------------------------------------------------------

// Object looping

// Object looping using : Entries(), keys and values

// Ex : 1

const me = {
  name: "X",
  age: 12,
  hours: { sun: { open: 1200, close: 1500 }, mon: { open: 1000, close: 1600 } },
};
// console.log(Object.entries(me));

// console.log(Object.keys(me));
// console.log(Object.values(me));

// improvised : Array destructuring
// console.log(Object.entries(me.hours));
// for (let [day, time] of Object.entries(me.hours)) {
//   console.log(`${day}, ${time["open"]}`);
// }

// improvised : Object and array destructuring
// console.log(Object.entries(me.hours));
// for (let [day, { open, close }] of Object.entries(me.hours)) {
//   console.log(`${day}, ${open}, ${close}`);
// }

// improvised : Object rename and array destructuring
console.log(Object.entries(me.hours));
for (let [day, { open: o, close: c }] of Object.entries(me.hours)) {
  console.log(`${day}, ${o}, ${c}`);
}

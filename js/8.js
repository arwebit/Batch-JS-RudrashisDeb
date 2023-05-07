// Topic : Maps :
// -> It is a siblings of objects
// -> It holds key-value pairs just like objects.
// -> It can hold any data type as key as as value.

// Syntax : new Map()

// Ex :
//const rest = new Map();

// Setting key/value using 'set' method

// rest.set("restName", "KFC");
// rest.set(1, "Kolkata");
// rest.set(true, "open");

// --------------------------------------------------------------

// Getting the key/value using 'get' method
// console.log(rest);
// console.log(rest.get(1));

//----------------------------------------------------------------

// Computed reteval :
// const time = 12;
// console.log(rest.get(time >= 10));

//--------------------------------------------------------------------

// Array as map key:
// rest.set([1, 2], "test");
// const y = rest.get([1, 2]); // it won't works because both array values stores in different heap memory address
// console.log(y);

// Solution :
// const arr = [1, 2];
// rest.set(arr, "test");
// console.log(rest.get(arr));

//-------------------------------------------------------------------

// Uses of objects and maps:
// -> usually when we store list with key-value pair to describe values

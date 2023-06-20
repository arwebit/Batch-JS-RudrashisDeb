// Topic : Basic Array methods

const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months);

// - Slice
// const m = months.slice(1, 3);
// const m = months.slice(1, -1);
// console.log(m);

// -------------------------------------------------------------------------------------

// Splice - splice(index, delCount, newValue) :

/// splice() method changes the content of array by adding, replacing or removing existing elements
// it mutates main array

// adding :
// months.splice(1, 0, "May");
// console.log(months);

// replacing items on specific position

// months.splice(2, 2, "May");
// console.log(months);

// deleting/removing items on specific position
months.splice(2, 2);
console.log(months);

//----------------------------------------------------------------------------------------

// Reverse - reverse the order of array
// console.log(months.reverse());

// Concat - combination of two arrays into a single array

// const arr1 = ["a", "b", "c"];
// const arr2 = ["e", "f", "g"];
// console.log(arr1.concat(arr2));

// // Join - convert array into a string by joining with a special character
// const arr1 = ["a", "b", "c"];
// console.log(arr1.join("-"));

// at() - returns the specific index value

// const arr1 = [1, 3, 6, 5, 7];

// // console.log(arr1.at(3));
// // console.log(arr1.at(arr1.length - 2));
// console.log(arr1.slice(2)); // returns array
// console.log(arr1.at(2)); // returns value
// console.log(arr1.at(-1));
// console.log(arr1.slice(-1));

// Topic : Arrays, Sets, Object, Maps
// In JS, there are two types : Arrays and Objects.
// In modern JS : Sets and Maps

// Arrays : Array is a DS to structure to store multiple data. It has two types : One dimension and multi-dimensional.
/*
const a = 1; // number
const b = "JS"; // string
const c = true; // boolean
*/

// Method 1 : Using literal -> []
//const arr = [1,"JS", true];

// Method 2 : Using function
const arr = new Array(1, "JS", true);

// array keys (0,1,2,3,4,......... n-1)
console.log(arr);

// N.B.: Arrays have index numbers stating from 0 to n-1, where n = size of array
// This is called indexed array. In javascript associative array will not work.

// Get the value of array
console.log(arr[1]);

// Size/Length of array
console.log(arr.length);

// Array can contain duplicate values

const arr1 = [2, 5, 3, 2, 4, 3, 5];
console.log(arr1);

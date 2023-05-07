// Topic : Sets

/*

  -> It is a sibling of an array.
 -> It is a collection of unique values, it can never be duplicate
 -> It does not have index numbers, so values cannot be retrieved by index.
 -> To, retrieve, convert it to an array.

*/

// Syntax : new Set(iterables); // iterables -> string , array

//Ex:
const arr = ["a", "b", "c", "b", "d", "a"];
const sets = new Set(arr);
// console.log(sets);
sets[0]; // it will not work

// Functions of sets
// console.log(sets.size);
// console.log(sets.has("6")); //check whether value exists
// console.log(sets.add("6")); // adding value
// sets.delete("a"); // deleting value
// console.log(sets);
// console.log(sets.clear());

// Uses of Arrays and Sets:
// -> usually when we store list of values, where key is not important.

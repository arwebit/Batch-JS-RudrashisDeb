// Topic : Working with Strings : Some basic methods

// Strings are iterables. We can treat string like an array

// If we start from starting position, then we have to count from 0 to n-1. If we start from last position,
// then we have to count from 1 to n. (n=length of string)

const str = "Rajdhani Express";

console.log(str.length); // String length - 16
console.log(str[1]); // We can treat string like an array
console.log(str.indexOf("Exp")); // 9
console.log(str.indexOf("a")); // 1 - It will search for first positioned element. if there are duplicates also
console.log(str.lastIndexOf("a")); // 5 - It will search upto the last element

// Slice -> (startPosition, n-1)

console.log(str.slice(1)); // It will start from the given position
console.log(str.slice(1, 6)); // It will start from first position till 6th position

console.log(str.slice(0, str.indexOf(" ")));
console.log(str.slice(0, str.indexOf(" ") + 1)); // with space

console.log(str.slice(-3)); // ess
console.log(str.slice(0, -4)); //Rajdhani Exp

// N.B. : basically string is primitive data type, but when we use any method, it converts itself to object
// to perform the operation and return back the primitive data type again.

console.log(typeof new String("Bean"));
console.log(typeof new String("Bean").slice(1));

// -----------------------------------------------------------------------------------------

// Replace a string

const amount = "20 USD";
console.log(amount);
const repAmt = amount.replace("USD", "INR"); // replace(searchVal, replacedVal)
console.log(repAmt);

const degree = "Bachelor of Technology";
const repDegree = degree.replaceAll("o", "n"); // replaceAll(searchVal, replacedVal)
console.log(repDegree);

// replace() - It will replace only the  first positioned string which is searched
// replaceAll() - It will replace all positioned string which is searched

// -----------------------------------------------------------------------------------------

// Uppercase and Lowecase

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// -------------------------------------------------------------------------------------------

// Repeat

const msg = "Hello world ";
console.log(msg.repeat(4));

// -------------------------------------------------------------------------------------------

// Padding

// padStart

const atm = "6456232032156563";
console.log(atm.padStart(25, "*")); // it will return 25 characters, starting with '*', if the string length is
// less than 25

// padEnd
console.log(atm.padEnd(25, "*")); // it will return 25 characters, starting with '*', if the string length is
// less than 25

// -------------------------------------------------------------------------------------------

// Includes

console.log(str.includes("Raj")); // it will return boolean. It will search for the exact string

// Starts with and Ends with

console.log(str.startsWith("Raj")); // it will return boolean. It will search for the starting string
console.log(str.endsWith("ss")); // it will return boolean. It will search for the ends string

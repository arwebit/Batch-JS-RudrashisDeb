// Topic : Synchronus and Asynchronus

// Synchronous Javascript Nature

// - most of the code in Javascript is synchronous
// - means, code will execute line by line
// - each line of code will wait to previous line to finish execution
// - this may create problem if any line of code takes long time to run

// Asynchronous Javascript Nature

// - Asynchronous code is exectuted in the background
// - Asynchronous code is non-blocking
// - setTimeOut is an example of Asynchronous behaviour

// synchronous codes
// console.log("1");
// console.log("2");
// console.log("3");

// synchronous codes - block code
// console.log("1");
// console.log("2");
// alert("Ok"); // it will block the code, unless finished
// console.log("3");

// asynchronous codes
console.log("1");
console.log("2");
setTimeout(() => {
  // non blocking behaiour
  alert("hi");
}, 1000); // in miliseconds - 1 sec=1000miliseconds
console.log("3");

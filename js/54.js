// Topic : Event loop

/*
 JavaScript Engine has
 
 1. Call Stack
 2. Heap memory
 3. Web API
 4. Callback queue (event callback, setTimeout etc)
 5. Event loop
 6. Single thread
  
 */

// executed instantly and removed from call stack

//  const elm = document.querySelector('image');
// const elm = document.getElementById("image");

// // web api
// elm.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

// // callback queue

// elm.addEventListener("load", () => {
//   console.log("Image loaded");
// });

// // web api & callback queue - simulaneously

// fetch("https://restcountries.com/v3.1/name/peru").then((res) =>
//   console.log(res)
// );

// Event loop in practical

console.log("start");

// This part of code will run in event loop, once finished it will transfer to main  call stack
setTimeout(() => {
  console.log("2 sec timer");
}, 2000);
//---------------------------------------------------------------------
Promise.resolve("Promise Data 1").then((res) => {
  console.log(res);
});
Promise.resolve("Promise Data 2").then((res) => {
  console.log(res);
});
console.log("end");

/// Output from rudrashis
/*
1. start
2. end
3. Promise Data 1
4. Promise Data 2
5. 2 sec timer
*/

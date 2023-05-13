// Modern operators : Object destructuring

// Ex
// const restObj = {
//   nm: "KFC",
//   type: "non-veg",
//   starter: "Drinks",
//   mainCourse: [1, 2, 3, 4],
//   hours: { sun: { open: 1000, close: 1200 }, mon: { open: 1000, close: 1500 } },
// };

// Mehod 1 : Break way

// const { hours } = restObj;
// console.log(hours);
// const { sun } = hours;
// console.log(sun); // it will work

//Method 2 : Direct breaking

// const {
//   hours: {
//     sun: { open, close },
//   },
// } = restObj;

// // console.log(hours); // it will not work
// // console.log(sun);// it will not work
// console.log(open, close); // it will work

// ---------------------------------------------------------

// Function with destructuring arguments :

// Normal object in arguments

// function log(obj) {
//   console.log(obj.name, obj.type);
// }

// Object destructuring in arguments

// function log({ name, type }) {
//   console.log(name, type);
// }

// Destructuring with default value

// function log({ name = "OYO", type = "veg", starter = "Drinks" }) {
//   console.log(name, type, starter);
// }

// log({ type: "non-veg", name: "KFC" });

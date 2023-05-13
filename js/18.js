// Modern operators:

// Object destructuring

/*

 1. it is just like array destructuring.
 2. it needs to be same property/method name as main object has.
 3. arragement/order not important.
 
 */

// Ex:
const restObj = {
  nm: "KFC",
  type: "non-veg",
  starter: "Drinks",
  mainCourse: [1, 2, 3, 4],
  hours: { sun: { open: 1000, close: 1200 }, mon: { open: 1000, close: 1500 } },
};

// Method 1
// const { nm, hours } = restObj;
// console.log(nm);
// console.log(hours);
// console.log(hours.sun);

// Method 2 : if we want to rename property/method
// const { nm: restaurentName } = restObj;
// console.log(restaurentName);

// Method 3 : Default value

// const { starter = "Snacks" } = restObj;
// console.log(starter);

// Method 4 : Mutating value

// Ex

// restObj.nm = "OYO";
// console.log(restObj);

// Ex: (to be checked)
// let nm = "OYO";
// let type = "veg";

// // const { nm, type } = restObj; // error re-declaring variable

// ({ nm, type } = restObj); // mutating available using '()' trick, avoid block scope collision
// console.log(restObj.nm);

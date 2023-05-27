// Topic : Rest operator / Pattern

/*

-> Used in destructuring and function parameters.
-> Packs the iterables (Strings, Arrays, Objects, Maps, Sets)
-> It is just opposite of spread operator
-> If "..." is on the left side of "=" sign, then it is rest pattern/operator.

 */

// Rest pattern for array

// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr;
// console.log(a + b);
// console.log(c);

// Rest pattern for function

// const hello = function (...nm) {
//   console.log(`hello ${nm}`);
// };

// hello("a", "b", "c"); /// ...nm = [a,b,c]

// Rest patttern for object

const restaurent = {
  nm: "X",
  type: "non-veg",
  hours: {
    sun: { open: "1200", close: "1500" },
    mon: { open: "1000", close: "1800" },
    tues: { open: "1000", close: "1800" },
  },
};

const { sun, ...weekdays } = restaurent.hours;
console.log(sun);
console.log(weekdays);

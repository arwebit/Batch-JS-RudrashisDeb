// Topic : Static method

// Static method are those methods which we can't change, once declared

// const Person = function (nm) {
//   this.name = nm;
// };

// // Will create each time on creating object

// Person.hi = function () {
//   console.log("hi");
// };

// // Once entered will never create each time on creating object

// // Person.prototype.hi = function () {
// //   console.log("hi");
// // };

// const X = new Person("X");
// const Y = new Person("Y");
// console.log(X, Y);

// -----------------------------------------------------------------------------

class Person {
  constructor(name) {
    this.nm = name;
  }

  // Goes to prototype automatically
  static hi() {
    console.log("hi");
  }
}

const X = new Person("X");
console.log(X);

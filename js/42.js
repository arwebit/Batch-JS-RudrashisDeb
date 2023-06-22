// Topic : Class

// const Car = function(){}  --- constructor function
/// const Car = class{};  --- expression class

// Recomended - Declaration class

/*
class Person{
    
}
*/

// -----------------------------------------------------------------------

// an ex. of constructor function

// const Person = function (nm, dob) {
//   this.nm = nm;
//   this.dob = dob;
// };

// Person.prototype.greet = function () {
//   console.log(`Hello ${this.nm}, your dob : ${this.dob}`);
// };

// Person.prototype.calcAge = function () {
//   console.log(`Your age : ${2022 - this.dob}`);
// };

// // console.log(Person.prototype);

// const rudra = new Person("Rudra", "2003");
// rudra.greet();
// rudra.calcAge();
// console.log(rudra.__proto__);

// ---------------------------------------------------------------------------

// an ex. of class -- it is a syntactic sugar of constructor function

class Person {
  constructor(nm, dob) {
    this.nm = nm;
    this.dob = dob;
  }
  greet() {
    console.log(`Hello ${this.nm}, your dob : ${this.dob}`);
  }
  calcAge() {
    console.log(`Your age : ${2022 - this.dob}`);
  }
}

const rudra = new Person("Rudra", "2003");
// rudra.greet();
// rudra.calcAge();

// N.B. : Constructor function is not a good practise, now-a-days. Better do with traditional - 'class'

console.log(rudra.__proto__);

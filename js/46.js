// Topic: all 3 way of using prototype

// ex: Method 1 - using function constructor

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.greet = function () {
  console.log(`hi ${this.name}, your age is ${this.age}`);
};

const raj = new Person("raj", 20);

console.log(raj);
// console.log(Person.prototype.__proto__);

//------------------------------------------
// ex: Method 2 - using Class (ES6)

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`hi ${this.name}, your age is ${this.age}`);
  }
}
const suman = new Person2("suman", 33);
console.log(suman);

//------------------------------
// ex: Method 3 - using Object.create()

const personProto = {
  greet() {
    console.log(`hi ${this.name}, your age is ${this.age}`);
  },
};

const pinky = Object.create(personProto);
pinky.name = "pinky";
pinky.age = 22;
pinky.greet();

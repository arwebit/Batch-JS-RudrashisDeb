// Topic : Prototypes

const Person = function (name, dob) {
  this.name = name;
  this.dob = dob;
};

// console.log(new Person());

// Injecting method to Person prototype

Person.prototype.calcAge = function () {
  console.log(2022 - this.dob);
};

// Injecting property to Person protype

Person.prototype.collage = "Assam University";

// console.log(new Person());

const personObj = new Person("X", "1992");
// console.log(personObj.collage);
// personObj.calcAge();

// console.log(personObj);

// console.log(personObj.__proto__);
// console.log(personObj.__proto__.__proto__);
// console.log(personObj.__proto__.__proto__.__proto__);

// console.log(personObj.prototype);
// console.log(Person.prototype);

// console.log(personObj.hasOwnProperty("name")); // true
// console.log(personObj.hasOwnProperty("collage")); // false
// console.log(personObj.__proto__.hasOwnProperty("collage")); // true
// console.log(personObj.prototype === Person.prototype); // false
// console.log(Person.prototype.isPrototypeOf(personObj)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

const obj = {
  name: "X",
  age: 20,
};

console.log(Object.prototype.isPrototypeOf(obj));

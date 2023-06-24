// Topic: Inheritance

// Making all properties and methods of a certain class available to a child class, formaing a hierachical,
// relationship between classes, this allow us to reuse logic and to model real world relationships.

// ----------------------------------------------------------------------------------------------

// Constructor function inheritance

// parent
// const Person = function (fullname, dob) {
//   this.fullname = fullname;
//   this.dob = dob;
// };

// Person.prototype.calcAge = function () {
//   console.log(`hello ${this.fullname}, your age is ${2022 - this.dob}`);
// };

// // child
// const Student = function (fullName, dateofbirth, course) {
//   /// We can write like this also

//   // this.fullname = fullName;
//   // this.dob = dateofbirth;

//   // -----------------------
//   Person.call(this, fullName, dateofbirth);
//   this.course = course;
// };

// // Student.prototype = Person.prototype;   // this will store address of person prototype, wrong

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.greet = function () {
//   console.log(`hello ${this.fullname}`);
// };

// const X = new Student("X", "1992", "BTech");
// X.calcAge();
// X.greet();

// ---------------------------------------------------------------------------------------------

// Object.create - inheritance

const Person = {
  getData(fullname, dob) {
    this.fullname = fullname;
    this.dob = dob;
  },
  calcAge() {
    console.log(`hello ${this.fullname}, your age is ${2022 - this.dob}`);
  },
};

const Student = Object.create(Person);
Student.getData = function (fullname, dob, course) {
  Person.getData.call(this, fullname, dob); // call()-method
  this.course = course;
};

const raj = Object.create(Student);
raj.getData("raj", 1997, "mca");
console.log(raj);
raj.calcAge();

/// Topic : Inheritence - ES6 method - our traditional class

class Person {
  constructor(fullName, dob) {
    this.full_name = fullName;
    this.dob = dob;
  }
  calcAge() {
    console.log(`Your age : ${2023 - this.dob}`);
  }
}

// extends -- used in inheritence

class Student extends Person {
  constructor(full_name, dob, course) {
    super(full_name, dob);
    this.course = course;
  }

  greet() {
    console.log(
      `Hi ${this.full_name}, Branch ${this.course}, DOB : ${this.dob}`
    );
  }
}

const X = new Student("X", 1992, "BCA");
X.calcAge();
X.greet();

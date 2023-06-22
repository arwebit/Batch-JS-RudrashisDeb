// Topic : Object.create()

const person = {
  greet: function () {
    console.log("Hi " + this.name);
  },
};

const X = Object.create(person); // links/assign a prototype and returns a black object
X.name = "X";
X.greet();

console.log(X);

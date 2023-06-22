// Topic : Prototype / Prototype Delegation

// Prototypes are the mechanism by which JavaScript objects inherit features from one another

// 'new' keyword is a speccial keyword for creation of an object

// Uses - 'new' keyword

/*

1. a new empty object creates {}
2. now function is called and "this" keyword is linked to the empty object -> this={}
3. the empty object is linked to prototype of it's parent using special property (__proto__)
4. the object is returned automatically from the constructor function call

*/

// constructor function - always use regular or declaration function, no arrow function(no support)
const Person = function (name, dob) {
  console.log(this);
};
new Person();

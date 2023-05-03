// Topic : Primitive data and Objects
// In Javascript, every value is either Primitive data or Objects(Reference)

// Primitive data: 

    /*
     -> stores value directly in a variable.
     -> stores data in call-stack. It stores string, number and boolean
    */

     //Ex 
   /*  let courseName = "JavaScript";
     let age = 20;
     let online = true;*/

// Objects (Reference)
  // -> stores memory location in a variable and stores in heap memory
  // -> It is written as {key : value}

  //Ex :
     /*let courseData = {
        courseName : "JavaScript",
        courseType : "Online"
     }*/

//Ex  
//    const me = {name : "X", age: 20};
//    const you =me; // copied only address, not value
//    console.log(me);
//    console.log(you)

// Now if we add any property/methods in 'me' object, 'you' object will have the same property/methods, because we assigned the 
// address of 'me' object to 'you' object.

// ----------------

// We can copy object to new memory so that they can be treated separetly from each other.

// Ex
/*const me = {name : "X", age: 20};
const you = Object.assign({},me);
console.log(me);
console.log(you)*/

// Now, if we add any property/methods to 'me' object, it will not copy the same property/methods to 'you ' object.

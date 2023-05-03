// Topic 2 : Delaration of variables

// Types of declaring variables : var, let, const

/* var : 
 1. it can be accessible to a nearest function
 2. can be defined and initialized anywhere in the code .
 3. We can define same variable with 'var'
 4. If same variable is initialized more than once, then last value will overwrite the previous one
 5. It scopes to its nearest function.
 6. By default, all variables are delared as var.
 */

/*a =10;
console.log(a)*/
 /*
 var a = "Test";
 var a = "Test 1"
 console.log(a);*/

 /* let : 
 1. it can be accessible to a nearest function, the only difference is that it executes only in the block not
     outside of the block (if,else, for, while)
 2. can be defined and initialized anywhere in the code.
 3. We can't define same variable with 'let'
 4. If same variable is initialized more than once, then last value will overwrite the previous one
 5. It scopes to its nearest block (if,else, for, while).
 */

 /*let b ="";
  b ="Test1";
 console.log(b);*/

 /*let a =1;
 if(a==1){
    let b = 2;
    let c="R";
    var d="uu";
    console.log(b);
 }
 console.log(a);
//  console.log(c);
 console.log(d);*/

 /**
  const : same a let, speciality is the variables once declared with const, cannot be 
  changed anywhere and anytime.
 
 const a = "Test";
 //a="ddd";
 console.log(a); */

 // N.B. : Declaring a variable with 'var' is a bad practice now-a-days. Declare all with 'let/const'.

 // Truthy and Falsy value:
 // In JavaScript, except these five values : 0, '', undefined, null and NaN, all the truthy values

 console.log('null:'+Boolean(null));
 console.log('0:'+Boolean(0));
 console.log('undefined:'+Boolean(undefined));
 console.log('NaN:'+Boolean(NaN));
 console.log('{}:'+Boolean(''));
 console.log('4:'+Boolean(4));
 // Naming convention of variables:

// The standard way of naming a variable is in 'camelCase'. A variable is to be named in a proper way means, 
// which type of value we want to store in a variable that name must be the variable name.
     
/*
     Let us say we want to store a course name 

     Normal approach :

       let x = 'Javascript';

    Right/Professional approach  :

      let courseName = 'Javascript';

     */ 
// N.B. : By doing this, a developer can easily understands by the variable name what the value is.

// 'use strict'

         /**
          This keyword plays an important role in Javascript. It forbids uss to do certain things which could cause error
          in code and creates errors visible in console. It is written in the starting position (at the top) of our code.

          */
          /*'use strict';
let a = 10;
console.log(a);*/


 
// Topic 3 : Operators
// In Javascript, there are many types of operators. Below are some most commonly used:
/**
    1. Mathematical
    2. String
    3. Logical
    4. Comparison (a === 3) / (a == 3)
    5. Assignment (a = 3)
    6. Type
 */

// Operator precedence :
// In Javascript each and every operator has its own precedence. Get this list by go through the link:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//------------------------------------------------------------------

// String (Template) literals

// In earlier days of JS, we use to concatenate (join) more than one string or variables with string like :

    // Ex 1:

       /* const myName="Rudrashis";
       const batch="CSE";
       const strJoin = myName + batch;
       console.log(strJoin);*/
    
    // Ex 2: 

    /* const myCollege = "X";
    const strJoin = "Hello +myCollege+", good morning";
    console.log(strJoin); */

// To overcome this, String literals had been implemented. The syntax is :

        /*const myName= "X";
        const strJoin = `Hello ${myName}, good morning. 'Single quote', "Double quote"`;
        console.log(strJoin);    */
    
// N.B. : (`) -> it is the 'Back-tick'. In keyboard, it is located above TAB key and left of (1 or !) key.

// -------------------------------------------------------------------------

// Type conversion : explicitly/manually convert from one type to another

// Ex :

    /*let pen ="20"; // string
    let pencil =20; // number
    let total = +pen + pencil;
    console.log(total); // converts all variables to number
*/
// Type coercion : JS converts 'type' automatically behind the scene for us

//Ex 1 :

  //let str = "I have "+20+" mangoes"; // It will convert 20 into a string
  //console.log(str);

// Ex 2 :

    ///let res = "10" -5;
    //console.log(res); // it will convert '10' into a number

// Ex 3 :

    // let res = 20*2 + " : mangoes. I gave "+ +(10+3) + " mangoes to my brother";
    // console.log(res);

// In case of boolean, happens in : logical operator.
/*
const num = 10;
if(num){
    console.log("done")
}*/
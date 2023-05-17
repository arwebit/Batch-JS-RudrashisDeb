// Topic : Scope chain and laxical scoping:

const nm = "X"; // Global scope

function first() {
  const age = 30; // Function scope : first()
  if (age >= 30) {
    const decade = 3; // Block scope
    var mature = "Yes"; // Function scope : first()
  }

  function second() {
    const job = "Y";
    // console.log(
    //   `Name : ${nm}, Age : ${age}, Job : ${job}, Mature : ${mature}, Decade : ${decade}`
    // );
    console.log(`Name : ${nm}, Age : ${age}, Job : ${job}, Mature : ${mature}`);
  }

  second();
  //console.log(`${job}`);
}

first();
console.log(mature);

// N.B.: Scope chain of Javascript follows laxical scoping (down to up).

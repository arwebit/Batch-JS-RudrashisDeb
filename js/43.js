// Topic : Setter and Getter

// Setter and Getter are basically a function, but  they treat like properties

// Ex 1 :

// class Person {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//   }

//   get fullname() {
//     return this.fname + " " + this.lname;
//   }
// }

// const X = new Person("X", "Dey");
// console.log(`Hello ${X.fname} ${X.lname}`);
// console.log(`Hello ${X.fullname()}`); // it will not work, as e dont have set any value

//-------------------------------------------------------------------------------------

// Ex 2 : // Find the latest transaction

const account = {
  nm: "X",
  txn: [20, 50, 60, 45, 60],
  set latest(amt) {
    this.txn.push(amt);
  },
  get latest() {
    return this.txn;
  },
};

console.log(account.latest);
account.latest = 70; // if it is a class , obj.latest(70)
console.log(account.latest);

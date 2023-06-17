// Topic : Optional chaining

/**
1. chaining is used between object and property with a dot(.) sign .. ex : obj.prop/method
2. optional chaining symbol is '?' before dot(.) sign... ex: obj?.prop/method
3. it checks left side property/method first, if not available, it returns 'undefined' and breaks the chain 
  to avoid errors.
 */

// Ex 1: Optional chaining in Object

const res = {
  name: "restaurant",
  type: "veg",
  hours: {
    sun: {
      open: "12 pm",
      close: "1 am",
    },
    mon: {
      open: "11 pm",
      close: "2 am",
    },
    tue: {
      open: "10 pm",
      close: "3 am",
    },
    wed: {
      close: "10am",
    },
  },
  hello(nm) {
    console.log(nm);
  },
};

// console.log(res.hours.wed.close);
// console.log(res.hours.thurs?.open);
// res.hello?.("raj"); // if 'hello' available, then it will call
// res.hi?.("raj");

// Ex : 2 Optional chaining in Array

// const users = [
//   { name: "X", age: 12 },
//   { name: "T", age: 14 },
// ];
// console.log(users[1].name);
// console.log(users[2]?.name);

// Check the opening of restaurent in weeks

const weekdays = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];

for (let days of weekdays) {
  let isOpen = res.hours[days]?.open || "closed";
  console.log(`on ${days} - ${isOpen}`);
}

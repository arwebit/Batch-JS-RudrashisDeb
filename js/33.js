// Topic : Call, Apply, Bind methods

const train1 = {
  name: "Delhi express",
  bookings: [],
  book: function (passengers, seatNum) {
    this.bookings.push({ passengers, seatNum });
  },
};

// Normal

// train1.book("X", 20);
// train1.book("Y", 21);
// console.log(train1.bookings);

//-------------------------------------------------------------

// Call - we can borrow method from any object to use in another objects' environment

// Syntax : source.method.call(newSource, arguments)

// const train2 = {
//   name: "Kolkata express",
//   bookings: [],
// };

// train1.book.call(train2, "X", "20");
// console.log(train2.bookings);

//--------------------------------------------------------------------

// Apply - same as call method, only difference is the arguments are taken as arrays

// Syntax : source.method.apply(newSource, [arguments])

// const train2 = {
//   name: "Kolkata express",
//   bookings: [],
// };

// train1.book.apply(train2, ["X", "20"]);
// console.log(train2.bookings);

// ------------------------------------------------------------------------

// Bind - is also same as call and apply, one difference is it return a function.

// syntax : const func = source.method.bind(newScope)

// const train3 = {
//   name: "Goa express",
//   bookings: [],
// };

// const bookTrain3 = train1.book.bind(train3);
// bookTrain3("X", 30);
// bookTrain3("Y", 40);
// console.log(train3.bookings);

//---------------------------------------------------------------------

// Bind can be used to personalize general function

const addNums = (num1, num2) => {
  return +num1 + num2;
};
const step1 = addNums.bind(null, 2);
console.log(step1(1));

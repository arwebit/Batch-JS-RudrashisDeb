// Function parameter by object (reference)

const createBooking = (flightNo, passengerObj) => {
  passengerObj.name = "Mr." + passengerObj.name;
  passengerObj.age = "20";
  flightNo = 346;
  console.log(
    `Flight booked for ${passengerObj.name} and flight no. : ${flightNo}`
  );
};

const flno = 123;
const me = { name: "X" }; // address : #56787654

createBooking(flno, me);

// console.log(flno); /// this is primitive data, so it will take value : 123

console.log(me); // it will take "Mr. X", as name property value

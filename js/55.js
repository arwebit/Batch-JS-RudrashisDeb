// Topic : Callback Hell

// setTimeout(() => {
//   console.log("wait for 1 sec");
//   setTimeout(() => {
//     console.log("wait for 2 sec");
//     setTimeout(() => {
//       console.log("wait for 3 sec");
//       setTimeout(() => {
//         console.log("wait for 4 sec");
//         setTimeout(() => {
//           console.log("wait for 5 sec");
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// Topic : Promisifying - to save from callback hell

const wait = function (sec) {
  const milisecond = sec * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, milisecond);
  });
};

wait(1)
  .then(() => {
    console.log("Wait for 1 second");
    return wait(2);
  })
  .then(() => {
    console.log("Wait for 2 second");
    return wait(3);
  })
  .then(() => {
    console.log("Wait for 3 second");
    return wait(4);
  })
  .then(() => {
    console.log("Wait for 4 second");
    return wait(5);
  })
  .then(() => {
    console.log("Wait for 5 second");
  });

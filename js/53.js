// Topic : Building Promise

// Building own promise to consume is rarely in use

// console.log(Math.random());

// -------------------------------------------------------------------------

// Building own Promise

const lottery = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  setTimeout(() => {
    if (randomNumber >= 0.5) {
      resolve("You own : " + randomNumber);
    } else {
      reject("You lost : " + randomNumber);
    }
  }, 1000);
});

// Consuming promise

lottery
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

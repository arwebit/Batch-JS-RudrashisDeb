// Fibonacci series and Prime nos

let num1 = 0;
let num2 = 1;
let num3 = 0;
let fibonSeries = [num1, num2];
let noOfTerms = prompt("Enter no. of terms");

for (let i = 0; i < noOfTerms; i++) {
  num3 = num1 + num2;
  fibonSeries.push(num3);
  num1 = num2;
  num2 = num3;
}
console.log(...fibonSeries);

// Prime nos.

var nos = [];
let primeCheck = 0;
let primeNo = [];

// rest parameter
function primeNos(...others) {
  for (let j = 0; j < others.length; j++) {
    if (others[j] > 1) {
      for (let k = 2; k < others[j]; k++) {
        if (others[j] % k === 0) {
          primeCheck = 0;
          break;
        } else {
          primeCheck = 1;
          continue;
        }
      }
      if (primeCheck === 1) {
        nos[j] = others[j];
      } else {
        continue;
      }
    } else {
      continue;
    }
  }

  for (let p = 0; p < nos.length; p++) {
    if (nos[p]) {
      primeNo.push(nos[p]);
    }
  }

  console.log("Prime numbers of the above fibonacci series : ", ...primeNo);
}
primeNos(...fibonSeries);

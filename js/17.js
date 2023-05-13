// Modern operators

// ---------------------------------------

// Use case of array destructuring

function order() {
  return [20, 30];
}

const [p, q] = order();
console.log(p, q);

// ------------------------------------------------

// Nested destructuring

// const nested = [2, 4, [44, 55]];
// const [i, , g] = nested;
// console.log(i);
// console.log(g);

// const [i, , [m, n]] = nested;
// console.log(m, n);

// Default value in destructuring

// const friends = ["x", "y", "z"];
const friends = ["x", "y"];
const [f1, f2, f3 = "No friend"] = friends;
console.log(f1, f2, f3);

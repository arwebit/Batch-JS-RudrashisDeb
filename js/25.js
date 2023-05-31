// Nullish coalecing

/*

-> It is denoted by - ??
-> we know - 0 and "" are falsy values. But they are not falsy here.
-> 0 and "" - are truthy values in nullish coalecing
-> Rest are falsy values
 */

// Ex :
const years = 0;
console.log(years || 18); // 18
console.log(years ?? 18); // 0

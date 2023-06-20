// const sentence = "Hello Friend, How are you";

// Snake case

// const newStr = sentence.toLowerCase().replace(",", "");
// const finalStr = newStr.replaceAll(" ", "_");
// console.log(finalStr);

let storage = [];
let pascelCase = (sentence) => {
  let pascelCase = [];
  for (let arr of sentence.split(" ")) {
    for (let word of arr.split("_")) {
      storage.push(
        word.toLowerCase().slice(0, 1).toUpperCase() +
          word.slice(1).toLowerCase()
      );
    }
    pascelCase.push(storage.join(""));
    storage = [];
  }

  return pascelCase.join(" ");
};
const snakeStr = "hello_world my_dear_friend go_get_it this_is_last_try";
console.log(`Pascel Case : ${pascelCase(snakeStr)}`);

//task 2 (hw)

let camelCase = (sentence) => {
  let camelCase = [];
  let i = 0;
  for (let arr of sentence.split(" ")) {
    for (let word of arr.split("_")) {
      i++;
      i == 1
        ? storage.push(
            word.toLowerCase().slice(0, 1).toLowerCase() +
              word.slice(1).toLowerCase()
          )
        : storage.push(
            word.toLowerCase().slice(0, 1).toUpperCase() +
              word.slice(1).toLowerCase()
          );
    }
    i = 0;
    camelCase.push(storage.join(""));
    storage = [];
  }

  return camelCase.join(" ");
};
const wordStr = "Hello_worlD my_deAr last_TRY";
console.log(`Camel Case : ${camelCase(wordStr)}`);

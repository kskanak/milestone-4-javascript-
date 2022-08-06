// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ["Apple", "Banana", "Orange"];
let bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);
fruits[1] = "Mango";
console.log(fruits);
fruits.pop();
fruits.push("watermelon");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Dragon Fruits");
console.log(fruits);
console.log(fruits[0]);

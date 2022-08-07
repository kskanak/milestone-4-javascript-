//  Math.pow means power, inside the bracket the first number one is the value and second one is power with
// here is 5 to the power 2

let number = 5;
console.log(Math.pow(number, 2));

// to difference with is Math.abs = abstruct is ingnore any negative sign and just uses the value

let num1 = 20;
let num2 = 333;

if (Math.abs(num1 - num2) < 5) {
  console.log("okkk fine");
} else {
  console.log("no fine");
}

// Math.round turn float numbers into round number

let num = 2.73434;
console.log(Math.round(num));
// Math.ceil round the number to upper round and Math.floor round the number to lower round

console.log(Math.ceil(num));
console.log(Math.floor(num));

// Math.random

console.log(Math.round(Math.random() * 6));

for (i = 1; i <= 10; i++) {
  console.log(Math.round(Math.random() * 100));
}

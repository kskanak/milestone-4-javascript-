let stringVariables = "this is a string variables";
let numberVariables = 334;
let boolean = true;
// ============================================================================================================
let changeIt = " kdjfl";
changeIt = "asd";
console.log(changeIt);
const cantChang = "dlskjfa";

let num1 = 19;
let num2 = 30;
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let reminder = num1 % num2;

console.log(addition, subtraction, multiplication, division, reminder);
// ============================================================================================================

let number1 = 345;
let number2 = 3433;

if (
  number1 > number2 ||
  number1 < number2 ||
  number1 >= number2 ||
  number1 <= number2 ||
  number1 == number2 ||
  number1 != number2
) {
  console.log("true");
}
// ============================================================================================================

const num11 = 33;

if (num11 > 10 && num11 < 35) {
  console.log("true");
}

if (num11 > 30 || num11 < 50) {
  console.log(" you are fine");
}
// ============================================================================================================

let i = 7;
while (i <= 19) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
// ============================================================================================================

let arr = ["while", "there", "life", "is", "wow", "yap"];
let indexOfIs = arr.indexOf("is");
console.log(indexOfIs);
arr[3] = "whyyy";
console.log(arr);
arr.push("eeee", "fffff");
console.log(arr);
arr.pop();
console.log(arr);
// ============================================================================================================

const numbers = [12, 34, 43, 54, 644, 655, 565, 565, 565, 56, 34];

for (let i = 0; i < numbers.length; i++) {
  const elements = numbers[i];
  if (elements > 80) {
    console.log(elements);
  }
}
// ============================================================================================================

const number12 = 343;
const number13 = 33;
const number14 = 34;
const multi = number12 * number13 * number14;
console.log(multi);
// ============================================================================================================

const objects = {
  hi: "hello",
  hello: "hi",
  hi2: 23,
};
objects.hi = "wow";
objects["hello"] = "awesome";
console.log(objects.hello);

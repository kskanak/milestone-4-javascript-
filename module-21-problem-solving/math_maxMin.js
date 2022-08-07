let number1 = 3434;
let number2 = 34343;
let number3 = 34343434;

function findMaxNumber(num1, num2, num3) {
  let result = Math.max(num1, num2, num3);
  return result;
}

let maxNumber = findMaxNumber(number1, number2, number3);
console.log(maxNumber, "is max number");

//  write a function that return a min number;

function findMinNum(name1, name2, name3) {
  let result = Math.min(name1, name2, name3);
  return result;
}

let minNumber = findMinNum(number1, number2, number3);
console.log(minNumber, "is the min number");

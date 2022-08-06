// Write a function called make_avg() which will take an three integers and return the
// average of those values.

function intAvg(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let sumAvg = sum / 3;
  return sumAvg;
}

let number1 = 174500;
let number2 = 20540;
let number3 = 30540;
let averageValues = intAvg(number1, number2, number3);
console.log(averageValues);
averageValues = averageValues.toFixed(3);
averagevaluesNumber = parseFloat(averageValues);
console.log(averageValues, typeof averageValues, averagevaluesNumber);

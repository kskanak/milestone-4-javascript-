function make_average(num1, num2, num3) {
  var total = num1 + num2 + num3;
  var average = total / 3;
  return average;
}

var number1 = 33;
var number2 = 333;
var number3 = 33333;

var averageNumbers = make_average(number1, number2, number3);
console.log(averageNumbers);

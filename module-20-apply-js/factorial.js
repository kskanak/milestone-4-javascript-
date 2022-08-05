function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
let givennumber = 10;
let factorialNumber = factorial(givennumber);
console.log(factorialNumber);
// reverse factorial ==================================================

// reverseFactorial(9);

function reverseFactorial(givenNumber) {
  let result = 1;
  for (let i = givenNumber; i >= 1; i--) {
    result *= i;
  }
  return result;
}

let number = 10;
let reverseFactorialNumbers = reverseFactorial(number);
console.log(factorialNumber);

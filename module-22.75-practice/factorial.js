function findFactorial(number) {
  let factorialNumber = 1;
  for (let i = 1; i <= number; i++) {
    const numbers = i;
    factorialNumber *= numbers;
  }
  console.log(factorialNumber);
}

const number = 9;
const factorial = findFactorial(number);

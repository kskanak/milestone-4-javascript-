// write a function that will provide the all the even number given by user ands even numbers quantity;

function findEvenNumbers(startNumber, endNumber) {
  let evenNumbersQuantity = 0;
  for (let i = startNumber; i <= endNumber; i++) {
    const numbers = i;
    if (numbers % 2 == 0) {
      evenNumbersQuantity++;
      console.log(numbers);
    }
  }
  return evenNumbersQuantity;
}

const startWith = 1;
const endsWith = 1000;

const evenNumbers = findEvenNumbers(startWith, endsWith);
console.log(evenNumbers, "evenNumbers");

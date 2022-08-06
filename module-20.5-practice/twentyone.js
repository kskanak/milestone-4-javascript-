// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function findOddSum(givenarray) {
  let sum = 0;
  for (let i = 0; i < givenarray.length; i++) {
    const result = givenarray[i];
    if (result % 2 !== 0) {
      sum += result;
    }
  }
  return sum;
}

let array = [5, 7, 8, 10, 45, 30];
let oddSum = findOddSum(array);
console.log(oddSum);

//  write an function which will return the fibonachi sequence till  givenNumber index

function findFibonacchi(givenNumber) {
  let fibonacchiArray = [0, 1];
  for (let i = 2; i <= givenNumber; i++) {
    fibonacchiArray[i] = fibonacchiArray[i - 1] + fibonacchiArray[i - 2];
  }
  return fibonacchiArray;
}

const number = 13;
const fibonacchi = findFibonacchi(number);
console.log(fibonacchi);

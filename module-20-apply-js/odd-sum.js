//  from given array, print the average of the odd element;

let arr = [5, 7, 8, 10, 45, 30, 25, 35, 39];

function oddEvenAverage(givenNumber) {
  let oddNumbers = [];
  let sumOfOdd = 0;
  for (let i = 0; i < givenNumber.length; i++) {
    const numbersOfArray = givenNumber[i];
    if (numbersOfArray % 2 !== 0) {
      oddNumbers.push(numbersOfArray);
      sumOfOdd += numbersOfArray;
    }
  }
  let average = sumOfOdd / oddNumbers.length;
  console.log(oddNumbers, sumOfOdd, average);
}

oddEvenAverage(arr);

// Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.

// function arrayAverage(array) {
//   for (let i = 0; i < array.length; i++) {
//     let arrayNumbers = array[i];
//   }
//   return arrayNumbers;
// }

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const numbers = arr[i];
    sum += numbers;
  }
  let averageNumbers = sum / arrLength;
  return averageNumbers;
}

let arr = [12, 34, 43, 343, 343, 234, 34];
let arrLength = arr.length;
let sumAverage = average(arr);
console.log(sumAverage);

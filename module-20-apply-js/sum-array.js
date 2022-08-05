// var arr = [5, 7, 8, 10, 45, 30];

// function sumOfArray(arr) {
//   for (vari = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       continue;
//     }
//     return arr[i];
//   }
// }

// const sumOdd = sumOfArray(arr);
// console.log(sumOdd);

let arr = [5, 7, 8, 10, 45, 30];

function oddsum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    const numbers = arr[i];
    if (numbers % 2 == 0) {
      continue;
    }
    sum += numbers;
  }
  const average = sum / 3;
  return average;
}

console.log(oddsum(arr));

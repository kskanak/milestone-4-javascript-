function findaverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
  }
  const averageOfSum = sum / arr.length;
  return Math.round(averageOfSum);
}

let array = [23, 343, 545, 656, 56, 565, 653, 234, 34, 54, 454];
let average = findaverage(array);
console.log(average);

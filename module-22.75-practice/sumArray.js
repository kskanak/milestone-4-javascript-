function findSumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const numbers = array[i];
    sum += numbers;
  }
  console.log(sum);
}

// const arr = [23, 433, 33, -2, 43, -12, -13, 32];
const arr2 = [23, 434, 343, 322, 23.33, 23.11, 3.343, -343.22];

const sumArray = findSumArray(arr2);

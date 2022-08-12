function findSecondLargest(arr) {
  let largest = arr[0];
  let second = arr[1];
  for (let i = 0; i < arr.length; i++) {
    const numbers = arr[i];
    if (numbers > largest) {
      largest = numbers;
    }
    if (numbers > second && numbers < largest) {
      second = numbers;
    }
  }
  console.log(largest, second);
}

let array = [23, 343, 53451, 53, 3223, 532, 123];
let secondLargest = findSecondLargest(array);
console.log(secondLargest);

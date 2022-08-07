function findSecondLargest(arr) {
  let highest = arr[0];
  let second = arr[1];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > highest) {
      highest = element;
    }
    if (element > second && element < highest) {
      second = element;
    }
  }
  return [highest, second];
}

let array = [23, 343, 53451, 53, 3223, 532, 123];
let secondLargest = findSecondLargest(array);
console.log(secondLargest);

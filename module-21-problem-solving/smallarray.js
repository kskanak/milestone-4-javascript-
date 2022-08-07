function findMinArray(number) {
  let smallest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}

let arr = [23, 34, 54, 223, 3534];
let minNumber = findMinArray(arr);
console.log(minNumber);

function findpositveValues(values) {
  let positiveOnly = [];
  for (let i = 0; i < values.length; i++) {
    const numbers = values[i];
    if (numbers <= -0) {
      break;
    }
    console.log(numbers);
    positiveOnly.push(numbers);
  }
  return positiveOnly;
}

let array = [12, 34, 54, 64, -1, 6, 7, 45, -2, 3, 4];
let positiveValues = findpositveValues(array);
console.log(positiveValues);

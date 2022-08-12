let number1 = 3333333343;
let number2 = 33434;
let number3 = 343434;

function findMaxNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "number1 is max";
  } else if (num2 > num3 && num2 > num1) {
    return "number2 is max";
  } else {
    return "number3 is max";
  }
}

let maxNumber = findMaxNumber(number1, number2, number3);
console.log(maxNumber);

//  function of min number

function findMinNumber(name1, name2, name3) {
  if (name1 < name2 && name1 < name3) {
    return "Number 1 is min";
  } else if (name2 < name3 && name2 < name1) {
    return "Number 2 is min";
  } else {
    return "Number 3 is min";
  }
}

let minNumber = findMinNumber(number1, number2, number3);
console.log(minNumber);

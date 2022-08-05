// even odd with age

function ageEvenOdd(age) {
  if (age % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
}

let givenAge = 17;
let evenOdd = ageEvenOdd(givenAge);
console.log(givenAge, evenOdd);

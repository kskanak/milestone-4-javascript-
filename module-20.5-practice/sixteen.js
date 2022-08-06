function oddEven(givenNumber) {
  if (givenNumber % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

let number = 5454545;
let check = oddEven(number);
console.log(check);

var number = 1;

function odd_even(numbers) {
  if (numbers % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

var givenNumber = odd_even(number);
console.log(givenNumber);

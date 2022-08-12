//  write e function divisible 3 between 1-20

function divisibleBy3() {
  let count = 0;
  for (i = 1; i <= 20; i++) {
    const number = i;
    if (number % 3 == 0) {
      count++;
      console.log(number);
    }
  }
  console.log(count);
}

divisibleBy3();

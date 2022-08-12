let numbers = [23, 4653, 434, 43, 34];

function tolargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > largest) {
      largest = number;
    }
  }
  console.log(largest);
}

tolargestNumber(numbers);

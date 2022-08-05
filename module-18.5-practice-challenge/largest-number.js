var numbers = [1, 2, 2, 3, 3, 4, 444, 5, 6, 42, 80, 9, 41];
var largest = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);

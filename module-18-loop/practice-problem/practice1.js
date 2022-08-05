// practice with numbers

var numbers = [
  34, 45, 5445, 54, 34,
]; /* declare an array with 5 elements in number type*/

numbers.shift();
numbers.unshift(11);
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.push(23, 99, 111, 23, 44);
console.log(numbers);
var index99 = numbers.indexOf(99);
console.log(index99);
numbers[4] = 121;
console.log(numbers);

for (i = 0; i < numbers.length; i++) {
  var arryNumber = numbers[i];
  if (arryNumber != 23) {
    continue;
  }
  console.log(arryNumber);
}

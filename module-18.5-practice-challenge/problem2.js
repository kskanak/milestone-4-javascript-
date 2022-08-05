//  an array where 1-20 will be unserial wise and  write a program where they will be serial wise

var numbers = [
  1, 3, 4, 5, 10, 12, 18, 11, 20, 2, 19, 16, 6, 8, 7, 9, 13, 15, 14, 17,
];

numbers.sort(function (a, b) {
  return a - b;
});

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  console.log(num);
}

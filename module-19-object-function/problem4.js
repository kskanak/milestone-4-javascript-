var number = [5, 8, 10, 20, 39, 388, 12, 34, 34];

function numbers(number) {
  var sum = 0;
  for (i = 0; i < number.length; i++) {
    sum += number[i];
    var average = sum / number.length;
    average = parseInt(average);
  }
  console.log(average);
}

numbers(number);

var number = [2, 3, 4, 5, 6, 7, 7, 8, 87];

function sumAverage(number) {
  var sum = 0;
  for (i = 0; i < number.length; i++) {
    var num = number[i];
    sum += num;
    var average = sum / number.length;
  }
  return [sum, average];
}

var sumnAverage = sumAverage(number);
console.log(sumnAverage);

// Write a program to average marks of mathmatics, Biology, Chemistry, Physics and bangla of student, given number accordingly 75.25, 65, 80, 35.45,99.50

// output: result in 2 decimal places

// solution
var math = 75.25;
var biology = 65;
var chemisty = 80;
var Physics = 35.45;
var bangla = 99.5;
var totalSubjects = 5;
var totaMarks = math + biology + chemisty + Physics + bangla;
console.log(totaMarks);
var average = totaMarks / totalSubjects;
console.log(average);
average = average.toFixed(2);
average = parseFloat(average);
console.log(average);

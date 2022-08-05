/**
 * 1. you are given three numbers 13, 79, and 45, write a program that will print the largest number using if-else.
 * 2. you are given a triangle with the 9, 8, 9, write a program to check whether a triangle s Isosceles or not using if -else
 * */

// solution -1

var num1 = 130;
var num2 = 79;
var num3 = 4005;

if (num1 > num2 && num1 > num3) {
  console.log("num1 is largest");
} else if (num2 > num3 && num2 > num1) {
  console.log("num2 is largest");
} else if (num3 > num2 && num3 > num1) {
  console.log("num3 is the largest");
}

// solution 2

var side1 = 7;
var side2 = 0;
var side3 = 0;

if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("isosceles");
} else {
  console.log("no isosceles");
}

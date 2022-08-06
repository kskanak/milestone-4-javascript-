// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

let num1 = 1113;
let num2 = 79111;
let num3 = 405111;

if (num1 > num2 && num1 > num3) {
  console.log("num1 is largest");
} else if (num2 > num3 && num2 > num1) {
  console.log("num2 is largest");
} else {
  console.log("num 3 is largest");
}

/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else. */

let side1 = 9;
let side2 = 8;
let side3 = 90;

if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("Isosceles");
} else {
  console.log("No Isosceles");
}

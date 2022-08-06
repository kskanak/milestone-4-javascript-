// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.

let myScore = 88;
let JaneScore = 95;
let peterScore = 56;
let johnScore = 40;
let score = johnScore;
switch (true) {
  case score >= 80:
    console.log("Grade is A");
    break;
  case score >= 60:
    console.log("Grade is B");
    break;
  case score >= 50:
    console.log("Grade is C");
    break;
  case score >= 40:
    console.log("Grade is D");
    break;
  case score >= 39:
    console.log("Grade is F");
    break;
}

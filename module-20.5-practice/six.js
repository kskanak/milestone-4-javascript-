let myScore = 1;
let JaneScore = 95;
let peterScore = 56;
let johnScore = 40;
let score = myScore;

if (score > 100 || score <= 0) {
  console.log("Invalid score");
} else if (score >= 80) {
  console.log("Grade is A");
} else if (score >= 60) {
  console.log("Grade is B ");
} else if (score >= 50) {
  console.log("Grade is C");
} else if (score >= 40) {
  console.log("Grade is D");
} else if (score < 39) {
  console.log(" Grade is F");
}

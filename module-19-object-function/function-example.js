function allMarks(assignment1, assignment2, asssignment3) {
  var totalMarks = assignment1 + assignment2 + asssignment3;
  var subjects = 3;
  var average = totalMarks / subjects;
  return average;
}

var marksOfAssignment1 = 60;
var marksOfAssignment2 = 60;
var marksOfAssignment3 = 60;

var averageMarks = allMarks(
  marksOfAssignment1,
  marksOfAssignment2,
  marksOfAssignment3
);
console.log(averageMarks);

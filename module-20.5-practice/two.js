let math = 75.25;
let biology = 65;
let english = 80;
let bangla = 35.45;
let chemisty = 99.5;

const totalSubjects = 5;
let totalMarks = math + biology + english + bangla + chemisty;
let averageMarks = totalMarks / totalSubjects;
console.log(averageMarks);
let marksInDecimal = averageMarks.toFixed(2);
console.log(marksInDecimal);
marksInDecimal = parseFloat(marksInDecimal);
console.log(marksInDecimal);

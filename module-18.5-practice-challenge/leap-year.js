// write a program where input year shows where its leap year or not;;

var year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

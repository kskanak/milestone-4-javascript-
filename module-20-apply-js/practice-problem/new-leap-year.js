// // Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

let years = [2023, 2024, 2025, 2028, 2030];

function checkLeapYear(givenYear) {
  let leapyears = [];
  for (let i = 0; i < givenYear.length; i++) {
    const arrayYears = givenYear[i];
    if (
      (arrayYears % 4 === 0 && arrayYears % 100 !== 0) ||
      arrayYears % 400 === 0
    ) {
      leapyears.push(arrayYears);
    }
  }
  return leapyears;
}

let leapYearsOnly = checkLeapYear(years);
console.log("This years are the leap year:", leapYearsOnly);

// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

let array = [2023, 2024, 2025, 2028, 2030];

function toLeapYear(givenArray) {
  let leapYears = [];
  for (let i = 0; i < givenArray.length; i++) {
    const allYear = givenArray[i];
    if ((allYear % 4 === 0 && allYear % 100 !== 0) || allYear % 400 === 0) {
      leapYears.push(allYear);
    }
  }
  return leapYears;
}

let arrayOfLeapYear = toLeapYear(array);
console.log(arrayOfLeapYear);

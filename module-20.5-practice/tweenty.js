// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

let array = [2023, 2024, 2025, 2028, 2030];

function toLeapYear(givenArray) {
  let leapYearArray = [];
  for (let i = 0; i < givenArray.length; i++) {
    const arrayNumbers = givenArray[i];
    if (
      (arrayNumbers % 4 === 0 && arrayNumbers % 100 !== 0) ||
      arrayNumbers % 400 === 0
    ) {
      leapYearArray.push(arrayNumbers);
    }
  }
  return leapYearArray;
}

let arrayOfLeapYear = toLeapYear(array);
console.log(arrayOfLeapYear);

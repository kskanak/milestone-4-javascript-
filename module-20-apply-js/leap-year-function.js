function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "true";
  } else {
    return "false";
  }
}

let givenYear = 2022;
let knowleapyear = leapYear(givenYear);
console.log(knowleapyear);

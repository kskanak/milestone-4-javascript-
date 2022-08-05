function meterTofeet(meters) {
  let feet = meters * 3.28084;
  return feet;
}
let givenMeters = 110;

let converter = meterTofeet(givenMeters);
console.log("feet :", converter);

// ============================================================hours to minutes converter

function hoursToMinutes(givenHours) {
  let minutes = givenHours * 60;
  return minutes;
}
let Hours = 21;
let totalMinutes = hoursToMinutes(Hours);
console.log(totalMinutes, "minutes");

//=================================================== hours to second conversion function

function hoursToSecond(hours) {
  let minutes = hours * 60;
  console.log(minutes);
  let seconds = minutes * 60;
  return seconds;
}

let givenHours = 4;
let inSecond = hoursToSecond(givenHours);
console.log(inSecond, "seconds");

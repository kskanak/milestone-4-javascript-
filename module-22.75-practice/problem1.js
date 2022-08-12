function feetToInch(givenFeet) {
  const toInchs = givenFeet * 12;
  return toInchs;
}

const feet = 23;
const inch = feetToInch(feet);
console.log(inch, "inches");

// centimeter to meter --------------------------------------------------------------------------------------------------

function centimeterToMeter(givenCentimeter) {
  const toMeters = givenCentimeter / 100;
  return toMeters;
}

const centimeter = 234;
const meter = centimeterToMeter(centimeter);
console.log(meter, "meter");

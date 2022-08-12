//  write a function, that will converts kilometers to miles, input will take kilometes and will return in miles

function kilometersToMiles(givenKilometers) {
  const meterCalculator = givenKilometers * 1000;
  return meterCalculator;
}

const kilometers = 154.583;
const meters = kilometersToMiles(kilometers);
console.log(meters, "meters..");

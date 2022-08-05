//  take an array of strings with all uppercase or normal then turn out the string into lowercase;

function toLowercase(uppercase) {
  let text = uppercase;
  let lowercase = text.toLowerCase();
  return lowercase;
}
let name =
  "EVERYTHING WILL BE THE BEST, ALWAYS HOPE FOR THE BETTER AND PREPARE FOR THE WORST";
let allLowerCase = toLowercase(name);
console.log(allLowerCase);

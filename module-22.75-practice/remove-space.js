// remove spaces from a strings;

let textsss =
  " its a beautiful World, just walk and see the world beauty of it";
let text = textsss.replace(/\s/g, "");
console.log(text);

//  write a function that will return true if number is divisiable by 10 and if not will return false;

function isDivisible(givenNumber) {
  if (givenNumber % 10 == 0) {
    return "true";
  } else {
    return "false";
  }
}
const number = 2;
const divisible = isDivisible(number);
console.log(divisible);

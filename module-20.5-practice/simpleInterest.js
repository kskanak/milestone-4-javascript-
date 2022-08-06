let principleMoney = 10000;
let rate = 10;
let year = 5;

function toSimpleInterest(p, r, t) {
  let multiplication = p * r * t;
  let result = multiplication / 100;
  // return result;
  console.log(result);
  // let amount = principleMoney + result;
  // console.log(amount);
}

let simpleInterest = toSimpleInterest(principleMoney, rate, year);
// console.log(simpleInterest);

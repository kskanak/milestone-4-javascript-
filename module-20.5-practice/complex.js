let principleMoney = 10000;
let rate = 10;
let year = 3;
console.log(principleMoney);
function toComplexInterest(p, r, t) {
  for (i = 1; i <= t; i++) {
    let year = i;
    let multiplication = p * r * 1;
    let result = multiplication / 100;
    console.log(result);
    principleMoney += result;
  }
  console.log(principleMoney);
}

toComplexInterest(principleMoney, rate, year);

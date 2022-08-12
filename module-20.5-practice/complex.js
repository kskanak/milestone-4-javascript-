let principleMoney = 10000;
let rate = 10;
let year = 3;
console.log(principleMoney);
function toComplexInterest(p, r, t) {
  let finalPriciple = p;
  let time = 1;
  let totalInterest = 0;
  for (let i = 1; i <= t; i++) {
    let interest = (finalPriciple * r * time) / 100;
    totalInterest += interest;
    finalPriciple += interest;
  }
  console.log(finalPriciple, totalInterest);
}

toComplexInterest(principleMoney, rate, year);

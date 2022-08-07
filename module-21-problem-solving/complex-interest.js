function findComplexInterest(p, r, t) {
  let finalPrinciple = p;
  let finalYearInterest = 0;
  let year = 1;
  for (let i = 0; i < t; i++) {
    const interest = (finalPrinciple * r * year) / 100;
    finalYearInterest = interest;
    finalPrinciple += interest;
  }
  return [
    parseFloat(finalPrinciple.toFixed(2)),
    parseFloat(finalYearInterest.toFixed(2)),
  ];
}

let principle = 10500;
let rate = 8.5;
let tenure = 7;

let complexInterest = findComplexInterest(principle, rate, tenure);
console.log("final princinple and final year interest :", complexInterest);

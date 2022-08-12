// a prime number is a number which is only divided by itself;

// function findPrimenumber(givenNumber) {
//   if (
//     givenNumber % givenNumber === 0 &&
//     givenNumber % 1 === 0 &&
//     givenNumber % 2 == !0
//   ) {
//     return "prime Number";
//   } else {
//     return "Not a Prime Number";
//   }
// }

// const number = 6;
// const primeNumber = findPrimenumber(number);
// console.log(primeNumber);

for (i = 1; i <= 100; i++) {
  const number = i;
  if (number % number === 0 && number % 1 === 0 && number % 2 !== 0) {
    console.log(number);
  }
}

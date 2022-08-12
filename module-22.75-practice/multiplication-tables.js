function findMultiplications(givenNumber) {
  for (let i = 1; i <= 10; i++) {
    const elements = i;
    let result = elements * givenNumber;
    console.log(result);
  }
}

const number = 2;
const multiplication = findMultiplications(number);

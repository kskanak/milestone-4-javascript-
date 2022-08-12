function findNumbersOfVowels(givenText) {
  let allElements = 0;
  let vowels = "";
  let vowelsQuantity = 0;
  for (i = 0; i < givenText.length; i++) {
    const elements = givenText[i];
    allElements++;

    if (
      elements == "a" ||
      elements == "e" ||
      elements == "i" ||
      elements == "o" ||
      elements == "u"
    ) {
      vowels += elements;
      vowelsQuantity++;
    }
  }
  console.log(allElements, vowelsQuantity);
}

const text =
  "Create a function that'll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you'll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.";
console.log(text.length);

const numbersOfVowels = findNumbersOfVowels(text);

function removeDuplicates(givenNames) {
  let unique = [];
  for (i = 0; i < givenNames.length; i++) {
    const names = givenNames[i];
    if (unique.includes(names) === false) {
      unique.push(names);
    }
  }
  console.log(unique);
}

const vegetable = [
  "orange",
  "apple",
  "banana",
  "grapes",
  "apple",
  "dragon",
  "orange",
  "guava",
  "grapes",
];

const removed = removeDuplicates(vegetable);

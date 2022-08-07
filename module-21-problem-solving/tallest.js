function findTallest(givenarray) {
  let result = givenarray[0];
  for (let i = 0; i < givenarray.length; i++) {
    const index = i;
    const elements = givenarray[index];
    if (elements > result) {
      result = elements;
    }
  }
  return result;
}

let height = [173, 133, 143, 123, 193];
let tallest = findTallest(height);
console.log(tallest, "is the tallest");

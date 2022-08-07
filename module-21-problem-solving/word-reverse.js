function wordReverse(givenText) {
  let splitword = givenText.split(" ");
  let reversearray = [];
  for (let i = splitword.length - 1; i >= 0; i--) {
    const index = i;
    const element = splitword[i];
    reversearray.push(element);
    console.log(index);
  }
  const result = reversearray.join(" ");
  console.log(result);
}

let story = "all is well";
let reversed = wordReverse(story);
console.log(reversed);

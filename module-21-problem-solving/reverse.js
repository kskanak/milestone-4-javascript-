function toReverseCharecter(text) {
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reverse += element;
  }
  console.log(reverse);
}

let story = "let there be light while there is darkness";
let reverseCharecter = toReverseCharecter(story);

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

// find count all the vowels of an string

function findvowels(text) {
  let vowels = " ";
  let vowelnumbers = 0;
  for (i = 0; i < text.length; i++) {
    const element = text[i];
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      vowels += element;
      vowelnumbers++;
    }
  }
  console.log(vowels, typeof vowels);
}
let story =
  "what ever happen happens for the best, this is to believe, no matter what";
let vowels = findvowels(story);

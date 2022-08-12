function findlargestName(givenName) {
  let largest = givenName[0];
  for (i = 0; i < givenName.length; i++) {
    const name = givenName[i];
    if (name.length > largest.length) {
      largest = name;
    }
  }
  return largest;
}

let friendsName = ["ks", "kanak", "khaled", "khaladul", "alam"];
let largestName = findlargestName(friendsName);
console.log(largestName);

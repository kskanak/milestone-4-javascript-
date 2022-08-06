let friendsName = ["ks", "kanak", "khaled", "khaladul", "alam"];
let largestName = friendsName[0];
for (let i = 0; i < friendsName.length; i++) {
  const arrayName = friendsName[i];
  if (arrayName.length > largestName.length) {
    largestName = arrayName;
  }
}

console.log(largestName);

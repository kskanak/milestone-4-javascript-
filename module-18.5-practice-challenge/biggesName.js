var friends = [
  "sayed",
  "adil",
  "samim",
  "priyanka",
  "katrinakaif",
  "lanawachwochki",
];
var largestName = friends[0];
for (i = 0; i < friends.length; i++) {
  var friendName = friends[i];
  if (friendName.length > largestName.length) {
    largestName = friendName;
  }
}
console.log(largestName);

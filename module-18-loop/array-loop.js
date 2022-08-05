var veg = ["potato", "tometo", "onion", "ginger", "garlic"];

for (i = veg.length - 1; i >= 0; i--) {
  var vegItem = veg[i];
  if (vegItem === "ginger") {
    continue;
  }
  console.log(vegItem);
}

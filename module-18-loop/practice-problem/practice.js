var vegetables = ["poteto", "tomato", "onion", "broccoli", "ginger"];
console.log(vegetables);

vegetables.shift();
console.log(vegetables);
vegetables.unshift("garlic");
console.log(vegetables);
vegetables.pop();
vegetables.pop();
console.log(vegetables);
vegetables.push("spinach", "raddish", "spinach", "bringal", "corn");
// vegetables.push("raddish");
// vegetables.push("spinach");
// vegetables.push("bringal");
// vegetables.push("corn");
console.log(vegetables);
var indexRaddish = vegetables.indexOf("raddish");
console.log(indexRaddish);
vegetables[4] = "lemon";
console.log(vegetables);

for (i = 0; i < vegetables.length; i++) {
  var vegItems = vegetables[i];
  console.log(vegItems);
}

for (i = 0; i < vegetables.length; i++) {
  var vegItems = vegetables[i];
  if (vegItems != "spinach") {
    continue;
  }
  console.log(vegItems);
}

for (i = 0; i < vegetables.length; i++) {
  var vegItems = vegetables[i];
  if (vegItems === "spinach") {
    continue;
  }
  console.log(vegItems);
}

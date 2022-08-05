const shopping = {
  books: 4,
  pen: 2,
  keyboards: 2,
  mounse: 1,
  monitor: 2,
};
// 1, way to output object through for loop
const allProperty = Object.keys(shopping);
console.log(allProperty);
const allValues = Object.values(shopping);
console.log(allValues);

for (i = 0; i < allProperty.length; i++) {
  var properties = allProperty[i];
  var values = shopping[properties];
  // console.log(properties, values);
}

// second way to element

for (var props in shopping) {
  var value = shopping[props];
  // console.log(props, value);
}

var nnnnn = Object.entries(shopping);
console.log(nnnnn);

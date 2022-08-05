const shopping = {
  books: 4,
  pen: 2,
  keyboards: 2,
  mounse: 1,
  monitor: 2,
};
// shopping er all
console.log(shopping);

//  to see value
console.log(shopping.pen);

// to see value
var quantity = shopping["books"];
console.log(quantity);

//  to see all the properties
var allProperties = Object.keys(shopping);
console.log(allProperties);

// to see all the values
var allValues = Object.values(shopping);
console.log(allValues);

// at a time see property name and values

var propertyName = "pen";
var propertyValue = shopping[propertyName];
console.log(propertyName, propertyValue);

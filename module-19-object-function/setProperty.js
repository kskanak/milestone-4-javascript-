const shopping = {
  books: 4,
  pen: 2,
  keyboards: 2,
  mounse: 1,
  monitor: 2,
};
console.log(shopping);
// 1. to set the valuee
shopping.books = 10;
console.log(shopping);

// 2. set the values

shopping["pen"] = 20;
console.log(shopping);

// 3, set values with variable

var newset = "books";
shopping[newset] = 33;
console.log(shopping);

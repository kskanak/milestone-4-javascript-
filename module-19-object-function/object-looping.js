const shopping = {
  books: 4,
  pen: 2,
  keyboards: 2,
  mounse: 1,
  monitor: 2,
};

// 1, way to output object through for loop=======================================================]

// const allProperty = Object.keys(shopping);
// console.log(allProperty);
// const allValues = Object.values(shopping);
// console.log(allValues);
// for (let i = 0; i < allProperty.length; i++) {
//   let objectProperty = allProperty[i];
//   let objectValues = shopping[objectProperty];
//   console.log(objectProperty, objectValues);
// }
// ****************************second way to element*************************************

for (let props in shopping) {
  let objectsnames = props;
  let objectValues = shopping[objectsnames];
  console.log(objectsnames, objectValues);
}

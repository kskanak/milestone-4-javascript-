let laptop = {
  processor: "corei5",
  generation: "5th",
  brand: "samsung",
  price: 21000,
  new: false,
};
/* ---------------------- for in loop------------------------------- */
// // for (let properties in laptop) {
// //   const laptopProperty = properties;
// //   const laptopPropertyValues = laptop[laptopProperty];
// //   console.log(laptopProperty, laptopPropertyValues);
// }

/* --------------------------- for loop --------------------- */

let allProperties = Object.keys(laptop);
let allValues = Object.values(laptop);

for (let i = 0; i < allProperties.length; i++) {
  const laptopProperty = allProperties[i];
  const laptopValues = laptop[laptopProperty];
  console.log(laptopProperty, laptopValues);
}

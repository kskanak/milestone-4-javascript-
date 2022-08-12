const shoppingCart = [
  { product: "shirt", price: 2000, quantity: 3 },
  { product: "pant", price: 3000, quantity: 2 },
  { product: "panjabi", price: 4000, quantity: 2 },
  { product: "T-shirt", price: 1000, quantity: 3 },
  { product: "Belt", price: 500, quantity: 2 },
];

function findTotalPrice(itemDetails) {
  let sum = 0;
  let totalQuentity = 0;

  for (let i = 0; i < itemDetails.length; i++) {
    const pruductDetails = itemDetails[i];
    const totalPrice = pruductDetails.price * pruductDetails.quantity;
    sum += totalPrice;
    totalQuentity += pruductDetails.quantity;
  }
  return [sum, totalQuentity];
}

const totalprice = findTotalPrice(shoppingCart);
console.log("Total price and Quantity", totalprice);

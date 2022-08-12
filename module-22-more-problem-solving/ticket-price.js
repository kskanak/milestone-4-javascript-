/*
 ** If ticket quantity less than 100, then price is 100tk
 **  If ticket quantity is more than 100 and less than 2000 then  1st 100 ticket price is 100tk and for rest price is 90tk
 **  If ticket quantity is more than 200 than ticket price is for first 100 is 100tk, for second 100 is 90 tk and for rest is 70tk*/

//  write a function to give the total price of given number ??

function findtotalprice(givenQuantity) {
  const price1st100 = 100;
  const price2nd100 = 90;
  const plus200Price = 70;
  if (givenQuantity <= 100 && givenQuantity >= 1) {
    const ticketCost1st100 = givenQuantity * price1st100;
    return ticketCost1st100;
  } else if (givenQuantity > 100 && givenQuantity <= 200) {
    const restQuantity = givenQuantity - 100;
    const restPrice = restQuantity * price2nd100;
    const price100 = 100 * price1st100;
    const totalCost = price100 + restPrice;
    return totalCost;
  } else if (givenQuantity > 200) {
    const restQuantity = givenQuantity - 200;
    const restPrice = restQuantity * plus200Price;
    const price100 = 100 * price1st100;
    const price200 = 100 * price2nd100;
    const totalCost = price100 + price200 + restPrice;
    return totalCost;
  }
}

let tickets = 150;
const totalPrice = findtotalprice(tickets);
console.log(totalPrice);

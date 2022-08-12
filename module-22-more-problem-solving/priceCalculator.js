function PriceCalculator(potatoQuantity, tometoQuantity, onionQuantity) {
  const potatoPricePerKg = 50;
  const tometotoPricePerKG = 120;
  const onionpricePerKG = 80;

  const potatoPrice = potatoQuantity * potatoPricePerKg;
  const tometoPrice = tometoQuantity * tometotoPricePerKG;
  const onionPrice = onionQuantity * onionpricePerKG;

  const totalcost = potatoPrice + tometoPrice + onionPrice;
  return totalcost;
}

let potato = 1;
let tometo = 1;
let onion = 1;
const totalPrice = PriceCalculator(potato, tometo, onion);
console.log("Total cost :", totalPrice);

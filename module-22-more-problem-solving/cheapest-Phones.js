const allPhones = [
  {
    brand: "samsumng",
    storage: "34gb",
    price: 33000,
    camera: "32mp",
    color: "white",
  },
  {
    brand: "iphone",
    storage: "256gb",
    price: 133000,
    camera: "12mp",
    color: "rose",
  },
  {
    brand: "Oneplus",
    storage: "56gb",
    price: 63000,
    camera: "24mp",
    color: "silver",
  },
  {
    brand: "xiomi",
    storage: "64gb",
    price: 43000,
    camera: "32mp",
    color: "golden",
  },
  {
    brand: "Redmi",
    storage: "34gb",
    price: 23000,
    camera: "32mp",
    color: "silver",
  },
  {
    brand: "Pixel",
    storage: "34g",
    price: 62000,
    camera: "24mp",
    color: "Black",
  },
];

function findCheapestPhone(phoneList) {
  let cheapest = phoneList[0];
  for (let i = 0; i < phoneList.length; i++) {
    const phones = phoneList[i];
    if (phones.price < cheapest.price) {
      cheapest = phones;
    }
  }
  console.log(cheapest);
}

const cheapestPhone = findCheapestPhone(allPhones);

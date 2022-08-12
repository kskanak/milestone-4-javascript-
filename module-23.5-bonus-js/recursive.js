// factorial using recursive function

function matchedProducts(products, brandApple, mobileItem, laptopItem) {
  let laptops = [];
  let onlyMobiles = [];
  let apples = [];

  for (let product of products) {
    console.log(product);
    // finding apple product
    if (product.brand.toLowerCase().includes(brandApple.toLowerCase())) {
      apples.push(product);
      // finding mobiles only
    }
    if (product.item.toLowerCase().includes(mobileItem.toLowerCase())) {
      onlyMobiles.push(product);
    }
    // finding laptops
    if (product.item.toLowerCase().includes(laptopItem.toLowerCase())) {
      laptops.push(product);
    }
  }
  console.log(apples, onlyMobiles, laptops);
}

const mobiles = [
  { brand: "apple", model: "iphon14", price: 120000, item: "mobile" },
  { brand: "samsung", model: "s20", price: 100000, item: "mobile" },
  { brand: "Apple", model: "mac", price: 110000, item: "laptop" },
  { brand: "pixel", model: "p22", price: 105000, item: "mobile" },
  { brand: "oppo", model: "", price: 120000, item: "laptop" },
  { brand: "Samsung", model: "i5", price: 120000, item: "Laptop" },
  { brand: "HP", model: "iphon14", price: 120000, item: "LAPTOP" },
  { brand: "Dell", model: "inspiron", price: 120000, item: "laptop" },
  { brand: "LENEVO", model: "wow", price: 120000, item: "laptop" },
];

const matched = matchedProducts(mobiles, "APPLE", "MOBILE", "LAPTOP");

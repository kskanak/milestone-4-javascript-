// onek gulu guner somosthie hocche object
// declaration of object

var mobile = {
  brand: "samsung",
  model: "mo2s",
  price: 20000,
};

console.log(mobile);
console.log(mobile.brand);
mobile.model = "galaxy";
console.log(mobile);
mobile["model"] = "galaxy 20";
console.log(mobile);

var item = "price";
mobile[item] = 33333;
console.log(mobile);

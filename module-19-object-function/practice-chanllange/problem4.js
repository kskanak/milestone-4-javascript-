var pizza = {
  topping: ["cheese", "souce", "pepparoni"],
  crust: "deep dish",
  serves: 2,
};

var allProperty = Object.keys(pizza);
var allvalues = Object.values(pizza);
var indexpepaa = pizza.topping.indexOf("souce");
pizza.topping[1] = "mango";
var slicepepparoni = pizza.topping.slice(2);
console.log(slicepepparoni);

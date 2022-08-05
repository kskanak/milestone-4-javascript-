const pizza = {
  toppings: ["Cheese", "Sauce", "Pepparoni"],
  crust: "deep dish",
  server: 2,
};

let Pepparoni = pizza.toppings.slice(0, 1);
console.log(Pepparoni);
pizza.toppings.pop();
console.log(pizza);

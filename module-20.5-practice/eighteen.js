// একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function toLowerCase(uppercase) {
  let text = uppercase;
  let lowercase = text.toLowerCase();
  return lowercase;
}

let uppercaseText = "CLEVER FOX JUMP OVER THE ROOP";
let returnLowerCase = toLowerCase(uppercaseText);
console.log(returnLowerCase);

//  sqare of any numbers;

function numberSquare(givenNumber) {
  let squre = givenNumber * givenNumber;
  return squre;
}
let number = 51;
let result = numberSquare(number);
console.log(result);

//  object declare in a loop and print pepparoni value;

let pizza = {
  server: 2,
  toppings: ["chicken", "onion", "pepparoni"],
  crust: "thin crispy",
};
let pizzaProperty = Object.keys(pizza);
let pizzaPropertyValues = Object.values(pizza);

for (let i = 0; i < pizzaProperty.length; i++) {
  const allProperties = pizzaProperty[i];
  const allValues = pizza[allProperties];
  console.log(allProperties, allValues);
}
let slice = pizza.toppings[2];
console.log(slice);
let indexpep = pizza.toppings.indexOf("pepparoni");
console.log(indexpep);

//  problem: harry's mother gave him money and asked him to buy some oranges and
// apples. Write a program to help harry calculate how much money the shopkeeper
// will return gave money: 1000 1kg apple price: 300 1kg orange price 400 return
// amount ?

// solution

var givenMoney = 1000;
var applePrice = 300;
var orangePrice = 400;
var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var returnMoney = givenMoney - totalPrice;
console.log(returnMoney);

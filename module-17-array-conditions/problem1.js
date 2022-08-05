/** given an array
 *
 * var fruits = [ 'apple', 'banana', 'orange'];
 *
 *
 * 1. find the index of banana and replace banana with mango
 * 2. remove orange with water melon;
 *
 * **/

// solution

var fruits = ["Apple", "Banana", "Orange"];
var indexBanana = fruits.indexOf("Banana");
console.log(indexBanana);
fruits[1] = "mango";
console.log(fruits);
fruits.pop();
fruits.push("watermelon");
console.log(fruits);

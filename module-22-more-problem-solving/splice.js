/* splice removes elements from an array, if needed insert elements in those spaces.
 ** return deleted number in a new array and changes the original array
 **
 ** array.splice(2, 3, 99, 91, 23)
 ** first values from the remove starts off, second value inclued first value how many to remove and rest values is to place them in the array
 */

const arr = [23, 341, 343, 23465, 4454, 45, 23, 64, 34];
const partial = arr.splice(2, 6, 22, 20, 19, 18, 17, 16, 15);
console.log(partial, arr);

function toBiggerToSmall(givenArray) {
  for (let i = 0; i < givenArray.length; i++) {
    const numbers = givenArray[i];
    console.log(numbers);
  }
}

let array = [1, 3, 4, 5, 2, 10, 7, 9, 8, 6];
array.sort(function (a, b) {
  return a - b;
});

const bigToSmall = toBiggerToSmall(array);

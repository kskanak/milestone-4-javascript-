function ToFilterNegavtive(givenArray) {
  for (let i = 0; i < givenArray.length; i++) {
    const numbers = givenArray[i];
    if (numbers < -0) {
      continue;
    }
    console.log(numbers);
  }
}

const array = [12, 14, 19, -12, -10, 0, 2, 5, -6, -8, 10, 20];
const filterNegative = ToFilterNegavtive(array);

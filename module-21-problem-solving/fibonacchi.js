function findFibonacchi(array) {
  for (i = 2; i <= 10; i++) {
    array[i] = array[i - 1] + array[i - 2];
    console.log(array);
  }
}
let fiboArray = [0, 1];
let fibonacchi = findFibonacchi(fiboArray);

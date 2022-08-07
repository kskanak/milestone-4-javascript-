function fibonacchi(arr) {
  for (let i = 2; i <= 15; i++) {
    fiboarray[i] = fiboarray[i - 1] + fiboarray[i - 2];
  }
  console.log(fiboarray);
}

let fiboarray = [0, 1];
fibonacchi(fiboarray);

let dailyWorks = [
  "unlock video at 8pm ",
  "practice while watching videos",
  "takes notes while watching videos ",
  "after finishing the module, practice yourself ",
  "if didnt understand anything",
  "join support sesssion",
];
console.log(dailyWorks.length);
// // reverse for loop

// for (let i = dailyWorks.length - 1; i >= 1; i--) {
//   const arr = dailyWorks[i];
//   console.log(arr);
// }

// revers way with while loop==========================================================

let i = dailyWorks.length - 1;
while (i >= 0) {
  const arrayWorks = dailyWorks[i];
  console.log(arrayWorks);
  i--;
}

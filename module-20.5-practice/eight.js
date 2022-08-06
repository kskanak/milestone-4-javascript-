let dailyWorks = [
  "unlock video at 8pm ",
  "practice while watching videos",
  "takes notes while watching videos ",
  "after finishing the module, practice yourself ",
  "if didnt understand anything",
  "join support sesssion ",
];

// for (let i = 0; i < dailyWorks.length; i++) {
//   const dailyWorksArray = dailyWorks[i];
//   if (dailyWorksArray === "if didnt understand anything") {
//     break;
//   }
//   console.log(dailyWorksArray);
// }

// same equation with while loop

let i = 0;
while (i < dailyWorks.length) {
  const arrayDailyWorks = dailyWorks[i];
  i++;
  if (arrayDailyWorks === "if didnt understand anything") {
    break;
  }
  console.log(arrayDailyWorks);
}

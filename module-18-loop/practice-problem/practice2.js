var dailyWorks = [
  "unlock module at 8pm",
  "look video",
  "take notes while watchs video",
  "after the module, practice the whole module",
  "didnt understand!, jump into support session",
];

for (var i = 0; i < dailyWorks.length; i++) {
  if (dailyWorks[i] === "didnt understand!, jump into support session") {
    continue;
  }
  console.log(dailyWorks[i]);
}

// var i = dailyWorks.length;
// while (i >= 0) {
//   console.log(dailyWorks[i]);
//   i--;
// }

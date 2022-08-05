let a = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);

for (i = 0; i < unique.length; i++) {
  console.log(unique[i]);
}

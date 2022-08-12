function findFooBar(foobar) {
  for (let i = 1; i <= 50; i++) {
    let element = i;
    if (element % 3 == 0 && element % 5 == 0) {
      element = "foobar";
    } else if (element % 3 == 0) {
      element = "foo";
    } else if (element % 5 == 0) {
      element = "bar";
    }
    console.log(element);
  }
}

findFooBar("d");
// console.log(findFooBar("d"));

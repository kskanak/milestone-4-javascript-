function foo() {
  console.log("foo");
  bar();
}

function bar() {
  console.log("bar");
}
bar();
foo();

function setup() {
  var names = [];
  var n1 = {};

  n1.firstname = "John";
  n1.lastname = "Doe";
  names.push(n1);

  var n2 = {};
  n2.firstname = "Bill";
  n2.lastname = "Smith";
  names.push(n2);

  return names;
}

var temp = setup();
console.log(temp);
console.log(temp[0].firstname);

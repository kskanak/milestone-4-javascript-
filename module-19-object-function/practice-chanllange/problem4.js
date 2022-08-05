function fullName(firstName, space, lastName) {
  let completeName = firstName + space + lastName;
  return completeName;
}

let fName = "ks";
let space = " ";
let lName = "kanak";

let goodName = fullName(fName, space, lName);
console.log(goodName);

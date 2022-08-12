// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function findMultiplication(givenName) {
  for (i = 1; i <= 10; i++) {
    let number = i;
    let result = number * givenName;
    console.log(result);
  }
}

let number = 10;

let multiplication = findMultiplication(number);

// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function multiplication(givenNumber) {
  for (let i = 1; i <= 10; i++) {
    const results = i * givenNumber;
    console.log(results);
  }
}

multiplication(13);

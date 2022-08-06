// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

function toFarenheit(givenCelcius) {
  let result = givenCelcius * (9 / 5);
  let result2 = result + 32;
  return result2;
}

let celcius = 144;
let farenheit = toFarenheit(celcius);
console.log(farenheit, "Farenheit");

// একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

function toCelcius(givenFarenheit) {
  let results = givenFarenheit - 32;
  let results2 = results * (5 / 9);
  return results2;
}

let farenheits = 210;
let celciuss = toCelcius(farenheits);
console.log(celciuss, "Celcius");

// leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapYear(givenYear) {
  if ((givenYear % 4 === 0 && givenYear % 100 !== 0) || givenYear % 400 === 0) {
    return "true";
  } else {
    return "false";
  }
}

let year = 2022;

let check = leapYear(year);
console.log(check);

// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

function evenOdd(givenNumber) {
  if (givenNumber % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
}
let number = 23;
let result = evenOdd(number);
console.log(result);

// এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।

function toMinute(hours) {
  let result = hours * 60;
  let seconds = result * 60;
  return seconds;
}
let hour = 20;
let seconds = toMinute(hour);
console.log(seconds, "seconds");

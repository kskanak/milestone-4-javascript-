function paperRequirments(firstBook, secondBook, thirdBook) {
  const pagesNeededFor1stBook = 100;
  const pagesNeededFor2ndBook = 200;
  const pagesNeededForthirdBook = 300;
  let totalPagesNeededForFirstBook = firstBook * pagesNeededFor1stBook;
  let totalPagesNeededForSecondBook = secondBook * pagesNeededFor2ndBook;
  let totalPagesNeededForThirdBook = thirdBook * pagesNeededForthirdBook;
  let totalPagesNeeded =
    totalPagesNeededForFirstBook +
    totalPagesNeededForSecondBook +
    totalPagesNeededForThirdBook;
  return totalPagesNeeded;
}

let firstBookQuantity = 5;
let secondBookQuantity = 1;
let thirdBookQuantity = 1;

const totalPapersRequirments = paperRequirments(
  firstBookQuantity,
  secondBookQuantity,
  thirdBookQuantity
);
console.log(totalPapersRequirments, "pages needed.");

// ***************************************************************************************************************

function bestFriend(names) {
  let bestFriendName = names[0];
  for (i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.length > bestFriendName.length) {
      bestFriendName = name;
    }
  }
  return bestFriendName;
}

const friendsName = ["ks", "kanak", "khaled", "alam", "khaladul"];

const bestFriendName = bestFriend(friendsName);
console.log(bestFriendName);

// ***********************************************************************************************************

function findPositiveNumbers(givenArray) {
  let positiveNumbersArray = [];
  for (let i = 0; i < givenArray.length; i++) {
    let number = givenArray[i];
    if (number < 0) {
      break;
    }
    positiveNumbersArray.push(number);
  }
  console.log(positiveNumbersArray);
}

const arr = [23, 43, -1, -53, 42, 45, -2, 45, 45];
const positiveNumbers = findPositiveNumbers(arr);

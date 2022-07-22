// Bonus 2

//let phraseToCheck = "Amor, Roma";
let phraseToCheck = "A man, a plan, a canal, Panama!";
//let phraseToCheck = "race car";

function isSpecialChar(character) {
  return [",", " ", "!"].includes(character);
}

function isAPalindrome(string) {
  let i = 0;
  let j = string.length - 1;
  let lowerCaseString = string.toLowerCase();

  while (i < j) {
    if (isSpecialChar(lowerCaseString[i])) {
      i++;
    } else if (isSpecialChar(lowerCaseString[j])) {
      j--;
    } else if (lowerCaseString[i] !== lowerCaseString[j]) {
      return false;
    } else {
      j--;
      i++;
    }
  }
  return true;
}

console.log(isAPalindrome(phraseToCheck));

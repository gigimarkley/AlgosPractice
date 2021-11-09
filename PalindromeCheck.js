// 09/21 Palindrome Check
// https://gist.github.com/toriekim/8b365b0a667941cedceebc344cbf1ac4

//Given a string
//return boolean
//checks if string is a palindrome (case-insensitive)

//time: O(n)//space: O(1)
function isPal(str) {
  let word = str.toUpperCase();
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

//time: O(n) //space: O(n)
//We must recurse through the string n/2 times in order to return false.
//We create n/2 additional calls on the recursive call stack, each time we slice of the first/last characters and recurse.
function isPalRecursive(str) {
  if (str.length <= 1) {
    return true;
  } else {
    let first = str[0].toUpperCase();
    let last = str[str.length - 1].toUpperCase();
    if (first !== last) {
      return false;
    } else {
      newStr = str.slice(1, str.length - 1);
      return isPalRecursive(newStr);
    }
  }
}

console.log(isPal("car")); //false
console.log(isPal("racecar")); //true
console.log(isPal("RaCecAr")); // true
console.log(isPal("!? 100 ABCcba 001 ?!")); // true
console.log(isPal("")); // true

console.log(isPalRecursive("car")); //false
console.log(isPalRecursive("racecar")); //true
console.log(isPalRecursive("RaCecAr")); // true
console.log(isPalRecursive("!? 100 ABCcba 001 ?!")); // true
console.log(isPalRecursive("")); // true

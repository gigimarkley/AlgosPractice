// 10/01 Balanced Brackets
// https://github.com/lwelhoelter/Balanced-Brackets

//determine whether string has balanced brackets
//return true if balanced
//empty string or string w/o brackets is balanced

const bracketPairs = { "{": "}", "[": "]", "(": ")" };

//time: O(n) // space: O(1)
function balancedBrackets(string) {
  let brackets = string.match(/[[\](){}]/g); //takes out everything but brackets, converts to array
  let memo = []; //keep track of left brackets
  for (let i = 0; i < brackets.length; i++) {
    if (bracketPairs[brackets[i]]) {
      memo.push(brackets[i]); //left brackets
    } else {
      if (bracketPairs[memo[memo.length - 1]] === brackets[i]) {
        //matches last one in memo?
        memo.pop();
      }
    }
  }
  if (memo.length === 0) {
    //make sure nothing left, otherwise it's not balanced
    return true;
  } else {
    return false;
  }
}

console.log(balancedBrackets("[][(){}")); // false
console.log(balancedBrackets("({)}")); // false
console.log(balancedBrackets("({[]})")); // true
console.log(balancedBrackets("text ( is allowed ){rwwrwrrww [] ()}")); // true

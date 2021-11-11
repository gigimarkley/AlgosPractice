// 10/01 Balanced Brackets
// https://github.com/lwelhoelter/Balanced-Brackets

//determine whether string has balanced brackets
//return true if balanced
//empty string or string w/o brackets is balanced

const bracketPattern = /[[\](){}]/g;
const bracketPairs = { "{": "}", "[": "]", "(": ")" };

function balancedBrackets(string) {
  const inputBrackets = string.match(bracketPattern); //take all brackets and put them in an array
  const brackets = [];
  if (!string.length || !inputBrackets.length) {
    return true; //if nothing left in input
  }
  inputBrackets.forEach(function (bracket) {
    const lastBracket = brackets[brackets.length - 1]; //last bracket in bracket collection
    if (bracketPairs[lastBracket] === bracket) {
      //does the current bracket match the last one we just put into the bracket collection? Then remove that last one since it found a match
      brackets.pop();
    } else {
      brackets.push(bracket);
    }
  });
  return brackets.length === 0; //return true if all the brackets in the collection found a match
}

console.log(balancedBrackets("[][(){}")); // false
console.log(balancedBrackets("({)}")); // false
console.log(balancedBrackets("({[]})")); // true
console.log(balancedBrackets("text ( is allowed ){rwwrwrrww [] ()}")); // true

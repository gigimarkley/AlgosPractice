// 09/22 String Search
// https://gist.github.com/bhfelicia/ed5209d575cfd594d6cc45f56ba3cb1e

//find the index of the first appearance of one string inside another
//return index
//return -1 if not there
//don't use includes, indexOf, or substring methods

//time: O(n*m) //space: O(1)
function indexOf(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i]) {
      for (let j = 1; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        }
        if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
}

console.log(indexOf("or", "hello world")); // should return 7
console.log(indexOf("hello world", "or")); // should return -1
console.log(indexOf("howdy", "hello world")); // should return -1
console.log(indexOf("oox", "ooboxoooxo")); // should return 6

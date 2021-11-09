// 09/14 Multiplicative Persistence => review complexity
// https://gist.github.com/iamannamai/901ff22dbd1b03600d8bf4f2837d2f07

//Given non-negative integer
//return number of times to multiple digits until it becomes a single digit

//time: O(n)
//space: O(n)
function persistence(num) {
  let product = 1;
  let digitsArr = Array.from(String(num), Number);
  if (digitsArr.length === 1) {
    return 0;
  } else {
    for (let i = 0; i < digitsArr.length; i++) {
      product = product * digitsArr[i];
    }
    return persistence(product) + 1;
  }
}

console.log(persistence(39)); // 3
console.log(persistence(111)); // 1
console.log(persistence(1)); // 0

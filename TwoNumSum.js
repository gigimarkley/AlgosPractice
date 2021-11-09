// 09/13 Two Number Sum
// https://gist.github.com/iamannamai/46294be57265d6687cabc79607787ea2

//Given array of numbers, target sum
//return true if 2 numbers add to target sum

//Time complexity: O(nlog(n))
//Space complexity: O(1)
function twoSum(array, sum) {
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === sum) {
          return true;
        }
      }
    }
  }
  return false;
}

//Time: 0(n)
//space: O(n)
function twoSumAgain(array, sum) {
  let memo = {};
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      if (memo[array[i]]) {
        return true;
      } else {
        let diff = sum - array[i];
        memo[diff] = 1;
      }
    }
  }
  return false;
}

console.log("~~~~~~~~~~twoSum");
console.log(twoSum([5, 2, 6, 9, 3], 15)); //true
console.log(twoSum([5, 2, 6, 9, 3], 13)); //false
console.log(twoSum([5], 10)); //false

console.log("~~~~~~~twoSumAgain");
console.log(twoSumAgain([5, 2, 6, 9, 3], 15)); //true
console.log(twoSumAgain([5, 2, 6, 9, 3], 13)); //false
console.log(twoSumAgain([5], 10)); //false

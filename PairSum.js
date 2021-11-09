// 09/23 Pair Sum
// https://gist.github.com/lwelhoelter/68f9a1920dcca0369e7d0e0aa5006e2a

//given an arr with N integers, sorted least to greatest
//given sum
//return true if two different numbers add to sum

//time:O(n) //space:O(1)
function pairSum(arr, sum) {
  let leftPointer = Math.floor(arr.length / 2);
  let rightPointer = leftPointer + 1;
  while (leftPointer >= 0 && rightPointer <= arr.length - 1) {
    let calcSum = arr[leftPointer] + arr[rightPointer];
    if (calcSum === sum) {
      return true;
    } else if (calcSum < sum) {
      rightPointer++;
    } else if (calcSum > sum) leftPointer--;
  }
  return false;
}

console.log(pairSum([1, 1, 2, 3, 4, 5], 7)); // true (either 2+5 or 3+4)
console.log(pairSum([1, 2, 3, 4, 5], 10)); // false
console.log(pairSum([0, 2, 3, 6, 9, 10], 10)); // true (0 + 10)
console.log(pairSum([1, 2, 3, 7, 8], 7)); // false
console.log(pairSum([-2, 0, 4, 6, 10], 8)); // true (-2 + 10)
console.log(pairSum([1, 2, 3, 4, 5], 2)); // false
console.log(pairSum([1], 2)); // false
console.log(pairSum([2], 2)); // false
console.log(pairSum([], 1)); //false

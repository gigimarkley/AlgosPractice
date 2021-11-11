// 09/24 Array Three Sum
// https://gist.github.com/ellatenar/309090bda71a077724b4af82cdb4c30c

//given array of integers and a target sum
//return array of all triplets that add to sum

//time:O(n^2) //space:O(1)
function arrayThreeSum(arr, sum) {
  let sortedArr = arr.sort((a, b) => a - b); //don't forget to include function for sort! So that it knows -8 is less than -6
  let results = [];
  for (let leftPointer = 0; leftPointer < sortedArr.length - 2; leftPointer++) {
    let rightPointer = sortedArr.length - 1;
    let middlePointer = leftPointer + 1;
    while (middlePointer < rightPointer) {
      let currSum =
        sortedArr[leftPointer] +
        sortedArr[middlePointer] +
        sortedArr[rightPointer];
      if (currSum === sum) {
        results.push([
          sortedArr[leftPointer],
          sortedArr[middlePointer],
          sortedArr[rightPointer],
        ]);
        middlePointer++;
        rightPointer--;
      } else if (currSum < sum) {
        middlePointer++;
      } else if (currSum > sum) {
        rightPointer--;
      }
    }
  }
  return results;
}

console.log(arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //should return [[-8, 2, 6], [-8, 3, 5],[-6, 1, 5]] 1,4,7
console.log(arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35)); //should return []
console.log(arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10)); //should return [[ -3, 1, 12 ]]

//Notes: did much better this time. Was not 100% sure about the time complexity though. I thought it would be O(nlogn) because each iteration shrinks the amount of places the middlePointer and rightPointer can go. Solution says n^2, so Idk

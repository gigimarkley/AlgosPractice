// 09/24 Array Three Sum
// https://gist.github.com/ellatenar/309090bda71a077724b4af82cdb4c30c

//given array of integers and a target sum
//return array of all triplets that add to sum

//time: O(n^2)//space: O(n)

function arrayThreeSum(arr, sum) {
  let results = [];
  arr.sort((a, b) => a - b);

  for (let leftPointer = 0; leftPointer < arr.length - 2; leftPointer++) {
    let element = arr[leftPointer];
    let middlePointer = leftPointer + 1;
    let rightPointer = arr.length - 1;

    while (middlePointer < rightPointer) {
      let calcSum = arr[leftPointer] + arr[middlePointer] + arr[rightPointer];
      if (calcSum === sum) {
        results.push([arr[leftPointer], arr[middlePointer], arr[rightPointer]]);
        middlePointer++;
        rightPointer--;
      } else if (calcSum > sum) {
        rightPointer--;
      } else if (calcSum < sum) {
        middlePointer++;
      }
    }
  }
  return results;
}

console.log(arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
console.log(arrayThreeSum([5, 6, 1, -9, 7, 3, 2], 35)); //should return []
console.log(arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10)); //should return [[ -3, 1, 12 ]]

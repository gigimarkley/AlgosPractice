//ith element is price of stock on day i
//one transaction, buy one sell on
  //- first num, add next num to get profit
//find max profit
//return 0 if empty array

//time: O(N^2) //space: O(1)
function maxProfit (array) {
  let maxProfit = 0
  for (let i=0;i<array.length-1;i++) {
    for (let j=i+1; j<array.length;j++) {
      let profit = array[j]-array[i]
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }
  return maxProfit
}

//time: O(n) //space: O(1)
function maxProfitOptimized (array) {
  let maxProfit = 0
  let minNum = 1000000
  for (let i=0;i<array.length-1;i++) {
    if (array[i]<minNum) {
      minNum = array[i]
    } else {
      let profit = array[i]-minNum
      if (profit > maxProfit){
        maxProfit = profit
      }
    } 
  }
  return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4])) //5
console.log(maxProfit([7,6,4,3,1])) //0
console.log(maxProfit([])) //0
console.log(maxProfit([1])) //0

console.log(maxProfitOptimized([7,1,5,3,6,4])) //5
console.log(maxProfitOptimized([7,6,4,3,1])) //0
console.log(maxProfitOptimized([])) //0
console.log(maxProfitOptimized([1])) //0

// 09/29 Merge N Sorted Linked Lists
// https://gist.github.com/toriekim/bb8771a03a1f7dd25695cbbf3222b3a2

//given heads of N sorted singly linked lists
//return merged list
//each node has value and next

// Input =
// [
//   1->5->7,
//   1->2->4->8,
//   3->6->8
// ]

// Output = 1->1->2->3->4->5->6->7->8->8

//For testing
class LinkedList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function createList(nums) {
  let head = new LinkedList(nums[0]);
  let origHead = head;
  for (let i = 1; i < nums.length; i++) {
    head.next = new LinkedList(nums[i]);
    head = head.next;
  }
  return origHead;
}

let headone = createList([1, 5, 7]);
let headtwo = createList([1, 2, 4, 8]);
let headthree = createList([3, 6, 8]);
let listsArr = [headone, headtwo, headthree];

//time: N = number of linked lists, n = total nodes//(O(1) + O(1) + O(n) + O(1)) + O(N/2) = O(n*N/2)
// space: O(n) because of recursion
function mergeLists(array) {
  //start with list with smallest first value
  //merge with second list
  //do same with third list next

  //O(n) => How many times it runs through depends on number of lists,
  if (array.length > 1) {
    let headLast = array.pop(); //O(1)
    let headSecondToLast = array.pop(); //O(1)

    let headOne =
      headLast.value <= headSecondToLast ? headLast : headSecondToLast;
    let headTwo =
      headLast.value <= headSecondToLast ? headSecondToLast : headLast;

    let p1 = headOne.value < headTwo.value ? headOne : headTwo;
    let p2 = headOne.value < headTwo.value ? headTwo : headOne;

    //depends on length of two lists we are comparing atm
    //^simplifying as O(n) since this has to do with total amount of nodes
    while (p1.next !== null && p2 !== null) {
      if (p1.next.value <= p2.value) {
        p1 = p1.next;
      } else {
        let temp = p1.next;
        p1.next = p2;
        p2 = temp;
      }
    }
    p1.next = p2;
    array.push(headOne); //O(1)
    return mergeLists(array); //O(N/2)
  } else {
    return array[0]; //O(1)
  }
}

console.log(mergeLists(listsArr));

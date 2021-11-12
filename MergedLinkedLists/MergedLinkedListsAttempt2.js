// 09/28 Merge Two Linked Lists
// https://gist.github.com/bhfelicia/7b34640f149e6621ce058728e6bb22a9

//function tkes heads of two singly linked lists that are sorted
//merge the lists in place
//return head of the sorted merged list

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

//Answer
function mergeLinkedLists(headOne, headTwo) {
  //check if either are empty
  if (headOne === null || headTwo === null) {
    return headOne === null ? headTwo : headheadOneone;
  }
  //pointer1 is the one with the smaller first value
  let pointer1 = headOne.value < headTwo.value ? headOne : headTwo;
  let pointer2 = pointer1 === headOne ? headTwo : headOne;
  let result = pointer1;

  //make sure there is still stuff to check
  while (pointer1.next !== null && pointer2 !== null) {
    if (pointer1.next.value <= pointer2.value) {
      pointer1 = pointer1.next; //move to next, not changing anything
    } else {
      let temp = pointer1.next; //hold on to end of pointer1
      pointer1.next = pointer2; //replace end of pointer1 with pointer2
      pointer2 = temp; //replace pointer2 with temp
    }
  }
  pointer1.next = pointer2;
  return result;
}

let headone = createList([2, 4, 6, 8]);
let headtwo = createList([1, 3, 5, 7]);
console.log(mergeLinkedLists(headone, headtwo));

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
//time:O(n+m) //space:O(1) n and m are the linked list lengths
function mergeLinkedLists(headOne, headTwo) {
  //check which head value is smaller, make that one the starting list
  const firstHead = headOne.value <= headTwo.value ? headOne : headTwo;
  const secondHead = headOne.value <= headTwo.value ? headTwo : headOne;
  //start pointer 1 at first head
  let p1 = firstHead;
  let p2 = secondHead;
  //iterate through until you get to the tails
  while (p1.next !== null && p2 !== null) {
    //check if the next value is < or > than beginning of p2
    if (p1.next.value <= p2.value) {
      p1 = p1.next; //moving pointer 1 over one
    } else {
      let temp = p1.next; //hold on to end of p1
      p1.next = p2; //attach p2 in its place
      p2 = temp; //the end of p1 is now the new p2
    }
  }
  //now we are either at the end of p1 or p2 ran out of stuff
  //so we can attach rest of p2 to p1 (it'll be null if there is nothing)
  p1.next = p2;
  return firstHead;
}

let headone = createList([2, 4, 6, 8]);
let headtwo = createList([1, 3, 5, 7]);
console.log(mergeLinkedLists(headone, headtwo));

// 09/30 Reverse a Linked List
// https://gist.github.com/mckennakayyy/62f6d48931bd5867393f46703a7e8746

//given linked list with value and next
//log values in reverse order
//return new reversed linked list

// no mutation at all, 100% pure (except for console.log in Part 1)
// no built-in data structures or methods, only variables / functions / control flow
// no arrays, no objects except the (immutable) list nodes themselves
// no iterables or iteration protocol (for-of, ...)

const mkNode = (value, next = null) => ({ value, next });

//Part 1
//time O(n) space: O(n)->recursion
function logReverse(list) {
  //if there is a next, put it on hold
  //only log once next is null
  if (list.next === null) {
    console.log(list.value);
  } else {
    logReverse(list.next);
    console.log(list.value);
  }
}
const nums = mkNode(1, mkNode(2, mkNode(3)));
logReverse(nums); //3, 2, 1

//Part 2
//time O(n) space: O(n)->also recursion
function reverse(oldList, newList = null) {
  //if oldList is empty, you're ready to return new list
  if (oldList === null) {
    return newList;
  } else {
    //when oldList still has stuff in it, create a new node using last value and newList we are forming
    let result = mkNode(oldList.value, newList);
    return reverse(oldList.next, result);
  }
}
const nums2 = mkNode(1, mkNode(2, mkNode(3)));
const reversed = reverse(nums2);
console.log(reversed);
//{ value: 3, next: { value: 2, next: { value: 1, next: null } } }

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

var removeNthFromEnd = function (head, n) {
  const wrapper = new ListNode(0, head);

  let fast = wrapper;
  let slow = wrapper;

  while (n > 0) {
    fast = fast.next;
    n -= 1;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return wrapper.next;
};

console.log(removeNthFromEnd(n1, 5));

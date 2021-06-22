// Given the head of a sorted linked list,
// delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

const n1_d_d = new ListNode(1);
const n1_d = new ListNode(1, n1_d_d);
const n1 = new ListNode(1, n1_d);

var deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

deleteDuplicates(n1);

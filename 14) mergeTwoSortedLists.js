// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

const util = require("util");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const l1 = [1, 2, 4];
const l2 = [1, 1, 4];

const n4 = new ListNode(4);
const n2 = new ListNode(2, n4);
const n1 = new ListNode(1, n2);

const t4 = new ListNode(4);
const t3 = new ListNode(3, t4);
const t1 = new ListNode(1, t3);

var mergeTwoLists = function (l1, l2) {
  const result = new ListNode(0);
  let last = result;

  let i = 0;

  while (l1 !== null || l2 !== null) {
    const leftV = l1 ? l1.val : Infinity;
    const rightV = l2 ? l2.val : Infinity;

    if (leftV <= rightV) {
      l1 = l1.next;
      const newNode = new ListNode(leftV);
      last.next = newNode;
      last = newNode;
    } else {
      l2 = l2.next;
      const newNode = new ListNode(rightV);
      last.next = newNode;
      last = newNode;
    }
  }

  return result.next;
};

console.log(
  util.inspect(mergeTwoLists(n1, t1), false, null /* enable colors */)
);

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n3 = new ListNode(3);
const n4 = new ListNode(4, n3);
const n2 = new ListNode(2, n4);

const n4_2 = new ListNode(4);
const n6 = new ListNode(6, n4_2);
const n5 = new ListNode(5, n6);

var addTwoNumbers = function (l1, l2) {
  const head = new ListNode();
  let last = head;

  let rest = 0;

  const connectNode = (num) => {
    const newNode = new ListNode(num);
    last.next = newNode;
    last = newNode;
  };

  while (l1 || l2) {
    let first = 0;
    let second = 0;

    if (l1) {
      const { val, next } = l1;
      first = val;
      l1 = next;
    }

    if (l2) {
      const { val, next } = l2;
      second = val;
      l2 = next;
    }

    const sum = first + second + rest;

    if (sum > 9) {
      const current = sum - 10;
      rest = 1;
      connectNode(current);
    } else {
      connectNode(sum);
      rest = 0;
    }
  }

  if (rest) {
    connectNode(rest);
  }

  return head.next;
};

addTwoNumbers(n2, n5);

// Given the root of a binary tree, invert the tree, and return its root.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const n3 = new TreeNode(3);
const n1 = new TreeNode(1);
const n2 = new TreeNode(2, n1, n3);

var invertTree = function (root) {
  const swap = (node) => {
    if (!node) return;

    const left = node.left;
    const right = node.right;
    if (!left && !right) return;

    node.left = right;
    node.right = left;

    swap(left);
    swap(right);
  };

  swap(root);
  return root;
};

invertTree(n2);

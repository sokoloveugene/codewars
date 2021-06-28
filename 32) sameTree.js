// Given the roots of two binary trees p and q,
// write a function to check if they are the same or not.

// Two binary trees are considered the same
// if they are structurally identical, and the nodes have the same value.

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const f3 = new TreeNode(3);
const f2 = new TreeNode(2);
const f1 = new TreeNode(1, f2, f3);

const s3 = new TreeNode(3);
const s2 = new TreeNode(2);
const s1 = new TreeNode(1, s2, s3);

// const getValues = (tree) => {
//   let str = "";

//   if (!tree) return str;

//   const walk = (tree) => {
//     const { val, left, right } = tree;

//     str += val;

//     if (left) {
//       walk(left);
//     } else {
//       str += "null";
//     }

//     if (right) {
//       walk(right);
//     } else {
//       str += "null";
//     }
//   };

//   walk(tree);

//   return str;
// };

// var isSameTree = function (p, q) {
//   return getValues(p) === getValues(q);
// };

// ======================================= //

var isSameTree = function (p, q) {
  const resultsF = [];
  const resultsS = [];

  const walk = (node, results) => {
    if (node === null) {
      results.push(null);
      return;
    } else {
      results.push(node.val);
    }

    walk(node.left, results);
    walk(node.right, results);
  };

  walk(p, resultsF);
  walk(q, resultsS);

  for (let i = 0; i < Math.max(resultsF.length, resultsS.length); i++) {
    if (resultsF[i] !== resultsS[i]) {
      return false;
    }
  }

  return true;
};

console.log(isSameTree(s1, f1));

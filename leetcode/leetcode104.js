/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
  return traverse(root, 0);

  function traverse(node, depth) {
    if (!node) {
      return depth;
    }

    let leftDepth = traverse(node.left, depth + 1);
    let rightDepth = traverse(node.right, depth + 1);

    return Math.max(leftDepth, rightDepth);
  }
};
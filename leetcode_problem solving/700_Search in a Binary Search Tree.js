// https://leetcode.com/problems/search-in-a-binary-search-tree/?envType=study-plan-v2&envId=leetcode-75

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @param {number} val
//  * @return {TreeNode}
//  */
var searchBST = function (root, val) {
    if (!root) return null;
    let result = null;

    function traverse(curr) {
        if (curr.val === val) {
            result = curr;
        }
        if (curr.val > val && curr.left) traverse(curr.left);
        if (curr.val < val && curr.right) traverse(curr.right);
    }
    traverse(root);

    return result;
};

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
var maxDepth = function(root) {

    const travelAndInc = (root, count) => {
        if (root === null) {
            return count;
        } else {
            count++;
            return Math.max(travelAndInc(root.left, count), travelAndInc(root.right, count));
        }
    };

    return travelAndInc(root, 0);
};

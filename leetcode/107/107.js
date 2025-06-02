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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    const res = [];

    const q = [root];
    while (q.length) {
        const level = [];
        const n = q.length;

        for (let i = 0; i < n; i++) {
            const curr = q.shift();
            level.push(curr.val);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        res.unshift(level);
    }
    return res;
};

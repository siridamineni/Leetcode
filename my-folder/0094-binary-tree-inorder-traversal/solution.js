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
 * @return {number[]}
 */

var inorder = (node, result) => {
    if(node !== null){
        inorder(node.left, result);
        result.push(node.val);
        inorder(node.right, result);
    }
}

var inorderTraversal = function(root) {
    let result = [];
    if(root != null){
        inorder(root, result);
    }
    return result;
};

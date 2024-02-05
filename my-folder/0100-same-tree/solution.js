/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var preOrder = function(node, res) {
    if(node !== null){
        res.push(node.val);
        preOrder(node.left, res);
        preOrder(node.right, res);
    }else {
        res.push('null');
    }
}
var isSameTree = function(p, q) {
    let res1 = [];
    let res2 = [];
    if(p !== null){
        preOrder(p, res1);
    }
    if(q !== null){
        preOrder(q, res2);
    }
    if(res1.toString() === res2.toString()){
        return true;
    }else {
        return false;
    }
};

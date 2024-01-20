/**
  Definition for singly-linked list
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

**/
class listNode {
    constructor(val, next = null){
        this.val = val === undefined ? null : val;
        this.next = null;
    }
}
var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};



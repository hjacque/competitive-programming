/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let curr = head;
    let prev;
    while (curr) {
        if (prev) {
            const min = Math.min(prev.val, curr.val);
            let newVal;
            for (let i = min; i >= 0; i--) {
                if (prev.val % i === 0 && curr.val % i === 0) {
                    newVal = i;
                    break;
                }
            }
            const newNode = new ListNode(newVal);
            newNode.next = curr;
            prev.next = newNode;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l2) return l1;
  let i1, i2 = l2, head = new ListNode();
  head.next = l1;
  i1 = head;
  
  while(i2) {
      if (i1.next === null) {
          i1.next = i2;
          return head.next;
      }

      if (i1.next.val <= i2.val) {
          i1 = i1.next;
      } else {
          const temp = i1.next;
          i1.next = i2;
          i2 = i2.next;
          i1.next.next = temp;
          i1 = i1.next;
      }
  }
  return head.next;
};
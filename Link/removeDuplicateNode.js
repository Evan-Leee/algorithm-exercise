/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
  if (head) {
      const map = {};
      let iterator = head;
      map[iterator.val] = 1;
      while (iterator && iterator.next) {
          if (map[iterator.next.val]) {
              const temp = iterator.next.next;
              iterator.next.next = null;
              iterator.next = temp;
          } else {
              map[iterator.next.val] = 1;
              iterator = iterator.next;
          }
      }
  }
  
  return head;
};
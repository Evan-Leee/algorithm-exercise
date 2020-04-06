/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const puppet = new ListNode();
  puppet.next = head;
  let first = puppet, second = puppet;
  while (first) {
      if (n >= 0) {
          first = first.next;
          n--;
          continue;
      }
      first = first.next;
      second = second.next;
  }
  let temp = second.next;
  second.next = temp.next;
  temp = null;
  return puppet.next;
};
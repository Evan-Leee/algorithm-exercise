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
var reverseList = function(head) {
  if (!head || !head.next) return head;
  
  let currentNode = head, nextNode = head.next;
  currentNode.next = null;
  while(nextNode) {
      const temp = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = temp;
  };
  return currentNode;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head || !head.next) return true;

  let slow = fast = front = head;
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let nextNode = slow.next;
  slow.next = null;
  while(slow && nextNode) {
      const temp = nextNode.next;
      nextNode.next = slow;
      slow = nextNode;
      nextNode = temp;
  }
  while(slow !== front && slow && front) {
      if(front.val !== slow.val) {
          return false;
      }
      slow = slow.next;
      front = front.next;
  }
  return true;
};
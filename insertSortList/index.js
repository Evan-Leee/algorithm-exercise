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
var insertionSortList = function(head) {
  const dummy = new ListNode(0)
 dummy.next = head
 let head0 = dummy.next

 while (head0 && head0.next) {
   if (head0.next.val >= head0.val) {
     head0 = head0.next
     continue
   }

   let pre = dummy
   while (pre.next.val < head0.next.val) { pre = pre.next }

   let next = head0.next
   head0.next = next.next
   next.next = pre.next
   pre.next = next
 }

 return dummy.next;
};
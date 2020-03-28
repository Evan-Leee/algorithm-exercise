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
  if (!head || !head.next) return head;

  //需要一个前继节点，这个节点用来记录排序好的链表的初始位置, 如果没有这个节点，无法在head处插入节点。
  const node = new ListNode(0);
  node.next = head;
  let currentPosition = head, forward = node;

  //找出next值小于当前值的节点
  while(currentPosition && currentPosition.next) {
    if (currentPosition.next.val >= currentPosition.val) {
        currentPosition = currentPosition.next;
        continue;
    }
    // 到这里,找到了next值小于当前值的节点，需在当前值之前找一个合适的地方放它的next，所以需要再遍历一次
    forward = node;
    while(forward.next.val < currentPosition.next.val) {
        forward = forward.next;
    }
    //在forward和forward.next之间是currentPosition的next应该插入的位置
    const temp = forward.next;
    forward.next = currentPosition.next;
    currentPosition.next = currentPosition.next.next;
    forward.next.next = temp;
  }
  return node.next;
}
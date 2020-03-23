var middleNode = function(head) {
  if (head.next === null) return head;

  let faster = head, slower = head;
  while(faster !== null && faster.next !== null) {
      faster = faster.next.next;
      slower = slower.next;
  }

  return slower;
};

//1.用快慢指针
//2.把链表循环两次，第一次找到链表长度，第二次找到中间节点
//3.把链表的节点存在数组里
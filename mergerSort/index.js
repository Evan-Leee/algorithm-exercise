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
//归并排序
var sortList = function(head) {
  let arr = [], iterator = head;
  while(iterator) {
      arr.push(iterator.val);
      iterator = iterator.next;
  }
  mergerSort(arr);
  iterator = head;
  for(let i = 0; i < arr.length; i++) {
      iterator.val = arr[i];
      iterator = iterator.next;
  }
  return head;
};

var mergerSort = function (arr) {

  if (arr.length <= 1) return arr;

  const divider = Math.round(arr.length / 2);
  const left = mergerSort(arr.slice(0,divider));
  const right = mergerSort(arr.slice(divider));

 let leftIndex = 0, rightIndex = 0;
  for(let i = 0; i < arr.length; i++) {
      if (left[leftIndex] === undefined) {
          arr[i] = right[rightIndex++];
          continue;
      }
      if (right[rightIndex] === undefined) {
          arr[i] = left[leftIndex++];
          continue;
      }
      if (left[leftIndex] < right[rightIndex]) {
          arr[i] = left[leftIndex++];
      } else {
          arr[i] = right[rightIndex++];
      }
  }
  return arr;
}
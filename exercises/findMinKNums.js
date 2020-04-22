/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
  quickSortInPlace(arr, 0, arr.length - 1);
  return arr.slice(0, k);
};

function quickSortInPlace(arr, start, end) {
  if (start > end) return;
  let left = start, right = end;
  const pointer = arr[start];

  while (left !== right) {
      while(left < right && arr[right] >= pointer) right--;
      while(left < right && arr[left] <= pointer) left++;
      if (left < right) {
          const temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
      }
  }
  arr[start] = arr[left];
  arr[left] = pointer;

  quickSortInPlace(arr, start, left - 1);
  quickSortInPlace(arr, left + 1, end);
}
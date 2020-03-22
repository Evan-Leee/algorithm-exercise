/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  let count = 0;
  quickSortInPlace(A, 0, A.length - 1);
  A.forEach((item, index) => {
      if (index > 0 && item <= A[index - 1]) {
          const moveTimes = 1 + A[index - 1] - item;
          A[index] = item + moveTimes;
          count += moveTimes;
      }
  })
  return count;
};

function quickSortInPlace(arr, start, end) {
  if (arr.length <=1 || start >= end) return arr;
  let left = start, right = end;
  const pointer = arr[start];

  while (left !== right) {
      while(left < right && arr[right] >= pointer) right--;
      while(left < right && arr[left] <= pointer) left ++;
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
  return arr;
}
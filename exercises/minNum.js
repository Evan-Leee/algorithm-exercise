/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  quickSortInPlace(nums, 0, nums.length-1);
  console.log()
  return nums.join('');
};

function quickSortInPlace(arr, start, end) {
  if (start > end) return;
  let left = start, right = end, point = arr[start];
  function isGreater(x,y) {
     return x+''+y >= y+''+x;
  }

  while(left !== right) {
      while(left < right && isGreater(arr[right], point)) right--;
      while(left < right && isGreater(point, arr[left])) left++;
      if (left < right) {
          const temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
      }
  }
  arr[start] = arr[left];
  arr[left] = point;

  quickSortInPlace(arr, start, left - 1);
  quickSortInPlace(arr, left + 1, end);
}
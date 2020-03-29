/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0;
  quickSortInPlace(nums, 0, nums.length - 1);
  let difference = 0;
  for(let i = 1; i < nums.length; i++){
      const temp = Math.abs(nums[i] - nums[i-1]);
      if(temp > difference) {
         difference = temp;
      } 
  }
  return difference;
};

function quickSortInPlace(arr, start, end) {
  if (arr.length <= 1 || start > end) return arr;

  let left = start, right = end, pointer = arr[start];

  while(left !== right) {
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
  return arr;
}
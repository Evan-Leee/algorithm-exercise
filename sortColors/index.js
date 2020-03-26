/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  version_two(nums);
};

function countSort(arr) {
  const counter = new Array(3).fill(0);
  for(let i = 0; i < arr.length; i++){
      const counterIndex = arr[i];
      counter[counterIndex]++;
  }
  let sortedIndex = 0;
  for(let i = 0; i < counter.length; i++) {
      while(counter[i] > 0) {
          arr[sortedIndex++] = i;
          counter[i]--;
      }
  }
}

function version_two(nums) {
  let left = 0, right = nums.length - 1, i = 0;
  while (i <= right) {
      if (nums[i] === 0) {
          [nums[left], nums[i]] = [nums[i], nums[left]];
         left++;
         i++;
      } else if (nums[i] === 2) {
          [nums[right], nums[i]] = [nums[i], nums[right]];
          right--;
      } else {
          i++;
      }
  }
}
//i 是寻路人，left和right是看守员，i每次找到1后让left留下看着，i找到0后跟left交换， i找到2之后跟right交换，直到i所站的位置不再是2，i再移动
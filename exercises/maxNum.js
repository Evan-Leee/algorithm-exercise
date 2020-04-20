var largestNumber = function(nums) {
  quickSortInPlace(nums, 0, nums.length-1);
  const result = nums.join('');
  return Number(result) === 0 ? '0' : result;
};


function quickSortInPlace(arr, start, end) {
  if(start > end) return;

  let left = start, right = end;
  const point = arr[start];

  function isGreater(x, y) {
      return x + '' + y >= y + '' + x;
  }

  while(left !== right) {
      while(left < right && isGreater(point, arr[right])) right--;
      while(left < right && isGreater(arr[left], point)) left++;
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
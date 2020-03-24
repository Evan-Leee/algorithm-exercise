var merge = function(intervals) {
  if (intervals.length <=1) return intervals;
  quickSortInPlace(intervals, 0, intervals.length-1);
  
  const newIntervals = [intervals[0]];

  for(let i = 1; i < intervals.length; i++) {
      const currentSec = intervals[i];
      const prevSec = newIntervals[newIntervals.length-1];
      if (prevSec[1] >=currentSec[0]) {
          if (prevSec[1] <= currentSec[1]) {
              newIntervals[newIntervals.length-1] = [prevSec[0], currentSec[1]];
          }
      } else {
          newIntervals.push(currentSec);
      } 
  }
  return newIntervals;
};

function quickSortInPlace(arr, start, end) {
  if (arr.length <=1 || start >= end) return arr;

  let left = start, right = end;
  const pointer = arr[end];

  while(left !== right) {
      while(left < right && arr[left][0] <= pointer[0]) left++;
      while(left<right && arr[right][0] >= pointer[0]) right--;

      if (left < right) {
          const temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
      }
  }

  arr[end] = arr[left];
  arr[left] = pointer;

  quickSortInPlace(arr, start, left - 1);
  quickSortInPlace(arr, left + 1, end);
  return arr;
}


//先根据start排序然后再合并，中规中矩
//连通块的解法看不懂，可能需要相关的数据结构的输入
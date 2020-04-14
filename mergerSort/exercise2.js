/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if(nums.length <= 1) return nums;

  const divider = Math.floor(nums.length / 2);
  const firstArr = sortArray(nums.slice(0, divider));
  const secondArr = sortArray(nums.slice(divider));
  let i = 0, j = 0;
  const result = [];
  while(i < firstArr.length || j < secondArr.length) {
      if (i >= firstArr.length) {
          result.push(secondArr[j]);
          j++;
          continue;
      }
      if (j >= secondArr.length) {
          result.push(firstArr[i]);
          i++;
          continue;
      }
      if (firstArr[i] <= secondArr[j]) {
          result.push(firstArr[i]);
          i++;
          continue;
      } else {
          result.push(secondArr[j]);
          j++;
      }
  }
  return result;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let i = 0, result = [];
  while(nums1[i] !== undefined && nums2[i] !== undefined) {
      if (nums2.indexOf(nums1[i]) !== -1 && result.indexOf(nums1[i]) === -1) {
          result.push(nums1[i]);
      }
      if (nums1.indexOf(nums2[i]) !== -1 && result.indexOf(nums2[i]) === -1) {
          result.push(nums2[i]);
      }
      i++;
  }
  return result;
};
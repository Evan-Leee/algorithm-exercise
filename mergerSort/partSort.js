/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
  const sortedArr = mergeSort(array);
  
  if (array.length === 0 || sortedArr.join() === array.join()) return [-1, -1];
  
  let start, end, i = 0;
  while(start === undefined || end === undefined) {
      if (sortedArr[i] !== array[i] && start === undefined) {
          start = i;
      }
      if (sortedArr[array.length - 1 -i] !== array[array.length - 1 -i] && end === undefined) {
          end = array.length - 1 -i;
      }
      i++;
  }
  return [start, end];
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const divider = Math.floor(arr.length / 2);
  const first = mergeSort(arr.slice(0, divider));
  const second = mergeSort(arr.slice(divider));
  const result = [];
  let i = 0, j = 0;
  while(i < first.length || j < second.length) {  
      if (i >= first.length) {
          result.push(second[j++]);
          continue;
      }
      if (j >= second.length) {
          result.push(first[i++]);
          continue;
      }
      if (first[i] < second[j]) {
          result.push(first[i++]);
      } else {
          result.push(second[j++]);
      }
  }
  return result;
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (arr.length <= k) return arr;
  const result = quickSort(arr);
  return result.slice(0, k);
};

function bubbleSort(arr) {
  for (var i = 0; i< arr.length; i++ ) {
      for(var j = i+1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              var temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1)  return arr;
  const pointer = arr[0];
  const left = [];
  const right = [];
  for(let i = 1; i< arr.length; i++) {
      if (pointer < arr[i]) {
          right.push(arr[i]);
      } else {
          left.push(arr[i]);
      }
  }
  return quickSort(left).concat([pointer], quickSort(right));
}



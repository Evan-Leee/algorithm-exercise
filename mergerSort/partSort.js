/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
    let max = array[0], min = array[array.length-1];
    let m = n = -1;

    for(let i = 0; i < array.length; i++) {
        if (array[i] <  max) {
            n = i;
        } else {
            max = array[i];
        }

        if (array[array.length-1-i] > min) {
            m = array.length-1-i;
        } else {
            min = array[array.length-1-i];
        }
    }
    return [m,n];
};

//对于递增排序来说，按照升序，找出最远逆序的下标，为n，同时从数组尾找出按照降序，找出最远的逆序下标，为m
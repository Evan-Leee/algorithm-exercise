/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
      intervals.push(newInterval);
      return intervals;
  }

  let i = 0;
  while (intervals[i] && intervals[i][0]< newInterval[0] ) {
      i++;
  }
  intervals.splice(i, 0, newInterval);
  return merge(intervals);
};

const merge = function(intervals){
  if (intervals.length <= 1) return intervals;

  const newIntervals = [intervals[0]]
  
  for (let i = 1; i< intervals.length; i++ ) {
      const preSec = newIntervals[newIntervals.length-1];
      const currSec = intervals[i];
      if (currSec[0] > preSec[1]) {
          newIntervals.push(currSec);
      } else if (currSec[1] >= preSec[1]) {
          preSec[1] = currSec[1];
      }
  }
  return newIntervals;
}
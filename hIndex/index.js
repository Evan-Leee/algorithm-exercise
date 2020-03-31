/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let h = citations.length;

  if (h < 1) return 0;

  while(h > 0) {
      const result = citations.filter(times => times >= h);
      if (result.length >= h) {
          return h;
      } else {
          h--;
      }
  }
  return 0;
};
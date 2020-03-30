/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const chart = {};
  
  for(let i = 0; i < s.length; i++) {
      chart[s.charAt(i)] = (chart[s.charAt(i)] || 0) + 1;
  }
  for(let i = 0; i < t.length; i++) {
      if (chart[t.charAt(i)]) {
          chart[t.charAt(i)]--;
      } else {
          return false;
      }
  }
  return true;
};
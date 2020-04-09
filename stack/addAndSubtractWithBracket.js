/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s) {
  const stack = [];
  let sum = 0, i = 0, operator = 1, num = '';

  while(i < s.length){
      const item = s.charAt(i);
  
      if(item === ' ') {
          i++;
          continue;
      }

      if (item === '+') {
          operator = 1;
          i++;
          continue;
      }
      if (item === '-') {
          operator = -1;
          i++;
          continue;
      }
      if (item === '(') {
          stack.push(sum, operator);
          sum = 0;
          operator = 1;
          i++;
          continue;
      }
      if (item === ')') {
          sum = sum * stack.pop() + stack.pop();
          i++;
          continue;
      }
      while(s.charAt(i) >= '0' && s.charAt(i) <= '9' && i < s.length){
          num += s.charAt(i);
          i++;
      }
      sum += num * operator;
      num = '';
  };
  return sum;
};


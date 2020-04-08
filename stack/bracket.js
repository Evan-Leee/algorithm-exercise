/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracket = {
      '(': ')',
      '[': ']',
      '{': '}',
  };
  const stack = [];
  for(let i = 0; i< s.length; i++) {
      if (s.charAt(i) in bracket) {
          stack.push(s.charAt(i));
      } else {
          const stackTop = stack.pop();
          if (bracket[stackTop] !== s.charAt(i)) {
              return false;
          }
      }
  }
  return stack.length === 0;
};
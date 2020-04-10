/**
 * @param {string} s
 * @return {number}
 */

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return Math.floor(num1 / num2);
}
const operater = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
}

var calculate = function(s) {
  const numbers = [];
  const symbols = [];
  s = s.replace(/ /g, '');
  let i = 0, num = '';

  function calc() {
      const operation = symbols.pop();
      if(operation){
          const num2 = numbers.pop();
          const num1 = numbers.pop();
          return operater[operation](num1, num2);
      } else {
          return numbers.pop();
      }
  }

  while(i<s.length) {
      const item = s.charAt(i);
      switch(item) {
          case '+': 
          case '-':
              while(symbols.length) {
                  numbers.push(calc());
              }
              symbols.push(item);
              i++;
              break;
          case '*':
          case '/':
              if(symbols[symbols.length-1] === '*' || symbols[symbols.length-1] === '/'){
                  numbers.push(calc());
              }
              symbols.push(item);
              i++;
              break;
          default:
              while(s.charAt(i) >='0' && s.charAt(i)<='9' && i<s.length){
                  num += s.charAt(i);
                  i++;
              }
              if (num) {
                  numbers.push(Number(num));
              }
              num = '';
              break;
      }
  }
  while(symbols.length) {
      numbers.push(calc());
  }
  
  return numbers.pop();
};
/**
 * @param {number} n
 * @return {number}
 */
const list = {};
const base = 1000000007;
var fib = function(n) {
    if (n === 0 || n === 1) return n;
    if (list[n]) {
        return list[n] % base;
    } else {
        list[n] = fib(n-1) + fib(n-2);
        return list[n] % base;
    }
};
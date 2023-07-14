// https://leetcode.com/problems/fibonacci-number/description/

// /**
//  * @param {number} n
//  * @return {number}
//  */

// 1. bottom-up dynamic programming way
var fib = function (n) {
    if (n < 2) return n;
    let a = 0;
    let b = 1;
    for (i = 0; i < n - 1; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// 2. recursive way
var fib2 = function (n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

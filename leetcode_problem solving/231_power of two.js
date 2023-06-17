// https://leetcode.com/problems/power-of-two/description/

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n % 2 === 0) {
        let dividedByTwo = n / 2;
        if (dividedByTwo === 2) return true;
        return isPowerOfTwo(dividedByTwo);
    } else {
        return false;
    }
};

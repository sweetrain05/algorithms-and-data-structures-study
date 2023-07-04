// https://leetcode.com/problems/valid-palindrome/description/

// /**
//  * @param {string} s
//  * @return {boolean}
//  */

var isPalindrome = function (s) {
    if (s.length === 0) return true;

    let cleanS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let leftIndex = 0;
    let rightIndex = cleanS.length - 1;

    while (rightIndex > leftIndex) {
        if (cleanS[leftIndex] !== cleanS[rightIndex]) {
            return false;
        } else {
            leftIndex++;
            rightIndex--;
        }
    }
    return true;
};

// https://leetcode.com/problems/is-subsequence/description/

var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;

    let indexS = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[indexS] === t[i]) {
            indexS++;
        }
        if (s.length === indexS) {
            return true;
        }
    }
    return false;
};

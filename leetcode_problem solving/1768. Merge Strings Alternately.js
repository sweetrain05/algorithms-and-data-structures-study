//https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
    let w1Arr = word1.split('');
    let w2Arr = word2.split('');
    let resultArr = [];
    let count = 0;

    while (w1Arr[count] || w2Arr[count]) {
        resultArr.push(w1Arr[count]);
        resultArr.push(w2Arr[count]);
        count++;
    }

    return resultArr.join('');
};

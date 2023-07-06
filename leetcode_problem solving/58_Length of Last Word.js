//https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

// /**
//  * @param {string} s
//  * @return {number}
//  */

var lengthOfLastWord = function (s) {
    let arr = s.split(" ");
    let filteredArr = arr.filter((str) => str !== "");
    let lastWord = filteredArr[filteredArr.length - 1];
    return lastWord.length;
};

lengthOfLastWord("   fly me   to   the moon  "); // 4

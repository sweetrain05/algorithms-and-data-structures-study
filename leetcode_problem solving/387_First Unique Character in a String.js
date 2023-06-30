// https://leetcode.com/problems/first-unique-character-in-a-string/

// /**
//  * @param {string} s
//  * @return {number}
//  */
var firstUniqChar = function (s) {
    // create an object counting each letter
    let obj = {};
    for (let char of s) {
        obj[char] = obj[char] + 1 || 1;
    }

    // in that object, find the first key with value 1
    for (let key in obj) {
        if (obj[key] === 1) {
            // return index of that key in the string
            return s.indexOf(key);
        }
    }

    // if no character is called only once, return -1
    return -1;
};

firstUniqChar("leetcode"); // 0
firstUniqChar("loveleetcode"); // 2
firstUniqChar("aabb"); // -1

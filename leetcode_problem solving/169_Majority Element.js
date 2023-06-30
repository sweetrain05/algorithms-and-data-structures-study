// https://leetcode.com/problems/majority-element/description/

//  * @param {number[]} nums
//  * @return {number}

var majorityElement = function (nums) {
    const majority = Math.floor(nums.length / 2);

    const obj = {};

    for (let num of nums) {
        obj[num] = obj[num] + 1 || 1;
    }

    for (let key in obj) {
        if (obj[key] > majority) {
            return key;
        }
    }
};

majorityElement([2, 2, 1, 1, 1, 2, 2]);

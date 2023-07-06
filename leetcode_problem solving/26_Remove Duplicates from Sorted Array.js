//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var removeDuplicates = function (nums) {
    // solve using two pointers

    let p1 = 0;
    let p2 = 1;

    while (p2 < nums.length) {
        if (nums[p1] === nums[p2]) {
            p2++;
        } else if (nums[p1] !== nums[p2]) {
            nums[p1 + 1] = nums[p2];
            p1++;
            p2++;
        }
    }
    return p1 + 1;
};

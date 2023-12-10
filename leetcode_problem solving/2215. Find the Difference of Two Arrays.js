//https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    for (let num of set1) {
        if (set2.has(num)) {
            set1.delete(num);
            set2.delete(num);
        }
    }
    return [[...set1], [...set2]];
};

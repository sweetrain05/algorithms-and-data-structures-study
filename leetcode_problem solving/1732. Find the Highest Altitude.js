//https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let maxAlt = 0;
    let newAlt = 0;

    for (let num of gain) {
        newAlt = newAlt + num;
        maxAlt = Math.max(maxAlt, newAlt);
    }

    return maxAlt;
};

// Problem solving pattern:

//✨ Sliding Window Pattern
//👉 Time complexity: O(n)

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
maxSubarraySum([1, 2, 3, 6, 7, 1, 7, 4], 3); // 16
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 19

//✨ naive way
//👉 Time complexity: O(n^2)
function maxSubarraySum2(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = 0;
    for (let i = 0; i < arr.length - num; i++) {
        let sum = arr[i];
        for (let j = 1; j < num; j++) {
            sum += arr[i + j];
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

maxSubarraySum2([1, 2, 3, 6, 7, 1, 7, 4], 3); // 16
maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 19

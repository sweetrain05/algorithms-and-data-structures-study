// Problem solving pattern:

//✨ Multiple Pointers Pattern
// 1. using two pointers that starts from each end of an array and compare values.

function sumZero(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        let sum = arr[leftIndex] + arr[rightIndex];
        console.log(sum);
        if (sum === 0) {
            return [arr[leftIndex], arr[rightIndex]];
        } else if (sum < 0) {
            leftIndex++;
        } else if (sum > 0) {
            rightIndex--;
        }
    }
    return undefined;
}

sumZero([-4, -3, -2, -1, 0, 1, 10]); // [-1, 1]
sumZero([-4, -3, -2, -1, 0, 10]); // undefined

// 2. using two pointers both starting from beginning and comparing values
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let i1 = 0;
    let i2 = 1;

    while (i2 < arr.length) {
        if (arr[i1] === arr[i2]) {
            i2++;
        } else if (arr[i1] !== arr[i2]) {
            i1++;
            arr[i1] = arr[i2];
        }
    }
    return i1 + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 1, 1, 1, 1, 2, 3, 4, 5, 7, 7, 12, 13]); // 8
countUniqueValues([]); // 0
countUniqueValues([1]); // 1
countUniqueValues([-2, -1, -1, 0, 4]); // 4

// you can also solve the same problem like below using frequency counters
function countUniqueValues2(arr) {
    let obj = {};
    for (let val of arr) {
        obj[val] = obj[val] + 1 || 1;
    }
    return Object.keys(obj).length;
}

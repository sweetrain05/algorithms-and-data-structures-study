// Problem solving pattern:

//✨ Frequency counter Pattern
//👉 Time complexity: O(n)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    frequencyCounterArr1 = {};
    frequencyCounterArr2 = {};

    for (let val of arr1) {
        frequencyCounterArr1[val] = frequencyCounterArr1[val] + 1 || 1;
    }
    for (let val of arr2) {
        frequencyCounterArr2[val] = frequencyCounterArr2[val] + 1 || 1;
    }

    for (let key in frequencyCounterArr1) {
        if (!frequencyCounterArr2[key ** 2]) {
            return false;
        }
        if (frequencyCounterArr1[key] !== frequencyCounterArr2[key ** 2]) {
            return false;
        }
    }
    return true;
}

same([1, 4, 3], [9, 1, 16]); // T
same([1, 4, 3, 3], [9, 1, 16, 9]); // T
same([1, 4, 3, 3, 2], [9, 1, 16, 9, 20]); // F

// Anagrams problem
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const obj1 = {};
    const obj2 = {};

    for (let char of str1) {
        obj1[char] = obj1[char] + 1 || 1;
    }

    for (let char of str2) {
        obj2[char] = obj2[char] + 1 || 1;
    }

    for (let key in obj1) {
        if (!obj2[key]) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false)
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

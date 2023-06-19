//✨ Linear search
//👉 Time complexity: O(n)

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

//✨ Binary search: divide and conquer method
// must be ✨sorted!!✨
//👉 Time complexity: O(log n)

function binarySearch(arr, val) {
    let indexLeft = 0;
    let indexRight = arr.length - 1;
    let indexPointer = Math.floor((indexRight + indexLeft) / 2);

    while (val !== arr[indexPointer] && indexLeft <= indexRight) {
        if (val < arr[indexPointer]) {
            indexRight = indexPointer - 1;
        } else if (val > arr[indexPointer]) {
            indexLeft = indexPointer + 1;
        }
        indexPointer = Math.floor((indexRight + indexLeft) / 2);
    }
    if (val === arr[indexPointer]) {
        return indexPointer;
    } else {
        return -1;
    }
}

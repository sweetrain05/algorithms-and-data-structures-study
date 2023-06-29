//✨ JavaScript built in .sort()
//👉 if you do just .sort(), it converts numbers into string of unicode,
//    and compare the unicode values and sort accordingly.

// if you want to use .sort(), you need a helper function like below.

// 👉 Compare numbers
// ascending order
function numberCompare(num1, num2) {
    return num1 - num2;
}
[9, 6, 73, 12].sort(numberCompare); // [6, 9, 12, 73]

// descending order
function numberCompare(num1, num2) {
    return num2 - num1;
}
[9, 6, 73, 12].sort(numberCompare); // [73, 12, 9, 6]

// 👉 Compare strings by length
// ascending order
function compareByLength(str1, str2) {
    return str1.length - str2.length;
}
["hello", "my", "name", "is", "ahahahaha"].sort(compareByLength); // ['my', 'is', 'name', 'hello', 'ahahahaha']

// descending order
function compareByLength(str1, str2) {
    return str2.length - str1.length;
}
["hello", "my", "name", "is", "ahahahaha"].sort(compareByLength); // ['ahahahaha', 'hello', 'name', 'my', 'is']

//------------------------------------------------------------
//✨ Bubble Sort
// -> compares two adjacent elements and swaps them until they are in the intended order.
//👉 Time complexity: O(n^2)
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
bubbleSort([9, 6, 73, 12, 25, 64]);

//✨ Optimized Bubble Sort with no swap
//    -> regular bubble sorting does not stop and continues to compare sorted values until it touches every single element.
//    -> with noSwap variable, it stops sorting once elements are sorted.
//👉 Time complexity: O(n) if list is nearly sorted
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
bubbleSort([9, 6, 73, 12, 25, 64]);

//------------------------------------------------------------
//✨ Selection Sort
// -> selects the smallest element from an unsorted list in each iteration
//    and places that element at the beginning of the unsorted list
// -> good if memory space is limited (because it swaps less times)
//👉 Time complexity: O(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }
        if (smallestIndex !== i) {
            [arr[smallestIndex], arr[i]] = [arr[i], arr[smallestIndex]];
            console.log("swapped = ", arr, i, arr[smallestIndex]);
        }
    }
    return arr;
}
selectionSort([9, 6, 73, 12, 25, 64]);

//------------------------------------------------------------
//✨ Insertion Sort
// -> starting from 2nd value in an array, it compares itself to elements before it one by one,
//    until it finds right place. Then it inserts itself to that place.
//👉 Time complexity: O(n^2)
//    but if data is nearly sorted, could be faster.
// -> Good if you are sorting and pushing new data at the same time.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let pointer = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > pointer; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = pointer;
    }
    return arr;
}
insertionSort([9, 6, 73, 12, 25, 3, 64]);

// Recursion

// ✨ Two components of Recursive Function:
// 1. Base Case : condition when the recursion ends. Must end with return. (if not, may result in stack overflow!)
// 2. Different Input : put in different data to go through during recursion

// Call Stack : first in, last out

// 🎈 Example 1
function countDown(num) {
    if (num <= 0) {
        console.log("Finished!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3);

// 🎈 Example 2
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
sumRange(4);

// 🎈 Example 3
// Factorial ex) 4! = 4*3*2*1
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
factorial(3);

// ✨ helper method recursion : outer fn and inner helper fn
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        // base code
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr); // execute helper function
    return result;
}
collectOddValues([1, 2, 3, 4, 5, 6]);

// ✨ pure recursion
// for arrays: use methods like slice, spread operator, concat that makes copies of arrays so you won't mutate them
// for strings: strings are immutable, so need to use methods like slice, substr, substring to make copies of strings.
function collectEvenValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 === 0) {
        newArr.push(arr[0]);
    }
    return newArr.concat(collectEvenValues(arr.slice(1)));
}
collectEvenValues([1, 2, 3, 4, 5, 6]);

// 👉 practice problem 1
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}
power(2, 2);

// 👉 practice problem 2
// factorial(0) // 1
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
function factorial(num) {
    if (num < 0) {
        return 0;
    }
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// 👉 practice problem 3
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// 👉 practice problem 4
// recursiveRange(6) // 21
// recursiveRange(10) // 55
function recursiveRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + recursiveRange(num - 1);
}

// 👉 practice problem 5
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(num) {
    let fibArr = [];

    function fibMaker(num1, num2) {
        if (fibArr.length === num - 2) {
            return;
        }

        let sum = num1 + num2;
        fibArr.push(sum);
        return fibMaker(sum, num1);
    }
    fibMaker(1, 1);
    return fibArr[num - 3];
}

function fib2(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// 👉 practice problem(advanced) 1

function reverse(str) {
    let reversed = [];

    function helper(helperStr) {
        if (helperStr.length === 0) {
            return;
        }
        reversed.push(helperStr[0]);
        return reverse(helperStr.slice(1));
    }
    helper(str);

    return reversed.join("");
}
reverse("hello");

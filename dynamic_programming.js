// 👉 Dynamic Programming
// -> A method for solving a complex problem by breaking it down into a collection of simpler subproblems,
// solving each of those subproblems JUST ONCE, and STORING their solutions.

// Q. When can we use it?
// A. When a problem involves:
//    1) Overlapping Subproblems
//    2) Optimal Substructure

// Key: Memoization (Store the results of sub-set problem and use it during calculation)

// 👉 Regular Recursive
// Big O: O(2^N)
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// 👉 Recursive (Top-down)
// need enough stack to operate large scale.
// Big O: O(N)
function fib_memo(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let result = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
    memo[n] = result;
    return result;
}

// 👉 Iterative (Bottom-up)
// need enough memory space to operate large scale
function fib_table(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

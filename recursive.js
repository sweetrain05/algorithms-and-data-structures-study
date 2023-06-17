// Recursion

// Two components of Recursive Function:
// Base Case : condition when the recursion ends.
// Different Input : put in different data to go through during recursion
// Call Stack : first in, last out

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

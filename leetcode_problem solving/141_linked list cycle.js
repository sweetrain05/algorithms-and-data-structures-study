//https://leetcode.com/problems/linked-list-cycle/description/

//Solution 1
// using Array and includes method
// TC: O(N^2), SC: O(N)
var hasCycle = function (head) {
    let arr = [];
    let curr = head;

    while (curr && curr.next) {
        if (!arr.includes(curr)) {
            arr.push(curr);
            curr = curr.next;
        } else {
            return true;
        }
    }
    return false;
};

//Solution 2
// using JS Set
// TC: O(N), SC: O(N)
var hasCycle2 = function (head) {
    let visited = new Set();
    let curr = head;

    while (curr && curr.next) {
        if (!visited.has(curr)) {
            visited.add(curr);
            curr = curr.next;
        } else {
            return true;
        }
    }
    return false;
};

//Solution 3
// using two pointer
// TC: O(N), SC: O(1)
var hasCycle3 = function (head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }

    return false;
};

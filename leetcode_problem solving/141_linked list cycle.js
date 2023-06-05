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

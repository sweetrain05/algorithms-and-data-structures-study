class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.prev = temp;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            throw new Error("the list is empty.");
        }

        let deletedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = deletedNode.prev;
            this.tail.next = null;
            deletedNode.prev = null; // pop한 node도 prev value를 clear해준다.
        }
        this.length--;
        return deletedNode;
    }

    shift() {
        if (this.length === 0) {
            throw new Error("the list is empty.");
        }
        let deletedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = deletedNode.next;
            this.head.prev = null;
            deletedNode.next = null;
        }
        this.length--;
        return deletedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let prevHead = this.head;
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (this.length === 0) {
            return null;
        }
        if (index >= this.length || index < 0) {
            return null;
        }
        if (this.length / 2 > index) {
            // start from head
            console.log("running from the head");
            let count = 0;
            let curr = this.head;
            while (count !== index) {
                curr = curr.next;
                count++;
            }
            return curr;
        } else {
            // start from tail
            console.log("running from the tail");
            let count = this.length - 1;
            let curr = this.tail;
            while (count !== index) {
                curr = curr.prev;
                count--;
            }
            return curr;
        }
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index === 0) {
            this.unshift(val);
        } else if (index === this.length - 1) {
            this.push(val);
        } else if (index > this.length - 1 || index < 0) {
            return false;
        } else {
            let oldNode = this.get(index);
            if (oldNode != null) {
                let newNode = new Node(val);
                oldNode.prev.next = newNode;
                newNode.prev = oldNode.prev;
                newNode.next = oldNode;
                oldNode.prev = newNode;
                this.length++;
            }
        }

        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) {
            return false;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            console.log("hi");
            let removeNode = this.get(index);
            removeNode.prev.next = removeNode.next;
            removeNode.next.prev = removeNode.prev;
            removeNode.next = null;
            removeNode.prev = null;
            this.length--;
            return removeNode;
        }
    }

    reverse() {
        if (this.length === 0) {
            return false;
        } else if (this.length === 1) {
            return this;
        } else {
            let headCurr = this.head;
            while (headCurr.next) {
                let temp = headCurr;
                headCurr.next = temp.prev;
                headCurr.prev = temp.next;
                headCurr = temp.next;
            }
            return this;
        }
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// for (let i = 0; i < 125; i++) {
//     list.push(i);
// }

// make a class for Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        if (this.tail == null) {
            // if(!this.head)  => in case of empty list
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            let newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }

    traverse() {
        if (!this.length) {
            throw new Error("This list is empty!");
        } else {
            let temp = this.head;
            while (temp) {
                console.log(temp.val);
                temp = temp.next;
            }
        }
    }

    pop() {
        if (!this.length) {
            // in case of empty list
            throw new Error("this list is empty!");
        } else if (this.length == 1) {
            // in case of only 1 value in a list
            let oldTail = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return oldTail;
        } else {
            let oldTail = this.tail;
            let count = 0;
            let temp = this.head;
            while (count < this.length - 2) {
                temp = temp.next;
                count++;
            }
            this.tail = temp;
            this.tail.next = null;
            this.length--;
            return oldTail;
        }
    }

    shift() {
        if (!this.length) {
            throw new Error("this list is empty!");
        }
        if (this.head == this.tail) {
            let oldHead = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return oldHead;
        } else {
            let oldHead = this.head;
            let newHead = this.head.next;
            this.head = newHead;
            this.length--;
            return oldHead;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }

        return this;
    }

    get(i) {
        if (i < 0 || i >= this.length) {
            return null;
        }
        let count = 0;
        let temp = this.head;
        while (count < i) {
            temp = temp.next;
            count++;
        }
        return temp;
    }

    set(i, val) {
        let indexedNode = this.get(i);
        if (indexedNode) {
            indexedNode.val = val;
            return true;
        }
        return false;
    }

    insert(i, val) {
        if (i < 0 || i > this.length) {
            return false;
        } else if (i == this.length) {
            return !!this.push(val); // !! returns boolean value
        } else if (i === 0) {
            return !!this.unshift(val);
        }
        let newNode = new Node(val);
        let prevNode = this.get(i - 1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(i) {
        if (i < 0 || i >= this.length) {
            return false;
        } else if (i === this.length - 1) {
            return !!this.pop();
        } else if (i === 0) {
            return !!this.shift();
        }
        let prevNode = this.get(i - 1);
        let removedNode = prevNode.next;
        let nextNode = removedNode.next;
        prevNode.next = nextNode;
        this.length--;
        return removedNode;
    }

    print() {
        let arr = [];
        let curr = this.head;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }

    reverse() {
        if (this.length === 0 || this.length === 1) {
            return this;
        }

        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;

        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            // 화살표의 방향을 바꾸는 부분임.
            next = curr.next;
            curr.next = prev;
            // 다음 룹을 위한 variable 재지정하는 부분임.
            prev = curr;
            curr = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push("hello1");
list.push("hello2");
list.push("hello3");
console.log(list);

let list2 = new SinglyLinkedList();
list2.push(0);
list2.push(1);
list2.push(2);
list2.push(3);
console.log(list2);

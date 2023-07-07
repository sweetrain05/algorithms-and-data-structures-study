// Stack
// LIFO (Last In First Out)
// real world examples: redo & undo, back & forward in page routing

// 1. Array Implementation
// (some languages has built in stack implementation. but JS does not!)
// -> use push() and pop() in array
// -> use unshift() and shift() in array

// 2. custom stack
// stack must have ✨constant time complexity✨ for removing and adding.
// -> to get constant time, we add and remove from beginning of the singly linked list.

// Big O Time Complexity:
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

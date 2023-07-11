// Queue
// FIFO (First in First Out)
// real world examples: background tasks, uploading resources, printing & task processing

// 1. Array Implementation
// -> use push() and shift() in array
// OR
// -> use unshift() and pop() in array

// 2. Custom Queue : ✨constant time complexity✨ for removing and adding.

// Big O Time Complexity:
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
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

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

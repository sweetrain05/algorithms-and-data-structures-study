class PriorityQueue {
    constructor() {
        this.items = [];
    }

    //Add a new element in queue
    enqueue(element, priority) {
        let queueElement = { element, priority };

        //To check if element is added
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            // higher the priority number, higher the priority
            if (queueElement.priority > this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        //If element is not added, then add it to the end of the queue
        if (!added) {
            this.items.push(queueElement);
        }
    }

    //Remove element from the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items.shift();
    }

    //Return the first element from the queue
    front() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.items[0];
    }

    //Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue('Task 1', 2);
pq.enqueue('Task 2', 3);
pq.enqueue('Task 3', 1);

console.log(pq.dequeue().element); // Outputs "Task 2" as it has the highest priority
console.log(pq.front().element); // Outputs "Task 1" as it now has the highest priority
console.log(pq.isEmpty()); // Outputs "false"

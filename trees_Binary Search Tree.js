// 👉 Tree terminology:
// Root: tope node in a tree. each tree has only one root(entry point)
// Child: a node directly connected to another node when moving away from the root
// Parent: the converse notion of a child
// Siblings: group of nodes with the same parents.
// Leaf: a node with no children.
// Edge: connection between one node and another.

// 👉 Tree examples:
// HTML DOM
// Network Routing
// Abstract Syntax tree
// Artificial Intelligence
// computer folder structure

// 👉 Various types of trees:
// Heaps, Binary Trees

// 👉 Binary tree : each parents have 0-2 child nodes.

// 👉 Binary Search Tree(BST):
// 1. every parent node has at most 2 children.
// 2. every node to the left of a parent node is always less than the parent
// 3. every node to the right of a parent node is always greater than the parent

// why use BST?
// 1) easier and faster to search.

// 👉 Big O Time Complexity:
// Insertion: O(log n)
// Searching: O(log n)
// -> But O(log n) not guaranteed for poor looking trees.

// 👉 Basic Structure:
// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// class BinarySearchTree {
// 	constructor() {
// 		this.root = null;
// 	}
// }

// let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(13);
// tree.root.left.right = new Node(7);

// 👉 Example Problem:
//      10
//   5     13
// 2  4  14  16

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // 👉 Insertion
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // 👉 Searching
    find(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    contains(value) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

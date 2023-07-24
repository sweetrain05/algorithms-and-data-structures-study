// Goal of tree traversal : to visit every nodes in a tree

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

    // 👉 BFS(Breath First Strategy) : horizontal orderly visit
    BFS() {
        let queue = [];
        let visited = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            visited.push(curr);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        return visited;
    }

    // 👉 DFS(Depth First Strategy) : vertical order visit
    // 3 different types of DFS:
    // 1) Pre-Order: visit in order of left, left's children and right, right's children.
    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

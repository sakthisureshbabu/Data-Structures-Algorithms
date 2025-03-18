import { Node } from './Node.js';

class TreeOne {
    constructor() {
        this.root = null;
    }

    // Insert a new node into the binary tree
    insert(data) {
        const newNode = new Node(data);
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    // Helper method to insert a node into the tree
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    // In-order traversal of the binary tree
    inOrder(node = this.root) {
        if(node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    // Pre-order traversal of the binary tree
    preOrder(node = this.root) {
        if(node !== null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Post-order traversal of the binary tree
    postOrder(node = this.root) {
        if(node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }

    // Search for a node with a specific value
    search(node, data) {
        if (node === null)
            return null;
        if (data < node.data)
            return this.search(node.left, data);
        else if (data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }
}

const tree = new TreeOne();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(15);
tree.insert(25);

console.log('In-order traversal');
tree.inOrder();

console.log('Pre-order traversal');
tree.preOrder();

console.log('Post-order traversal');
tree.postOrder();

console.log('Seach for 15:');
console.log(tree.search(tree.root, 10));
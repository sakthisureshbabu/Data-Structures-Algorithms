import { Node } from './doubleNode.js';

class DeleteList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at the beginning of the list
    prepend(data) {
        const newNode = newNode(data);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Insert at the end of the list
    append(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // size of the list
    size() {
        if(this.head === 0)
            return 0;
        let current = this.head;
        let length = 0;
        while(current !== null) {
            current = current.next;
            length++;
        }
    }

    // delete the node at a given position
    delete(pos) {
        if(pos === 0 || pos > this.size()) {
            console.log('Invalid position');
            return;
        }
        let current = this.head;
        let previous = null;
        let idx = 1;
        while(current !== null && idx < pos) {
            previous = current;
            current = current.next;
            idx++;
        }
        if(current.prev === null) {
            if(current.next === null) {
                this.head === null;
                this.tail === null;
            } else {
                this.head = current.next;
                current.next.prev = null;
                current.next = null; 
            }
            return;
        }
        if(current.next === null) {
            current.prev.next = null;
            return;
        }
        previous.next = current.next;
        current.next.previous = previous;
    }

    // Print the list
    Print() {
        let array = [];
        let current = this.head;
        while(current !== null) {
            array.push(current.data);
            current = current.next;
        }

        console.log(array);
    }
}

const DLL = new DeleteList();

for(let i=10; i<=50; i+=10)
    DLL.append(i);

DLL.Print();

DLL.delete(1);
DLL.Print();

DLL.delete(4);
DLL.Print();

DLL.delete(2);
DLL.Print();
import { Node } from "./doubleNode.js";

class DoublyLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert a new node at the end
    append(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Insert a new node at the beginning
    prepend(data) {
        const newNode = new Node(data);
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

    // Insert a new Node at given position
    insertAt(data, pos) {
        if(pos < 0) {
            console.log('Invalid position');
            return;
        }
        if(pos === 0) {
            this.prepend(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head;
        let idx = 0;
        while(current !== null && idx < pos) {
            current = current.next;
            idx++;
        }
        if(current === null){
            this.append(data);
            return;
        }
        newNode.next = current;
        newNode.prev = current.prev;
        if(current.prev !== null)
            current.prev.next = newNode;
        current.prev = newNode;
    }

    // length of linkedlist
    size() {
        if(this.head === null)
            return 0;
        let current = this.head;
        let length = 0;
        while(current.next !== null) {
            current = current.next;
            length++;
        }
        return length;
    }

    print() {
        let array = [];
        let current = this.head;
        while(current.next !== null) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }
}


const DLL = new DoublyLList();
DLL.append(10);
DLL.append(20);
DLL.append(30);
DLL.append(40);
DLL.append(50);
DLL.prepend(5);

console.log(DLL.print());

DLL.insertAt(4, 0);
console.log(DLL.print());
console.log(DLL.size());

DLL.insertAt(50, 7);
console.log(DLL.print());

DLL.insertAt(15, 3);
console.log(DLL.print());
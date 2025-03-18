import { Node } from './doubleNode.js';

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //Insert new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            console.log(this.tail.data + 'is appended to the end of the list');
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        console.log(this.tail.data + 'is appended to the end of the list');
    }

    //Insert new node at the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            console.log(this.head.data + 'is added to the beginning of the list');
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        console.log(this.head.data + 'is added to the beginning of the list');
    }

    //Delete a node with a specific value
    delete(data) {
        if(this.head === null) {
            console.log('The list is empty');
        }
        if(this.head.data === data) {
            this.head = this.head.next;
            if(this.head !== null)
                this.head.prev = null;
            else
                this.tail = null;
            console.log('Node with ' + data + ' is deleted');
            return;
        }
        let current = this.head;
        while(current !== null && current.data !== data) {
            current = current.next;
        }
        if(current === null){
            console.log(`The node with ${data} is not present in the list.`);
        }
        if(current !== null) {
            if(current.next !== null)
                current.next.prev = current.prev;
            else
                this.tail = current.prev;
            if(current.prev !== null)
                current.prev.next = current.next;
        }
        console.log(`The node with ${data} is not present in the list.`);
    }

    //Print the list from head to tail
    printList() {
        let current = this.head;
        let listData = [];
        if(this.head === null)
            return 'The list is empty';
        while(current !== null) {
            listData.push(current.data);
            current = current.next;
        }
        return listData;
    }

    //Print list from tail to head
    reversePrint() {
        let current = this.tail;
        let reverseList = [];
        while(current !== null) {
            reverseList.push(current.data);
            current = current.prev;
        }
        return reverseList;
    }
}

const list = new DoubleLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log(list.printList());
console.log(list.reversePrint());

list.delete(5);
console.log(list.printList());
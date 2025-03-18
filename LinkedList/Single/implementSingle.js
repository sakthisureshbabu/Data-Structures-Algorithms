import { Node } from './singleNode.js';

class singlyLinkedList {
    constructor() {
        this.head = null;
    }

    // Create node at the end;
    append(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            return `New node created for data ${data}`;
        }
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    //create node at the beginning
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    //print the elements in the linkedlist
    print() {
        const listData = [];
        if(!this.head !== null) {
            for(let current = this.head; current !== null ; current=current.next){
                listData.push(current.data);
            }
            return listData;
        }
        return 'The list is empty.';
    }

    //delete a single node
    delete(data) {
        if(this.head === null)
            console.log(`The list is empty.`);
        else {
            let current = this.head;
            while(current.next !== null && current.next.data !== data) {
                current = current.next;
            }
            if(current.next !== null){
                current.next = current.next.next;
                console.log(`The node with ${data} is deleted ${this.print()}.`);
            } else {
                console.log(`The node with ${data} doesn't exist.`);
            }
        }
    }
}

const list = new singlyLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log(list.print());

list.delete(23);
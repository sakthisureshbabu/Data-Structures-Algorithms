import { Node } from './singleNode.js';

class singlyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Insert a node at the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    // Obtain the size of the linkedList
    size() {
        let pos = 0;
        let current = this.head;
        if(current === null)
            return 0;
        while(current !== null){
            pos++;
            current = current.next;
        }
        return pos;
    }

    // Insert a new node at the position
    insertAt(data, pos) {
        let newNode = new Node(data);
        if(this.head === null){
            console.log('The list is empty');
            return;
        }
        if(pos > this.size()) {
            console.log('Invalid position');
            return;
        }
        if(pos === 0)
            this.prepend(data);
        else {
            let itr = 1;
            let prev = null;
            let current = this.head;
            while(current !== null && itr < pos) {
                prev = current;
                current = current.next;
                itr++;
            }
            prev.next = newNode;
            newNode.next = current;
        }
        console.log(`Node with ${data} is inserted at ${pos}`)
    }

    //Print the linkedList
    print() {
        if(this.size() === 0)
            return 'Empty list';
        let list = [];
        for(let curr = this.head; curr !== null; curr = curr.next){
            list.push(curr.data);
        }
        return list;
    }
}

const list = new singlyLinkedList();

for(let i=10; i<=50; i+=10)
    list.append(i);

list.prepend(4);

console.log(list.print());

list.insertAt(6, 0);
list.insertAt(9, 7);
list.insertAt(15, 4);
console.log(list.print());
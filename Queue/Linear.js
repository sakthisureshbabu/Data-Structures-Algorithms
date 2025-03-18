class Queue {
    constructor() {
        this.items = {};
        this.firstIdx = 0;
        this.lastIdx = 0;
    }

    enqueue(ele) {
        this.items[this.lastIdx++] = ele;
        console.log(`${ele} is added to the queue`);
    }

    dequeue() {
        if(this.size() !== 0){
            let removedEle = this.items[this.firstIdx];
            delete this.items[this.firstIdx++];
            console.log(`${removedEle} is removed from the queue`);
        }
        else
        console.log('The queue is empty');
    }

    peek() {
        if(this.size() !== 0)
            return this.items[this.firstIdx];
        else
            return 'The queue is empty';
    }

    size() {
        return this.lastIdx - this.firstIdx;
    }

    clear(){
        this.items = {};
        this.firstIdx = 0;
        this.lastIdx = 0;
    }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(`The peek element of the queue ${queue.peek()}`);
console.log(`The length of queue is ${queue.size()}`);

queue.clear();
console.log(queue.items);
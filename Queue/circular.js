class CircularQueue {
    constructor(size) {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
        this.size = size;
        this.count = 0;
    }

    //Check if the queue is full
    isFull() {
        return this.size === this.count;
    }

    //Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    //Add an element to the queue
    enqueue(ele) {
        if(this.isFull()) {
            console.log('Queue is full');
            return;
        }
        this.queue[this.rear] = ele;
        console.log(ele+" added to the queue"+" in "+"position "+this.count);
        this.rear = (this.rear + 1) % this.size;
        this.count++;
    }

    // Remove and return the front element of the queue
    dequeue() {
        if(this.isEmpty())
            return 'The queue is empty';
        let element = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.size;
        this.count--;
        return element;
    }

    // Return the front element of the queue without removing it
    peek() {
        if(this.isEmpty())
            return 'The queue is empty';
        return this.queue[this.front];
    }

    // Print the queue
    printQueue() {
        if(this.isEmpty()) {
            console.log('The queue is empty');
            return;
        }
        let elements = [];
        let i = this.front;
        for(let j=0; j<this.count; j++){
            elements.push(this.queue[i]);
            i = (i+1) % this.size;
        }
        console.log(elements.join(' '));
    }

}

const queue = new CircularQueue(5);

for(i=10; i<=50; i+=10){
    queue.enqueue(i);
}

queue.printQueue();
console.log(queue.dequeue());
queue.printQueue();
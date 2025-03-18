class Stack{
    constructor() {
        this.container = {};
        this.idx = 1;
    }

    push(ele) {
        this.container[this.idx] = ele;
        this.idx++;
    }

    pop() {
        if(this.isEmpty())
            return 'The stack is empty';

        let popped = this.container[String(this.idx - 1)];
        delete this.container[String(this.idx - 1)];
        this.idx --;
        return popped;
    }

    peek() {
        if(this.isEmpty())
            return 'The stack is empty';

        return this.container[String(this.idx - 1)];
    }

    size() {
        let size = 0;
        if(!this.isEmpty())
            return Object.keys(this.container).length;
        return 'The stack is empty';
    }

    isEmpty() {
        return Object.keys(this.container).length === 0;
    }

    clear() {
        this.container = {};
        console.log('The stack is cleared');
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());
stack.push(30);
console.log(stack.peek());
stack.push(40);
stack.push(67);
console.log(stack.size());
stack.clear();
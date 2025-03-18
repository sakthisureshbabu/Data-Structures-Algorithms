class Stack {
    constructor() {
        this.items = [];
    }

    push(element){
        return this.items.push(element);
    }

    pop() {
       if (this.isEmpty())
        return 'Stack is Empty';
       return this.items.pop();
    }

    peek() {
        if (this.isEmpty())
            return 'Stack is Empty';
           return this.items[this.size() - 1];
    }

    size() { return this.items.length; }

    clear() { this.items = []; }

    isEmpty() { return this.items.length === 0; }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.size());
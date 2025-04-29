// Design a function which returns a fibonacci sequence value
// The fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;

const fibonacci = n => {
    if(n < 2) {
        return 1;
    }
    return fibonacci(n-2) + fibonacci(n-1);
};

console.log(fibonacci(5));
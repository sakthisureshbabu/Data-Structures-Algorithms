// Write an asynchronous function which executes callback after finishing it's asynchronous task

const asyncFn = callback => {
    setTimeout(() => {
        callback('done');
    }, 2000);
};

asyncFn((message) => {
    console.log('callback', message);
});

// What problem does callbacks solve?
/*
1. It is used to solve asynchronous operations like calling functions after sometime.
2. Enables reusablity of the function. 
*/
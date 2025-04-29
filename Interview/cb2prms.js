// Callback to promise conversion
// Create a promise function to be able to use callback function via promise approach.

const asyncFunc = (callback) => {
    setTimeout(() => {
        callback(1);
    }, 3000);
}

const promisifyAsncFunc = () => {
    return new Promise(res => {
        asyncFunc(data => {
            res(data);
        })
    });
}

promisifyAsncFunc().then(res => console.log(res));
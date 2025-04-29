// Create debounce function

const debounce = (func, timeout = 3000) => {
    let timer;
    return (...args) => {
        console.log("inner fn", args);
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
};

// Debounce is calling of function after sometime
const saveInput = name => {
    console.log("save Input", name);
};

const processChange = debounce(saveInput, 2000);
processChange('foo');
processChange('foo');
processChange('foo');
processChange('foo');
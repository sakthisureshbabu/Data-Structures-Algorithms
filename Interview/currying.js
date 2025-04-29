// Write a function which helps to achieve multiply(a)(b) and returns product of a and b

const multiply = (num1) => {
    return num2 => {
        return num1 * num2;
    }
}

console.log(multiply(5)(6));

// Create a curry function

const curry = function(fn) {
    const arity = fn.length;
    console.log("arity", arity);
    return function f1(...args) {
        if(args.length >= arity) {
            console.log("enough arguments");
            return fn(...args);
        }
        else {
            return function f2(...moreArgs) {
                const newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    }
}

const curriedSum = curry((a, b, c, d) => a+b+c+d );
console.log(curriedSum(1)(2)(3)(4));
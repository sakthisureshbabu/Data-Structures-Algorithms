//Remove all duplicates in the array.

// Using set
const uniqueArray = arr => {
    return [...new Set(arr)];
};

// Using loop
const unique = arr => {
    const result = [];
    arr.forEach(item => {
        if(!result.includes(item))
            result.push(item);
        return result;
    });
};

// Using reduce()
const uniqueReduce = (arr) => {
    arr.reduce((acc, el) => {
        return acc.includes(el) ? acc : [...acc, el];
    }, [])
}

console.log(uniqueArray([1,5,6,2,5,1,6]));
console.log(uniqueReduce([1,5,6,2,5,1,6]));
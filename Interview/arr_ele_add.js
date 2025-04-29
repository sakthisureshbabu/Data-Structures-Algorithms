// Write a function which get an array and an element and returns a array with this element at the end
const numbers = [1, 2];
const append = (arr, el) => {
    return [...arr, el];
};

const newNumbers = append(numbers, 3);
console.log(newNumbers);
console.log(numbers);
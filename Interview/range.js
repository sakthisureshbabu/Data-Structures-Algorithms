// Write a function which implement range

// range(1, 50)

// Using loop
const range = (start, end) => {
    const result = [];
    for(let i=start; i<=end; i++)
        result.push(i);
    return result;
}

console.log(range(1, 50));

// Using Array function
const range1 = (start, end) => {
    return [...Array(end-start).keys()].map(el => el + start);
}
console.log(range1(1,50));
// Write a function which implements shuffle

const shuffleItems = items => {
    return items.map(item => ({ sort: Math.random(), value: item }))
    .sort((item1, item2) => item1.sort - item2.sort)
    .map(a => a.value)
};

const arr = [2, 5, 7, 10, 6];
console.log(shuffleItems(arr));
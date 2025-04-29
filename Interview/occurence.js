// Find the number of occurences of minimum value in the list

const arr = [1, 2, 1, 3];
const minValue = Math.min(...arr);

const minArr = arr.filter(el => el === minValue);
console.log(minArr.length);
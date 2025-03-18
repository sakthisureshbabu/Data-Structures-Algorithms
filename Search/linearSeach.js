function linearSearch(arr, key) {
    for (let i=0; i<arr.length; i++){
        if(arr[i] === key)
            return i;
    }
    return -1;
}

const array = [10, 20, 30, 40, 50];
const target = 40;
const result = linearSearch(array, target);
result > 0 ? console.log(`Target found in ${result}`) : console.log('The target value is not present in the array');
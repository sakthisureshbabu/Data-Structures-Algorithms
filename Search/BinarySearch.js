function binarySearch(arr, key, low, high) {
    if(low > high) //base case - for termination of recursion
        return -1;

    let mid = Math.floor((low + high)/2);

    if(arr[mid] === key)
        return mid;

    if(arr[mid] < key)
        return binarySearch(arr, key, mid+1, high);
    else
        return binarySearch(arr, key, low, mid-1);
}

const array = [10, 20, 30, 40, 50];
const target = 40;
const result = binarySearch(array, target, 0, array.length - 1);
result > -1 ? console.log(`The element ${target} is present in ${result}`) : console.log('The element is not present in the arr');
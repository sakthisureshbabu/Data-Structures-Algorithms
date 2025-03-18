function mergeSort(arr) {

    if(arr.length <= 1)
        return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while(leftIdx < left.length && rightIdx < right.length) {
        if(left[leftIdx] < right[rightIdx]){
            result.push(left[leftIdx]);
            leftIdx++;
        }else {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }

    return result.concat(left.slice(leftIdx), right.slice(rightIdx));
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log(mergeSort(array));
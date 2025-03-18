function countingSort(arr) {
    if(arr.length === 0)
        return arr;

    // Find the maximum value in the array
    const max = Math.max(...arr);

    // Initialize the count array with zeros
    const count = new Array(max+1).fill(0);

    // Count the occurences of each element
    for(let i=0; i<arr.length; i++){
        count[arr[i]]++;
    }

    console.log(count);
    // Reconstruct the sorted array
    let sortedIdx = 0;
    for(let i=0; i<count.length; i++) {
        while(count[i] > 0) {
            arr[sortedIdx++] = i;
            count[i]--;
        }
    }

    return arr;
}

const array = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(array));
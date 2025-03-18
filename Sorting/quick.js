function quickSort(arr) {

    if(arr.length <= 1)
        return arr;

    let n = arr.length;

    let left = [];
    let right = [];
    let pivot = arr[Math.floor(n/2)];

    for(let i=0; i<n; i++){
        if(i === Math.floor(n/2))
            continue;

        if(arr[i] < pivot)
            left.push(arr[i]);
        else
            right.push(arr[i]);

    }

    return quickSort(left).concat(pivot, quickSort(right));
}

const array = [64, 25, 12, 22, 11];
console.log(quickSort(array));
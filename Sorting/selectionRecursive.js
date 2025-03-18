function selectionSortRecursion(arr, idx, n) {
    if(idx === n)
        return;

    let min_idx = idx;

    for(let i=idx; i<n; i++){
        if(arr[min_idx] > arr[i])
            min_idx = i;
    }

    if(min_idx != idx)
        [arr[idx], arr[min_idx]] = [arr[min_idx], arr[idx]];

    selectionSortRecursion(arr, idx+1, n);
}

const array = [64, 25, 12, 22, 11];
selectionSortRecursion(array, 0, array.length);
console.log(array);
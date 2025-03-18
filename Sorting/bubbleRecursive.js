function bubbleRecursiveSort(arr, n) {
    if(n==1)
        return;

    for(let i=0; i<n-1; i++){
        if(arr[i] > arr[i+1])
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }

    bubbleRecursiveSort(arr, n-1);
}

const array = [64, 34, 25, 12, 22, 11, 90];
bubbleRecursiveSort(array, array.length);
console.log(array);
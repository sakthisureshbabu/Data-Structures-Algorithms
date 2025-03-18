function selectionSort(arr){
    let n = arr.length;

    for(i=0; i<n-1; i++){
        let min_idx = i;

        for(j=i+1; j<n; j++){
            if(arr[min_idx] > arr[j])
                min_idx = j;
        }

        if(min_idx !== i)
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }

    return arr;
}

const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array));
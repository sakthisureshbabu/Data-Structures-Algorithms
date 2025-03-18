function bubblesort(arr) {
    let swapped = true;
    let n = arr.length;

    do {
        swapped = false;
        for(let i=0; i<n; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    } while(swapped)

    return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubblesort(array));
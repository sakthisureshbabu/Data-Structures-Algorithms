function interpolationSearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high && ((key >= arr[low]) && (key <= arr[high]))){
        if(low === high){
            if(arr[low] === key)
                return low;
            return -1;
        }

        let pos = low + (((key - arr[low]) * (high - low))/(arr[high] - arr[low]));

        if(arr[pos] === key)
            return pos;

        if(arr[pos] < key)
            low = pos + 1;
        else
            high = pos - 1;
    }
    return -1;
}

const array = [10, 20, 30, 40, 50];
const target = 30;
const result = interpolationSearch(array, target);
console.log(result);
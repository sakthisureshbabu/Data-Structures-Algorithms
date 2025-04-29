// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM") // 00:10
// convertTo24HrsFormat("5:00AM")  // 05:10
// convertTo24HrsFormat("12:33PM") // 12:33
// convertTo24HrsFormat("11:08PM") // 23:08
// convertTo24HrsFormat("10:02AM") // 22:02

const convertTo24HrsFormat = timeText => {
    const timeTextLower = timeText.toLowerCase();
    let [hours, mins] = timeTextLower.split(':')

    if (timeTextLower.endsWith('am')) {
        hours = hours === '12' ? '0' : hours;
    }else if(timeTextLower.endsWith('pm')) {
        hours = hours === '12' ? hours : String(+hours+12) // +hours convert it automatically to integer
    }

    return hours.padStart(2, 0) + ':' + mins.slice(0, -2).padStart(2, 0);
}

console.log(convertTo24HrsFormat("12:10AM"));
console.log(convertTo24HrsFormat("5:00AM"));
console.log(convertTo24HrsFormat("12:33PM"));
console.log(convertTo24HrsFormat("11:08PM"));
console.log(convertTo24HrsFormat("10:02AM"));
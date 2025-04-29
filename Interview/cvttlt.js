// Convert to title case

// write a function to convert a string to title case

// Provided test cases
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return a "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return a "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return a "Here Is My Handle Here Is My Spout".

// Using forloop
/* const convertTitle = (str) => {
    const arr = str.toLowerCase().split(' ');
    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

console.log(convertTitle("I'm a little tea pot")); */

const convertTitle = str => {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(convertTitle("sHoRt AnD sToUt"));
console.log(convertTitle("HERE IS MY HANDLE HERE IS MY SPOUT"));
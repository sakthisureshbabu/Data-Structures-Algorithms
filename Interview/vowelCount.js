// Write a function which counts vowels in a string

// using for loop
/*const findVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if(vowels.includes(char))
            count++;
    }
    return count;
} */

//console.log(findVowels('Napier'));

// Using reduce function
const findVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((acc, char) => {
        return vowels.includes(char) ? acc+1 : acc;
    }, 0);
}

console.log(findVowels('Napier'));
console.log(findVowels('Diaper'));
console.log(findVowels('brgb'));
// Count the vowels in string into an object
const getCount = str => {
    const count = {};
    const vowels = 'aeiou';
    for (const char of str.toLowerCase().split('')) {
        if(vowels.includes(char)) {
            char in count ? count[char]++ : count[char] = 1;
        }
    }
    return count;
};

console.log(getCount("Infosys"));
console.log(getCount("Millimeter"));
console.log(getCount("Obesity"));
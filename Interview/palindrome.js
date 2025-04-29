// Write a function which checks if string is a palindrome

const isPalindrome = str => {
    return str === str.split('').reverse().join('');
}

isPalindrome('fof') ? console.log('Palindrome') : console.log('Not Palindrome');
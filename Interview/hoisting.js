//what will be the output

//Question 1
console.log(foo);   //Error: foo is not defined
foo = 1;

//Question 2
console.log(foo);   //Undefined. Not the error because declaring the variable using var is considered as hoisting.
var foo = 2;

//Question 3
var foo;
console.log(foo);
foo = 3;

//The same hoisting concept applies for function() also
foo();
function foo() {
    console.log('foo');
}
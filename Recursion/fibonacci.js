// Get the nth fibonacci number
function get_fibo(n) {
  if (n == 0 || n == 1) return n;
  if (n < 0) return new Error("Not in range");
  return get_fibo(n - 1) + get_fibo(n - 2);
}

console.log(get_fibo(5));
console.log(get_fibo(6));
console.log(get_fibo(0));
console.log(get_fibo(1));
console.log(get_fibo(2));
console.log(get_fibo(-4));

// Get the fibonacci series in range
num=8
for(let i=0; i<=num;i++)
    console.log(get_fibo(i));
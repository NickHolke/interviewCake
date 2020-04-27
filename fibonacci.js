function fib(n) {

  // Compute the nth Fibonacci number
  if (n === 0 || n === 1) return n;
  if (n < 0) throw new Error("can't be negative");
  
  let prevPrev = 0;
  let prev = 1;
  let current;
  
  for (let i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }
  
  return current;
}
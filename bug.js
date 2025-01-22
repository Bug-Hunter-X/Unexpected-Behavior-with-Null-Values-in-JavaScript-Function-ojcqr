function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Add the numbers
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
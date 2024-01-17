function sumOfMultiples(n, multiples) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (multiples.some((multiple) => i % multiple === 0)) {
      sum += i;
    }
  }

  return sum;
}

// Example usage:
console.log(sumOfMultiples(10, [3, 5])); // Output: 23
console.log(sumOfMultiples(15, [2, 4, 6])); // Output: 30

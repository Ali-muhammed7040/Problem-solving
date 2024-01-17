function reverseWords(input) {
  const words = input.split(" ");
  const reversedWords = words.reverse();
  const reversedString = reversedWords.join(" ");
  return reversedString;
}

// Example usage:
const input1 = "Hello World";
console.log(reverseWords(input1)); // Output: "World Hello"

const input2 = "The quick brown fox";
console.log(reverseWords(input2)); // Output: "fox brown quick The"

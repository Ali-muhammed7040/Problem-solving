function mostFrequentElement(arr) {
  let frequencyCounter = {};

  arr.forEach((element) => {
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  });

  let mostFrequentElement = null;
  let maxFrequency = 0;

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > maxFrequency) {
      maxFrequency = frequencyCounter[key];
      mostFrequentElement = key;
    }
  }

  return mostFrequentElement;
}

console.log(mostFrequentElement([1, 2, 3, 2, 4, 1, 5, 2]));
console.log(
  mostFrequentElement(["apple", "banana", "orange", "apple", "banana"])
);

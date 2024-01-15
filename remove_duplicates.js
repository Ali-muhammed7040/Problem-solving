/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // Initialize count of unique elements
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Move the unique element to the next position in the array
      k++;
    }
  }

  return k;
};

// Example usage:
const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const uniqueCount = removeDuplicates(nums);
console.log(nums.slice(0, uniqueCount)); // Output: [1, 2, 3, 4, 5]
console.log(uniqueCount); // Output: 5

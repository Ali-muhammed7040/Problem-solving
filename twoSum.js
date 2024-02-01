function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return null; // If no solution is found
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]

function twoSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array (optional, but can help in certain cases)

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; // If no solution found
}

// Example usage:

console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] equals 9)

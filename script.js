// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

let target = 9
const  nums = [2,7,11,15]
function twoSum(nums,target){
for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
        if(nums[i]+nums[j]==target){
           return [i,j]
        }
    }
}
}
console.log(twoSum(nums,target))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]
// Example 4:

// Input: nums = [1]
// Output: [1]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 let sortColors = (nums) => {
    let mid = 0;
    let low = 0;
    let high = nums.length-1;
    
    while (mid<=high) {
        if(nums[mid]===0) {
            swap(nums, mid, low);
            low++;
            mid++
        }
        else if(nums[mid]===1) {
            mid++
        }
        else if(nums[mid]===2) {
            swap(nums, mid, high);
            high--
        }
    }
    return nums
};

let swap = (arr, firstVal, secondVal) => {
    [arr[firstVal], arr[secondVal]] = [arr[secondVal], arr[firstVal]];
}
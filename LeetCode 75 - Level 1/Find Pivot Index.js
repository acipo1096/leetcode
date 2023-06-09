/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let sum = 0;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }

    for (let i = 0; i < nums.length; i++){
        let rightSum = sum - nums[i] - leftSum
        if (rightSum == leftSum) {
            return i;
        }
        leftSum += nums[i]
    }

    return -1;
};
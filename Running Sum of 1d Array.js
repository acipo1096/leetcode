/**

 * @param {number[]} nums

 * @return {number[]}

 */

 

var runningSum = function(nums) {

    let sumNums = [];

    let hold = 0;

    for (let i = 0; i < nums.length; i++){

        if(nums[i-1] == undefined){

            sumNums[i] = nums[0];

        } else {

            hold += nums[i-1];

            sumNums[i] = nums[i] + hold;

        }

    }

    return sumNums;

};
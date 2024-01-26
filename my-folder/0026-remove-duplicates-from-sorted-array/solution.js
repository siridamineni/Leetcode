/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueCount = 0;
    for(let all=1; all<nums.length; all++){
        if(nums[uniqueCount] !== nums[all]){
            uniqueCount++;
            nums[uniqueCount] = nums[all]
        }
    }
    return uniqueCount + 1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2];
    const sortedArr = arr.sort((a,b) => a-b);
    if(sortedArr.length%2 === 1){
        const num = sortedArr[Math.floor(sortedArr.length/2 - Number.EPSILON)];
        return num;
    }else {
        const num2 = (sortedArr[(sortedArr.length/2)-1] + sortedArr[sortedArr.length/2])/2;
        return num2;
    }
};

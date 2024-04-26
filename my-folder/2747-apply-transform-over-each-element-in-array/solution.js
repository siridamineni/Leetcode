/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let addedArr = [];
    for(let i=0; i<arr.length; i++){
       addedArr.push(fn(arr[i], i));
    }
    return addedArr;

};

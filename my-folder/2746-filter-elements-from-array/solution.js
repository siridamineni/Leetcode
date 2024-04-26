/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let n = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            n.push(arr[i])
        }
    }
    return n;
};

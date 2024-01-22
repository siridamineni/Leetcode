/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numToStrArr = x.toString().split('').reverse();
    return parseInt(numToStrArr.join('')) === x
};

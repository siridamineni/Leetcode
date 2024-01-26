/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const strToArr = s.trim().split(' ');
    return (strToArr[strToArr.length - 1].length);
    
};

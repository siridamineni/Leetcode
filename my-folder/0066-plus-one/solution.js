/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
 const number = digits.join('');
 if(digits.length <= 15){
     return (parseInt(number,10 )+1).toString().split('');
 }else {
     return (BigInt(number)+ BigInt(1)).toString().split('');
 }
};

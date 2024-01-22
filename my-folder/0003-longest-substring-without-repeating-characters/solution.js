/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let start = 0;
   let longest = 0;
   let charIndexMap = {};
   for(let i=0; i<s.length; i++){
       let currentChar = s[i];
       if(charIndexMap[currentChar] !== undefined && charIndexMap[currentChar]>=start){
           start = charIndexMap[currentChar]+1;
       }
       charIndexMap[currentChar] = i;
       longest = Math.max(longest, (i-start+1))
   }
return longest;

};

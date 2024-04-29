/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
    if(s.length <=1){
        return s;
    }
    let subStr = '';
    for(let i = 1; i< s.length; i++){
        // odd cases
        let low = i;
        let high = i;
        while(s.charAt(low) === s.charAt(high)){
            low--;
            high++;
        if(low == -1 || high == s.length){
            break;
        }
        }
        let palindrome = s.substring(low+1, high);
        if(palindrome.length > subStr.length){
            subStr = palindrome
        }
        // even cases
        low = i-1;
        high = i;
        while(s.charAt(low) === s.charAt(high)){
            low--;
            high++;
        if(low == -1 || high == s.length){
            break;
        }
        }
        palindrome = s.substring(low+1, high);
        if(palindrome.length > subStr.length){
            subStr = palindrome;
        }
    }
    return subStr;
}


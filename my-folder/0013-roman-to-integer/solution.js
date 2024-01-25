/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolValuePair = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500,'M': 1000};
    const strArr = s.split('');
    let num = 0;
    let i =0;
    while(i !== strArr.length){
        const current = symbolValuePair[strArr[i]];
        const next = symbolValuePair[strArr[i+1]];
        if(current < next){
            num+= (next - current);
            i++;
        }else {
            num += current;
        }
        i++;
    }
    return num
};

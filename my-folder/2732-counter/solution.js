/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let temp = 0;
    let count = n;
    return function() {
        if(temp === 0){
            temp++;
            return count;
        }else {
            count++;
            return count;
        }
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

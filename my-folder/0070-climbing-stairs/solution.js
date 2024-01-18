/**
 * @param {number} n
 * @return {number}
 */

var climbCalculation = function(n,cnt){
    var wayArr = Array(n+1).fill(0);
    wayArr[0] = 1
    wayArr[1] = 2
    for(let i=2; i<=n; i++){
        wayArr[i] = wayArr[i-1] + wayArr[i-2]
    }
    return wayArr[n-1]
}
var climbStairs = function(n) {
    return climbCalculation(n,0);
};

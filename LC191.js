/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let r = 0
    for(let a of  n.toString(2)){        
        if(a==1)r++
    }
    return r
};

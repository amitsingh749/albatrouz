/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
 let bString  =n.toString(2)
 let start0 = 32 - bString.length
 
     while(start0 >0){
        bString = '0'+bString
        start0 --
     }
    return  parseInt(bString.split('').reverse().join(''), 2)
    
};
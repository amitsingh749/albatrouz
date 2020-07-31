/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the
 *other.
 */
/*
Input 'abcd', 'sh'
Output false
Input 'god', 'dog'
Output true
*/

var CheckPermutation = function(s1, s2){
    if(s1.length != s2.length) return false
    let map1 = new Map()
    for(let a of s1){
        if (map1.has(a)) {
            map1.set(a, map1.get(a) + 1)
        } else {
            map1.set(a, 1)            
        }
    }
    let map2 = new Map()
    for(let a of s2){
        if (map2.has(a)) {
            map2.set(a, map2.get(a) +1 )
        } else {
            map2.set(a, 1)            
        }
    }
    for(let a of map1.keys()){
        if(map1.get(a) != map2.get(a)) return false
    }
    return true
   
}

console.log(CheckPermutation('dog','god'))
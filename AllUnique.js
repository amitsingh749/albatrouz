/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures?
 */
/*
Input 'abcd'
Output true
Input 'abcda'
Output false
*/
//my inital solution
var IsUnique = function(s){
    let set = new Set()
    for (const ch of s) {
        if (set.has(ch)) {
            return false
        }else{
            set.add(ch)
        }
    }
    return true
}

console.log(IsUnique('abcead'))

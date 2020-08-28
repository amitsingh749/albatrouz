/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    
    for(let a of strs){
        let temp = a.split('').sort().join('')
        if(map.has(temp)){
            let t = map.get(temp)
            t.push(a)
            map.set(temp, t)
        }else{
            let t = []
            t.push(a)
            map.set(temp, t)
        }
    }
    let result = []
    for(let a of map.values()){
        result.push(a)
    }
    
    return result
};



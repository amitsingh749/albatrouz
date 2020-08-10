/**
 * @param {string} S
 * @return {number}
 */
 
var minAddToMakeValid = function(S) {
    let stack = []
	let fixneeded = 0
	for(let i=S.length-1; i>=0; i--){
		if(S[i]==')'){
			stack.push(S[i])
		}
		else if(stack.length >= 1){
            stack.pop()
        }else{
            fixneeded++
        }
	}
	return fixneeded + stack.length
};
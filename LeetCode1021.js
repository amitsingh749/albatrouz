/**
 * @param {string} S
 * @return {string}
 */
//Input: "(()())(())"
//Output: "()()()"
var removeOuterParentheses = function(S) {
    let result = ''
    let stack = []
    let start = 0;
    for(let i=0; i<S.length;i++){
    	let a = S[i]
    	if(a=='(') {stack.push(a)}
    	if(a==')') {stack.pop(a)}
    	if(stack.length == 0) {
    		result += S.substring(start+1, i)
    		start = i+1
    	}
    }
    return result
};
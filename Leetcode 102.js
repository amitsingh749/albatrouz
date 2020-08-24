/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    let queue = []
    let result = []
    if(!root ) return result
    
    queue.push(root)
    while(queue.length >0){
        let currsize = queue.length
        let currLevel = []
        for(let i=0; i< currsize;  i++){
            node  = queue.shift()            
            currLevel.push(node.val)
            
            if(node.left)
                queue.push(node.left)
            if(node.right)
                queue.push(node.right)
        }
        result.push(currLevel)      
        console.log(currLevel)
    }
    
    return result
};
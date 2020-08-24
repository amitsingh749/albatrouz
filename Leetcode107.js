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
var levelOrderBottom = function(root) {
    let q  =[]
    let r = []
    if(!root) return r
    
    q.push(root)
    while(q.length>0){
        let levelsize = q.length
        let level = []
        
        for(let i=0; i<levelsize; i++){
            let curr = q.shift()
            if(curr.left)q.push(curr.left)
            if(curr.right)q.push(curr.right)
            level.push(curr.val)
        }
        r.push(level)     
        
    }
    return r.reverse()
    
};
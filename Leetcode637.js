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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let q  =[]
   let r = []
   if(!root) return r
   
   q.push(root)
   while(q.length>0){
       let levelsize = q.length
       let levelsum = 0
       
       for(let i=0; i<levelsize; i++){
           let curr = q.shift()
           if(curr.left)q.push(curr.left)
           if(curr.right)q.push(curr.right)
           levelsum += curr.val
       }
       
       r.push(levelsum/levelsize)     
       
   }
   return r
   
};
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
import java.util.ArrayList;

class Solution {
	
	private void inorderTraversal(TreeNode node, ArrayList<Integer> path){
		
		if(node.left != null){
			inorderTraversal(node.left, path);
		}
		path.add(node.val);
		if(node.right != null){
			inorderTraversal(node.right, path);
		}
	}


	private int inorderTraversal(TreeNode node, int k){
		ArrayList<Integer> path = new ArrayList<Integer>();
		inorderTraversal(node, path);

		for (Integer i : path) {
			k--;
			if(k == 0){
				return i;
			}
	    }
        return -1;
	}


    public int kthSmallest(TreeNode root, int k) {
		//do a traversal and return k-1 th item from bst
    	return inorderTraversal(root, k);
    }
}

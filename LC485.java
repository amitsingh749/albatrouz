class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
    	int maxlen = 0;
    	int s = 0;
    	int e = 0;

    	while(e<nums.length){
    		if(nums[e]==0){
    			maxlen = Math.max(maxlen, e-s);
    			++e;
    			s = e;
    		}else{
    			++e;
    		}
    	}
        maxlen = Math.max(maxlen, e-s);        
        return maxlen;
    }
}
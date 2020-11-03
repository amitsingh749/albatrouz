public class Solution {  

	private static Integer[] BubbleSort(Integer[] nums){
        for (Integer i=0; i<nums.size()-1; ++i){
            for (Integer j=i+1; j<nums.size(); ++j){
                if(nums[i]>nums[j]){
                    Integer t  =nums[i];
                    nums[i] = nums[j];
                    nums[j] = t;
                }
            }
        }
        return nums;	
    }


}
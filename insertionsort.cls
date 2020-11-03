public class Solution {  
 	private static Integer[] inserionSort(Integer[] nums){
        for(Integer i=0; i< nums.size(); ++i){
            for(Integer j=i+1;j<nums.size();++j){
                if(nums[i]>nums[j]){
                    nums = swap(i, j, nums);
                }
            }
        }
        return nums;	
    }

}
 public class selectionSortSolution {    

    private static Integer getMinimumValueIndex(Integer[] arr,Integer start,Integer endidx){
        Integer minValue = 2147483647;
        Integer minIndex = 2147483647;
        for(Integer i = start; i<=endidx; ++i){
            if(arr[i] <= minValue){
                minValue = arr[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
    private static Integer[] swap(Integer idx1, Integer idx2, Integer[] arr){
        Integer temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
        
        return arr;
    }
    private static Integer[] selectionSort(Integer[] nums){
        for(Integer i=0; i<nums.size()-1; ++i){
            Integer minIdx = getMinimumValueIndex(nums, i+1, nums.size()-1);
            if(nums[i] > nums[minIdx]){
                nums = swap(i, minIdx, nums);            
            }	
        }       
        return nums;
    }
}